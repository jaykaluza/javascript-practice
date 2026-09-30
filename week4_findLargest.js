//Finding the largest number function. 
function findLargest(numbers) {
    let largest = numbers[0];
    //loop through numbers
  /*  for (let i = 1; i < numbers.length; i++) {
        //if a number is bigger than largest, replace largest
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }
        */ 
  for (const number of numbers) {
    if (largest < number) {
        largest = number;
    }
  }
    return largest;
}


console.log(findLargest([3, 17, 8, 42, 5])); //result should be 42
console.log(findLargest([-10, -3, -25])); //should be -3
