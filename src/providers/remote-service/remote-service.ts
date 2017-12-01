import { HttpClient } from '@angular/common/http';
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
  baseUrl;
  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  load(origin, dest){
    this.baseUrl = 'http://localhost:8080/otp/routers/default/plan?fromPlace='+origin+'&toPlace='+dest+'&mode=TRANSIT%2CWALK&maxWalkDistance=1000&arriveBy=false&wheelchair=false';
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
}
