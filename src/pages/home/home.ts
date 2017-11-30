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
  markers;

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
      this.markers = [];
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
  setMarkers(markers){
    let bounds = new google.maps.LatLngBounds();
    console.log(markers.length);
    for(let i=0; i<markers.length; i++){
      bounds.extend(markers[i].getPosition());
      //console.log(this.markers[i].getPosition().lat());
    }
    this.map.fitBounds(bounds);
    this.map.setZoom(14);
    this.rsp.load(markers[0].getPosition(), markers[1].getPosition())
    .then(data => {
      console.log(data);
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
        this.setMarkers(this.markers);
      }
    })
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