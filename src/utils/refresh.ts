import auth from './auth';
import { setToken } from './cache';

const refresh = async () => {
    const {access_token} = await auth();
    await setToken(access_token);
}

export default refresh;
