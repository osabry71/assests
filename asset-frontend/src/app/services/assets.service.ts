import { Injectable } from '@angular/core';
import Assets from '../models/assets.models';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  api = " http://localhost:3007/asset"
  constructor(private http: HttpClient) { }

  allassets() {
    let headersVal = new HttpHeaders()
      .set('x-auth-token', localStorage.getItem("token"));
    return this.http.get<Assets[]>(this.api + "/", { headers: headersVal }).toPromise();


  }

  //==============================================

  getAssets(asset_id) {
    let headersVal = new HttpHeaders()
      .set('x-auth-token', localStorage.getItem("token"));
    return this.http.get<Assets[]>(this.api + "/" + asset_id, { headers: headersVal }).toPromise();
    console.log("jgjyhrkjyrkyte");
  }


  addasset(ASName, ASlocation, ASlifespan, ASCountryofmanufacture, ASCountryofOrigin, AScontractnumber) {
    const assets2 = { ASName: ASName, ASlocation: ASlocation, ASlifespan: ASlifespan, ASCountryofmanufacture: ASCountryofmanufacture, ASCountryofOrigin: ASCountryofOrigin, AScontractnumber: AScontractnumber };
    let headersVal = new HttpHeaders().set('x-auth-token', localStorage.getItem("token"));
    return this.http.post(this.api + "/", assets2, { headers: headersVal }).toPromise();
  }


  deleteAssets(asset) {
    let headersVal = new HttpHeaders().set('x-auth-token', localStorage.getItem("token")).set('id', asset)
    console.log("Delete_Service_file"); console.log(asset); location.reload();
    return this.http.delete(this.api + "/", { headers: headersVal }).toPromise();
  }


  editeasset(assetid, ASName, ASlocation, ASlifespan, ASCountryofmanufacture, ASCountryofOrigin, AScontractnumber) {
    {
      const Asset2 = { _id: assetid, ASName: ASName, ASlocation: ASlocation, ASlifespan: ASlifespan, ASCountryofmanufacture: ASCountryofmanufacture, ASCountryofOrigin: ASCountryofOrigin, AScontractnumber: AScontractnumber };
      let headersVal = new HttpHeaders()
        .set('x-auth-token', localStorage.getItem("token"));
      console.log(localStorage.getItem("token"));
      return this.http.put(this.api + "/", Asset2, { headers: headersVal }).toPromise();
    }
  }
  

}
