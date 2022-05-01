import {createClient} from 'redis';
import dotenv from 'dotenv';

dotenv.config();
const { env } = process
// @ts-ignore
const client = createClient({url: 'redis://cache:6379'});

export const startRedis = async() => {
    await client.connect();
}

export const setToken = async (token:string) => {
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.set('token', token, {
        EX: 3500
    });
}

export const getCache = async () => {
    client.on('error', (err) => console.log('Redis Client Error', err));
    return await client.get('token')
}
