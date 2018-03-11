//is the number even?
//if == 1 return false;
// if == 2 return true;

//Loop through each number

function isPrime(number) {
    if (number % 2 === 0) {
        return false;
    }
    if (number == 1) {
        return false;
    }
    if (number == 2 ) {
        return true;
    }
    for (var i = 3; i < number; i ++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log('IsPrime', isPrime(91340135890230983109813890513));