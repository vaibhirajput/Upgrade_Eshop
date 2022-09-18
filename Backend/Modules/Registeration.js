const connection = require("../Modules/DbConnection");
const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,    
    },
    password:{
        type:String,
        required:true,    
    },
    contactNumber:{
        type:Number,
        required:true,
        unique:true,    
    },
    role:{
        type:String,
        default:'user',
    },
   
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    },
      


})

const users = mongoose.model("Users",Userschema);
module.exports = users;