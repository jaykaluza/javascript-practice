export async function getUsers() {
    //1. fetch the users URL and save it in a variable called response (use await)
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //use await when a function returns a Promise
    //Reponse is server's reply with data still wrapped inside. Not actual data.

    //2. turn the response into an object with response.json() (use await again)
    const users = await response.json(); //the actual result. 
    //3. return the result

    return users;
}
export async function getOpenTasks(userId) {
    // 1. fetch `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`); //use await
    //    (use a template literal with backticks, so ${userId} gets filled in)
    // 2. turn the response into an array with .json()
    const user = await result.json();
    // 3. use filter to keep only the todos where completed is false
    const filteredResults = user.filter((elem) => elem.completed === false);
    // 4. return how many there are (.length)
    return filteredResults.length;
}
