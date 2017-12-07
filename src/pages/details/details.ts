import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  trip;
  legWalk;
  legTransit;
  index;
  description;
  iosicon;
  mdicon;
  leg;
    constructor(public navCtrl: NavController, public navParams: NavParams){
      this.index = this.navParams.get("i");
      this.trip = this.navParams.get("trip");
      this.legWalk = this.navParams.get("legW");
      this.legTransit = this.navParams.get("legT");
      this.description = [];
      this.iosicon = [];
      this.mdicon = [];
      this.leg = [];
    }
    ionViewDidLoad(){
      console.log(this.trip[this.index].legs);
      this.buildlist();
    }
    buildlist(){
      this.leg.length = 0;
      this.description.length = 0;
      let des = "";
      for(let i=0; i<this.trip[this.index].legs; i++){
        des = "";
        for(let j=0; j<this.legWalk.length; j++){
          if((this.legWalk[j].tripID==this.trip[this.index].id)&&(this.legWalk[j].seq==i)){
            console.log("walk");
            let distance = this.legWalk[j].distance;
            des = "Distance: " + parseFloat(distance).toPrecision(2)+ " km\n";
            this.description.push(des);
            this.iosicon.push("ios-walk");
            this.mdicon.push("md-walk");
            des = "";
          }
        }
        for(let k=0; k<this.legTransit.length; k++){
          let fare: any;
          let fare2: any;
          console.log("transit");
          if((this.legTransit[k].tripID==this.trip[this.index].id)&&(this.legTransit[k].seq==i)&&(this.legTransit[k].seq)){
            fare = 0;
            fare2 = 0;
            let distance = this.legTransit[k].distance;
            if(this.legTransit[k].transMode=="PUJ"){
              if(distance>4)
                fare = (8.00+(distance-4)*1.50).toPrecision(3);
              else
                fare = (8.00).toPrecision(3);
              des = "Fare: P" + fare + "\n";
              des = des + "Route: PUJ - " + this.legTransit[k].route + "\n";
              des = des + "Board at: " + this.legTransit[k].from + "\n";
              des = des + "Alight at: " + this.legTransit[k].to + "\n";
              this.iosicon.push("ios-car");
              this.mdicon.push("md-car");
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

              des = "Fare (Ordinary): P" + fare + "\n";
              des = des + "Fare (Air-con): P" + fare2 + "\n";
              des = des + "Route: PUB - " + this.legTransit[k].route + "\n";
              des = des + "Board at: " + this.legTransit[k].from + "\n";
              des = des + "Alight at: " + this.legTransit[k].to + "\n";
              this.iosicon.push("ios-bus");
              this.mdicon.push("md-bus");
            }
            else{
              des = "Distance: " + parseFloat(distance).toPrecision(2) + " km";
              this.iosicon.push("ios-train");
              this.mdicon.push("md-train");
            }
            this.description.push(des);
            des = "";
          }
        }
      }
    }
}