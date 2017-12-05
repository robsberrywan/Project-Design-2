import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { RemoteServiceProvider } from "../../providers/remote-service/remote-service";

import { DetailsPage } from '../details/details';

declare var google;

@Component({
  selector: 'page-routes',
  templateUrl: 'routes.html',
  providers: [RemoteServiceProvider] 
})
export class RoutesPage {
  address;
  geocoder;
  directionsService;
  directionsDisplay;
  markers;
  lat = [];
  lon = [];
  mode = [];

  trip: any = [{
    id: '',
    transfer : '',
    fare: '',
    totalWalkDistance: '',
    legs: '',
    roundtrip: ''
  }];
  legWalk: any = [{
    tripID: '',
    seq: '',
    distance: '',
    flatLng: {
      lat: '',
      lon: ''
    },
    tlatLng: {
      lat: '',
      lon: ''
    }
  }];
  legTransit: any = [{
    tripID: '',
    seq: '',
    distance: '',
    legGeom: '',
    flatLng: {
      lat: '',
      lon: ''
    },
    tlatLng: {
      lat: '',
      lon: ''
    },
    transMode: '',
    route: ''
  }];

  map: any;
  @ViewChild('map') mapElement: ElementRef;
  routeType = [
    { name: "..." },
    { name: "Less Transfer" }, 
    { name: "Less Fair" },
    { name: "Less Walking" },
    { name: "Round-Trip" }
  ];
  constructor(
    public geolocation: Geolocation, 
    public navCtrl: NavController,
    public zone: NgZone,
    public rsp: RemoteServiceProvider,
    public navParams: NavParams) {
      this.address = this.navParams.get('address');
      this.geocoder = new google.maps.Geocoder;
      this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = []
      this.markers = [];
      this.trip.length = 0;
    }

  ionViewDidLoad(){
    this.loadMap();
    this.setOrgDes();
  }

