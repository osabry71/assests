


const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
let sparepartsSchema = new Schema({
    
    SP_Name:{type:String,required:true},
    SP_life_span:{type:String,maxlength:40},
    SP_Country_of_manufacture:{type:String,maxlength:40},
    SP_Country_of_Origin:{type:String,maxlength:40},
    SP_image:{type:String,maxlength:40},
    SP_Discraption:{type:String,maxlength:40},
}) ;
module.exports =mongoose.model('spareparts',sparepartsSchema,"spareparts")