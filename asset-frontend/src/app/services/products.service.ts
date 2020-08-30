import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import Productes  from '../models/Productes.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api= " http://localhost:3007/product/"


  constructor(private http:HttpClient) { }



  allproductes(){
    let headersVal = new HttpHeaders()
    .set('x-auth-token',localStorage.getItem("token"));


    return this.http.get<Productes[]>(this.api+"Product/",{headers:headersVal }).toPromise();
  }


  deleteproduct(prod){
    let headersVal = new HttpHeaders()
    .set('x-auth-token',localStorage.getItem("token"))
    .set('id',prod);


    return this.http.delete(this.api+"Product/",{headers:headersVal }).toPromise();
  }

  editproduct(prod,name,category,price ){
    let headersVal = new HttpHeaders()
    .set('x-auth-token',localStorage.getItem("token"))
    .set('prod',prod)
    .set('new_name',name)
    .set('new_category',category)
    .set('new_price',price);

    return this.http.put(this.api+"Product/",{headers:headersVal }).toPromise();

  }




}
