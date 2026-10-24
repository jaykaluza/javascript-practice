//I will rewrite my api.js and use interface so that VS Code knows which fields the user has.
interface Address {
    city: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
}
//creating a function called getUser that will eventually give back a User (Promise<User>)
async function getUser(id: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
        throw new Error(`User ${id} not found (status ${response.status})`);
    }
    const user = (await response.json()) as User;
    return user;
}

//main function
async function main(): Promise<void> {
    try {
        const user = await getUser(1);
        console.log(`${user.name} - ${user.email} - ${user.address.city}`);
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`);
        }
    }

    try {
        const missing = await getUser(999); //trying a non-existing user.
        console.log(missing.name);
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Error: ${error.message}`);
        }
    }
}
main();
