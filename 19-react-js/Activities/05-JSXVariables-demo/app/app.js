// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Here we create a set of JavaScript variables
var name = "Bobby G";
var num1 = 3804;
var num2 = 24;

ReactDOM.render(
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">


        {/* Inserted the variables and simple calculations using curly brackets */}

        <h2>My name is {name}. But you can call me...</h2>
        <h1>The JSX Boss!</h1>
        <hr />
        <h2>I can do {num1 + num2}.</h2>
        <h2>I can generate random {Math.floor(Math.random() * 10) + 1},
          {Math.floor(Math.random() * 10) + 1},
          {Math.floor(Math.random() * 10) + 1}.
        </h2>
        <h2>I can even reverse my {name.split("").reverse()}</h2>
      </div>
    </div>
 </div>, document.getElementById("app")
);
