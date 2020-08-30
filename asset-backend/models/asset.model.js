const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
let assetSchema = new Schema({
    ASName:{type:String,maxlength:40},
    ASlocation:{type:String,maxlength:40},
    ASlifespan:{type:String,maxlength:40},
    ASCountryofmanufacture :{type:String,maxlength:40},
    ASCountryofOrigin:{type:String,maxlength:40},
    AScontractnumber:{type:String,maxlength:40}
                                }) ;
module.exports =mongoose.model('asset',assetSchema,"Asset")
