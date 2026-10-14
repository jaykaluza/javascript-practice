//fetch function returns Promise wether is has the async keyword or not
const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); 
const user =  await response.json();
console.log(user.name);