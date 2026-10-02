//practicing objects
const laptop = {
    brand: "Dell",
    model: "Latitude 5440",
    year: 2023,
    assignedTo: "Maria",
    price: 1250,
};

console.log(laptop.brand);
console.log(laptop.price);

console.log();
laptop.assignedTo = "Jay";
laptop.encrypted = true;
console.log(JSON.stringify(laptop,null,2));
laptop.encrypted = false;
console.log(laptop);
delete laptop.encrypted; //delete my property
console.log(laptop);

