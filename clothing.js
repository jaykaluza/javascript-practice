//three F ranges, for each one, recommend appropriate clothing. 
//less than 65 - sweater | 65- 75 light clothes | above 74 - tshirt and shorts.
const tempInFarenheit = 65;

if (tempInFarenheit <=65) {
    console.log("Wear warm clothes. Like a sweater.");
} else if (tempInFarenheit >65 && tempInFarenheit <= 75) {
    console.log("It's warmer. Wear light clothes.");
} else if (tempInFarenheit > 75 ) {
    console.log("It's summer. Are you crazy? Take off that sweater and wear sandals, tshirt, and shorts.");
} else {
    console.log("Wrong input. Try again.");
}