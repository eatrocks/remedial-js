// hoisting

// variable declarations are hoisted to the top of their scope.
// initializations remain at their original location.

// so this
function beforeHoisting() {
    var a = 'a';
    var b = 'b';
    var c = 'c';
}

// becomes
function afterHoisting() {
    var a, b, c;
    a = 'a';
    b = 'b';
    c = 'c';
}

// so seemingly strange things can happen
// what will be logged? 1 or 2 or undefined?
var x = 1;

(function (){
    console.log(x);
    var x = 2;
})(); // this is a self-executing anonymous function

// because with hoisting the function was rewritten
// to look like this...
(function (){
    var x;
    console.log(x);
    x = 2;
})();
