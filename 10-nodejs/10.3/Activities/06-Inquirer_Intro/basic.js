// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer.prompt([

    // Here we create a basic text prompt.
    {
        type   : "input",
        message: "What is your name?",
        name   : "name",
        default: "Pootie Tang"
    },

    // Here we create a basic password-protected text prompt.
    {
        type   : "password",
        message: "Set your password",
        name   : "password"
    },

    // Here we give the user a list to choose from.
    {
        type   : "list",
        message: "Which Pokemon do you choose?",
        choices: ["Bulbasaur", "Squirtle", "Charmander"],
        name   : "pokemon"
    },

    // Here we ask the user to confirm.
    {
        type   : "confirm",
        message: "Are you sure:",
        name   : "userConfirmed",
        default: false

    }

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(data) {


    // If we log that data as a JSON, we can see how it looks.
    console.log(JSON.stringify(data, null, 2));

    // If the data confirms, we displays the data's name and pokemon from the answers.
    if (data.userConfirmed) {

        console.log("==============================================");
        console.log("");
        console.log("Welcome " + data.name);
        console.log("Your " + data.pokemon + " is ready for battle!");
        console.log("");
        console.log("==============================================");

        // If the data does not confirm, then a message is provided and the program quits.
    }

    else {

        console.log("");
        console.log("");
        console.log(
            "That's okay " + data.name + ", come again when you are more sure.");
        console.log("");
        console.log("");

    }

});
