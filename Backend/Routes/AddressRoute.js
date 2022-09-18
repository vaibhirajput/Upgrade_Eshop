const address = require("express").Router();
const {addressfun} = require("../Controller/AddressController");


// user registeration route
address.post('/address', addressfun);


module.exports = address;