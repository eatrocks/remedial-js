// this - method invocation

// when a function is assigned to a property of an object
// AND
// the invocation occurs as object.method()

// add a talk method to the Cat object
Cat.prototype.talk = function() {
    console.log('meow');
    console.log(this);
};

var whiskers = new Cat('Whiskers');
// this is method based invocation
whiskers.talk();
// so log(this) refers to whiskers


function Cat(name){
    this.name = name;
}