// We're incorporating an npm package for doing weather searches.
var weather = require("weather-js");

// Creates a UserSearch Constructor
var UserSearch = function(name, location) {
  this.name = name;
  this.location = location;
  var d= new Date();
  this.date = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

  this.getWeather = function() {

    weather.find({ search: this.location, degreeType: "F" }, function(err, result) {
      if (err) {
        console.log(err);
      }
      console.log(JSON.stringify(result, null, 2));
    });
  };
};

module.exports = UserSearch;