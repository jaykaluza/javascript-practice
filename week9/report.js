import { getUser } from "./api.js";
// The goal: look up several users at once and get a report, even when one ID is bad. 
// Think of checking 50 accounts overnight: one deleted account shouldn’t wipe out the other 49 results.

// Make an array of IDs: [1, 2,  3].
const ids = [1, 2, 999, 3];
// Use map to turn each ID into a getUser(...) call. You get an array of Promises, one per user.
try {
    const users = await Promise.allSettled(ids.map((id) => getUser(id))); //user is a stack of envelopes (status, value. Name is inside teh value)
    for (const u of users) {
        if (u.status === "fulfilled"){
            console.log(u.value.name); //get the envelope, open value, and retrieve name
        } else {
            console.log(`Failed: ${u.reason.message}`); //If status is not fulfilled, it will print this land continue
        }      
    }
} catch (error) {
    console.log(`Something went wrong. ${error.message}`);
}
