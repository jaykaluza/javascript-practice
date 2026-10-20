function safeDivide(a, b) {
    //if b is 0 -> throw a new Error with the message "Cannot divide by zero"
    if (b === 0) {
        throw new Error ("Message from the function: Cannot divide by zero.");
        }
        return a/b; //I don't need else clause here. throw new Error immediately end this function 
    }

    try {
        console.log(safeDivide(10, 2)); //log safeDivide(10,2);
        console.log(safeDivide(5, 0));//log safeDivide(5,0);
    } catch (error) {
        console.log("Something went wrong", error.message);//log the error message
    } finally {
        console.log("Calculation finished."); //log "Calculation finished"
    }
    
