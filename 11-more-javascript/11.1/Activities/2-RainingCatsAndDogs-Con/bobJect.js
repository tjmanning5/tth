function JoelJect (brooding){
    if (typeof brooding === 'boolean') {
        this.brooding = brooding;
    } else {
        throw new Error("Joel Brooding needs to be boolean");
    }
}
function BobJect(shirtColor, beard, energyLevel) {
    var joel = new JoelJect(false);
    if (typeof shirtColor === 'string') {
        this.shirtColor = shirtColor;
    } else {
        throw new Error('Shirt color should be a string');
    }
    if (typeof beard === 'boolean') {
        this.beard = beard;
    } else {
        throw new Error("Beard must be true or false");
    }
    this.energyLevel = energyLevel;
}
try {
    var bob = new BobJect('periwinkle', true, 9);
} catch (e) {
    console.log('Caught error', e);
    console.log('Your input needs to be validated. Valid values are....');
}
console.log('bob', bob);