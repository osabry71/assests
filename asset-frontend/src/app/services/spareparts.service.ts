import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import Spareparts  from '../models/spareparts.model';


@Injectable({
  providedIn: 'root'
})
export class SparepartsService {
  api= " http://localhost:3007/spareparts/"
  constructor(private http:HttpClient) { }



  allSpareparts(){
    let headersVal = new HttpHeaders()
    .set('x-auth-token',localStorage.getItem("token"));


    return this.http.get<Spareparts[]>(this.api+"spareparts",{headers:headersVal }).toPromise();
  }
}
