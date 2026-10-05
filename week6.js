//Array Methods warmup:
"use strict";
//Array of objects. This is using square brackets
const devices = [
    {name: "Laptop", user: "Jay", price: 1249.99, year: 2023},
    {name: "Monitor", user: "Maria", price: 219.5, year: 2019},
    {name: "Phone", user: "Sam", price: 799, year: 2021},
    {name: "Printer", user: "Front Desk", price: 349, year: 2018},
    {name: "Tablet", user: "Maria", price: 599, year: 2022},
];
// for (const device of devices) {
//     console.log(device.name);
// }
console.log();
//new way with one-line
// devices.forEach( (device) => {
//     console.log(device.name);
// });
//One liner:
//console.log();

//console.log( devices.map (       ) ); //Now I need to puth the action inside. Temp var must be in its own brackets unless one var. 
// console.log(  devices.map ( (d) => d.price ) ); //complete statement.
// console.log( devices.map (d => d.price)); //skipped (d) and it just d. Still worked. 
//console.log();
//Practice 1 - Price labels (map)
// const priceLabels = devices.map((d) => /* template literal */);
// console.log(priceLabels);
const priceLabels = devices.map( (d) => `${d.name}: $${d.price.toFixed(2)}`); //returning string. name: value and price: value, Both in string
console.log(priceLabels);