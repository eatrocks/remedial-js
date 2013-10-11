// Boolean
/* true or false - keywords, no quotes necessary
   Any value can be converted to boolean using these rules...
    false, 0, empty string, NaN, null and undefined all become false
all other values become true
Convert implicitly but force it with the Boolean() function
*/

if (true) {
    console.log('so it is');
}

if ( 234 ) {
    console.log('falsy');
}