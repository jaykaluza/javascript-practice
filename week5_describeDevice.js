"use strict";
//Practice. Create an object and display specific string
const phone = {
    brand: "Apple",
    model: "iPhone 15",
    year: 2024,
    assignedTo: "Maria",
};
const laptop = {
    brand: "Dell",
    model: "Latitude 5440",
    year: 2023,
    assignedTo: "Jay",
};
function describeDevice(device) {
    return (`${device.brand} ${device.model} (${device.year}), assigned to ${device.assignedTo}`);
}

//call your function and pass your object
console.log(describeDevice(laptop));
console.log(describeDevice(phone));