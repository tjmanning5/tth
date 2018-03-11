// Joan of Arc "properties".
var joanOfArcInfoParts = [
    "Grew Up Where",
    "Scars",
    "Known For",
    "Real Name",
    "Symbolism"];


// Values for Joan's "properties".
var joanOfArcInfoValues = ["Jehanne la Pucelle.",
    "Domremy, a village in northeastern France.",
    "Peasant girl, daughter of a farmer, who rose to become Commander of the French army.",
    "Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.",
    "Stands for French unity and nationalism."];

var Joan = {
    realName: "Jehanne la Pucelle",
    birthPlace: "Domremy, a village in northeastern France.",
    canIStoreBooleans: true,
    canIStoreInts: 42,
    canIStoreObjects: {
        nestedObject: true
    },
    canIStoreFunction: function  (){
        return console.log('Fuck yes!');
    }
};
console.log('Joan Object', Joan);