import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import Department  from '../models/department.models';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  api= "http://localhost:3007/department"
  constructor(private http:HttpClient) { }
  alldepartment(){
    let headersVal = new HttpHeaders()
      .set('x-auth-token',localStorage.getItem("token"));
   return this.http.get<Department[]>(this.api+"/",{headers:headersVal }).toPromise();
 }
    
 adddep(depname,depphone,depfax,deplocation,depmanager){                                     
  const department={depName:depname,depPhone:depphone,depFax:depfax,deplocation:deplocation,depmanager:depmanager };
  let headersVal = new HttpHeaders()
    .set('x-auth-token',localStorage.getItem("token"));
    return this.http.post(this.api+"/",department,{headers:headersVal }).toPromise();  console.log(department);  }

editdep(depid,depname,depphone,depfax,deplocation,depmanager){
      const Department={_id:depid,depname:depname,depphone:depphone, depfax:depfax, deplocation:deplocation,depmanager:depmanager };
      let headersVal = new HttpHeaders()
    .set('x-auth-token',localStorage.getItem("token"));
 return this.http.put<Department[]>(this.api+"/",Department,{headers:headersVal }).toPromise();
}

deletedepartment(dep){
  let headersVal = new HttpHeaders()
    .set('x-auth-token',localStorage.getItem("token"))
     .set('id',dep);
     location.reload();
    //console.log("delete, ",dep);
    //return this.http.delete<Department[]>(this.api+"/",{headers:headersVal }).toPromise();
    return this.http.delete(this.api + "/", { headers: headersVal }).toPromise();
  }

}
