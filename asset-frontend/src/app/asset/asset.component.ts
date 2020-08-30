import { Component, OnInit } from '@angular/core';
import { AssetsService } from 'src/app/services/assets.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-Assets',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {
  msgs = ""
  asset = []
  asset_id: string
  addAssetForm: FormGroup;
  eidtAssetForm: FormGroup;
  msg = new FormControl("")
  constructor(private ES:AssetsService, private fb:FormBuilder) {
    this.ES.allassets()
      .then(result => {
        this.asset = result
        // console.log("get-assetloyees.component");
      })
      .catch(err => {
        this.msgs = "error when loading Assetes data \n " + err
        //   console.log("get-assetloyees.component error");
      })



  }

  createForm() {
    this.addAssetForm = this.fb.group({
      ASName: ['', Validators.required],
      ASlocation: ['', Validators.required],
      ASlifespan: ['', Validators.required],
      ASCountryofmanufacture: ['', Validators.required],
      ASCountryofOrigin: ['', Validators.required],
      AScontractnumber: ['', Validators.required],

    });
    
  }


  addasset(ASName, ASlocation, ASlifespan, ASCountryofmanufacture, ASCountryofOrigin, AScontractnumber) {
    if (confirm('Do you want to Add ' + ASName)) {
      {
        this.ES.addasset(ASName, ASlocation, ASlifespan, ASCountryofmanufacture, ASCountryofOrigin, AScontractnumber)
        .then(resp => {
          if (resp['success']) {
            this.msg.setValue("User Added Successfully");
          }
        })
        .catch(err => { this.msg.setValue("Error:" + err.massage); })
      }
    } else {
      return false;
    }
    location.reload();
  }

  updateasset(assetid,ASName, ASlocation, ASlifespan, ASCountryofmanufacture, ASCountryofOrigin, AScontractnumber) {

    if (confirm('Do you want to update ' + ASName)) {
      this.ES.editeasset(assetid, ASName, ASlocation, ASlifespan, ASCountryofmanufacture, ASCountryofOrigin, AScontractnumber)
        .then(result => { assetid })

        .catch(err => {
          this.msgs = "error data \n " + err

        })
    } else {
      return false;
    }
    location.reload();
  }



  deleteasset(asset) {

    if (confirm('Do you want to Delete ' + asset.assetname)) {
      this.ES.deleteAssets(asset._id)
        .then(result => { asset._id })

        .catch(err => {
          this.msgs = "error data \n " + err

        })
    } else {
      return false;

    }

  }



  ngOnInit(): void {
  }

}
