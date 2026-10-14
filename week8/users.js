import { getUsers } from "./api.js";

const users = await getUsers(); //imported from module api. Pulling JSON from the URL, converting to result and assigning to users.
// print how many users came back
console.log(`Total of: ${users.length} users have been found.`);
// print each user as: Leanne Graham – Sincere@april.biz
//console.log(users.map( (user) => `${user.name} - ${user.email}`));
//To have individual users printed:
console.log();
for (const user of users) {
    console.log(`${user.name} - ${user.email}`);
}