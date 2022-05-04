import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {startRedis} from './utils/cache';
import mongoose from 'mongoose';
import {MONGO} from './config/mongo';
import searchRoutes from './routes/search.routes';
import favoriteRoutes from './routes/favorite.routes';


dotenv.config();

startRedis();
const { env } = process
mongoose.connect(MONGO.url!)
    .then(() => console.log('Connected Database'))
    .catch(err => console.log(err))
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(searchRoutes)
app.use(favoriteRoutes)
const port = env.PORT;

// status
app.get('/status', (_req: Request, res: Response) => {
    console.log('Status...')
    console.log(env)
    res.send({response:'Music is Alive'})
})

app.listen(port, () => {
    console.log(`Running Music Services in ${port}`)
})
