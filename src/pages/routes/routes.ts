import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

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

  trip: any = [{
    id: '',
    transfer : '',
    fare: '',
    totalWalkDistance: '',
    totaldistance: '',
    legs: '',
    totalTime: '',
    roundtrip: ''
  }];
  legWalk: any = [{
    tripID: '',
    seq: '',
    distance: '',
    legGeom: '',
    from: '',
    to: '',
    time: '',
    transMode: '',
    steps: [],
  }];
  legTransit: any = [{
    tripID: '',
    seq: '',
    distance: '',
    legGeom: '',
    from: '',
    to: '',
    time: '',
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
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.address = this.navParams.get('address');
      this.geocoder = new google.maps.Geocoder;
      this.markers = [];
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
  /*
    Geocode address string into latitude and longitude for markers.
    Put markers in origin destination then set map focus between the paths.
  */
  setOrgDes(){
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
      let totaldistance = 0;
      console.log("Itinerary: " + id);
      for(let se=0; se<data.itineraries[id].legs.length; se++){
        let leg = data.itineraries[id].legs[se];
        console.log("Seq: " + se + " Mode: " + leg['mode']);
        if(leg['mode']=="WALK"){
          let steps = [];
          for(let num=0; num<leg['steps'].length; num++){
            if((leg['steps'][num]['absoluteDirection']=="RIGHT")||(leg['steps'][num]['absoluteDirection']=="LEFT"))
              steps.push("Turn " + leg['steps'][num]['absoluteDirection'] + " onto " + leg['steps'][num]['streetName']);
            else
            steps.push("Head " + leg['steps'][num]['absoluteDirection'] + " on " + leg['steps'][num]['streetName']);
          }
          this.legWalk.push({ 
            tripID: id,
            seq: se,
            distance: (leg['distance'])/1000,
            legGeom: leg['legGeometry']['points'],
            from: leg['from']['name'],
            to: leg['to']['name'],
            time: leg['duration']/60,
            transMode: "WALK",
            steps: steps
          });
          walkDistance+=(leg['distance'])/1000;
          totaldistance+=(leg['distance'])/1000;
        }
        else{
          distance = (leg['distance'])/1000;
          let mode: string = leg['routeId'];
          if(mode.includes("PUJ")){
            mode = "PUJ";
            if(distance>4)
              fare += 8+((distance-4)*1.50);
            else
              fare += 8;
          }
          else if(mode.includes("PUB")){
            mode = "PUB";
            if(distance>5)
              fare += 10+((distance-5)*1.75);
            else
              fare += 10;
          }
          this.legTransit.push({
            tripID: id,
            seq: se,
            distance: distance,
            legGeom: leg['legGeometry']['points'],
            from: leg['from']['name'],
            to: leg['to']['name'],
            time: leg['duration']/60,
            transMode: mode,
            route: leg['route']
          });
          totaldistance+=distance;
        }
      }
      totaldistance = parseFloat(totaldistance.toPrecision(3));
      walkDistance = parseFloat(walkDistance.toPrecision(2));
      fare = parseFloat(fare.toPrecision(3));
      this.trip.push({
        id: id,
        transfer: data.itineraries[id].transfers,
        fare: fare,
        totalWalkDistance: walkDistance,
        totaldistance: totaldistance,
        legs: data.itineraries[id].legs.length,
        totalTime: ((data.itineraries[id].duration)/60).toPrecision(3),
        roundtrip: false
      });
    }
  }
  seeDetails(i){
    let trip: any;
    let legW: any;
    let legT: any;
    trip = this.trip, legW = this.legWalk, legT  = this.legTransit;
    this.navCtrl.push(DetailsPage, {"i": i, "trip": trip, "legW": legW, "legT": legT, "address": this.address}).catch( err => {
      console.log(err)});
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
}