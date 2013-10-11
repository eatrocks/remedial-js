// For

for (var i = 1; i <= 2; i++)
{
    console.log("number is:  " + i);
}

const cars = ["Mercedes", "Audi", "BMW"];

for (car in cars) {
    // car is the index, not the value
    console.log(cars[car] );
}