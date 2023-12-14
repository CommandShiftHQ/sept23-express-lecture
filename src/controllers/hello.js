// any get request to localhost:3001/hello will response with "getting hello"
const getHello = (req, res) => {
  res.send("getting hello");
};

// any get request to localhost:3001/hello/anyfirstname/anysurname responds with "hello anyfirstname anysurname"
const getHelloByName = (req, res) => {
  // these console.logs aren't needed to make the code work
  // i've left them in so you can how to access path parameters, the request body or query strings
  console.log("PATH PARAM", req.params);
  console.log("REQUEST BODY", req.body);
  console.log("QUERY STRING", req.query);

  // for this controller we access the path parameters that are on the request object
  res.send(`hello ${req.params.firstname} ${req.params.surname}`);
};

// any post request to localhost:3001/hello will return a status code 201
const postHello = (req, res) => {
  res.sendStatus(201); // sendStatus sets the status code to 201 AND sends the response
};

module.exports = { getHello, postHello, getHelloByName }; // export the controllers to be used in routes/hello.js
