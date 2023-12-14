const express = require("express"); // import express
const { getHello, postHello, getHelloByName } = require("../controllers/hello"); // import controllers from controllers/hello.js

// create an express router - best to do if app has more than a feew routes
const helloRouter = express.Router();

// get request to localhost:3001/hello
helloRouter.get("/", getHello);

// get request to localhost:3001/hello/anyfirstname/anysurname 
// the : indicates a path parameter which can be different in each request
helloRouter.get("/:firstname/:surname", getHelloByName);

// post request to localhost:3001/hello
helloRouter.post("/", postHello);

module.exports = helloRouter; // export the router to be used in app.js
