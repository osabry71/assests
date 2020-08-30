import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import {FormGroup , FormBuilder , Validators ,FormControl} from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './spareparts.component.html',
  styleUrls: ['./spareparts.component.css']
})
export class SparepartsComponent implements OnInit {
  msgs=""
  emp=[]
  emp_id:string
  addempForm:FormGroup;
  eidtempForm:FormGroup;
  msg=new FormControl("")
  constructor(private ES:EmployeeService , private fb:FormBuilder) {
    this.ES.allemployees()
                                                                  .then(result=>{ this.emp=result
                                                                                  console.log("get-employees.component");
                                                                                 })
                                                                  .catch(err=>{ this.msgs="error when loading employees data \n "+ err
                                                                                  console.log("get-employees.component error");
                                                                              })



                                           }





addemp(Empname,Email,Degre,dateofbeinghired,gender,department){

if (confirm('Do you want to Add ' +Empname)) {
  { this.ES.addemp(Empname,Email,Degre,dateofbeinghired,gender,department)

    .then (resp=>{if(resp['success']){ this. msg.setValue("User Added Successfully");}})
    .catch(err=>{this.msg.setValue("Error:"+err.massage);})
  }
} else {
   return false;
}
location.reload();
}









deleteemp(emp){

    if (confirm('Do you want to Delete ' +emp.Empname)) {
     this.ES.deleteemployee(emp._id)
        .then(result=>{emp._id} )

        .catch(err=>{ this.msgs="error data \n "+ err

           })
  } else {
      return false;
  }

   }


   updateemp(empid,Empname,Email,Degre,dateofbeinghired,gender,department){

    if (confirm('Do you want to update ' +Empname)) {
     this.ES.editemp(empid,Empname,Email,Degre,dateofbeinghired,gender,department)
        .then(result=>{empid} )

        .catch(err=>{ this.msgs="error data \n "+ err

           })
  } else {
      return false;
  }
  location.reload();
   }


   createForm(){
    this.addempForm = this.fb.group({ Empname :['',Validators.required],
                                      Email:['',Validators.compose  ([ Validators.required, Validators.email, Validators.pattern(/^([a-zA-Z0-9\.-]+)@([a-zA-Z\.-]+)\.([a-z]{2,6})$/) ])],
                                      Degre :['',Validators.required],
                                      dateofbeinghired :['',Validators.required],
                                      gender:new FormControl("M"),
                                      department :['',Validators.required],

                                    });
  }




  ngOnInit(): void {
  }

}
