import {getUsers, getOpenTasks} from "./api.js" //import both functions from this module

const users = await getUsers();
// 1. Use Promise.all + map to call getOpenTasks(user.id) for every user at once
//    and save the results in a variable called counts.
const counts = await Promise.all(users.map( (user) => getOpenTasks(user.id) ));

// 2. Loop over users with a classic for loop (let i = 0; i < users.length; i++)
//    and print: `${users[i].name}: ${counts[i]} open tasks`
for (let i=0; i<users.length; i++) {
    if (counts[i] > 10){
        console.log(`${users[i].name}: ${counts[i]} open tasks`);
    }
    
}