import { devices } from "../week7/devices.js"; //one folder up, then navigate to week 7 and find your js module. It's a named import

const wait = (ms) => new Promise((resolve) => setTimeout(resolve,ms)); //creating promise to sleep for ms duration and return resolve

async function checkDevice(device){
    await wait(1000); //using my Promise to just stall for 1 sec
    return `${device.name} checked.`;
}
//Part 2. Compare how long it takes to display each device without any Promise
console.time("one at the time."); //starts the timer
for (const dev of devices) {
    console.log(await checkDevice(dev));
}
console.timeEnd("one at the time."); //ends the timer and displays elapsed time. 

console.time("one at the time."); //starts the timer
const listOfDevs = await Promise.all(devices.map((device_temp) => checkDevice(device_temp))); //All Promise objects will return values now. 
console.log(listOfDevs);
console.timeEnd("one at the time."); //ends the timer and displays elapsed time. 