const signup = require("express").Router();
const {registerfun, loginfun} = require("../Controller/SignupController");


// user registeration route
signup.post('/users', registerfun);


// user login route
signup.post('/login', loginfun);

module.exports = signup;