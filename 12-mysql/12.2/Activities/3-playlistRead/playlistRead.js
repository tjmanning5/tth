var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM songs", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    if (res[i].genre === 'Classic Rock') {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  }
  console.log("-----------------------------------");
});
var genre = 'Dance',
limit = 2;
connection.query("SELECT * FROM `songs` WHERE `genre` = ? LIMIT ?", [genre, limit], function(err, res) {
  if (err)
    throw err;
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
});
connection.end();