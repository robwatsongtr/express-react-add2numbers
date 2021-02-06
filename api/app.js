const path = require("path"); 
const cors = require("cors");
const express = require("express"); // loads the expres module into express var 
const bodyParser = require('body-parser'); // need this to read data from POST requests 

const app = express(); // initialize the express server, which is now accessed by app var

app.use(cors());
app.use(bodyParser.json()); // tells the (app) server to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));

var port = 5000;

const ApiRunning = (req, res) => {
  res.send("Api Running");
};

app.get("/", ApiRunning);

app.post("/add", (req,res) => {
  const num1 = req.body.a;
  const num2 = req.body.b; 
  res.send({
      result: parseInt(num1) + parseInt(num2)
  });
});

// app will listen on port 5000
app.listen(port, () => {
  console.log("Server running on port 5000");
})