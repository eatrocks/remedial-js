// Prototype

function Cat(name) {
    this.name = name;
    this.lives = 9;
}

// Cat.prototype is an object shared by all instances of Cat
// it forms part of a lookup chain
// if you attempt to access a non-existent property, JavaScript
// will check Cat.prototype for the property

Cat.prototype.lostLife = function(){
    return --this.lives;
}

var cat = new Cat('Alex');
cat.lostLife();
console.log(cat);

// you can add to the prototype of built-in JavaScript objects like String
// The root of the lookup chain is Object.prototype which contains the toString() method
// you can override the toString() method the same way we added the lostLife() method
