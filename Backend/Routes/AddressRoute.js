const address = require("express").Router();
const {addressfun} = require("../Controller/AddressController");
const Auth = require("../Authentication/Auth");


// user registeration route
address.post('/address',Auth, addressfun);


module.exports = address;