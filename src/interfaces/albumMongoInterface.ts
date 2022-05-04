import { Document } from 'mongoose'

export interface AlbumMongoInterface extends Document {
    name: string;
    artist: string;
    release: string;
    image: string;
    total_track: number;
}
