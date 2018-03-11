// ==============================================================================
// DEPENDENCIES
// npm packages that we will use to give our server useful functionality
// ==============================================================================


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server


// Sets an initial port. We"ll use this later in our listener


// BodyParser makes it possible for our server to interpret data sent to it.
// Add the standard 4 lines of code to use bodyParser as middleware


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// requre api routes, pass the app object to the module 
// run the module's function to set our app routes
require("./app/routing/apiRoutes")(app);

//add require for html routes

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================


