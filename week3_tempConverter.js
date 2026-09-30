//This file will convert the temperature from Fahrenheit to Celsius and display the result. 

const fahrenheitToCelsius = (f) => ((f - 32) * 5 / 9);


console.log(fahrenheitToCelsius(96).toFixed(1)); //Very Hot day
console.log(fahrenheitToCelsius(212).toFixed(1)); //Boiling day
console.log(fahrenheitToCelsius(98.6).toFixed(1)); //Very Hot day

