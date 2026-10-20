import { getUser } from "./api.js";

try {
  const user = await getUser(1); //If there is no error, it should return the user object. 
  //console.log(`Return datatype: ${typeof user}`);
  console.log(`Found user ${user.name}`);
} catch (error) {
  console.log(`Could not find your user. Error says: ${error.message}`);
}

try {
  const user = await getUser(999);
  console.log(`Found user ${user.name}`);
 } catch (error) {
   console.log(`Could not find your user. Error says: ${error.message}`);
 }
