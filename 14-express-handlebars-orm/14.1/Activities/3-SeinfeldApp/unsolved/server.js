// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create instance of express app.
var app = express();

// Specify the port.
var port = 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "seinfeld"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes: 
// cast - gets the entire cast ordered by id and displays as list with name, coolness points and attitude
// coolness-chart - gets the cast in descending order by coolness points and display all info in list again
// attitude-chart - takes an attitude parameter and only displays those cast members with the selected attitude



// Initiate the listener.
app.listen(port);
