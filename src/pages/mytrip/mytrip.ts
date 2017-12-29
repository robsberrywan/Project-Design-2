import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'page-mytrip',
    templateUrl: 'mytrip.html'
})

export class MytripPage {
    trip: FirebaseListObservable<any>;
    constructor(public navCtrl: NavController, angFire: AngularFireDatabase) {
        this.trip = angFire.database.list('/trip');
    }
    ionViewDidLoad(){
        console.log(this.trip);
    }
}