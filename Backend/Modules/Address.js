const connection = require("../Modules/DbConnection");
const mongoose = require("mongoose");

const Addresschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    street:{
        type:String,
        required:true,
    },
    landmark:{
        type:String,
        required:true, 
    },
    city:{
        type:String,
        required:true, 
    },
    state:{
        type:String,
        required:true, 
    },
    zipcode:{
        type:Number,
        required:true,    
    },
    contactNumber:{
        type:Number,
        required:true,
        unique:true,    
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    },
    user:{
        userid:{
            type:Number,
            required:true,
        },
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
      
    },
      


})

const Address = mongoose.model("Addresses",Addresschema);
module.exports = Address;