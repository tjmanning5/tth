// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal(rain, noise) {
  this.raining = rain;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Animal(true, "Woof!");
console.log('dogs', dogs);
var cats = new Animal(false, "Meow!");
var cow = new Animal(true, 'MOOOOOO!');
var fish = new Animal(true, 'Bloop, Glug, Wishhhhssshs');
// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();
cow.makeNoise();
fish.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();
var cat2 = new Animal(true, 'meow');
var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cat2);
