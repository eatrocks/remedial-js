// Arrays

// Arrays are objects with a
// special length property that returns one more than the highest index
var colors = ['red', 'white', 'blue'];

console.log('colors array length is ' + colors.length);

// you can add to any index of an array
colors[100] = 'pink';

// notice what length returns (101, not 4)
console.log('colors array length is now ' + colors.length);

// so don't iterate using length
for (i in colors) {
    console.log(colors[i]);
}

// non-existent array elements return "undefined"
console.log('Element 50 is: ' + typeof colors[50]);

// for more information see
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods