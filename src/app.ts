import express, {Request, Response} from 'express';
import querystring from 'node:querystring'
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

dotenv.config({
    path: `./.env.${process.env.NODE_ENV}`
})

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
const port = process.env.PORT;

const credentials = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
}

app.get('/status', (_req: Request, res: Response) => {
    console.log('Status...')
    res.send({response:'Music is Alive'})
})

app.get('/login', async (req: Request, res: Response) => {
    const { clientId, clientSecret } = credentials
    const basic = `${clientId}:${clientSecret}`;
    const basicEncode = Buffer.from(basic).toString('base64');
    const formQuery = new URLSearchParams({grant_type: 'client_credentials'})
    const requestSpot = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: formQuery,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${basicEncode}`
        }
    })

    const response = await requestSpot.json();
    const { access_token } = response;
    res.cookie('token', access_token, {maxAge: 3500000})
    res.send({
        data: response,
        cookies: req.cookies
    })
})

app.post('/search', async (req: Request, res: Response) => {
    const { q } = req.body;
    const token = req.cookies.token;
    const queryParams = new URLSearchParams({
        type: 'album',
        q,
        market: 'CL',
    })
    const requestSearch = await fetch('https://api.spotify.com/v1/search?' + queryParams, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const response = await requestSearch.json();
    res.send({
        data: response
    })

})

app.listen(port, () => {
    console.log(`Running Music Services in ${port}`)
})
