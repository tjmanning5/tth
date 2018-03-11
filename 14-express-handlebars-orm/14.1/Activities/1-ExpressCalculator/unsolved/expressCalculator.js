// Dependencies - express
var express = require("express");

// Create express app instance.
var app = express();

// Routes - create 1 get route with 3 expected parameters
// operation, firstNum and secondNum
// Parameters are received from the URL and assigned to variables
// Variables are converted to integers
// Switch statement chooses operation based on the operation parameter: 
// 		add, subtract, multiply, or divide
// We return the result back in the response in the form of a string
app.get("/:operation/:firstNum/:secondNum", function(req, res){

	var operation = req.params.operation;
	var firstNum = parseInt(req.params.firstNum);
	var secondNum = parseInt(req.params.secondNum);
	var result;

	switch(operation) {

		case "add":
			result = firstNum + secondNum;
		break;

		case "subtract": 
			result = firstNum - secondNum;
		break;

		case "multiply":
			result = firstNum * secondNum;
		break;

		case "divide":
			result = firstNum / secondNum;
		break;

	}

	res.send(result.toString());

});

// Initiate the listener.

app.listen(3000);