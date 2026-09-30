/*
    const bill = 50;
    const tip = calculateTip(bill, 18);
    // work out the total, then print:
    // Bill: $50, Tip: $9, Total: $59
*/

function calculateTip(bill,percent=18) {
    const decimalPercent = percent * 0.01;
    return (bill * decimalPercent)
}


const bill = 33.34;
const tip = calculateTip(bill,21);
const totalBill = bill + tip;
console.log(`Your bill is: $${bill.toFixed(2)}. You should leave $${tip.toFixed(2)} tip. Your total bill is: $${totalBill.toFixed(2)}.`);

