// Functions
// Functions (and Objects) are the core component of JavaScript

function add(a, b) {
    var total = a + b;
    return total;
}

// no type declaration on the parameters
// no return type specification
// total is only visible within the function
// the return statement is optional, defaults to undefined
// the return value is optional

var sum = add(1, 2);
console.log(sum);

// unspecified parameters become undefined (really? wow!)
sum = add(1); // returns NaN
console.log(sum);

// extra parameters are ignored
sum = add(4, 5, 6); // returns 9
console.log(sum);

// however my IDE is warning me about both situations