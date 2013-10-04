// while.  do while is also possible
var foundIt = false;
var i = 0;
console.log('Looking for a 10');
while (!foundIt){
    i++;
    if (i === 10){
        foundIt = true;
        console.log('  ...found it');
    }

}

//todo cover double and tripple equals