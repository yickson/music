import {ImageInterface} from './image.interface';
import {ArtistInterface} from './artist.interface';

export interface ItemInterface {
    album_type: string;
    artists: ArtistInterface[],
    id: string;
    images: ImageInterface[];
    name: string;
    release_date: string;
    total_tracks: number;
}
