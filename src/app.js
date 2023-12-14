const express = require("express"); // import express
const helloRouter = require("./routes/hello"); // import helloRouter from routes/hello.js

const app = express(); // instantiate an instance of express

app.use(express.json()); // built in middleware to parse the request body from JSON to Javascript object

// any requests sent to localhost:3001/ will respond with a status code of 200 and "hello world!"
app.get("/", (req, res) => {
  res.status(200).send("hello world!");
});

// app.get("/tweets", (req, res) => {
//   res.status(200).send("getting tweets");
// });

// app.post("/tweets", (req, res) => {
//   res.send("posting tweets");
// });

// chained routing does exactly the same thing as the code commented out above
app
  .route("/tweets")
  .get((req, res) => {
    res.status(200).send("getting tweets");
  })
  .post((req, res) => {
    res.status(201).send("posting tweets");
  });

// use the helloRouter defined in src/routes/hello.js for any request to localhost:3001/hello
// the code could be written as above but it has been split into separate files
// this makes the code easier to read and more maintainable
app.use("/hello", helloRouter);

module.exports = app;
