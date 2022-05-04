import dotenv from 'dotenv'

dotenv.config();

const { env } = process

export const MONGO = {
    url: env.MONGO_URL + '/music',
}
