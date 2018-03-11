/* global firebase */

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAZE0g1_puU3b4LL1iwrl1_ytbHYaaV9W4",
    authDomain: "countdown-f60cb.firebaseapp.com",
    databaseURL: "https://countdown-f60cb.firebaseio.com",
    storageBucket: "countdown-f60cb.appspot.com",
    messagingSenderId: "1007177673141"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// Use the below initialValue
var initialValue = 100;
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

  // Print the initial data to the console.
  console.log(snapshot.val());

  // Change the html to reflect the initial value.
  $("#click-value").html(snapshot.val().clickCount);

  // Change the clickCounter to match the data in the database
  clickCounter = snapshot.val().clickCount;

  // Log the value of the clickCounter
  console.log(clickCounter);

  // Change the HTML Value
  $("#click-value").html(clickCounter);

// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {
    alert("Phew! You made it! That sure was a lot of clicking.");
    clickCounter = initialValue;
  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);

});
