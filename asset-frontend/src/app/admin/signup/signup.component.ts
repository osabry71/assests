import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators ,FormControl} from '@angular/forms';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup;
  msg=new FormControl("")
  constructor(private fb:FormBuilder ,private us:UsersService ) {

    this.createForm();

   }

   addUser(name,username,email,password,phone,gender){
                                                        this.us.addUser(name,username,email,password,phone,gender)
                                                       .then (resp=>{
                                                                      if(resp['success']){
                                                                                            localStorage.setItem("token", resp ['token']);

                                                                                             this. msg.setValue("User Added Successfully");
                                                                                         }
                                                                      }).catch(err=>{
                                                                                      this.msg.setValue("Error:"+err.massage);
                                                                                    }  )

                                                      }


   createForm(){
     this.signUpForm = this.fb.group({
                                       name :['',Validators.required],
                                       email:['',Validators.compose([
                                                                      Validators.required,
                                                                      Validators.email,
                                                  Validators.pattern(/^([a-zA-Z0-9\.-]+)@([a-zA-Z\.-]+)\.([a-z]{2,6})$/)
                                                                    ])],
                                   username :['',Validators.required],
                                   password :['',Validators.compose([
                                                                      Validators.required,
                                                                      Validators.minLength(5),
                                               Validators.pattern(/\w{5,14}/)

                                                                    ])],
                                  confpassword :['',Validators.required]   ,
                                  phone:new FormControl(""),
                                  gender:new FormControl("")



                                     });

   }
  ngOnInit(): void {
  }

}
