import { createClient } from 'redis';



const tokenCache = async (token:string) => {
    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    await client.set('token', token);
}

// Read -> const value = await client.get('key');
