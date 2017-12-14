import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

import { MytripPage } from '../myTrips/mytrip';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';
import { RoutesPage } from '../routes/routes';

import { address } from "../../models/address";
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  address;
  geocoder;
  GoogleAutocomplete;
  autocompleteItems1;
  autocompleteItems2;
  directionsService;
  directionsDisplay;
  markers;
  lat = [];
  lon = [];

  
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
    public modCtrl: ModalController) {
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocompleteItems1 = [];
      this.autocompleteItems2= [];
      this.address = {
        origin: '',
        destination: ''
      };
      this.markers = [];
      this.geocoder = new google.maps.Geocoder;
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
      console.log(position);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let marker = new google.maps.Marker({
        map: this.map,
        position: latLng
      });
      this.markers.push(marker);
      this.getAddress(this.markers);
    }, (err) => {
      console.log(err);
    });
  }
  getAddress(marker){
    this.geocoder.geocode( { 'location' : marker[0].getPosition() }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.showOrigin(results[0].formatted_address);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
  showOrigin(add){
    this.address.origin = add;
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
  checkFocus(num){
    if(num==1)
      this.autocompleteItems2 = [];
    else
      this.autocompleteItems1 = [];
  }
  findRoute(address: address): void{
    /*
    if((address.destination)&&(address.origin))
      this.navCtrl.push(RoutesPage, {address});
      */
      let modal = this.modCtrl.create(RoutesPage, {address});
      if((address.destination)&&(address.origin)){
        modal.present();
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