// Classes: Functions as Objects
// Javascript does not have class definitions like Java and C++
// but you can combine data and methods in a JavaScript object

// we can define the object almost like we would a class
function makeCat(name, lives) {
    return {
        name: name,
        lives: lives,
        lostLife: function() {
            return --this.lives;
        }
    }
}
var cat2 = makeCat('socks', 9);
cat2.lostLife();
console.log(cat2);


// this refers to the current object when used inside a function (more on scope later)
// notice the cat object now has a property that is a function called hadBirthday

// let's refine this further... (new.js)