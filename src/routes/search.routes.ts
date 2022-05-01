import {Request, Response, Router} from 'express';
import fetch from 'node-fetch';

const searchRoutes = Router();

// Routes search albums in Spotify

searchRoutes.post('/search', async (req: Request, res: Response) => {
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

export default searchRoutes;
