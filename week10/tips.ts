function calculateTip(bill: number, percent: number = 15): number {
    //your one line goes here: return the bill times the percent, divided by 100
    return (bill * percent) / 100;
}

console.log(`Tip on $50: $${calculateTip(50).toFixed(2)}`);
console.log(`Tip on $80 at 20%: $${calculateTip(80,20).toFixed(2)}`);