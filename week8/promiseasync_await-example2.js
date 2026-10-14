const waitJay = (ms) => new Promise( (resolve) => setTimeout(resolve, ms) ); //now my wait is set up

async function setUpNewHire() {
    console.log("Creating account...");
    await waitJay(1000);
    console.log("Assigning license...");
    await waitJay(1000);
    console.log("Shipping laptop...");
    await waitJay(1000);
    return "New hire ready";
}
setUpNewHire();
console.log("Answering other tickets meanwhile");