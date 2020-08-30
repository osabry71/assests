import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './admin/signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {SparepartsComponent } from './spareparts/spareparts.component';
import {AssetComponent } from './asset/asset.component';
import {ContractorComponent } from './contractor/contractor.component';
import {DefectComponent } from './defect/defect.component';
import {DepartmentComponent } from './department/department.component';
import {AdddepartmentComponent } from './department/adddepartment/adddepartment.component';
import {EmployeeComponent } from './employee/employee.component';
import {SupplierComponent } from './supplier/supplier.component';
import {WarehouseComponent } from './warehouse/warehouse.component';
import { AdminComponent } from './admin/admin.component';
import { GetUsersComponent } from './admin/get-users/get-users.component';
import { ComplainComponent } from './complain/complain.component';
import { AllcomplainComponent } from './complain/allcomplain/allcomplain.component';
import { NewcomplainComponent } from './complain/newcomplain/newcomplain.component';


const routes: Routes = [
  { path:'home',component : HomeComponent},
  {path:'spareparts',component : SparepartsComponent },
  {path:'asset',component : AssetComponent },
  {path:'contractor',component : ContractorComponent },
  {path:'defect',component : DefectComponent },
  {path:'department',component : DepartmentComponent  },
  {path:'AdddepartmentComponent',component : AdddepartmentComponent  },
  {path:'employee',component : EmployeeComponent },
  {path:'supplier',component : SupplierComponent },
  {path:'warehouse',component :WarehouseComponent },
  {path:'admin/listusers',component : GetUsersComponent},
  {path:'admin/signup',component : SignupComponent},
  {path:'complain',component : ComplainComponent},
  {path:'complain/allcomplain',component : AllcomplainComponent},
  {path:'complain/newcomplain',component : NewcomplainComponent},

  {path:'complain',component : ComplainComponent},

  { path:'admin',component : AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
