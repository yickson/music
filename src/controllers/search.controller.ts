import {Request, Response} from 'express';
import {getCache} from '../utils/cache';
import refresh from '../utils/refresh';
import fetch from 'node-fetch';
import {Album} from '../models/album.model';
import {AlbumInterface} from '../interfaces/album.interface';

const searchController = {

    getAlbums: async (req: Request, res: Response) => {
        const { q } = req.body;
        const queryParams = new URLSearchParams({
            type: 'album',
            q,
            market: 'CL',
            include_external: 'audio'
        })
        let token = await getCache();
        if (!token) {
            await refresh();
            token = await getCache();
        }

        const requestSearch = await fetch('https://api.spotify.com/v1/search?' + queryParams, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const response = await requestSearch.json();
        const { items }:AlbumInterface = response.albums;
        for (const item of items) {
            const {id, name, release_date, total_tracks, artists, images} = item;
            await Album.create({
                id: id,
                name: name,
                artist: artists[0].name,
                release: release_date,
                total_track: total_tracks,
                image: images[1].url
            }, (error => console.log('Error DB', error)))
        }
        res.send({
            data: items,
            message: 'success'
        })
    }

}

export default searchController;
