import chalk from "chalk";
import {devices} from "./devices.js";
import { getOldDevices ,totalPrice, findByUser } from "./deviceUtils.js";

//Add a header:
console.log(chalk.bold("=== Device Report ==="));

// console.log(devices.length);
const oldDevices = getOldDevices(devices,4);
console.log(`Old devices: ${oldDevices.map(d => d.name).join(", ")}` ); //with join(", ")
console.log(chalk.yellow(`Replacement budget: $${totalPrice(oldDevices).toFixed(2)}`));

const names = ["Sam","Zoe","Mati"];

for (const name of names) {
    const result = findByUser(devices,name);
    console.log( result.startsWith('No device found') ? chalk.red(result) : result); 
}


