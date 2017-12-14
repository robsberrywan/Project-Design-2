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
  points;

  lrtLine2;
  lrtLine1;
  mrt3;
  pnr;

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
            if(this.legTransit[k].transMode=="PUJ"){
              this.decode(this.legTransit[k].legGeom);
              this.drawSnappedPolyline('green')
            }
            else if(this.legTransit[k].transMode=="PUB"){
              this.decode(this.legTransit[k].legGeom);
              this.drawSnappedPolyline('yellow')
            }
            else{
              this.decode(this.legTransit[k].legGeom);
              this.drawSnappedPolyline('red')
            }
          }
        }
      }
    }
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
      this.leg.length = 0;
      this.description.length = 0;
      for(let i=0; i<this.trip[this.index].legs; i++){
        for(let j=0; j<this.legWalk.length; j++){
          if((this.legWalk[j].tripID==this.trip[this.index].id)&&(this.legWalk[j].seq==i)){

            if(this.description.length==0)
              orig = this.address.origin;
            else{
              orig = this.legWalk[j].from;
              if(this.trip[this.index].transMode=="RAIL"){
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
                else if(orig.includes("PNR")){
                  for(let i = 0; i<this.pnr.length; i++){
                    if(orig.includes(this.pnr[0][i]))
                      orig = "PNR - " + this.pnr[0][i] + " Station";
                  }
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

          if((this.legTransit[k].tripID==this.trip[this.index].id)&&(this.legTransit[k].seq==i)){
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
              else if(orig.includes("PNR")){
                for(let i = 0; i<this.pnr.length; i++){
                  if(orig.includes(this.pnr[0][i]))
                    orig = "PNR - " + this.pnr[0][i] + " Station";
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
                fare: "P" + parseInt(fare) + ".00",
                fare2: '',
                route: this.legTransit[k].route,
                from: orig,
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
                fare: "Ordinary: P"+ parseInt(fare) + ".00",
                fare2: "Aircon: P"+ parseInt(fare2)  + ".00",
                route: this.legTransit[k].route,
                from: orig,
                to: this.legTransit[k].to
              });
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
              else if(railOrig.includes("PNR")){
                for(let i = 0; i<this.pnr.length; i++){
                  if(railOrig.includes(this.pnr[0][i])){
                    railOrig = "PNR " + this.pnr[0][i];
                    x = i
                  }
                  else if(railDest.includes(this.pnr[i][0])){
                    railDest = "PNR " + this.pnr[i][0];
                    y = i
                  }
                }
                fare = this.pnr[x][y];
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