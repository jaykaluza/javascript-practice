const bad = '{"name": Laptop}'; //Laptop has no quotes, so this isn't valid JSON
try {
    console.log(JSON.parse(bad));
    console.log("Program still running");
} catch (error) {
    console.log(error.name);
    console.log(`Your error message is: ${error.message}.`);
}
console.log("Program still running"); //after try/catch: always runs.