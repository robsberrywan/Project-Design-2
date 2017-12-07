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
  markers;

  snappedCoordinates = [];
  placeIdArray = [];
  polylines = [];

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
    legGeom: '',
    transMode: '',
  }];
  legTransit: any = [{
    tripID: '',
    seq: '',
    distance: '',
    legGeom: '',
    from: '',
    to: '',
    transMode: '',
    route: ''
  }];

  map: any;
  @ViewChild('map') mapElement: ElementRef;
  routeType = [
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
      this.markers = [];
      this.trip.length = 0;
      this.points = [];
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
    this.legWalk.length = 0;
    this.legTransit.length = 0;
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
            distance: (leg['distance'])/1000,
            legGeom: leg['legGeometry']['points'],
            transMode: "WALK"
          });
          walkDistance+=leg['distance'];
        }
        else{
          distance = leg['distance']/1000;
          let mode: string = leg['routeId'];
          if(mode.includes("PUJ")){
            mode = "PUJ";
            if(distance>4)
              fare = (fare+(8.00+(distance-4)*1.50)).toPrecision(3);
            else
              fare = (fare+8.00).toPrecision(3);
          }
          else if(mode.includes("PUB")){
            mode = "PUB";
            if(distance>5)
              fare = parseFloat(fare+(10.00+(distance-5)*1.75)).toPrecision(3);
            else
              fare = parseFloat(fare+10.00).toPrecision(3);
          }
          this.legTransit.push({
            tripID: id,
            seq: se,
            distance: distance,
            legGeom: leg['legGeometry']['points'],
            from: leg['from']['name'],
            to: leg['to']['name'],
            transMode: mode,
            route: leg['route']
          });
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
    }
  }

  plotted(index){
    console.log(index);
    this.drawSnappedPolyline('blue', 0);
    for(let i=0; i<this.trip[index].legs; i++){
      this.points = [];
      for(let j=0; j<this.legWalk.length; j++){
        console.log(this.legWalk[j].seq);
        if((this.legWalk[j].tripID==this.trip[index].id)&&(this.legWalk[j].seq==i)){
          console.log("walk");
          this.decode(this.legWalk[j].legGeom)
          this.drawSnappedPolyline('blue', 1);
        }
      }
      for(let k=0; k<this.legTransit.length; k++){
        if((this.legTransit[k].tripID==this.trip[index].id)&&(this.legTransit[k].seq==i)){
          console.log("transit");
          this.decode(this.legTransit[k].legGeom);
          this.drawSnappedPolyline('red', 1);
        }
      }
    }
    //this.getDirections();
  }
  points;
  decode(leggeom){
    // array that holds the points
    let index = 0, len = leggeom.length;
    let lat = 0, lng = 0;
    while (index < len) {
      let b, shift = 0, result = 0;
      do {    
        b = leggeom.charAt(index++).charCodeAt(0) - 63;//finds ascii                                                                                    //and substract it by 63
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
    
      let dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
      lat += dlat;
      shift = 0;
      result = 0;
      do {
        b = leggeom.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
      lng += dlng;
      let latlng = new google.maps.LatLng(( lat / 1E5),( lng / 1E5));
      this.points.push(latlng);
    }
    /*this.rsp.runSnapToRoad(points)
    .then(snap => {
      if(snap){
        console.log(snap);
        this.processSnapToRoadResponse(snap);
        this.drawSnappedPolyline();
      }
      else
        console.log("No trip found.");
    })*/
  }
  processSnapToRoadResponse(data) {
    this.snappedCoordinates = [];
    this.placeIdArray = [];
    for (let i = 0; i < data.snappedPoints.length; i++) {
      let latlng = new google.maps.LatLng(
          data.snappedPoints[i].location.latitude,
          data.snappedPoints[i].location.longitude);
      this.snappedCoordinates.push(latlng);
      this.placeIdArray.push(data.snappedPoints[i].placeId);
    }
  }
  drawSnappedPolyline(color, num){
    let snappedPolyline = new google.maps.Polyline({
      path: this.points,
      strokeColor: color,
      strokeWeight: 3
    });
    
    snappedPolyline.setMap(this.map);
    this.polylines.push(snappedPolyline);
    if(num==0){
      snappedPolyline.setMap(null);
      this.polylines = [];
    }
  }
  seeDetails(i){
    let trip: any;
    let legW: any;
    let legT: any;
    trip = this.trip, legW = this.legWalk, legT  = this.legTransit;
    this.navCtrl.push(DetailsPage, {"i": i, "trip": trip, "legW": legW, "legT": legT}).catch( err => {
      console.log(err)});
  }
}
/*
-processinput error occur if trip is too long
-check array contents (trip, legwalk, legtransit)
*/