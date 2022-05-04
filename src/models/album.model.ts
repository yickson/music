import { Schema, model } from 'mongoose'
import { AlbumMongoInterface } from '../interfaces/albumMongoInterface';

const albumSchema = new Schema<AlbumMongoInterface>({
    id: { type: String, required: true, unique: true},
    name: { type: String, required: true },
    artist: { type: String, required: true },
    release: { type: String, required: true },
    total_track: Number,
    image: String
})

export const Album = model<AlbumMongoInterface>('Album', albumSchema);
