const age = -0.5;
if (age <= 0) {
    console.log("Wrong input.");
    console.log("Please input a positive number.");
} else if (age <18) {
    console.log(`Your age is ${age}. That means you are a Minor`);
} else if (age >=18) {
    console.log("You're an adult.");
} else {
    console.log("Unrecognized input.");
}
    
    