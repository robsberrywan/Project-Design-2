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

  lrtLine2;
  lrtLine1;
  mrt3;

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
        to: '',
        steps: []
      }];
      this.modeIcons = [];
      this.leg = [];
      this.drop = true;

      this.lrtLine2 = [
        [0, "Recto", "Legarda", "Pureza", "V. Mapa", "J. Ruiz", "Gilmore", "Betty-Go", "Cubao", "Anonas", "Katipunan", "Santolan"],
        ["Recto", 0, 15, 15, 15, 20, 20, 20, 20, 25, 25, 25],
        ["Legarda", 15, 0, 15, 15, 15, 20, 20, 20, 20, 25, 25],
        ["Pureza", 15, 15, 0, 15, 15, 15, 20, 20, 20, 20, 25],
        ["V. Mapa", 15, 15, 15, 0, 15, 15, 15, 20, 20, 20, 25],
        ["J. Ruiz", 20, 15, 15, 15, 0, 15, 15, 15, 20, 20, 20],
        ["Gilmore", 20, 20, 15, 15, 15, 0, 15, 15, 15, 20, 20],
        ["Betty-Go", 20, 20, 20, 15, 15, 15, 0, 15, 15, 15, 20],
        ["Cubao", 20, 20, 20, 20, 15, 15, 15, 0, 15, 15, 15],
        ["Anonas", 25, 20, 20, 20, 20, 15, 15, 15, 0, 15, 15],
        ["Katipunan", 25, 25, 20, 20, 20, 20, 15, 15, 15, 0, 15],
        ["Santolan", 25, 25, 25, 25, 20, 20, 20, 15, 15, 15, 0]
      ];
      this.lrtLine1 = [
        [0,"Baclaran","EDSA","Libertad","Gil Puyat","V. Cruz","Quirino","P. Gil","United Nations","C. Terminal","Carriedo","D. Jose","Bambang","Tayuman","Blumentritt","A. Santos","R. Papa","5th Avenue","Monumento","Balintawak","Roosevelt"],
        ["Baclaran",0,15,15,15,15,15,20,20,20,20,20,20,30,30,30,30,30,30,30,30],
        ["EDSA",15,0,15,15,15,15,15,20,20,20,20,20,20,30,30,30,30,30,30,30],
        ["Libertad",15,15,0,15,15,15,15,15,20,20,20,20,20,20,30,30,30,30,30,30],
        ["Gil Puyat",15,15,15,0,15,15,15,15,20,20,20,20,20,20,20,30,30,30,30,30],
        ["V. Cruz",15,15,15,15,0,15,15,15,15,15,20,20,20,20,20,20,30,30,30,30],
        ["Quirino",15,15,15,15,15,0,15,15,15,15,15,20,20,20,20,20,20,30,30,30],
        ["P. Gil",20,15,15,15,15,15,0,15,15,15,15,15,20,20,20,20,20,20,30,30],
        ["United Nations",20,20,15,15,15,15,15,0,15,15,15,15,15,20,20,20,20,20,30,30],
        ["C. Terminal",20,20,20,20,15,15,15,15,0,15,15,15,15,15,15,20,20,20,20,30],
        ["Carriedo",20,20,20,20,15,15,15,15,15,0,15,15,15,15,15,15,20,20,20,30],
        ["D. Jose",20,20,20,20,20,15,15,15,15,15,0,15,15,15,15,15,15,20,20,30],
        ["Bambang",20,20,20,20,20,20,15,15,15,15,15,0,15,15,15,15,15,20,20,20],
        ["Tayuman",30,20,20,20,20,20,20,15,15,15,15,15,0,15,15,15,15,15,20,20],
        ["Blumentritt",30,30,20,20,20,20,20,20,15,15,15,15,15,0,15,15,15,15,20,20],
        ["A. Santos",30,30,30,20,20,20,20,20,15,15,15,15,15,15,0,15,15,15,20,20],
        ["R. Papa",30,30,30,30,20,20,20,20,20,15,15,15,15,15,15,0,15,15,15,20],
        ["5th Avenue",30,30,30,30,30,20,20,20,20,20,15,15,15,15,15,15,0,15,15,20],
        ["Monumento",30,30,30,30,30,30,20,20,20,20,20,20,15,15,15,15,15,0,15,15],
        ["Balintawak",30,30,30,30,30,30,30,30,20,20,20,20,20,20,20,15,15,15,0,15],
        ["Roosevelt",30,30,30,30,30,30,30,30,30,30,30,20,20,20,20,20,20,15,15,0]
      ];
      this.mrt3 = [
        [0, "North Ave", "Quezon Ave", "GMA Kamuning", "Cubao", "Santolan", "Ortigas", "Shaw Blvd", "Boni Ave", "Guadalupe", "Buendia", "Ayala Ave", "Magallanes", "Taft"],
        ["North Ave", 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24, 28, 28],
        ["Quezon Ave", 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24, 28],
        ["GMA Kamuning", 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24, 24],
        ["Cubao", 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24, 24],
        ["Santolan", 16, 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20, 24],
        ["Ortigas", 20, 16, 16, 13, 13, 0, 13, 13, 16, 16, 20, 20, 20],
        ["Shaw Blvd", 20, 20, 16, 16, 16, 13, 0, 13, 13, 16, 16, 20, 20],
        ["Boni Ave", 20, 20, 20, 16, 16, 13, 13, 0, 13, 13, 16, 16, 20],
        ["Guadalupe", 24, 20, 20, 20, 20, 16, 13, 13, 0, 13, 13, 16, 16],
        ["Buendia", 24, 24, 20, 20, 20, 16, 16, 13, 13, 0, 13, 13, 16],
        ["Ayala Ave", 24, 24, 24, 20, 20, 20, 16, 16, 13, 13, 0, 13, 13],
        ["Magallanes", 28, 24, 24, 24, 24, 20, 20, 16, 16, 13, 13, 0, 13],
        ["Taft", 28, 28, 24, 24, 24, 20, 20, 20, 16, 16, 13, 13, 0]
      ]
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
      let orig: any;
      let dest: any;
      this.leg.length = 0;
      this.description.length = 0;
      for(let i=0; i<this.trip[this.index].legs; i++){
        for(let j=0; j<this.legWalk.length; j++){
          if((this.legWalk[j].tripID==this.trip[this.index].id)&&(this.legWalk[j].seq==i)){

            if(this.description.length==0)
              orig = this.address.origin;
            else{
              orig = this.legWalk[j].from;
              if(orig.includes("MRT")){
                for(let i = 0; i<this.mrt3.length; i++){
                  if(orig.includes(this.mrt3[0][i]))
                    orig = "MRT - " + this.mrt3[0][i] + " Station";
                }
              }
              else if(orig.includes("LRT")){
                for(let i = 0; i<this.lrtLine1.length; i++){
                  if(orig.includes(this.lrtLine1[0][i]))
                    orig = "LRT-1 - " + this.lrtLine1[0][i] + " Station";
                }
                for(let i = 0; i<this.lrtLine2.length; i++){
                  if(orig.includes(this.lrtLine2[0][i]))
                    orig = "LRT-2 - " + this.lrtLine2[0][i] + " Station";
                }
              }
            }
              
            this.description.push({
              distance: parseFloat(this.legWalk[j].distance).toPrecision(2)+ " km\n",
              time: parseFloat(this.legWalk[j].time.toPrecision(2)) + " min",
              fare: '',
              fare2: '',
              route: '',
              from: orig,
              to: this.legWalk[j].to,
              steps: this.legWalk[j].steps
            });
            this.modeIcons.push("./assets/imgs/walk.png");
          }
        }
        for(let k=0; k<this.legTransit.length; k++){
          let fare: any;
          let fare2: any;

          if((this.legTransit[k].tripID==this.trip[this.index].id)&&(this.legTransit[k].seq==i)&&(this.legTransit[k].seq)){
            fare = 0;
            fare2 = 0;
            let distance = this.legTransit[k].distance;

            if(this.description.length==0)
              orig = this.address.origin;
            else{
              orig = this.legTransit[k].from;
              if(orig.includes("MRT")){
                for(let i = 0; i<this.mrt3.length; i++){
                  if(orig.includes(this.mrt3[0][i]))
                    orig = "MRT - " + this.mrt3[0][i] + " Station";
                }
              }
              else if(orig.includes("LRT")){
                for(let i = 0; i<this.lrtLine1.length; i++){
                  if(orig.includes(this.lrtLine1[0][i]))
                    orig = "LRT-1 - " + this.lrtLine1[0][i] + " Station";
                }
                for(let i = 0; i<this.lrtLine2.length; i++){
                  if(orig.includes(this.lrtLine2[0][i]))
                    orig = "LRT-2 - " + this.lrtLine2[0][i] + " Station";
                }
              }
            }
            
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
                from: orig,
                to: this.legTransit[k].to,
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
              this.modeIcons.push("./assets/imgs/bus.png");
            }
            else{
              let x = 0;
              let y = 0;
              let railOrig: string = this.legTransit[k].from;
              let railDest: string = this.legTransit[k].to;

              if(railOrig.includes("MRT")){
                for(let i = 0; i<this.mrt3.length; i++){
                  if(railOrig.includes(this.mrt3[0][i])){
                    railOrig = "MRT " + this.mrt3[0][i];
                    x = i
                  }
                  else if(railDest.includes(this.mrt3[i][0])){
                    railDest = "MRT " + this.mrt3[i][0];
                    y = i
                  }
                }
                fare = this.mrt3[x][y];
              }
              else{
                let line = 1;
                for(let i = 0; i<this.lrtLine1.length; i++){
                  if(railOrig.includes(this.lrtLine1[0][i])){
                    railOrig = "LRT-1 " + this.lrtLine1[0][i];
                    x = i;
                    line = 1;
                  }
                  else if(railDest.includes(this.lrtLine1[i][0])){
                    railDest = "LRT-1 " + this.lrtLine1[i][0];
                    y = i
                  }
                }
                for(let i = 0; i<this.lrtLine2.length; i++){
                  if(railOrig.includes(this.lrtLine2[0][i])){
                    railOrig = "LRT-2 " + this.lrtLine2[0][i];
                    x = i;
                    line = 2;
                  }
                  else if(railDest.includes(this.lrtLine2[i][0])){
                    railDest = "LRT-2 " + this.lrtLine2[i][0];
                    y = i
                  }
                }
                if(line==1)
                  fare = this.lrtLine1[x][y];
                else
                  fare = this.lrtLine2[x][y];
              }
              this.description.push({
                distance: parseFloat(this.legTransit[k].distance).toPrecision(2)+ " km\n",
                time: parseFloat(this.legTransit[k].time.toPrecision(2)) + " min",
                fare: "P" + fare,
                fare2: '',
                route: '',
                from: railOrig + " Station",
                to: railDest + " Station"
              });
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