// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
}

var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");
// creates the printInfo method and applies it to all programmer objects
bob.printInfo();
Programmer.prototype.printInfo = function() {
    console.log(
        "Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguages: " + this.language);
};
var mary = new Programmer('Mary Jane', "Spidermans Girlfriend", 19, "Engrish");
mary.printInfo();

// new programmer object is initialized to bob and is provided with the variables
// necessary to create all of the properties

// calls the printInfo method for bob to print all of his information to the console
