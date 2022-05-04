import { Router } from 'express';
import searchController from '../controllers/search.controller';

const searchRoutes = Router();

searchRoutes.post('/search', searchController.getAlbums)

export default searchRoutes;
