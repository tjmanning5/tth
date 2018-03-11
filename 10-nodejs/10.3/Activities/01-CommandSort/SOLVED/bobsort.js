var number = process.argv[2];

//get the length of process.argv - 2
//loop through process.argv and append to our numbers array
var numbers = [],
    total = process.argv.length;
if (total === 2) {
    throw Error('Please specify the numbers to sort');
}

for (var i = 2; i < total; i++) {
    numbers.push(parseFloat(process.argv[i]));
}

numbers.sort(function (a, b){
    console.log('sorting', a, b, a-b);
    return a-b;
});
console.log('numbers', numbers);


