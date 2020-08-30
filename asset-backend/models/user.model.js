
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
let userSchema = new Schema({
    username:{type:String,maxlength:40,required:true},
    name    :{type:String,maxlength:40,required:true},
    password:{type:String,maxlength:100},
    email   :{type:String,maxlength:40},
    phone   :{type:String,maxlength:11},
    gender  :{type:String,maxlength:1},
    role  :{type:String,maxlength:40}
}) ;
module.exports =mongoose.model('  ',userSchema,"users")