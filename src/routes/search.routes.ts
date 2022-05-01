import { Request, Response, Router } from 'express';
import fetch from 'node-fetch';
import { getCache } from '../utils/cache';
import refresh from '../utils/refresh';

const searchRoutes = Router();

searchRoutes.post('/search', async (req: Request, res: Response) => {
    const { q } = req.body;
    const queryParams = new URLSearchParams({
        type: 'album',
        q,
        market: 'CL',
    })
    const token = await getCache();
    console.log(token)
    if (!token) {
        await refresh();
    }

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
