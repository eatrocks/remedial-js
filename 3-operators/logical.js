// logical or & logical and Short circuiting

// second condition is not evaluated if the first condition is false
var thing = 'that';
if ( false && true){
    console.log('The second condition is never evaluated');
}

// second condition is not evaluated if the first condition is true
if ( true || false) {
    console.log('The second condition is never evaluated');
}

// useful to avoid NPE
var name;
var length = name && name.length();
console.log(length);
//this next call would fail because name is null
//var l = name.length();

// also useful for setting default values
// "Harmony" (ECMAScript 6) also contains ways to set default parameter values
var othercolor;
var color = othercolor || "red";
console.log(color);
