//Bonus question about zod validation
import { getUser } from "./api.js";
import { z } from "zod";

//copied from week 8. age: z.number() must be enabled, that's the whole point. I want it to fail.
const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    //age: z.number(),
}
);
try {
    const user = await getUser(1); //get user 1
    //Checking schema:
    UserSchema.parse(user);
    console.log(`Valid user: ${user.name}`);
} catch (error) {
    for (const e of error.issues) {
        console.log(`Failed. Path: ${e.path} | Message: ${e.message}`);
    }
}

