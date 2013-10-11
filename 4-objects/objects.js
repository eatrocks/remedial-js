//Objects
// everyting in JavaScript is an object except core types
// objects are basically just collections of name-value pairs

// new up an object with the new key word
var o = new Object();

// this is equivalent, called Object Literal Syntax
// uses the core of JSON format
var o = {};

// add properties to the object upon creation...
var cat = {
    name: 'Felix',
    age: 6,
    size: {
        height: 12,
        length: 18,
        weight: '10 lbs'
    }
};

// or later
o.size = 10;

// Properties are accessed and assigned 2 ways
// array style, useful for dynamic code, i.e. determining the property at runtime
console.log('Size of o is ' + o['size']);
// or object style
console.log('Name of cat is ' + cat.name);

// access nested properties by chaining
console.log('Felix weighs ' + cat.size.weight);


