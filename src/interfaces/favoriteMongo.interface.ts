import { Document } from 'mongoose';

export interface Favorite extends Document {
    id: string;
    name: string;
    artist: string;
    release: string;
    image: string;
    total_track: number;
}
