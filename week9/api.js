export async function getUser(id) {
    /// 1. fetch `https://jsonplaceholder.typicode.com/users/${id}`
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    // 2. if response.ok is false, throw a new Error that includes response.status
    if (!response.ok) {
        throw new Error (`Request failed with status ${response.status}`);
    }
    // 3. otherwise return await response.json()
    return response.json();
}

