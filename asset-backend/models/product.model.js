


const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
let productSchema = new Schema({
    id:String,
    name:{type:String,required:true},
    category:{type:String,maxlength:40},
    descrip:{type:String,maxlength:40},
    price:{type:Number,max:50000}
}) ;
module.exports =mongoose.model('product',productSchema,"products")