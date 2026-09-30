"use strict";
//add up all prices and display the total
const prices = [4.99, 12.50, 3.25, 18.00, 7.75];
const limit = 6;

function calculateTotal(prices) {
    let total = 0;
    for (const price of prices) {
        total += price;
    }
    return total;
}

function countOver(prices, limit) {
    //Iterate through prices and figure out how many values are greater than the limit.
    let counter = 0; //initialize the counter. Make sure declaration keyword is present. 
    for (const price of prices) {
        if (price > limit) {
            counter++;
        }
    }
    return counter;
}
console.log(`Your total price is: $${calculateTotal(prices).toFixed(2)}`);
const countOverResult = countOver(prices, limit);
if (countOverResult > 0) {
    console.log(`${countOverResult} prices are over $${limit}.`);
}