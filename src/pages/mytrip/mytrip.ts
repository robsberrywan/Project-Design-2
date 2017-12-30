import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
    selector: 'page-mytrip',
    templateUrl: 'mytrip.html'
})

export class MytripPage {
    //trip: FirebaseListObservable<any>;
    constructor(public navCtrl: NavController) {
        //this.trip = angFire.list('/trip');
    }
    ionViewDidLoad(){
        //console.log(this.trip);
    }
}