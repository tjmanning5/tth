/* Scraper: Server #1  (18.2.1)
 * ========================= */

// Dependencies:

// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");


// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");


// Making a request call for reddit's "webdev" board. The page's HTML is saved as the callback's third argument
request("http://www.starwars.com/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var result = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $(".title").each(function(i, element) {

    // Save the text of the element (this) in a "title" variable
    var   h3 = $(this),
      //<h3 class="title">
            a = h3.find('a'),
            //<a href="http://au.starwars.com/rogue-one-blu-ray-bonus-features-premiere-screening">
              titleElem = a.find('.long-title');
              // <span class="long-title">Rogue One Blu-ray Bonus Features Premiere Screening</span>

    var link = a.attr('href'),
      title = titleElem.text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have

    // Save these results in an object that we'll push into the result array we defined earlier
    result.push({
      title: title,
      link: link
    });

  });

  // Log the result once cheerio analyzes each of its selected elements
  console.log(result);
});
