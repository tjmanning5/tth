// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// BELOW ADD THE 2 LINES OF CODE NEEDED TO  
// Set Handlebars as the default templating engine


// Data
var icecreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "vanilla", price: 10, awesomeness: 3 }
];

// CREATE ROUTE: icecream - uses a name parameter
// render the selected icecream using handlebars icecream template


// CREATE ROUTE: icecreams 
// render all icecreams using handlebars icecreams template


// Initiate the listener.
app.listen(port);
