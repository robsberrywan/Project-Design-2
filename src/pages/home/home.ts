import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";
import { Geolocation } from '@ionic-native/geolocation';

import { MytripPage } from '../myTrips/mytrip';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';

import { address } from "../../models/address";
import { RemoteServiceProvider } from "../../providers/remote-service/remote-service";
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RemoteServiceProvider] 
})
export class HomePage {
  address;
  GoogleAutocomplete;
  autocompleteItems1;
  autocompleteItems2;
  geocoder;
  directionsService;
  directionsDisplay;
  markers;
  lat = [];
  lon = [];
  mode = [];
  originDir;
  destDir;


  map: any;
  @ViewChild('map') mapElement: ElementRef;
	pages = [
    { title: 'My Trips', component: MytripPage },
    { title: 'Settings', component: SettingsPage },
    { title: 'Sign Out', component: LoginPage }
  ];
  constructor(
    public geolocation: Geolocation, 
    private afAuth: AngularFireAuth, 
    public navCtrl: NavController,
    public zone: NgZone,
    public rsp: RemoteServiceProvider) {
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocompleteItems1 = [];
      this.autocompleteItems2= [];
      this.address = {
        origin: '',
        destination: ''
      };
      this.geocoder = new google.maps.Geocoder;
      this.directionsService = new google.maps.DirectionsService;
      this.directionsDisplay = []
      this.markers = [];
      this.originDir = '';
      this.destDir = '';
    }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    let locationOptions = {timeout: 10000, enableHighAccuracy: false};
    this.geolocation.getCurrentPosition(locationOptions).then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let marker = new google.maps.Marker({
        map: this.map,
        position: latLng
      });
      this.markers.push(marker);
    }, (err) => {
      console.log(err);
    });
  }
  showAddress1(){
    if(this.address.origin == ''){
      this.autocompleteItems1 = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.address.origin, componentRestrictions: {country: 'PH'} },
    (predictions, status) => {
      this. autocompleteItems1 = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems1.push(prediction.description);
        });
      });
    });
  }
  showAddress2(){
    if(this.address.destination == ''){
      this.autocompleteItems2 = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.address.destination, componentRestrictions: {country: 'PH'} },
    (predictions, status) => {
      this. autocompleteItems2 = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems2.push(prediction.description);
        });
      });
    });
  }
  selectOrigin(item){
    this.address.origin = item;
    this.autocompleteItems1 = [];
  }
  selectDest(item){
    this.address.destination = item;
    this.autocompleteItems2 = [];
  }
  clearMarkers(){
    for(let i=0; i<this.markers.length; i++)
      this.markers[i].setMap(null);
    this.markers = [];
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
      this.processInput(data);
    })
  }
  setOrgDes(address: address){
    this.clearMarkers();
    this.geocoder.geocode({'address': address.origin}, (results, status) => {
      if(status == 'OK' && results[0]){
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });
        this.markers.push(marker);
        console.log(this.markers.length);
      }
    })
    this.geocoder.geocode({'address': address.destination}, (results, status) => {
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
  processInput(data){
    let color = '';
    for(let i=0; i<data.itineraries[0].legs.length; i++){
      let legs = data['itineraries'][0]['legs'][i];
      if(legs['mode']=="WALK"){
        console.log(legs['mode']);
        this.mode.push("WALKING");
        this.lat.push(legs['steps'][0]['lat']);
        this.lon.push(legs['steps'][0]['lon']);
        if(data.itineraries[0].legs[data.itineraries[0].legs.length-1]){
          if(data.itineraries[0].legs[i].steps.length>0){
            this.mode.push("WALKING");
            this.lat.push(legs['steps'][data.itineraries[0].legs[i].steps.length-1]['lat']);
            this.lon.push(legs['steps'][data.itineraries[0].legs[i].steps.length-1]['lon']);
            console.log("last step: " + legs['steps'][data.itineraries[0].legs[i].steps.length-1]['lon']);
          }
        }
      }
      else{
        console.log(legs['mode']);
        this.mode.push("TRANSIT");
        this.lat.push(legs['from']['lat']);
        this.lon.push(legs['from']['lon']);
        this.lat.push(legs['to']['lat']);
        this.lon.push(legs['to']['lon']);
      }
      console.log(this.lat[i]);
    }

    //start directions display and renderer
    if(this.directionsDisplay.length>0){
      this.directionsDisplay = [];
      color = '';
      for(let i=0; i<this.directionsDisplay.length; i++)
        this.directionsDisplay[i].setMap(null);
    }
    for(let i = 0; i<this.mode.length; i++){
      if(this.mode[i]=="WALKING"){
        color = 'blue';
        console.log(this.mode[i]);
      }
      else{
        console.log(this.mode[i]);
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
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
  }
	openPage(page) {
    if(page.component==LoginPage){
      this.afAuth.auth.signOut().then(() => {
        this.navCtrl.setRoot(page.component);
      });
    }
    else{
      this.navCtrl.push(page.component);
    }
  }
}