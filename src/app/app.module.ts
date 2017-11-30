import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { MytripPage } from '../pages/myTrips/mytrip';
import { SettingsPage } from '../pages/settings/settings';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';

export const FIREBASE_CONF = {
  apiKey: "AIzaSyDXJtxVDEFknxJYwWAjKCce-mHuDxY2gqU",
  authDomain: "project-design-2018d.firebaseapp.com",
  databaseURL: "https://project-design-2018d.firebaseio.com",
  projectId: "project-design-2018d",
  storageBucket: "project-design-2018d.appspot.com",
  messagingSenderId: "308539296287"
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    MytripPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONF),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    LoginPage,
    RegisterPage,
    HomePage,
    MytripPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    Geolocation,
    RemoteServiceProvider
  ]
})
export class AppModule {}