let deviceName: string = "LT-001";
let ramGB: number = 16;
ramGB = 32; //changed from "sixteen" to 32
console.log(`${deviceName} has ${ramGB} GB of RAM`);

type Status = "active" | "repair" | "retired";

//type Device means I am describing what future Device objects MUST have name, owner, ramGB and may have notes.
//'type' is a keyword. So, type Device = { ... } means: create new type, name it Device, define it as an object with these properties. 
type Device = {
    name: string;
    owner: string;
    ramGB: number;
    notes?: string;
}

const d1: Device = { name: "LT-005", owner: "Kim", ramGB: 8 };
// const d2: Device = { name: "LT-006", owner: "Lee"}; //required property ramGB is missing
// const d3: Device = { name: "LT-007", owner: "Max", ramGB: "8" };
const d4: Device = { name: "LT-008", owner: "Ana", ramGB: 8, notes: "Loaner" };
let st: Status = "retired";
// st = "lost"; //This option does not exist.