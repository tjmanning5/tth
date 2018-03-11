// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    var SelectAllQuery = "SELECT * FROM chirps";

    connection.query(SelectAllQuery, function(err, result) {
      res.json(result);
    });

  });

  // Add a chirp
  app.post("/api/new", function(req, res) {

    console.log("Chirp Data:");
    console.log(req.body);

    var InsertQuery = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";

    connection.query(InsertQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
      console.log("Chirp Successfully Saved!");
      res.end();
    });

  });

};
