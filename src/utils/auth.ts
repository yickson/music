import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config({
    path: `./.env.${process.env.NODE_ENV}`
});

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const auth = async () => {
    const basic = `${clientId}:${clientSecret}`;
    const basicEncode = Buffer.from(basic).toString('base64');
    const formQuery = new URLSearchParams({grant_type: 'client_credentials'})
    const requestSpot = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: formQuery,
        headers: {
            'Authorization': `Basic ${basicEncode}`
        }
    })

    return await requestSpot.json();
}

export default auth;
