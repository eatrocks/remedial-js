// Strings
// 16 bit Unicode

// single quotes or double quotes and/or escape character \
console.log('Jack\'s House');
console.log("Jill \"loves\" it");

// strings are actually objects with methods...
console.log('hello'.length);

// constants can't be changed
const description = 'big red dog';
//description = 'not allowed';
// no error will be thrown but my IDE is barking (no pun intended)
// this will print the original value
//   even after reassigning the constant
console.log(description);


