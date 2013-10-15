// New

// instead of makeCat let's call it Cat, and build it like a Java constructor
function Cat(name, lives) {
    this.name = name;
    this.lives = lives;
    this.lostLife = function() {
            return --this.lives;
        }
}

var cat = new Cat('socks', 9);
cat.lostLife();
console.log(cat);

// functions designed to be called by 'new' are called constructor functions
// convention is to title-case the name to remind you to use 'new'

// The magic with "new" is Javascript creates a new object,
// then calls the constructor function with the new object as the context
// more on context in the scope section, but for now, without the "new",
// this.name would refer to a global variable instead of a variable on Cat.

// more info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

// this is better, but for every cat we "new up" we are duplicating the function code
// let's improve this further... (new2.js)


// optional: what happens if you forget the new keyword
//var cat2 = Cat('patches', 9);
//console.log(cat2); // undefined, Cat does not return anything
//console.log(name); // name is now a global variable not tied to cat