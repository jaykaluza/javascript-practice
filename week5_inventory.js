"use strict";
//Practice - inventory. Display an array of objects. 
const devices = [
    { name: "Laptop", user: "Jay", price: 1250 },
    { name: "Monitor", user: "Maria", price: 225.19 },
    { name: "Server", user: "Jack", price: 4500 },
    { name: "Printer", user: "Betsy", price: 700 },
];


//declare running total that will be used inside the loop and at the end
//let total = 0;
//Loop through the array, and for each itme only display the price
//for (const device of devices) {
//total += device.price;
//console.log(`Device name: ${device.name}, Price: ${device.price}`)

//}

function findByUser(devices, nameToSearch) {
    for (const device of devices) {
        if (device.user.toLowerCase() === nameToSearch.toLowerCase()) {
            return device;
        }
    }
    return null;

}
//print the total inventory value: 
//console.log();
//console.log(`Total inventory value: $${total.toFixed(2)}`);

//ADding new functionality: findByUser(device, name) //it will return the element of the array that matches aname
console.log();
console.log(`Searching for Jack: `, findByUser(devices, "Jack"));
console.log(`Searching for Martha: `, findByUser(devices, "Martha"));
console.log(`Searching for Jay: `, findByUser(devices, "Jay"));