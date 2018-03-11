// constructor function which can take in a series of values and create objects
// with the properties contained inside
/**
 * Create a RPG character
 * @param name string The name of the character
 * @param profession string What do they do?
 * @param gender string You pick
 * @param age number How old are you?
 * @param strength number How strong?
 * @param hitpoints number How manly?
 * @constructor
 */
function Character(name, profession, gender, age, strength, hitpoints) {
    if (typeof name === 'string') {
        this.name = name;
    } else {
        throw new Error("Name should be a string. Who names someone a number?");
    }
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    // method which prints all of the stats for a character
    this.printStats = function() {
        console.log(
            "Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + "\nHitPoints: " + this.hitpoints);
        console.log("\n-------------\n");
    };
    // method which determines whether or not a character's "hitpoints" are less then zero
    // and returns true or false depending upon the outcome
    this.isAlive = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is still alive!");
            console.log("\n-------------\n");
            return true;
        }
        console.log(this.name + " has died!");
        return false;
    };

    // method which takes in a second object and decreases their "hitpoints" by this character's strength
    this.attack = function(character2) {
        character2.hitpoints -= this.strength;
    };

    // method which increases this character's stats when called
    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    };
}

// creates two unique characters using the "character" constructor
var justin = new Character("Justin", "Warrior", "Male", 25, 10, 75);
var john = new Character("John", "Rogue", "Female", 23, 20, 50);

justin.printStats();
john.printStats();

john.attack(justin);
justin.printStats();
justin.isAlive();

john.levelUp();
john.printStats();
justin.kowabungaSlash = function (opponent){
    opponent.hitpoints -= this.strength * 10;
};
justin.kowabungaSlash(john);
justin.attack(john);
john.isAlive();