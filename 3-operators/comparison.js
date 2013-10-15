// Comparison Operators
// >, <, <=, >=
//   Double equals: performs type  coercion if necessary
if (1 == true) {
    console.log('1 is true');
}

//   Triple equals: does not perform type coercion
if (!(1 === true)) {
    console.log('  but not without type coercion');
}

//   also != and !==    so the above example could be
if (1 !== true) {
    console.log('  but not without type coercion');
}
