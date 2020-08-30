
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
let departmentSchema = new Schema({
    depName:{type:String,required:true},
    depPhone:{type:String,maxlength:40},
    depFax:{type:String,maxlength:40},
    deplocation:{type:String,maxlength:40},
    depmanager:{type:String,maxlength:40}
 }) ;
module.exports =mongoose.model('department',departmentSchema,"Department")