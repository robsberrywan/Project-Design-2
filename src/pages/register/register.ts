import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
	user = {} as User;
  	constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController) {
  	}
  	async signUp(user: User, cpass){
  		if(user.password==cpass){
			await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
			.then( res => {
				let alert = this.alertCtrl.create({
					subTitle: 'You are now successfully registered!',
					buttons: ['OK']
				});
				alert.present();
				this.navCtrl.pop();
		  }, err => {
			let alert = this.alertCtrl.create({
				title: 'Register Failed!',
				subTitle: 'Please try again.',
				buttons: ['Retry']
			});
			alert.present();
		  });
  		}
  		else{
			let alert = this.alertCtrl.create({
				title: 'Register Failed!',
				subTitle: 'Password does not match.',
				buttons: ['Retry']
			});
			alert.present();
  		}
  	}
  	toSignIn(){
  		this.navCtrl.pop();
  	}
}
