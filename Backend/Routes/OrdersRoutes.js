const orders = require("express").Router();
const {ordersfun} = require("../Controller/OrdersController");


// all client orders  routes
orders.post('/users/order', ordersfun);


module.exports = orders;