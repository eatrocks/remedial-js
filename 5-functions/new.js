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

// this is better, but for every cat we "new up" we are duplicating the function code
// let's improve this further... (new2.js)
