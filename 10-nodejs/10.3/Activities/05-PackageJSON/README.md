#Package.json Instructions:

  * Take a moment to run the `weatherDest.js` application. (Try to figure out what it takes to run on your own!)

  * Then, with a partner, spend a few moments answering the following questions:

    * What does the code do?

    * How does it work at a general level?

    * How does it work at a line level?
    
    
## Stop

# Part 2

* **Instructions:**

  * Navigate to the folder where your `weatherDest.js` file is.

  * Delete the `node_modules` folder. Then do the following:

    * Create a `package.json` file (i.e. run `npm init`)

    * Add your dependencies to the `package.json` (i.e. run `npm install geocoder --save` and `npm install weather-js`)

    * Confirm that you now have a `node_modules` folder with the `geocoder` and `weather-js` packages as a result

    * Finally, re-run your `weatherDest.js` to confirm that it still works as expected

  * Now delete your `node_modules` folder again but keep your `packages.json` file. This time...

    * Simply run `npm install`

    * Confirm that you once again have a `node_modules` folder with the `geocoder` and `weather-js` packages

    * Finally, re-run `weatherDest.js` to confirm that it still works as expected