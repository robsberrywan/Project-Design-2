import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    user = {} as User;
  	constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController) {}

  	register(){
  		this.navCtrl.push(RegisterPage);
  	}
  	async signIn(user: User){
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        this.navCtrl.setRoot(HomePage);
      }, err => {
        let alert = this.alertCtrl.create({
          title: 'Login Failed!',
          subTitle: 'Email address or password is incorrect.',
          buttons: ['Retry']
        });
        alert.present();
      });
  	}
}
