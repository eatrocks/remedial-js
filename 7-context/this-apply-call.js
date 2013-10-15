// this - using apply() or call() invocation

// functions have 2 methods that allow us to
// specify which object we want as the functional
// context, apply() and call()

// Specify the context as the first parameter
// apply() - pass an array of values to be passed
//         as the invocation arguments
// call() - arguments are passed directly in the
//         argument list.

// kinda strange example but...
function upperName(param1, param2) {
    // just to demonstrate the parameters
    console.log(param1 + ' ' + param2);
    // upper case the name of "this"
    return this.name.toUpperCase();
}

var rover = new Dog('Rover');
var socks = new Cat('Socks');

var bigName = upperName.apply(rover, ['a','b']);
console.log(bigName);
bigName = upperName.call(socks, 'y', 'z');
console.log(bigName);

// if we hadn't used call or apply, name
// would have been created on the global scope

function Cat(name) {
    this.name = name;
    this.lives = 9;
}

function Dog(name) {
    this.name = name;
}
