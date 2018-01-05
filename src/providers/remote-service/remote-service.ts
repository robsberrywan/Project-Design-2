import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { TwitterService } from 'ng2-twitter';
/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

declare function require(name:string);

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

  constructor(public http: Http, private twitter: TwitterService) {
  }
  load(origin, dest){
    var url = 'http://13.71.136.189:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=12:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
  getTwitterStatus(){
    /*var Twit = require('twit')

    var T = new Twit({
      consumer_key:         'IZ8IT77kPfcpF3L7BZuWdkiXd',
      consumer_secret:      'rlO4tWDmlujHTHoN3WIUW5AXVM4OtTgCcpE28SBUBn8aDrnsxa',
      access_token:         '947804321613103104-qxT4wcGGDq6Ejy9ahrkx7uUSbGdymq8',
      access_token_secret:  '4GsGpqUJjWLu961fPvNf8nDeXxY3JATv5SbLFsM7zhDHD',
      timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    })
    T.get('search/tweets', { q: 'MMDA since:2017-01-4', count: 5 }, function(err, data, response) {
      console.log(data)
    })*/
    return this.twitter.get(
      
      'https://api.twitter.com/1.1/search/tweets.json?q=MMDA',
      {
        count: 10
      },
      { 
        consumerKey: 'IZ8IT77kPfcpF3L7BZuWdkiXd',
        consumerSecret: 'rlO4tWDmlujHTHoN3WIUW5AXVM4OtTgCcpE28SBUBn8aDrnsxa',
      },
      {
        token: '947804321613103104-qxT4wcGGDq6Ejy9ahrkx7uUSbGdymq8',
        tokenSecret: '4GsGpqUJjWLu961fPvNf8nDeXxY3JATv5SbLFsM7zhDHD',
      }
    )
      .map(res => res.json());
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
<<<<<<< HEAD
}*/}
=======
}*/
}
>>>>>>> b85ad06358d5b2bf8e175e9df97d80ee5c348bff
