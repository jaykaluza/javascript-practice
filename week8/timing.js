console.log("1. Ticket opened");

//setTimeout doesn’t pause the program. It hands the function to Node and says “run this in 2 seconds,” then JavaScript moves straight on to line 3. When the timer 
//finishes, Node runs the function. It’s like logging the vendor ticket and taking the next caller right away.    
setTimeout( () => {
    console.log("2. Vendor replied.");
}, 2000); //I'm asking JS to wait 2000 milliseconds and then execute the job. 

console.log("3. Moving on to the next ticket.");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function makeCoffee() {
    console.log("Brewing...");
    await wait(2000);
    return "Coffee ready";
}
console.log(await makeCoffee());