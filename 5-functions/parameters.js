// Parameters

// add function we introduced previously
function add(a, b) {
    var total = a + b;
    return total;
}

// unspecified parameters become undefined (really? yup!)
var sum = add(1); // returns NaN
console.log(sum);

// extra parameters are ignored
sum = add(4, 5, 6); // returns 9
console.log(sum);

// however my IDE is warning me about both situations

