import {Router} from 'express';
import favoriteController from '../controllers/favorite.controller';

const favoriteRoutes = Router();

favoriteRoutes.post('/add', favoriteController.add);
