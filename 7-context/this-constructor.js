// this - constructor invocation
// when you "new up" an object with a constructor function
// JavaScript first creates an object, then calls
// the function with the new object as the "this" parameter

// define a Cat constructor
function Cat(name){
    this.name = name;
    this === global ? console.log("'this' = global")
                    : console.log(this);

}

// because of the new keyword, this refers
//   to a new object instead of global
var whiskers = new Cat('Whiskers');

// if we invoke the Cat function without the
// new keyword we get function based context
// behavior and this refers to global
var socks = Cat('Socks');

