"use strict";
//Array of objects. This is using square brackets
const devices = [
    {name: "Laptop", user: "Jay", price: 1249.99, year: 2023},
    {name: "Monitor", user: "Maria", price: 219.5, year: 2019},
    {name: "Phone", user: "Sam", price: 799, year: 2021},
    {name: "Printer", user: "Front Desk", price: 349, year: 2018},
    {name: "Tablet", user: "Maria", price: 599, year: 2022},
];
//[ 'Jay', 'Maria', 'Sam', 'Front Desk', 'Maria' ]
//console.log( devices.map ( (d) => d.user ));

//Calculate and display the age of the devices.
//console.log( devices.map(  (d) => {Date.now.}      ));
const currentYear = new Date().getFullYear();
console.log( devices.map((d) => currentYear- d.year) );

//Display every device name with all uppercases
console.log( devices.map( (d) => d.name.toUpperCase() ) );

//Next Exercise
//Make an array of every price increased by 10%, rounded to 2 decimals, and kept as numbers, not strings.
//10% is same as 0.1. Plus current price, is the same as 100% + 10% = 110% which equals to 1.1.

//console.log( devices.map ( (d) =>  Math.round((d.price * 1.1).toFixed(2) * 100)/100) ); //works but conversion is not done properly. 
console.log( devices.map ( (d) => Math.round(d.price * 1.1 * 100) /100  )); //correctedd. Math.round gives whole number, * 100 move comma 2 positions to right, /100 to left.
//Next exercise: map each device to a smaller object with just 2 properties: name and user
//console.log( devices.map( (d) => {name: d.name, user: d.user})); //without round brackets, JavaScript is treating {} as a script block and JS is expecting a statement.
console.log( devices.map( (d) => ({name: d.name, user: d.user}))); //{} holds each object, an element of the array. ( ) round brackets tells JavaScript it's an object value. 