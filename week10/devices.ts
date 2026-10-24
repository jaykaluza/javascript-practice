type Status = "active" | "repair" | "retired";

type Device = {
    name: string;
    owner: string;
    ramGB: number;
    status: Status; //this means the device status can only be one of the 3 words listed abobe.
    notes?: string;
}

const devices: Device[] = [
    { name: "LT-001", owner: "Sam", ramGB: 16, status: "active" },
    { name: "LT-002", owner: "Priya", ramGB: 8, status: "repair", notes: "Cracked screen" },
    { name: "LT-003", owner: "Alex", ramGB: 32, status: "active" },
    { name: "LT-004", owner: "Jordan", ramGB: 16, status: "retired" },
];

function activeDevices(list: Device[]): Device[] {
    return list.filter( (device) => device.status === "active"); //looking for only active devices
}

function totalRam(list: Device[]) : number {
    return list.reduce((sum,device) => sum + device.ramGB, 0); //create the total of Ram, start from zero.
}

function getNote(name: string): string {
    const device = devices.find( (d) => d.name === name); //find is used for single device, filter for multiple devices. 
    return device?.notes ?? "none" //? means if there is no deice, stop and give undefined. ?? turns that undefined into none so none is returned.
}

//Print the results
const active = activeDevices(devices); //calls the function that returns devices with status "active"
console.log(`Active devices: ${active.length}`); //prints number of active devices
for (const device of active) {
    console.log(`${device.name} - ${device.owner}`); //each iteration prints one active device
}

console.log(`Total RAM: ${totalRam(devices)} GB`);
console.log(`LT-002 note: ${getNote("LT-002")}`);
console.log(`LT-001 note: ${getNote("LT-001")}`);
console.log(`LT-999 note: ${getNote("LT-999")}`);