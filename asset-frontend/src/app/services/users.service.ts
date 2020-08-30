import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import Users  from '../models/Users.model';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
                            api= " http://localhost:3007/users/"
  constructor( private http:HttpClient) { }
  login(username,password){
                           let headersVal = new HttpHeaders()
                           .set("username",username)
                           .set("password",password) ;
                           return this.http.get(this.api+"login/",{headers:headersVal }).toPromise();
                          }
  addUser(name,username,email,password,phone,gender){
                                                      const user ={ name:name,
                                                                    username:username,
                                                                    email:email,
                                                                    password:password,
                                                                    phone:phone,
                                                                    gender:gender };
                                                       return this.http.post(this.api+"user",user,{}).toPromise();
                                                    }
 allusers(){ let headersVal = new HttpHeaders()
            .set('x-auth-token',localStorage.getItem("token"));
            return this.http.get<Users[]>(this.api+"user",{headers:headersVal }).toPromise();
           }



                         }
