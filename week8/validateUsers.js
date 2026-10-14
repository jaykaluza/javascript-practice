import { z } from "zod";
import { getUsers } from "./api.js";

// 1. Write a UserSchema with z.object() describing three fields:
//    id (a number), name (a string), email (a string)
const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    //age: z.number(),
}
);

const users = await getUsers(); //get all my users. 

//2. Validate the whole array at once:
const result = z.array(UserSchema).safeParse(users); 
//z.array(UserSchema) - means "an array where every item must match UserSchema.". It's one check for all 10 users.

//3. Print result.success.
console.log(result.success);
console.log(result.error.issues[0]);
