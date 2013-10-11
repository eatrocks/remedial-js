// Numbers

// stored as 64 bit doubles
// so watch for strange things
// like 0.1 + 0.2 = 0.30000000000000004
console.log("0.1 + 0.2 = " + (0.1 + 0.2) );

// No such thing as an Integer but you can still work with them
// notice the parser quits when it encounters a character
console.log(parseInt("144.1abc", 10));

// NaN (not a number) is a special value
console.log(parseInt("cheese", 10));

// check for NaN
if (isNaN("144.1cheese")) {
    console.log("cheese is not a number");
}

// see also parseFloat()