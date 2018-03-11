// fs is an NPM package for reading and writing files
var fs = require("fs");

fs.readFile("movies.txt", 'utf8',  function(bob, swizBeats) {
  if (bob) {
    throw bob;
  }
  // We will then print the contents of swizBeats
  console.log(swizBeats);
  // Then split it by commas (to make it more readable)
  var dataArr = swizBeats.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});
