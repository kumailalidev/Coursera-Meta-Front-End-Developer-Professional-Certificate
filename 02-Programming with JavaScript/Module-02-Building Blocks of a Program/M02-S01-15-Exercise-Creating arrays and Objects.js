// Exercise: Creating arrays and objects.

// 1. Create a new empty array literal and assign it to the variable clothes.
var clothes = [];


// 2. Add 5 of your favorite items of clothing as strings using the push() method.
clothes.push("gray t-shirt");
clothes.push("blue t-shirt");
clothes.push("yellow t-shirt");
clothes.push("slippers");
clothes.push("old jeans");

// 3. Remove the fifth piece of clothing from the array using the pop() method.
clothes.pop();

// 4. Add a new piece of clothing using the push() method.
clothes.push("Polo");

// 5. Use console.log to show the third item from the clothes array in the console.
console.log(clothes[2]);

// 6. Create a new empty object literal and assign it to the variable favCar.
var favCar = {};

// 7. Using the dot notation, assign a color property to the favCar object and 
// give it a string value with the color of your choice.
favCar.color = "red";

// 8. Using the dot notation, assign a convertible property to the favCar object 
// and give it a boolean value of your choice.
favCar.convertible = true;

// 9. Use the console to log the entire favCar object.
console.log(favCar)