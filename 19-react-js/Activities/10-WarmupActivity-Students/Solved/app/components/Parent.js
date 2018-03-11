// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");

// Here we create Parent, our main component
var Parent = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        {/* Here we'll deploy the Child component. */}
        <Child />
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;
