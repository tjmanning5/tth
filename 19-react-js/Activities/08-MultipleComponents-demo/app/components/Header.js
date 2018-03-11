// Include React
var React = require("react");
var Results = require("./Results");
var Search = require("./Search");
// Create the Header component
// Notice how the Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({
  render: function() {
    return (
    <div>

      <h1>I'm a header!</h1>
      <Results />
      <Search />
    </div>
    )
  }
});

// Export the component back for use in other files
module.exports = Header;
