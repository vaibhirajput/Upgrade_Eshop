const mongoose = require("mongoose");
require('../Config/.env');


 require("dotenv").config();

const uri = 'mongodb+srv://Upgrade:Upgrade123123@eshop.fsw6pis.mongodb.net/Eshop?retryWrites=true&w=majority';


const connection = mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true})
.then(()=> 
{console.log(`Database is Connected`)})
.catch((err)=>
 {console.log(`Database is not connected!!!! ${err}`)})

module.exports = connection;