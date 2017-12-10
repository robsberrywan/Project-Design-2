import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  geocoder;
  markers;
  address;
  polylines = [];

  trip;
  legWalk;
  legTransit;
  index;
  description;
  modeIcons;
  leg;

  drop;
  map: any;
  @ViewChild('map') mapElement: ElementRef;
    constructor(public navCtrl: NavController, public navParams: NavParams){
      this.index = this.navParams.get("i");
      this.trip = this.navParams.get("trip");
      this.legWalk = this.navParams.get("legW");
      this.legTransit = this.navParams.get("legT");
      this.address = this.navParams.get('address');
      this.markers = [];
      this.geocoder = new google.maps.Geocoder;
      this.description = [{
        distance: '',
        time: '',
        fare: '',
        fare2: '',
        route: '',
        from: '',
        to: ''
      }];
      this.modeIcons = [];
      this.leg = [];
      this.drop = true;
    }
    ionViewDidLoad(){
      this.loadMap();
      this.buildlist();
    }
    loadMap(){
      let mapOptions = {
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.setOrgDes();
      this.plotted(this.index);
    }
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
      let bounds = new google.maps.LatLngBounds();
      for(let i=0; i<markers.length; i++){
        bounds.extend(markers[i].getPosition());
      }
      this.map.fitBounds(bounds);
      this.map.setZoom(15);
    }

    plotted(index){
      for(let i=0; i<this.trip[index].legs; i++){
        this.points = [];
        for(let j=0; j<this.legWalk.length; j++){
          console.log(this.legWalk[j].seq);
          if((this.legWalk[j].tripID==this.trip[index].id)&&(this.legWalk[j].seq==i)){
            console.log("walk");
            this.decode(this.legWalk[j].legGeom)
            this.drawSnappedPolyline('blue');
          }
        }
        for(let k=0; k<this.legTransit.length; k++){
          if((this.legTransit[k].tripID==this.trip[index].id)&&(this.legTransit[k].seq==i)){
            console.log("transit");
            this.decode(this.legTransit[k].legGeom);
            this.drawSnappedPolyline('red');
          }
        }
      }
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
    }
    drawSnappedPolyline(color){
      let snappedPolyline = new google.maps.Polyline({
        path: this.points,
        strokeColor: color,
        strokeWeight: 3
      });
      
      snappedPolyline.setMap(this.map);
      this.polylines.push(snappedPolyline);
    }
    buildlist(){
      this.leg.length = 0;
      this.description.length = 0;
      for(let i=0; i<this.trip[this.index].legs; i++){
        for(let j=0; j<this.legWalk.length; j++){
          if((this.legWalk[j].tripID==this.trip[this.index].id)&&(this.legWalk[j].seq==i)){
            this.description.push({
              distance: parseFloat(this.legWalk[j].distance).toPrecision(2)+ " km\n",
              time: parseFloat(this.legWalk[j].time.toPrecision(2)) + " min",
              fare: '',
              fare2: '',
              route: '',
              from: '',
              to: '',
              steps: this.legWalk[j].steps
            });
            this.modeIcons.push("./assets/imgs/walk.png");
          }
        }
        for(let k=0; k<this.legTransit.length; k++){
          let fare: any;
          let fare2: any;
          console.log("transit");
          console.log(this.legTransit[k].route);
          if((this.legTransit[k].tripID==this.trip[this.index].id)&&(this.legTransit[k].seq==i)&&(this.legTransit[k].seq)){
            fare = 0;
            fare2 = 0;
            let distance = this.legTransit[k].distance;
            if(this.legTransit[k].transMode=="PUJ"){
              if(distance>4)
                fare = (8.00+(distance-4)*1.50).toPrecision(3);
              else
                fare = (8.00).toPrecision(3);
              this.description.push({
                distance: parseFloat(this.legTransit[k].distance).toPrecision(2)+ " km\n",
                time: parseFloat(this.legTransit[k].time.toPrecision(2)) + " min",
                fare: "P"+fare,
                fare2: '',
                route: this.legTransit[k].route,
                from: this.legTransit[k].from,
                to: this.legTransit[k].to
              });
              this.modeIcons.push("./assets/imgs/jeep.png");
            }
            else if(this.legTransit[k].transMode=="PUB"){
              
              if(distance>5){
                fare = (10.00+(distance-5)*1.75).toPrecision(4);
                fare2 = (12.00+(distance-5)*2.35).toPrecision(4);
              }
              else{
                fare = (10.00).toPrecision(4);
                fare2 = (12.00).toPrecision(4);             
              }
              this.description.push({
                distance: parseFloat(this.legTransit[k].distance).toPrecision(2)+ " km\n",
                time: parseFloat(this.legTransit[k].time.toPrecision(2)) + " min",
                fare: "Ordinary: P"+fare,
                fare2: "Aircon: P"+fare2,
                route: this.legTransit[k].route,
                from: this.legTransit[k].from,
                to: this.legTransit[k].to
              });
              this.modeIcons.push("./assets/imgs/bus.png");
            }
            else{
              this.modeIcons.push("./assets/imgs/train.png");
            }
          }
        }
      }
    }
    setDrop(){
      if(this.drop)
        this.drop = false;
      else
        this.drop = true;
    }
}

/*
-arrange details output
*/