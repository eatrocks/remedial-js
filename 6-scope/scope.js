// Scope
// Scope refers to the visibility of variables within your code.
// In JavaScript scope is function based.

// Global Scope
// variables defined globally are visible everywhere
// you can define a variable to be global by...
// 1. defining it outside of a function
// 2. failing to define it before using it
// 3. explicitly attaching it to the global object

// this is a global variable - defined outside of a function
var name = 'Whiskers';

function doSomething(){
    // global variables are visible inside functions
    console.log(typeof name);
}

doSomething();

// in a browser the global object is the "window"
// in node.js the global object is "global"

