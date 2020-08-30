
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
let userauthorizationSchema = new Schema({
                                            username:{type:String,maxlength:40,required:true},
                                            method  :{type:String,maxlength:40,required:true},
                                            url     :{type:String,maxlength:100,required:true}
   
                                        }) ;
module.exports =mongoose.model('userauthorization',
                                 userauthorizationSchema ,
                                "userauthorization");