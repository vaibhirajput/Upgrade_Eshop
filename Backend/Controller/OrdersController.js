const Orders = require("../Modules/Orders");
const users = require("../Modules/Registeration");



// Post orders api
const ordersfun = async(req, res)=>{
    res.json({massge:"Order is Place Successfully"})
 }

 module.exports = {ordersfun};