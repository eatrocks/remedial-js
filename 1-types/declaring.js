// Declaring variables

// define a variable with the var keyword
// var is optional - BUT ALWAYS USE VAR...
// because if you don't, it will become a global...
// more on scope later.

// Javascript uses dynamic typing,
// so you don't specify a type in the declaration

// undefined
var a;
// typeof is an operator that returns a text string of the type the operand
console.log(typeof a);

// number
a = 5;
console.log(typeof a); // "a" is a number

// string
a = 'hello';
console.log(typeof a); // now "a" is a string

// literals can't change
const car = "Mercedes";
//car = 'hello'; // IDE warns me about this

// try this in your browser console
//const  car = 'Ford'; car = 'Toyota'; car;