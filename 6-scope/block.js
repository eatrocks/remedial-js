// Block Scope
// Starting in ES6 (harmony), block scope can be achieved with the "let" keyword
// NOTE: grunt is not watching this file
"use strict";

console.log(typeof ab);

if (true){
    let ab = 'water';
    console.log(ab);
}

// let scoped ab to the if block so ab is undefined here
console.log(typeof ab);

// this one needs to run with strict mode and harmony
// cd ~/projects/training/js101/6-scope/
// node --harmony --use_strict block.js

// to enable ES6 (harmony) stuff in chrome go to
// chrome://flags/ in chrome and look for "Enable Experimental Javascript"
// for let specifically you need strict mode also.
// for es6 compatibility go to http://kangax.github.io/es5-compat-table/es6/

