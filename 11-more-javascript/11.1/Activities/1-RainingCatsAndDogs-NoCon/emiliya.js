
var dogs = {
    raining: false,
    noise: "Woof!",
    makeNoise: function() {
        if (this.raining) {
            console.log(this.noise);
        }
    },
    giveTreats: function  (){
        this.raining = true;
    }

};

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        console.log(this.noise);
    }
};



function massHysteria(cats, dogs) {
    cats.raining = true;
    if (cats.raining && dogs.raining) {

        console.log("Holy shit wow") ;
    }
}

dogs.makeNoise();
cats.makeNoise();

dogs.giveTreats();
dogs.makeNoise();

massHysteria(cats, dogs);

// comments

//