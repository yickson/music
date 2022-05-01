import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {startRedis} from './utils/cache';
import searchRoutes from './routes/search.routes';


dotenv.config();

startRedis();
const { env } = process
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(searchRoutes)
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
