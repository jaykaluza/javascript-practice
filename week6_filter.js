const devices = [
    {name: "Laptop", user: "Jay", price: 1249.99, year: 2023},
    {name: "Monitor", user: "Maria", price: 219.5, year: 2019},
    {name: "Phone", user: "Sam", price: 799, year: 2021},
    {name: "Printer", user: "Front Desk", price: 349, year: 2018},
    {name: "Tablet", user: "Maria", price: 599, year: 2022},
];

//Pull the machine (use filter) where currentYear - year (property) >= 4. 
    //Then, use map to only display the name property.
const currentYear = new Date().getFullYear();  //gets current year
const oldDevices = devices.filter( (d) => currentYear - d.year >= 4); //Subtraction will run before >=. No need for round brackets. 

console.log(oldDevices.map( (d) => d.name)); 

//Rewrite findByUser exericse. Instead of using a loop and two returns, use find and something else. 
// function findByUser(devices, name) {
//     return devices.find((d) => d.user.toLowerCase() === name.toLowerCase())?.name ?? `No device found for ${name}`;
// }

// console.log(findByUser(devices, "Sam"));
// console.log(findByUser(devices, "Alex"));
// console.log(findByUser(devices, "Maria"));

//testing reduce. I will use oldDevices and I want to reduce all prices to the new total:
const total = oldDevices.reduce( (sum, d) => sum + d.price, 0);
console.log(`Replacement budget: $${total.toFixed(2)}`);

//bonus
const replacementBudget = devices
    .filter( (d) => currentYear - d.year >= 4)
    .reduce((sum, d) => sum + d.price, 0);
console.log(`Replacement budget: $${replacementBudget.toFixed(2)}`);