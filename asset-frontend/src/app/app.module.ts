import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './admin/signup/signup.component';

import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule}from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{UsersService}from './services/users.service';
import{EmployeeService}from './services/employee.service';
import { from } from 'rxjs';
import { SparepartsComponent } from './spareparts/spareparts.component';
import { AdminComponent } from './admin/admin.component';
import { GetUsersComponent } from './admin/get-users/get-users.component';

import { DepartmentComponent } from './department/department.component';
import { AssetComponent } from './asset/asset.component';
import { DefectComponent } from './defect/defect.component';
import { ContractorComponent } from './contractor/contractor.component';
import { SupplierComponent } from './supplier/supplier.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import { ComplainComponent } from './complain/complain.component';
import { NewcomplainComponent } from './complain/newcomplain/newcomplain.component';
import { AllcomplainComponent } from './complain/allcomplain/allcomplain.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    SparepartsComponent,
    AdminComponent,
    GetUsersComponent,
    DepartmentComponent,
    AssetComponent,
    DefectComponent,
    ContractorComponent,
    SupplierComponent,
    WarehouseComponent,
    EmployeeComponent,
    AdddepartmentComponent,
    ComplainComponent,
    NewcomplainComponent,
    AllcomplainComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [UsersService , EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
