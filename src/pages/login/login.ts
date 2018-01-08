import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user";

import { GooglePlus } from '@ionic-native/google-plus';
//import { AngularFireModule } from 'angularfire2';
import firebase from 'firebase';

import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    user = {} as User;
  	constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public alertCtrl: AlertController,public googleplus:GooglePlus,private facebook: Facebook) {}

  	register(){
  		this.navCtrl.push(RegisterPage);
  	}
  	async signIn(user: User){
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        this.navCtrl.setRoot(HomePage, { "email" : user.email });
      }, err => {
        let alert = this.alertCtrl.create({
          title: 'Login Failed!',
          subTitle: 'Email address or password is incorrect.',
          buttons: ['Retry']
        });
        alert.present();
      });
    }

    googlelogin(){
      this.googleplus.login({
        'webClientID':'308539296287-elic70lfie8pct2l8q9t5im6djs2oi62.apps.googleusercontent.com',
        'offline':true
      }).then(res=>{
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc=>{
          this.navCtrl.setRoot(HomePage);
        }).catch(ns=>{
          alert("NOT SUCCESS")
        })
      })
    }

    facebooklogin(){
      this.facebook.login(['email']).then(res=>{
        const fc=firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
        firebase.auth().signInWithCredential(fc).then(fs=>{
          this.navCtrl.setRoot(HomePage);
        }).catch(ferr=>{
          alert("firebase error")
        })
      }).catch(err=>{
        alert(JSON.stringify(err))
      })
    }
}
