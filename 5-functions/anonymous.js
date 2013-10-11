// Anonymous Functions

// functions don't need a name
var yell = function(message) {
    console.log(message.toUpperCase());
}

yell('hello');

// functions can be immediately invoked
(function(message) {
    console.log(message.toUpperCase());
})('hello again');

// notice the parenthesis around the entire function definition
// and the parenthesis after the function (which is the actual invocation)