  loadMap(){
    let mapOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  clearMarkers(){
    for(let i=0; i<this.markers.length; i++)
      this.markers[i].setMap(null);
    this.markers = [];
  }
  /*
    Geocode address string into latitude and longitude for markers.
    Put markers in origin destination then set map focus between the paths.
  */
  setOrgDes(){
    this.clearMarkers();
    this.geocoder.geocode({'address': this.address.origin}, (results, status) => {
      if(status == 'OK' && results[0]){
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });
        this.markers.push(marker);
      }
    })
    this.geocoder.geocode({'address': this.address.destination}, (results, status) => {
      if(status == 'OK' && results[0]){
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });
        this.markers.push(marker);
        this.setMapFocus(this.markers);
      }
    })
  }
  setMapFocus(markers){
    let bounds = new google.maps.LatLngBounds();
    for(let i=0; i<markers.length; i++){
      bounds.extend(markers[i].getPosition());
    }
    this.map.fitBounds(bounds);
    this.map.setZoom(15);
    this.rsp.load(markers[0].getPosition(), markers[1].getPosition())
    .then(data => {
      if(data)
        this.processInput(data);
      else
        console.log("No trip found.");
    })
  }
  /*
    processInput function receives objects in json requested from otp server.
    This function will divide itineraries for array to filter and display results properly.
  */
  processInput(data){
    let distance: any;
    this.trip.length = 0;
    for(let id=0; id<data.itineraries.length; id++){
      let fare: any;
      fare = 0;
      let walkDistance = 0;
      console.log("Itinerary: " + id);
      for(let se=0; se<data.itineraries[id].legs.length; se++){
        let leg = data.itineraries[id].legs[se];
        console.log("Seq: " + se + " Mode: " + leg['mode']);
        if(leg['mode']=="WALK"){
          this.legWalk.push({
            tripID: id,
            seq: se,
            distance: leg['distance'],
            flatLng: {
              lat: leg['from']['lat'],
              lon: leg['from']['lon']
            },
            tlatLng: {
              lat: leg['to']['lat'],
              lon: leg['to']['lon']
            }
          });
          walkDistance+=leg['distance'];
        }
        else{
          this.legTransit.push({
            tripID: id,
            seq: se,
            distance: leg['distance'],
            legGeom: leg['legGeometry']['points'],
            flatLng: {
              lat: leg['from']['lat'],
              lon: leg['from']['lon']
            },
            tlatLng: {
              lat: leg['to']['lat'],
              lon: leg['to']['lon']
            },
            transMode: leg['routeId'],
            route: leg['route']
          });
          let mode: string = leg['routeId'];
          distance = this.legTransit[se].distance/1000;
          if(mode.includes("PUJ")){
            if(distance>4)
              fare = (fare+(8.00+(distance-4)*1.50)).toPrecision(3);
            else
              fare = (fare+8.00).toPrecision(3);
            console.log("PUJ distance: " + distance + "\n Fare: " + fare);
          }
          else if(mode.includes("PUB")){
            if(distance>5)
              fare = (fare+(10.00+(distance-5)*1.75)).toPrecision(3);
            else
              fare = (fare+10.00).toPrecision(3);
          }
        }
      }
      this.trip.push({
        id: id,
        transfer: data.itineraries[id].transfers,
        fare: fare,
        totalWalkDistance: walkDistance,
        legs: data.itineraries[id].legs.length,
        roundtrip: false
      });
      console.log("distance: " + walkDistance);
    }
  }

  plotted(index){
    console.log(index);
    console.log(this.legWalk[0].seq);
    let color = '';
    
    for(let i=0; i<this.trip[index].legs; i++){
      for(let j=0; j<this.legWalk.length; j++){
        console.log(this.legWalk[j].seq);
        if((this.legWalk[j].tripID==this.trip[index].id)&&(this.legWalk[j].seq==i)){
          console.log("WALKING");
          this.mode.push("WALKING");
          if(i==this.trip[index].legs-1){
            this.lat.push(this.legWalk[j].tlatLng.lat);
            this.lon.push(this.legWalk[j].tlatLng.lon);
          }
          else{
            this.lat.push(this.legWalk[j].flatLng.lat);
            this.lon.push(this.legWalk[j].flatLng.lon);
          }
        }
      }
      for(let k=0; k<this.legTransit.length; k++){
        if((this.legTransit[k].tripID==this.trip[index].id)&&(this.legTransit[k].seq==i)){
          console.log("TRANSIT");
          this.mode.push("TRANSIT");
          this.lat.push(this.legTransit[k].flatLng.lat);
          this.lon.push(this.legTransit[k].flatLng.lon);
          this.lat.push(this.legTransit[k].tlatLng.lat);
          this.lon.push(this.legTransit[k].tlatLng.lon);
        }
      }
    }
    //start directions display and renderer
    console.log(this.mode.length + "   " + this.lat.length);
    if(this.directionsDisplay.length>0){
      this.directionsDisplay = [];
      color = '';
      for(let i=0; i<this.directionsDisplay.length; i++)
        this.directionsDisplay[i].setMap(null);
    }
    for(let i = 0; i<this.mode.length; i++){
      if(this.mode[i]=="WALKING"){
        color = 'blue';
      }
      else{
        color = 'red';
      }
      this.directionsDisplay[i] = new google.maps.DirectionsRenderer({
        preserveViewport: true,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: color
        }
      });
    }
    this.getDirections();
  }
  getDirections(){
    for(let i=0; i<this.mode.length; i++){
      let or = {lat: parseFloat(this.lat[i]), lng: parseFloat(this.lon[i])};
      let de = {lat: parseFloat(this.lat[i+1]), lng: parseFloat(this.lon[i+1])};
      this.directionsDisplay[i].setMap(this.map);
      this.directionsService.route({
        origin: or,
        destination: de,
        travelMode: "WALKING"
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay[i].setDirections(response);
        } else {
          console.log('Directions request failed due to ' + status);
        }
      });
    }
  }
  seeDetails(){
    this.navCtrl.push(DetailsPage).catch( err => {
      console.log(err)});
  }
}
/*
-processinput error occur if trip is too long
-check array contents (trip, legwalk, legtransit)
*/