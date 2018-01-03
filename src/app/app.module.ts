import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { MytripPage } from '../pages/mytrip/mytrip';
import { SettingsPage } from '../pages/settings/settings';
import { DetailsPage } from '../pages/details/details';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

import { GooglePlus } from '@ionic-native/google-plus';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { TwitterService } from 'ng2-twitter';

export const FIREBASE_CONF = {
  apiKey: "AIzaSyDXJtxVDEFknxJYwWAjKCce-mHuDxY2gqU",
  authDomain: "project-design-2018d.firebaseapp.com",
  databaseURL: "https://project-design-2018d.firebaseio.com",
  projectId: "project-design-2018d",
  storageBucket: "project-design-2018d.appspot.com",
  messagingSenderId: "308539296287"
}

firebase.initializeApp(FIREBASE_CONF)

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    MytripPage,
    SettingsPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONF),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    LoginPage,
    RegisterPage,
    HomePage,
    MytripPage,
    SettingsPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AngularFireDatabaseModule,
    Geolocation,
    RemoteServiceProvider,
    GooglePlus,
    Facebook,
    TwitterConnect,
    TwitterService,
    InAppBrowser
  ]
})
export class AppModule {}