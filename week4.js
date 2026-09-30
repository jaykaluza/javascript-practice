//creating an array of strings
const devices = ["laptop", "phone", "tablet", "monitor", "printer"];

console.log(devices[0]); //first element of the array
console.log(devices.length); //length of my array

//the last element of the array
console.log(devices[devices.length - 1]);
//new line
console.log();
//iterate through the array and print every single element in two different ways
for (let i = 0; i < devices.length; i++) {
    console.log(`${1 + i}: ${devices[i]}`);
}

console.log();
let counter = 0;
for (const device of devices) {
    counter++;
    console.log(`${counter}: ${device}`);
}