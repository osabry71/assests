import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-deployee',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  msgs = ""
  dep = []
  depid: string;

  editdepForm: FormGroup;
  msg = new FormControl("")
  constructor(private DS: DepartmentService, private fb: FormBuilder) {
    this.DS.alldepartment()
      .then(result => {
        this.dep = result
        console.log("get-department.component");
      })
      .catch(err => {
        this.msgs = "error when loading deployees data \n " + err
        console.log("get-department.component error");
      })



  }

  adddep(depname, depphone, depfax, deplocation, depmanager) {

    if (confirm('Do you want to Add ' + depname)) {
      {
        this.DS.adddep(depname, depphone, depfax, deplocation, depmanager)

        .then(resp => { if (resp['success']) { this.msg.setValue("Dept Added Successfully"); } })
        .catch(err => { this.msg.setValue("Error:" + err.massage); })
      }
    } else {
      return false;
    }
    location.reload();
  }



  deletedep(dep) {

    if (confirm('Do you want to Delete ' + dep.depName)) {
      this.DS.deletedepartment(dep._id)
        .then(result => { dep._id })

        .catch(err => {
          this.msgs = "error data \n " + err

        })
    } else {
      return false;
    }

  }


  updatedepartment(depid, depname, depphone, depfax, deplocation, depmanager) {

    if (confirm('Do you want to update ' + depname)) {
      this.DS.editdep (depid, depname, depphone, depfax, deplocation, depmanager)
        .then(result => { depid })

        .catch(err => {
          this.msgs = "error data \n " + err

        })
    } else {
      return false;
    }
    location.reload();
  }


    createForm() {
/*
    this.addAssetForm = this.fb.group({
      ASName: ['', Validators.required],
      ASlocation: ['', Validators.required],
      ASlifespan: ['', Validators.required],
      ASCountryofmanufacture: ['', Validators.required],
      ASCountryofOrigin: ['', Validators.required],
      AScontractnumber: ['', Validators.required],

    });
 
depname
depphone 
depfax 
deplocation
depman

*/
  }




  ngOnInit(): void {
  }

}
