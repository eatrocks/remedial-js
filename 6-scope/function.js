// Function based Scope

var name = 'Whiskers'; // name is global

function wink(){
    var winkChars = ';)'; // this is local to this function
    console.log(winkChars);
    console.log(name); // global scope is visible inside the function
}

// the variable is undefined before and after the function call
console.log(typeof winkChars);
wink();
console.log(typeof winkChars);

