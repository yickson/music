import {Request, Response} from 'express';
import {Album} from '../models/album.model';
import {AlbumMongoInterface} from '../interfaces/albumMongoInterface';
import {Favorite} from '../models/favorite.model';

const favoriteController = {

    add: async (req: Request, res: Response) => {
        console.log('Add favorite')
        const { id } = req.body

        const queryResult:AlbumMongoInterface | null= await Album.findOne({id: id}).exec()
        if (!queryResult) {
            res.status(404).send({
                data: null,
                message: 'error'
            })
        } else {
            const {id, name, artist, release, total_track, image} = queryResult;
            await Favorite.create({id, name, artist, release, total_track, image},
                (error => console.log('Error DB', error)));
            res.send({
                data: queryResult,
                message: 'success'
            })
        }

    },

    del: async (req: Request, res: Response) => {
        console.log('Delete favorite')
        const { id } = req.body

        const queryResult:AlbumMongoInterface | null= await Favorite.findOne({id: id}).exec()
        console.log(queryResult)
        if (!queryResult) {
            res.status(404).send({
                data: null,
                message: 'error'
            })
        } else {
            const { id } = queryResult;
            await Favorite.deleteOne({ id: id });
            res.send({
                data: null,
                message: 'success'
            })
        }
    }
}

export default favoriteController;
