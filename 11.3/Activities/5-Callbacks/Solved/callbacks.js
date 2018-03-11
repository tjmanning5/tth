

var fs = require("fs");


function logBefore(func, message) {
  console.log(message);

  func();
}

function runIf(func, bool) {
  if (bool) {
    func();
  }
  else {
    return;
  }
}

function wrap(func, value) {
  return function() {
    return func(value);
  };
}

function myTestFunction(arg1) {
  console.log(arg1);
}

var myfcn = wrap(myTestFunction, "hi there");
myfcn();



var twelve = function() {
  return 12;
};

function twelve() {
  return 12;
}

var twelve = function twelve() {

}

var twelve = () => 12;

var num = twelve();
// same as
// var num = 12;



// Callbacks appear in familiar places, like fs.writeFile.
fs.writeFile("log.txt", "Log message!", function(err) {

  if (err) {
    console.log(err);
  }

  console.log("File saved!");

});

// Alternatively, we can assign our function to a variable,
// and pass it by name.
var writeFileCallback = function(err) {

  if (err) {
    console.log(err);
  }

  console.log("File saved!");

};

fs.writeFile("log.txt", "Log message!", writeFileCallback);
