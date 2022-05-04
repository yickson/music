import {Schema} from 'mongoose';
import {AlbumMongoInterface} from '../interfaces/albumMongoInterface';

const albumSchema = new Schema<AlbumMongoInterface>({
    name: { type: String, required: true },
    release: { type: String, required: true },
    image: String
})

export default albumSchema;
