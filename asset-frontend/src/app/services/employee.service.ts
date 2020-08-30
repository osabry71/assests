import { Injectable } from '@angular/core';
import employee  from '../models/employee.models';
import {HttpClient,HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api= "http://localhost:3007/employee"
  constructor(private http:HttpClient) { }
allemployees(){
                   let headersVal = new HttpHeaders()
                     .set('x-auth-token',localStorage.getItem("token"));
                  return this.http.get<employee[]>(this.api+"/",{headers:headersVal }).toPromise();
                }
                getemployee(emp_id){
                  let headersVal = new HttpHeaders()
                    .set('x-auth-token',localStorage.getItem("token"));
                 return this.http.get<employee[]>(this.api+"/"+emp_id,{headers:headersVal }).toPromise();
                 console.log ("jgjyhrkjyrkyte");
               }


addemp(Empname,Email,Degre,dateofbeinghired,gender,department){
 const employee={Empname:Empname,Email:Email, Degre:Degre, dateofbeinghired:dateofbeinghired,gender:gender,department:department };
 let headersVal = new HttpHeaders().set('x-auth-token',localStorage.getItem("token"));
 return this.http.post(this.api+"/",employee,{headers:headersVal }).toPromise();  console.log(employee);  }

 deleteemployee(emps){  let headersVal = new HttpHeaders() .set('x-auth-token',localStorage.getItem("token")) .set('id',emps)
                         console.log("موز");console.log(emps);location.reload();
                         return this.http.delete(this.api+"/",{headers:headersVal}).toPromise(); }

editemp(empid,Empname,Email,Degre,dateofbeinghired,gender,department){
  {const Employee ={ _id:empid,Empname:Empname,Email:Email,Degre:Degre,dateofbeinghired:dateofbeinghired,gender:gender,department:department};
   let headersVal = new HttpHeaders()
    .set('x-auth-token',localStorage.getItem("token"));
   console.log("بلح");
   console.log(employee);
   console.log(localStorage.getItem("token"));
   return this.http.put(this.api+"/",Employee,{headers:headersVal}).toPromise();
     console.log("موز");  console.log(employee); }

 }

}
