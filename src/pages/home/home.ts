import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";
import { Geolocation } from '@ionic-native/geolocation';
import { RemoteServiceProvider } from "../../providers/remote-service/remote-service"

import { MytripPage } from '../mytrip/mytrip';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';
import { DetailsPage } from '../details/details';

import { address } from "../../models/address";
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RemoteServiceProvider]
})
export class HomePage {
  email;
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

  plotmarkers;

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
    route: '',
    routeLongName: ''
  }];
  showResults;
  showMap;
  lrtLine2;
  lrtLine1;
  mrt3;
  pnr;

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
    public rsp: RemoteServiceProvider,
    public modCtrl: ModalController,
    public navParams: NavParams) {
      this.email = this.navParams.get('email');
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.autocompleteItems1 = [];
      this.autocompleteItems2= [];
      this.address = {
        origin: '',
        destination: ''
      };
      this.markers = [];
      this.geocoder = new google.maps.Geocoder;

      this.plotmarkers = [];
      this.showResults = false;
      this.showMap = true;
      this.lrtLine2 = [
        [0, "Recto", "Legarda", "Pureza", "V. Mapa", "J. Ruiz", "Gilmore", "Betty Go", "Cubao", "Anonas", "Katipunan", "Santolan"],
        ["Recto", 0, 15, 15, 15, 20, 20, 20, 20, 25, 25, 25],
        ["Legarda", 15, 0, 15, 15, 15, 20, 20, 20, 20, 25, 25],
        ["Pureza", 15, 15, 0, 15, 15, 15, 20, 20, 20, 20, 25],
        ["V. Mapa", 15, 15, 15, 0, 15, 15, 15, 20, 20, 20, 25],
        ["J. Ruiz", 20, 15, 15, 15, 0, 15, 15, 15, 20, 20, 20],
        ["Gilmore", 20, 20, 15, 15, 15, 0, 15, 15, 15, 20, 20],
        ["Betty Go", 20, 20, 20, 15, 15, 15, 0, 15, 15, 15, 20],
        ["Cubao", 20, 20, 20, 20, 15, 15, 15, 0, 15, 15, 15],
        ["Anonas", 25, 20, 20, 20, 20, 15, 15, 15, 0, 15, 15],
        ["Katipunan", 25, 25, 20, 20, 20, 20, 15, 15, 15, 0, 15],
        ["Santolan", 25, 25, 25, 25, 20, 20, 20, 15, 15, 15, 0]
      ];
      this.lrtLine1 = [
        [0,"Baclaran","EDSA","Libertad","Gil Puyat","Vito Cruz","Quirino","Pedro Gil","UN Ave","Central Terminal","Carriedo","Doroteo Jose","Bambang","Tayuman","Blumentritt","Abad Santos","R. Papa","5th Ave","Monumento","Balintawak","Roosevelt"],
        ["Baclaran",0,15,15,15,15,15,20,20,20,20,20,20,30,30,30,30,30,30,30,30],
        ["EDSA",15,0,15,15,15,15,15,20,20,20,20,20,20,30,30,30,30,30,30,30],
        ["Libertad",15,15,0,15,15,15,15,15,20,20,20,20,20,20,30,30,30,30,30,30],
        ["Gil Puyat",15,15,15,0,15,15,15,15,20,20,20,20,20,20,20,30,30,30,30,30],
        ["Vito Cruz",15,15,15,15,0,15,15,15,15,15,20,20,20,20,20,20,30,30,30,30],
        ["Quirino",15,15,15,15,15,0,15,15,15,15,15,20,20,20,20,20,20,30,30,30],
        ["Pedro Gil",20,15,15,15,15,15,0,15,15,15,15,15,20,20,20,20,20,20,30,30],
        ["UN Ave",20,20,15,15,15,15,15,0,15,15,15,15,15,20,20,20,20,20,30,30],
        ["Central Terminal",20,20,20,20,15,15,15,15,0,15,15,15,15,15,15,20,20,20,20,30],
        ["Carriedo",20,20,20,20,15,15,15,15,15,0,15,15,15,15,15,15,20,20,20,30],
        ["Doroteo Jose",20,20,20,20,20,15,15,15,15,15,0,15,15,15,15,15,15,20,20,30],
        ["Bambang",20,20,20,20,20,20,15,15,15,15,15,0,15,15,15,15,15,20,20,20],
        ["Tayuman",30,20,20,20,20,20,20,15,15,15,15,15,0,15,15,15,15,15,20,20],
        ["Blumentritt",30,30,20,20,20,20,20,20,15,15,15,15,15,0,15,15,15,15,20,20],
        ["Abad Santos",30,30,30,20,20,20,20,20,15,15,15,15,15,15,0,15,15,15,20,20],
        ["R. Papa",30,30,30,30,20,20,20,20,20,15,15,15,15,15,15,0,15,15,15,20],
        ["5th Avenue",30,30,30,30,30,20,20,20,20,20,15,15,15,15,15,15,0,15,15,20],
        ["Monumento",30,30,30,30,30,30,20,20,20,20,20,20,15,15,15,15,15,0,15,15],
        ["Balintawak",30,30,30,30,30,30,30,30,20,20,20,20,20,20,20,15,15,15,0,15],
        ["Roosevelt",30,30,30,30,30,30,30,30,30,30,30,20,20,20,20,20,20,15,15,0]
      ];
      this.mrt3 = [
        [0, "North Avenue", "Quezon", "Kamuning", "Cubao", "Santolan", "Ortigas", "Shaw", "Boni", "Guadalupe", "Buendia", "Ayala", "Magallanes", "Taft Ave"],
        ["North Avenue", 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24, 28, 28],
        ["Quezon", 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24, 28],
        ["Kamuning", 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24],
        ["Cubao", 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24],
        ["Santolan", 16, 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24],
        ["Ortigas", 20, 16, 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20],
        ["Shaw", 20, 20, 16, 16, 16, 13, 0, 13, 13, 16, 16, 20, 20],
        ["Boni", 20, 20, 20, 16, 16, 13, 13, 0, 13, 13, 16, 16, 20],
        ["Guadalupe", 24, 20, 20, 20, 20, 16, 13, 13, 0, 13, 13, 16, 16],
        ["Buendia", 24, 24, 20, 20, 20, 16, 16, 13, 13, 0, 13, 13, 16],
        ["Ayala", 24, 24, 24, 20, 20, 20, 16, 16, 13, 13, 0, 13, 13],
        ["Magallanes", 28, 24, 24, 24, 24, 20, 20, 16, 16, 13, 13, 0, 13],
        ["Taft Ave", 28, 28, 24, 24, 24, 20, 20, 20, 16, 16, 13, 13, 0]
      ]
      this.pnr = [
        [0, "Tutuban", "Blumentritt", "Dapitan/Laon Laan", "España", "Santa Mesa", "Pandacan", "Paco", "San Andres", "Vito Cruz", "Buendia", "Pasay Road", "EDSA", "Nichols", "FTI", "Bicutan", "Sucat", "Alabang", "Muntinlupa", "San Pedro", "Pacita", "Golden City 1", "Biñan"],
        ["Tutuban", 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 16, 20, 24, 28, 32, 32, 32, 36, 36, 40, 44, 44],
        ["Blumentritt", 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24, 28, 28, 32, 32, 36, 40, 44, 44],
        ["Dapitan/Laon Laan", 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 28, 28, 28, 32, 36, 36, 44, 44],
        ["España", 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 24, 28, 28, 28, 28, 32, 36, 40, 44],
        ["Santa Mesa", 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 24, 28, 28, 32, 36, 40, 40],
        ["Pandacan", 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 24, 24, 28, 24, 32, 36, 40, 40],
        ["Paco", 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24, 24, 24, 28, 32, 36, 40],
        ["San Andres", 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 16, 20, 20, 24, 24, 24, 28, 32, 36, 40],
        ["Vito Cruz", 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 16, 16, 20, 20, 24, 24, 28, 32, 36, 36],
        ["Buendia", 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 16, 20, 20, 24, 24, 28, 32, 36, 36],
        ["Pasay Road", 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 20, 20, 20, 28, 32, 36, 36],
        ["EDSA", 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16, 20, 16, 20, 20, 24, 28, 32, 32],
        ["Nichols", 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 20, 16, 16, 20, 24, 24, 32, 32],
        ["FTI", 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 20, 16, 16, 20, 20, 24, 28, 32],
        ["Bicutan", 16, 20, 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 16, 16, 20, 20, 24, 28, 28],
        ["Sucat", 20, 24, 20, 16, 16, 16, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 24, 24],
        ["Alabang", 24, 24, 20, 20, 20, 16, 16, 16, 16, 16, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 20, 20],
        ["Muntinlupa", 28, 24, 24, 24, 20, 20, 20, 20, 16, 16, 16, 16, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 16, 16],
        ["San Pedro", 32, 28, 28, 28, 24, 24, 24, 20, 20, 20, 20, 20, 16, 16, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16, 16],
        ["Pacita", 32, 28, 28, 28, 28, 24, 24, 24, 24, 20, 20, 20, 16, 16, 16, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 16],
        ["Golden City 1", 32, 32, 28, 28, 28, 28, 24, 24, 24, 24, 20, 20, 16, 16, 16, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 16],
        ["Biñan", 36, 32, 32, 32, 28, 28, 24, 24, 24, 24, 24, 20, 20, 20, 16, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12]
      ];
    }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    let locationOptions = {timeout: 10000, enableHighAccuracy: true};
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
    
    if((address.destination)&&(address.origin)){
      this.setOrgDes();
      this.showResults = true;
      this.showMap = false;
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
  /*
    *
    *
    *
    calculate routes 
    *
    *
    *
  */
  close(){
    this.showResults = false;
    this.showMap = true;
  }
  setOrgDes(){
    this.trip.length = 0;
    this.legWalk.length = 0;
    this.legTransit.length = 0;
    this.plotmarkers = [];
    this.geocoder.geocode({'address': this.address.origin}, (results, status) => {
      if(status == 'OK' && results[0]){
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
        });
        this.plotmarkers.push(marker);
      }
    })
    this.geocoder.geocode({'address': this.address.destination}, (results, status) => {
      if(status == 'OK' && results[0]){
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
        });
        this.plotmarkers.push(marker);
        this.setMapFocus(this.plotmarkers);
      }
    })
  }
  setMapFocus(markers){
    this.rsp.load(markers[0].getPosition(), markers[1].getPosition()).subscribe(
      data => {
          this.processInput(data.plan);
          console.log(data.plan);
      },
      err => {
          console.log(err);
      },
      () => console.log('Route Search Complete')
  );
  }
  sortFare(){
    let tripSwap = [];
    let lessFare: any;
    lessFare = -1;
    for(let i = 0; i<this.trip.length; i++){
      lessFare = this.trip[i].fare;
      for(let j = 0; j<this.trip.length; j++){
        if(lessFare<this.trip[j].fare){
          lessFare = this.trip[j].fare;
          tripSwap = this.trip[i];
          this.trip[i] = this.trip[j];
          this.trip[j] = tripSwap;
        }
      }
    }
  }
  sortTime(){
    let tripSwap = [];
    let lessTime: any;
    lessTime = -1;
    for(let i = 0; i<this.trip.length; i++){
      lessTime = this.trip[i].totalTime;
      for(let j = 0; j<this.trip.length; j++){
        if(lessTime<this.trip[j].totalTime){
          lessTime = this.trip[j].totalTime;
          tripSwap = this.trip[i];
          this.trip[i] = this.trip[j];
          this.trip[j] = tripSwap;
        }
      }
    }
  }
  sortWalk(){
    let tripSwap = [];
    let lessWalk: any;
    lessWalk = -1;
    for(let i = 0; i<this.trip.length; i++){
      lessWalk = this.trip[i].totalWalkDistance;
      for(let j = 0; j<this.trip.length; j++){
        if(lessWalk<this.trip[j].totalWalkDistance){
          lessWalk = this.trip[j].totalWalkDistance;
          tripSwap = this.trip[i];
          this.trip[i] = this.trip[j];
          this.trip[j] = tripSwap;
        }
      }
    }
  }
  sortTransfer(){
    let tripSwap = [];
    let lessTransfer: any;
    lessTransfer = -1;
    for(let i = 0; i<this.trip.length; i++){
      lessTransfer = this.trip[i].transfer;
      for(let j = 0; j<this.trip.length; j++){
        if(lessTransfer<this.trip[j].transfer){
          lessTransfer = this.trip[j].transfer;
          tripSwap = this.trip[i];
          this.trip[i] = this.trip[j];
          this.trip[j] = tripSwap;
        }
      }
    }
  }
  /*
    processInput function receives objects in json requested from otp server.
    This function will divide itineraries for array to filter and display results properly.
  */
  processInput(data){
    let distance: any;
    let x: any;
    let y: any;
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
              steps.push("Turn " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " onto " + leg['steps'][num]['streetName']);
            else
              steps.push("Head " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " on " + leg['steps'][num]['streetName']);
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
              fare += 8+((parseInt(distance)-4)*1.50);
            else
              fare += 8;
          }
          else if(mode.includes("PUB")){
            mode = "PUB";
            if(distance>5)
              fare += 10+((parseInt(distance)-5)*1.75);
            else
              fare += 10;
          }
          else if(mode.includes("TODA")){
            mode = "TODA";
            if(distance>1)
              fare += 8.50+(parseInt(distance)-1);
            else
              fare += 8.50;
            console.log("Tryke");
          }
          else{
            let orig: string = leg['from']['name'];
            let dest: string = leg['to']['name'];
            x = 0, y = 0;
            mode = "RAIL";
            if(orig.includes("MRT")){
              for(let i = 0; i<this.mrt3.length; i++){
                if(orig.includes(this.mrt3[0][i])){
                  y = i
                }
                if(dest.includes(this.mrt3[0][i])){
                  x = i
                }
              }
              fare += this.mrt3[x][y];
            }
            else if(orig.includes("PNR")){
              for(let i = 0; i<this.pnr.length; i++){
                if(orig.includes(this.pnr[0][i])){
                  y = i
                }
                if(dest.includes(this.pnr[0][i])){
                  x = i
                }
              }
              fare += this.pnr[x][y];
            }
            else{
              let line = 1;
              for(let i = 0; i<this.lrtLine1.length; i++){
                if(orig.includes(this.lrtLine1[0][i])){
                  y = i;
                  line = 1;
                }
                if(dest.includes(this.lrtLine1[i][0])){
                  x = i
                }
              }
              for(let i = 0; i<this.lrtLine2.length; i++){
                if(orig.includes(this.lrtLine2[0][i])){
                  y = i;
                  line = 2;
                }
                if(dest.includes(this.lrtLine2[i][0])){
                  x = i
                }
              }
              if(line==1)
                fare += this.lrtLine1[x][y];
              else
                fare += this.lrtLine2[x][y];
            }
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
            route: leg['route'],
            routeLongName: leg['routeLongName']
          });
          totaldistance+=distance;
        }
      }
      totaldistance = parseFloat(totaldistance.toPrecision(3));
      walkDistance = parseFloat(walkDistance.toPrecision(2));
      fare = parseFloat(fare.toPrecision(4));
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
    this.createTrip(this.trip[this.trip.length-1].id);
  }
  
  createTrip(id){
    let start: string = "";
    let end: string = "";
    let markers = [];
    let index: any;
    let highDistance: any;
    highDistance = 0;
    for(let i = 0; i<this.legTransit.length; i++){
      console.log(this.legTransit[i].distance);
      if(this.legTransit[i].tripID==id){
        highDistance = this.legTransit[i].distance;
        index = i;
        for(let j=0; j<this.legTransit.length; j++){
          if((highDistance<this.legTransit[j].distance)&&(this.legTransit[j].transMode!="RAIL")){
            index = j;
            highDistance = this.legTransit[j].distance;
          }
        }
      }
    }
    console.log(highDistance);
    
      if(this.legTransit[index].distance>2){
        start = String(this.legTransit[index].routeLongName);
        end = String(this.legTransit[index].routeLongName);

        start = start.slice(0, start.indexOf("/"));
        end = end.slice(end.indexOf("/")+1);
        console.log(start);
        console.log(end);

        this.geocoder.geocode({'address': this.address.origin}, (results, status) => {
          if(status == 'OK' && results[0]){
            let marker = new google.maps.Marker({
              position: results[0].geometry.location
            });
            markers.push(marker);
          }
        })
        this.geocoder.geocode({'address': this.address.destination}, (results, status) => {
          if(status == 'OK' && results[0]){
            let marker = new google.maps.Marker({
              position: results[0].geometry.location
            });
            markers.push(marker);
          }
        })
        this.geocoder.geocode({'address': start}, (results, status) => {
          if(status == 'OK' && results[0]){
            let marker = new google.maps.Marker({
              position: results[0].geometry.location
            });
            markers.push(marker);
          }
          else
            console.log("start " + status + ": " + results.length);
        })
        this.geocoder.geocode({'address': end}, (results, status) => {
          if(status == 'OK' && results[0]){
            let marker = new google.maps.Marker({
              position: results[0].geometry.location
            });
            markers.push(marker);
            this.getRest(start, end, id, markers);
          }
          else
          console.log("end " + status + ": " + results.length);
        })
      }
  }
  getRest(start, end, id, markers){
    console.log(this.trip.length);
    let walkDistance = 0;
    let totaldistance = 0;
    let fare: any;
    let transfers = 0;
    let time: any;
    fare = 0;
    let rounddata, rounddata2, data1, data2;
    this.rsp.load(markers[2].getPosition(), markers[0].getPosition()).subscribe(
      data => {
        rounddata = data.plan;
        this.rsp.load(markers[2].getPosition(), markers[1].getPosition()).subscribe(
          data => {
            rounddata2 = data.plan;
            let distance = 0;
            let distance2 = 0;
            for(let i=0; i<rounddata.itineraries[0].legs.length; i++){
              let leg = rounddata.itineraries[0].legs[i];
              distance += (leg['distance'])/1000;
            }
            for(let i=0; i<rounddata2.itineraries[0].legs.length; i++){
              let leg = rounddata2.itineraries[0].legs[i];
              distance2 += (leg['distance'])/1000;
            }
            if(distance<distance2){
              //get direction from origin to terminal
              let lastIndex = 0 ;
              this.rsp.load(markers[0].getPosition(), markers[2].getPosition()).subscribe(
                data => {
                  data1 = data.plan;
                  console.log(data1);
                  lastIndex = data1.itineraries[0].legs.length;
                  transfers = data1.itineraries[0].transfers;
                  time  = data1.itineraries[0].duration;
                  console.log(lastIndex);
                  for(let i=0; i<data1.itineraries[0].legs.length; i++){
                    let leg = data1.itineraries[0].legs[i];
                    if(leg['mode']=="WALK"){
                      let steps = [];
                      for(let num=0; num<leg['steps'].length; num++){
                        if((leg['steps'][num]['absoluteDirection']=="RIGHT")||(leg['steps'][num]['absoluteDirection']=="LEFT"))
                          steps.push("Turn " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " onto " + leg['steps'][num]['streetName']);
                        else
                          steps.push("Head " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " on " + leg['steps'][num]['streetName']);
                      }
                      this.legWalk.push({ 
                        tripID: id+1,
                        seq: i,
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
                          fare += 8+((parseInt(distance)-4)*1.50);
                        else
                          fare += 8;
                      }
                      else if(mode.includes("PUB")){
                        mode = "PUB";
                        if(distance>5)
                          fare += 10+((parseInt(distance)-5)*1.75);
                        else
                          fare += 10;
                      }
                      else if(mode.includes("TODA")){
                        mode = "TODA";
                        if(distance>1)
                          fare += 8.50+(parseInt(distance)-1);
                        else
                          fare += 8.50;
                      }
                      else{
                        let orig: string = leg['from']['name'];
                        let dest: string = leg['to']['name'];
                        let x = 0, y = 0;
                        mode = "RAIL";
                        if(orig.includes("MRT")){
                          for(let i = 0; i<this.mrt3.length; i++){
                            if(orig.includes(this.mrt3[0][i])){
                              y = i
                            }
                            if(dest.includes(this.mrt3[0][i])){
                              x = i
                            }
                          }
                          fare += this.mrt3[x][y];
                        }
                        else if(orig.includes("PNR")){
                          for(let i = 0; i<this.pnr.length; i++){
                            if(orig.includes(this.pnr[0][i])){
                              y = i
                            }
                            if(dest.includes(this.pnr[0][i])){
                              x = i
                            }
                          }
                          fare += this.pnr[x][y];
                        }
                        else{
                          let line = 1;
                          for(let i = 0; i<this.lrtLine1.length; i++){
                            if(orig.includes(this.lrtLine1[0][i])){
                              y = i;
                              line = 1;
                            }
                            if(dest.includes(this.lrtLine1[i][0])){
                              x = i
                            }
                          }
                          for(let i = 0; i<this.lrtLine2.length; i++){
                            if(orig.includes(this.lrtLine2[0][i])){
                              y = i;
                              line = 2;
                            }
                            if(dest.includes(this.lrtLine2[i][0])){
                              x = i
                            }
                          }
                          if(line==1)
                            fare += this.lrtLine1[x][y];
                          else
                            fare += this.lrtLine2[x][y];
                        }
                      }
            
                      this.legTransit.push({
                        tripID: id+1,
                        seq: i,
                        distance: distance,
                        legGeom: leg['legGeometry']['points'],
                        from: leg['from']['name'],
                        to: leg['to']['name'],
                        time: leg['duration']/60,
                        transMode: mode,
                        route: leg['route'],
                        routeLongName: leg['routeLongName']
                      });
                      totaldistance+=distance;
                    }
                  }
                }
              );
              this.rsp.load(markers[2].getPosition(), markers[1].getPosition()).subscribe(
                data => {
                  data2 = data.plan;
                  let ind: any;
                  ind = 1;
                  console.log(data2);
                  for(let i=lastIndex; i<data2.itineraries[0].legs.length+lastIndex-1; i++){
                    let leg = data2.itineraries[0].legs[ind];
                    if(leg['mode']=="WALK"){
                      let steps = [];
                      for(let num=0; num<leg['steps'].length; num++){
                        if((leg['steps'][num]['absoluteDirection']=="RIGHT")||(leg['steps'][num]['absoluteDirection']=="LEFT"))
                          steps.push("Turn " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " onto " + leg['steps'][num]['streetName']);
                        else
                          steps.push("Head " + (leg['steps'][num]['absoluteDirection']).toLowerCase() + " on " + leg['steps'][num]['streetName']);
                      }
                      this.legWalk.push({ 
                        tripID: id+1,
                        seq: i,
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
                          fare += 8+((parseInt(distance)-4)*1.50);
                        else
                          fare += 8;
                      }
                      else if(mode.includes("PUB")){
                        mode = "PUB";
                        if(distance>5)
                          fare += 10+((parseInt(distance)-5)*1.75);
                        else
                          fare += 10;
                      }
                      else if(mode.includes("TODA")){
                        mode = "TODA";
                        if(distance>1)
                          fare += 8.50+(parseInt(distance)-1);
                        else
                          fare += 8.50;
                      }
                      else{
                        let orig: string = leg['from']['name'];
                        let dest: string = leg['to']['name'];
                        let x = 0, y = 0;
                        mode = "RAIL";
                        if(orig.includes("MRT")){
                          for(let i = 0; i<this.mrt3.length; i++){
                            if(orig.includes(this.mrt3[0][i])){
                              y = i
                            }
                            if(dest.includes(this.mrt3[0][i])){
                              x = i
                            }
                          }
                          fare += this.mrt3[x][y];
                        }
                        else if(orig.includes("PNR")){
                          for(let i = 0; i<this.pnr.length; i++){
                            if(orig.includes(this.pnr[0][i])){
                              y = i
                            }
                            if(dest.includes(this.pnr[0][i])){
                              x = i
                            }
                          }
                          fare += this.pnr[x][y];
                        }
                        else{
                          let line = 1;
                          for(let i = 0; i<this.lrtLine1.length; i++){
                            if(orig.includes(this.lrtLine1[0][i])){
                              y = i;
                              line = 1;
                            }
                            if(dest.includes(this.lrtLine1[i][0])){
                              x = i
                            }
                          }
                          for(let i = 0; i<this.lrtLine2.length; i++){
                            if(orig.includes(this.lrtLine2[0][i])){
                              y = i;
                              line = 2;
                            }
                            if(dest.includes(this.lrtLine2[i][0])){
                              x = i
                            }
                          }
                          if(line==1)
                            fare += this.lrtLine1[x][y];
                          else
                            fare += this.lrtLine2[x][y];
                        }
                      }
                      this.legTransit.push({
                        tripID: id+1,
                        seq: i,
                        distance: distance,
                        legGeom: leg['legGeometry']['points'],
                        from: leg['from']['name'],
                        to: leg['to']['name'],
                        time: leg['duration']/60,
                        transMode: mode,
                        route: leg['route'],
                        routeLongName: leg['routeLongName']
                      });
                      totaldistance+=distance;
                    }
                    ind++;
                  }
                  totaldistance = parseFloat(totaldistance.toPrecision(3));
                  walkDistance = parseFloat(walkDistance.toPrecision(2));
                  fare = parseFloat(fare.toPrecision(4));
                  time = (time + data2.itineraries[0].duration)/60;
                  time = parseFloat(time.toPrecision(2));
                  this.trip.push({
                    id: id+1,
                    transfer: data2.itineraries[0].transfers + transfers + 1,
                    fare: fare,
                    totalWalkDistance: walkDistance,
                    totaldistance: totaldistance,
                    legs: data2.itineraries[0].legs.length + lastIndex,
                    totalTime: time,
                    roundtrip: true
                  });
                }
              );
            }
            else{
              //get direction from origin to terminal
              let lastIndex = 0 ;
              this.rsp.load(markers[0].getPosition(), markers[3].getPosition()).subscribe(
                data => {
                  data1 = data.plan;
                  console.log(data1);
                  lastIndex = data1.itineraries[0].legs.length;
                  transfers = data1.itineraries[0].transfers;
                  time  = data1.itineraries[0].duration;
                  console.log(lastIndex);
                  for(let i=0; i<data1.itineraries[0].legs.length; i++){
                    let leg = data1.itineraries[0].legs[i];
                    if(leg['mode']=="WALK"){
                      let steps = [];
                      for(let num=0; num<leg['steps'].length; num++){
                        if((leg['steps'][num]['absoluteDirection']=="RIGHT")||(leg['steps'][num]['absoluteDirection']=="LEFT"))
                          steps.push("Turn " + leg['steps'][num]['absoluteDirection'] + " onto " + leg['steps'][num]['streetName']);
                        else
                          steps.push("Head " + leg['steps'][num]['absoluteDirection'] + " on " + leg['steps'][num]['streetName']);
                      }
                      this.legWalk.push({ 
                        tripID: id+1,
                        seq: i,
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
                          fare += 8+((parseInt(distance)-4)*1.50);
                        else
                          fare += 8;
                      }
                      else if(mode.includes("PUB")){
                        mode = "PUB";
                        if(distance>5)
                          fare += 10+((parseInt(distance)-5)*1.75);
                        else
                          fare += 10;
                      }
                      else if(mode.includes("TODA")){
                        mode = "TODA";
                        if(distance>1)
                          fare += 8.50+(parseInt(distance)-1);
                        else
                          fare += 8.50;
                      }
                      else{
                        let orig: string = leg['from']['name'];
                        let dest: string = leg['to']['name'];
                        let x = 0, y = 0;
                        mode = "RAIL";
                        if(orig.includes("MRT")){
                          for(let i = 0; i<this.mrt3.length; i++){
                            if(orig.includes(this.mrt3[0][i])){
                              y = i
                            }
                            if(dest.includes(this.mrt3[0][i])){
                              x = i
                            }
                          }
                          fare += this.mrt3[x][y];
                        }
                        else if(orig.includes("PNR")){
                          for(let i = 0; i<this.pnr.length; i++){
                            if(orig.includes(this.pnr[0][i])){
                              y = i
                            }
                            if(dest.includes(this.pnr[0][i])){
                              x = i
                            }
                          }
                          fare += this.pnr[x][y];
                        }
                        else{
                          let line = 1;
                          for(let i = 0; i<this.lrtLine1.length; i++){
                            if(orig.includes(this.lrtLine1[0][i])){
                              y = i;
                              line = 1;
                            }
                            if(dest.includes(this.lrtLine1[i][0])){
                              x = i
                            }
                          }
                          for(let i = 0; i<this.lrtLine2.length; i++){
                            if(orig.includes(this.lrtLine2[0][i])){
                              y = i;
                              line = 2;
                            }
                            if(dest.includes(this.lrtLine2[i][0])){
                              x = i
                            }
                          }
                          if(line==1)
                            fare += this.lrtLine1[x][y];
                          else
                            fare += this.lrtLine2[x][y];
                        }
                      }
            
                      this.legTransit.push({
                        tripID: id+1,
                        seq: i,
                        distance: distance,
                        legGeom: leg['legGeometry']['points'],
                        from: leg['from']['name'],
                        to: leg['to']['name'],
                        time: leg['duration']/60,
                        transMode: mode,
                        route: leg['route'],
                        routeLongName: leg['routeLongName']
                      });
                      totaldistance+=distance;
                    }
                  }
                }
              );
              this.rsp.load(markers[3].getPosition(), markers[1].getPosition()).subscribe(
                data => {
                  data2 = data.plan;
                  let ind: any;
                  ind = 1;
                  console.log(data2);
                  for(let i=lastIndex; i<data2.itineraries[0].legs.length+lastIndex-1; i++){
                    let leg = data2.itineraries[0].legs[ind];
                    if(leg['mode']=="WALK"){
                      let steps = [];
                      for(let num=0; num<leg['steps'].length; num++){
                        if((leg['steps'][num]['absoluteDirection']=="RIGHT")||(leg['steps'][num]['absoluteDirection']=="LEFT"))
                          steps.push("Turn " + leg['steps'][num]['absoluteDirection'] + " onto " + leg['steps'][num]['streetName']);
                        else
                          steps.push("Head " + leg['steps'][num]['absoluteDirection'] + " on " + leg['steps'][num]['streetName']);
                      }
                      this.legWalk.push({ 
                        tripID: id+1,
                        seq: i,
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
                      else if(mode.includes("TODA")){
                        mode = "TODA";
                        if(distance>1)
                          fare += 8.50+(distance-1);
                        else
                          fare += 8.50;
                      }
                      else{
                        let orig: string = leg['from']['name'];
                        let dest: string = leg['to']['name'];
                        let x = 0, y = 0;
                        mode = "RAIL";
                        if(orig.includes("MRT")){
                          for(let i = 0; i<this.mrt3.length; i++){
                            if(orig.includes(this.mrt3[0][i])){
                              y = i
                            }
                            if(dest.includes(this.mrt3[0][i])){
                              x = i
                            }
                          }
                          fare += this.mrt3[x][y];
                        }
                        else if(orig.includes("PNR")){
                          for(let i = 0; i<this.pnr.length; i++){
                            if(orig.includes(this.pnr[0][i])){
                              y = i
                            }
                            if(dest.includes(this.pnr[0][i])){
                              x = i
                            }
                          }
                          fare += this.pnr[x][y];
                        }
                        else{
                          let line = 1;
                          for(let i = 0; i<this.lrtLine1.length; i++){
                            if(orig.includes(this.lrtLine1[0][i])){
                              y = i;
                              line = 1;
                            }
                            if(dest.includes(this.lrtLine1[i][0])){
                              x = i
                            }
                          }
                          for(let i = 0; i<this.lrtLine2.length; i++){
                            if(orig.includes(this.lrtLine2[0][i])){
                              y = i;
                              line = 2;
                            }
                            if(dest.includes(this.lrtLine2[i][0])){
                              x = i
                            }
                          }
                          if(line==1)
                            fare += this.lrtLine1[x][y];
                          else
                            fare += this.lrtLine2[x][y];
                        }
                      }
            
                      this.legTransit.push({
                        tripID: id+1,
                        seq: i,
                        distance: distance,
                        legGeom: leg['legGeometry']['points'],
                        from: leg['from']['name'],
                        to: leg['to']['name'],
                        time: leg['duration']/60,
                        transMode: mode,
                        route: leg['route'],
                        routeLongName: leg['routeLongName']
                      });
                      totaldistance+=distance;
                    }
                    ind++;
                  }
                  totaldistance = parseFloat(totaldistance.toPrecision(3));
                  walkDistance = parseFloat(walkDistance.toPrecision(2));
                  fare = parseFloat(fare.toPrecision(4));
                  time = (time + data2.itineraries[0].duration)/60;
                  time = parseFloat(time.toPrecision(2));
                  this.trip.push({
                    id: id+1,
                    transfer: data2.itineraries[0].transfers + transfers + 1,
                    fare: fare,
                    totalWalkDistance: walkDistance,
                    totaldistance: totaldistance,
                    legs: data2.itineraries[0].legs.length + lastIndex,
                    totalTime: time,
                    roundtrip: true
                  });
                }
              );
            }
          }
        );
      }
    );
  }
  seeDetails(i){
    let trip: any;
    let legW: any;
    let legT: any;
    trip = this.trip, legW = this.legWalk, legT  = this.legTransit;
    this.navCtrl.push(DetailsPage, { "email": this.email, "i": i, "trip": trip, "legW": legW, "legT": legT, "address": this.address }).catch( err => {
      console.log(err)});
  }
}