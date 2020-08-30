import { Component } from '@angular/core';

import {FormGroup , FormBuilder , Validators,FormControl} from '@angular/forms';
import{Router}from '@angular/router';
import{UsersService }from '../app/services/users.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  title = 'product-frontend';
  userauthenticated = localStorage.getItem("token");
  userrole = localStorage.getItem("userrole");
  isadmin = localStorage.getItem("username")=="admin"

  loginForm:FormGroup;

  msg = new FormControl("")
  constructor(private fb:FormBuilder,
              private us:UsersService,
              private route:Router){


                          }
  createform(){
                this.loginForm = this.fb.group({
                                                username :['',Validators.required],
                                                password :['',Validators.compose([
                                                Validators.required,
                                                Validators.minLength(5),
                                                Validators.pattern(/\w{5,14}/) ])],
                                              } );
              }
 logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  this.route.navigate(["/"]);
  window.open("/" , "_self");
 }

login(username,password){
                          this.us.login(username,password)
                         .then (Resp =>{
                                        if(Resp['success']){
                                                               localStorage.setItem("token", Resp ['token']);
                                                               localStorage.setItem("userrole", Resp ['userrole']);
                                                               localStorage.setItem("username",username );
     if(username=="admin"){
                              this.route.navigate(['admin/admin']);
                                window.open("admin/admin" , "_self");
                          } else{
                                  this.route.navigate(['/']);
                                  window.open("/" , "_self");
                               }


                              } else{
                                                this.msg.setValue("UserName or Password incorrect");
                                              }
                                         })
                           .catch(err=>{this.msg.setValue("Error:"+err.massage);}  )
                        }
                      }
