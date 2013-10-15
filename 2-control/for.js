// For

for (var i = 1; i <= 2; i++)
{
    console.log("number is:  " + i);
}

// this is an array, we'll talk about it later
const cars = ["Mercedes", "Audi", "BMW"];

var i;
for (i in cars) {
    // i is the index, not the value
    console.log(cars[i] );
}