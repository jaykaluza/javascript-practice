const order = new Promise( (resolve) => {
    setTimeout( () => resolve("Laptop delivered"),2000);
})

console.log(order); // Promise { <pending> }  ← order number, no laptop yet

const item = await order; // wait at the loading dock...
console.log(item); // Laptop delivered       ← the actual thing