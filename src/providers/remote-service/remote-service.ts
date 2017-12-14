import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  data: any;
  rounddata: any;
  data1: any;
  data2: any;
  snap: any;
  baseUrl;
  rbaseUrl;
  baseUrl1;
  baseUrl2;
  constructor(public http: Http) {
  }
  load(origin, dest){
<<<<<<< HEAD
    this.baseUrl = 'http://192.168.0.106:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
=======
    this.baseUrl = 'http://localhost:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
>>>>>>> ad577537882ad8eafd28ec896de7fb67cf454c51
    if (this.data) {
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
  loadRound(origin, dest){
<<<<<<< HEAD
    this.rbaseUrl = 'http://192.168.0.106:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
=======
    this.rbaseUrl = 'http://localhost:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
>>>>>>> ad577537882ad8eafd28ec896de7fb67cf454c51
    if (this.rounddata) {
      return Promise.resolve(this.rounddata);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set('Accept', 'application/json');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve => {
      this.http.get(this.rbaseUrl, opt)
        .map(res => res.json())
        .subscribe(rounddata => {
          this.rounddata = rounddata.plan;
          resolve(this.rounddata);
        });
    });
  }
  load1(origin, dest){
<<<<<<< HEAD
    this.baseUrl1 = 'http://192.168.0.106:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
=======
    this.baseUrl1 = 'http://localhost:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
>>>>>>> ad577537882ad8eafd28ec896de7fb67cf454c51
    if (this.data1) {
      return Promise.resolve(this.data1);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set('Accept', 'application/json');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve => {
      this.http.get(this.baseUrl1, opt)
        .map(res => res.json())
        .subscribe(data1 => {
          this.data1 = data1.plan;
          resolve(this.data1);
        });
    });
  }
  
  load2(origin, dest){
<<<<<<< HEAD
    this.baseUrl2 = 'http://192.168.0.106:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
=======
    this.baseUrl2 = 'http://localhost:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=11:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
>>>>>>> ad577537882ad8eafd28ec896de7fb67cf454c51
    if (this.data2) {
      return Promise.resolve(this.data2);
    }
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;

    myHeaders.set('Accept', 'application/json');
    myHeaders.append('Content-type', 'application/json');
    opt = new RequestOptions({
      headers: myHeaders
    })
    return new Promise(resolve => {
      this.http.get(this.baseUrl2, opt)
        .map(res => res.json())
        .subscribe(data2 => {
          this.data2 = data2.plan;
          resolve(this.data2);
        });
    });
  }
}
