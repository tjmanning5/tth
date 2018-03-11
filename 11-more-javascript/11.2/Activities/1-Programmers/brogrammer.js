function Brogrammer(name, position, age, programmingLanguage) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.programmingLanguage = programmingLanguage;
    this.printStats = function() {
        console.log('Name:', this.name);
        console.log('Position:', this.position);
        console.log('Age:', this.age);
        console.log('Favorite Programming Language:', this.programmingLanguage);
    }
}

var nigel = new Brogrammer('Nigel B.', 'TA', 22, 'Bromance');
nigel.printStats();
console.log('typeof Nigel', typeof nigel);