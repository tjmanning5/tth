// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// This code renders a simple HTML Div.
// The key takeaway here is that we render an ENTIRE DIV.
// Note that ReactDOM.render cannot render a block of HTML elements
// without them all fitting within a single parent div or container.

ReactDOM.render(
  <div>
    <div>
      <h1>Hey guys! I'm a header!</h1>
      <h2>Things I like!</h2>
      <ul>
        <li className="large">Allen</li>
        {/*<li>Sandra</li>*/}
        {/*<li>Maureen</li>*/}
      </ul>
    </div>
    <div>
      <h3>Second div</h3>
    </div>
  </div>, document.getElementById("app"));
