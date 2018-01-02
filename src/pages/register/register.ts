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
<<<<<<< HEAD
		if(String(user.password).length < 6){
			let alert = this.alertCtrl.create({
				title: 'Register Failed!',
				subTitle: 'Password must contain at least 6 characters.',
				buttons: ['Retry']
			});
			alert.present();
		}
  		else if(user.password!=cpass){
			let alert = this.alertCtrl.create({
				title: 'Register Failed!',
				subTitle: 'Password does not match.',
				buttons: ['Retry']
			});
			alert.present();
		}
		else if((!user.email)||(!user.password)){
			let alert = this.alertCtrl.create({
				title: 'Register Failed!',
				subTitle: 'All fields must be filled.',
				buttons: ['Retry']
			});
			alert.present();
		}  
  		else{
=======
  		if(user.password==cpass){
>>>>>>> ad07b6ad8d76f49fad8ad721cd72977ae2c84741
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
<<<<<<< HEAD
=======
  		else{
			let alert = this.alertCtrl.create({
				title: 'Register Failed!',
				subTitle: 'Password does not match.',
				buttons: ['Retry']
			});
			alert.present();
  		}
>>>>>>> ad07b6ad8d76f49fad8ad721cd72977ae2c84741
  	}
  	toSignIn(){
  		this.navCtrl.pop();
  	}
}
