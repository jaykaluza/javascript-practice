//This program will calculate grade based on received score
//A (90+), B (80–89), C (70–79), D (60–69) or F (below 60). Test the boundaries this time: 90, 89, 60 and 59.
const score = 101;


if (score < 0 || score > 100) {
    console.log('Invalid score.');
} else {
    let grade = 'F';
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >=60) {
        grade = 'D';
    }
    console.log(`Your grade is ${grade}`);
}
    
    
    

   

