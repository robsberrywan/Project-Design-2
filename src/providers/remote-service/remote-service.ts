import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Facebook } from '@ionic-native/facebook';
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
  APP_ID: number = 407839889634958;
  constructor(public http: Http, public fb: Facebook) {
    this.fb.browserInit(this.APP_ID, "v2.11");
  }
  load(origin, dest){
    var url = 'http://13.71.136.189:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&date=2017/01/09&time=12:00:00&mode=TRANSIT%2CWALK&numItineraries=5&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
  getFacebookStatus(){
    let params: any ='EAACEdEose0cBAI6F9NekbZCP1sG0GZCqpYvbQZAFFt7WwnYlpiWRpkXghpJF6vqnjsV3VcbudTKecCVyOe6ck0iYcpenFB7c33D3a8htBitkG8bdjteV1RwSHZAlvxt26RZA6hwJycK1FSMZBAVQyBijiq4QQZC5JyeSWxxZCxrZAutbKNiwq3BM3haHF0qcIUmPYgOjeddSfsAZDZD';
    
    this.fb.api("/MMDA/posts", params).then((response) => {
      if(response){
        return response;
      }
    })
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
}*/}
