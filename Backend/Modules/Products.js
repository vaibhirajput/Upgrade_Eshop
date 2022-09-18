const connection = require("./DbConnection");
const mongoose = require("mongoose");

const Productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discripation:{
        type:String,
        required:true,
    },
    manufacturer:{
        type:String,
        required:true,
    },
    availableItems:{
        type:Number,
        required:true,
    },
    imageUrl:[{
        type:String,
        required:true,   
    }],


})

const Products = mongoose.model("Products",Productschema);
module.exports = Products;