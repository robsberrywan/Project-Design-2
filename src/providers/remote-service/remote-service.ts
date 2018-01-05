import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { TwitterService } from 'ng2-twitter';
/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  data: any;
  rounddata: any;
  rounddata2: any;
  data1: any;
  data2: any;
  snap: any;
  baseUrl;
  rbaseUrl;
  baseUrl1;
  baseUrl2;

  token = null;
  tokenSecret = null;
  consumerKey = '	IZ8IT77kPfcpF3L7BZuWdkiXd';
  consumerSecret = '	rlO4tWDmlujHTHoN3WIUW5AXVM4OtTgCcpE28SBUBn8aDrnsxa';
  constructor(public http: Http, private twitter: TwitterService) {
  }
  load(origin, dest){
    var url = 'http://13.71.136.189:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=12:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
  setTokens(token, tokenSecret) {
    this.token = token;
    this.tokenSecret = tokenSecret;
  }
  getTwitterStatus(){
    return this.twitter.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=MMDA&count=2',
      {
        count: 2
      },
      {
        consumerKey: this.consumerKey,
        consumerSecret: this.consumerSecret
      },
      {
        token: this.token,
        tokenSecret: this.tokenSecret
      }
    )
      .map(res => res.json());
    };
  }
  /*load(origin, dest){
    this.baseUrl = 'http://192.168.1.6:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
    if (this.data) {
      for (var entry in this.data) delete this.data[entry];
      return Promise.resolve(this.data);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set('Accept', 'application/json');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve => {
      this.http.get(this.baseUrl, opt)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.plan;
          resolve(this.data);
        });
    });
  }
  runSnapToRoad(path) {
    let url: any;
    url= 'https://roads.googleapis.com/v1/snapToRoads?path=';
    for (let i = 0; i < path.length; i++) {
      if(i==0)
        url= url + path[i].latitude + "," + path[i].longitude ;
      else
        url= url + '|' + path[i].latitude + "," + path[i].longitude ;
    }
    url = url + '&interpolate=true&key=AIzaSyCEGIORWkWAkATmL3elnWiGD3SnVCYQzyU';

    if (this.snap) {
      return Promise.resolve(this.snap);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set('Accept', 'application/json');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve => {
      this.http.get(url, opt)
        .map(res => res.json())
        .subscribe(snap => {
          this.snap = snap;
          resolve(this.snap);
        });
    });
  }
}*/
