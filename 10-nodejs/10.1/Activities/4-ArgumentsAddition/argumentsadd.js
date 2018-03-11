// Combines two command line arguments (strings).
// console.log(process.argv[2] + process.argv[3]);
console.log('Node Version', process.version);
// Adds two command line arguments (numbers).
if (process.argv.length == 4) {
    console.log(parseFloat(process.argv[2]) + parseFloat(process.argv[3]));
} else {
    console.log('Please enter the two numbers you wish to add!')
}
