// Using the require keyword lets us access all of the exports
// in our ess.js file
var stuffINeed = require("./ess.js");

// These will print correctly because we imported them
console.log("Essentials");
console.log(stuffINeed.essentials);
console.log("--------------------------");
console.log("Nice to Haves");
console.log(stuffINeed.nicetohaves);

// This won't print anything because it wasn't exported in ess.js
console.log("--------------------------");
console.log("Nonessentials");
console.log(stuffINeed.nonEssentials);
