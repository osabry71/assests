const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
let employeeSchema = new Schema({
                    
                Empname:{type:String,maxlength:40},
                  Email:{type:String,maxlength:40},
                  Degre:{type:String,maxlength:40},
       dateofbeinghired:{type:String,maxlength:40},
                 gender:{type:String,maxlength:40},
             department:{type:String,maxlength:40}   }) ;
module.exports =mongoose.model('employee',employeeSchema,"Employee")
