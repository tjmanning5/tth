// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the momentJS library
var moment = require("moment");

// Here we create a variable for holding the name and birthday
var name = "Bobby G";
var dob = moment("05/14/1985", "MM/DD/YYYY");

ReactDOM.render(
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">

        {/* Inserted the name, birthday, and age */}
        <h2>My name is {name}.</h2>
        <h1>I was born on {dob.format("MM/DD")}</h1>
        <hr />
        <h2>That makes me: {dob.fromNow(true)} old.
        </h2>
      </div>
    </div>
  </div>, document.getElementById("app"));
