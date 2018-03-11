console.log('hello, node!');

// node calculator.js add 1 2 ... and outputs 3
var operand = process.argv[2],
    num1 = parseFloat(process.argv[3]),
    num2 = parseFloat(process.argv[4]);

if (process.argv.length == 5) {
    // node calculator.js subtract 5 2 ... and outputs 3
    switch (operand) {
        case 'minus':
        case 'subtract':
            console.log('Subtracting ' + num1 + '-' + num2 + '=', num1 - num2);
            break;
        case 'add':
            console.log('Adding ' + num1 + '+' + num2 + '=', num1 + num2);
            break;
        case 'multiply':
        case 'times':
            console.log('Timesing ' + num1 + '*' + num2 + '=', num1 * num2);
            break;
        case 'divide':
        case 'slash':
        case 'splitsies':
            console.log('Dividing ' + num1 + '/' + num2 + '=', num1 / num2);
    }
    //Do stuffs
} else {
    console.log('Please enter the operand and two number to do stuffs with.');
    console.log('IE subtract 5 2 ')
}
