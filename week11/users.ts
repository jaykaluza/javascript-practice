import * as z from "zod/v4"; //brings in zod

//schema - what one user from teh website must look like
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  address: z.object({ city: z.string() }),
});

//z.infer reads the schema and builds a TypeScript type from it. This way I don't have to write an interface User by hand.
//export makes User usable in other files
export type User = z.infer<typeof UserSchema>; 

//base url. No exprot meaning only this file can see it. 
const BASE_URL = "https://jsonplaceholder.typicode.com";

//a function that takes an id (a number) and promises to give back a User later. async because it waits on the internt. export so server.ts can import.
export async function getUser(id: number): Promise<User> {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  //response.ok returns status 200. For non-existing users, like 999, status returned is 404 (Not Found)
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json(); //turns the response body from text into a JavaScript object. It takes a moment so it needs await, too.
  return UserSchema.parse(data); //zod checks data against the schema. If matches, I get a clean User back. If the website sent garbage, .parse throws
  //an error instead of letting bad data into my program. 
}
//it fetches all users User[] is an array of users. 
export async function getAllUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  return z.array(UserSchema).parse(data); //a list where every item is a user. It checks all of them at once. 
}