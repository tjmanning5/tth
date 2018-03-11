/* 18.1.2-Starting with Mongo JS
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/- */


// A. Use the command line to create a classroom database. 
// Insert entries for yourself and the people in your row in a students collection. 
// Each document should have:

// 1. A field of name with the person's name.
// 2. A field of rownumber which will contain the row number that they are in.
// 3. A field of os which will contain the Operating System 
//    of the computer they are using: 'Mac', 'Win', etc
// 4. A field of hobbies with an array of the hobbies the person likes to do.

// Example:
use;
classroom;
db.room.insert({
  name: 'Steve',
  row: 3,
  os: 'Mac',
  hobbies: ['Coding', 'Reading', 'Running']
});

db.room.insert({
  name: 'Brittany Bitch',
  row: 1,
  os: 'Unix',
  hobbies: ['Dancing', 'Skreetching', 'Trying not to shave her head']
});

db.room.insert({
  name: 'ODB',
  row: 17,
  os: 'Windows ME',
  hobbies: ['Karaoke', 'Dancing', 'Drive Bys', 'not knowing how many states are in the united states.']
});
/* ASK STUDENTS FOR TWO-FOUR MORE EXAMPLES TO FILL OUT YOUR COLLECTION */

// B. Use find commands to get:
// 1. A list of everyone in your row.
db.room.find({row: 3});

// 2. An entry for a single person.
db.room.find({name: 'Steve'});

// 3. The entries for all the Mac users in your row. 
db.room.find({
  name: 'Steve',
  row : 3,
  os  : 'Mac'
});

// Bonus:
// If you finish early, check out the MongoDB documentation 
// and figure out how to find users by an entry in an array.
db.room.find({"hobbies": {$in: ["hobby1"]}});