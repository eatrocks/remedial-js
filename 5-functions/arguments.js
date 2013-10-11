// Arguments

// functions have a special hidden variable called "arguments"
// arguments is array-like
function calculateSum(){
    var sum = 0;
    for (var i = 0 ; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// my IDE is no longer warning me about the invalid number of parameters
var total = calculateSum(5, 6, 7);
console.log(total);

// you can coax an array into a set of arguments with the apply() method
total = calculateSum.apply(null, [8, 9, 10]);
console.log(total);

// notice that functions are objects too (you can call apply on it)