import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';
//import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";

const tokenKey = "token";

@Injectable()
export class HttpService {
  public url:string = "http://dev1.simbiotiktech.com/mygate/api/";
  public profile: any;

  constructor(public http: HttpClient){

  }

  posthttp(apiname, params: any) {
    return new Promise(resolve => {

      this.http.post(this.url+ apiname, params).subscribe((data: any) => {
        resolve(data);
        //console.log(data);
      });
    });
  }

  gethttp(apiname) {
    return new Promise(resolve => {

      this.http.get(this.url  + apiname).subscribe((data: any) => {
        resolve(data);
        //console.log(data);
      });
    });
  }

  // public httpget(req, data: any){
  //   //this.http.get(this.url.concat(req).concat(data))
  //   let _url = this.url.concat(req).concat(data);
  //   return getJSON(_url).then((r: any) => {
  //     console,log(JSON.stringify(r));
  //   }, (e) => {
  //     console.log(e);
  //   });
  // }

}
