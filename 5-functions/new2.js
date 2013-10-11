// New 2
// You can re-use the function definition,
// define the function outside the object and reference it.
function lostLife(){
    return --this.lives;
}

function Cat(name) {
    this.name = name;
    this.lives = 9;
    this.lostLife = lostLife;
}

var cat = new Cat('Oliver');
cat.lostLife();
console.log(cat);

// this code is even starting to look clean eh?