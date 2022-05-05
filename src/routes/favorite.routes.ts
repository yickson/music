import {Router} from 'express';
import favoriteController from '../controllers/favorite.controller';

const favoriteRoutes = Router();

favoriteRoutes.post('/add', favoriteController.add);
favoriteRoutes.post('/delete', favoriteController.del);
favoriteRoutes.get('/get', favoriteController.get);

export default favoriteRoutes;
