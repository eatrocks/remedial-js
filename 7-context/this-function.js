// this - function invocation
// when the other methods don't apply, you have function based invocation
// this is really just method based invocation if you
// consider that the function belongs to the global
// object and you call the function on the global
// object... just implicitly

// example of function invokation "as a Function"
function saySomething(something){
    console.log(something)
    console.log(this === global);
    console.log(typeof this);
}

// this is function based invocation
saySomething(';-)'); // wink
// saySomething === global.saySomething



