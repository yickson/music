import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import searchRoutes from './routes/search.routes';

dotenv.config({
    path: `./.env.${process.env.NODE_ENV}`
})

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(searchRoutes)
const port = process.env.PORT;

app.get('/status', (_req: Request, res: Response) => {
    console.log('Status...')
    res.send({response:'Music is Alive'})
})

app.listen(port, () => {
    console.log(`Running Music Services in ${port}`)
})
