import { generateRandomString } from './generateRandomString.js';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_TIMEOUT, REFRESH_TOKEN_TIMEOUT, SECRET_LENGTH } from '#configs/config.js';

export const createSessionObject = (iserID) => {
    const secretAccess = process.env.STATIC_SECRET_FOR_ACCESS_TOKEN;
    const secretRefresh = generateRandomString(SECRET_LENGTH);
    const nowTime = Math.round(Date.now() / 1000);
    const expireAccess = nowTime + ACCESS_TOKEN_TIMEOUT;
    const expireRefresh = nowTime + REFRESH_TOKEN_TIMEOUT;

    const accessToken = jwt.sign({ 
        id: iserID,
        exp: expireAccess
    }, secretAccess);

    const refreshToken = jwt.sign({ 
        id: iserID,
        exp: expireRefresh
    }, secretRefresh);
    
    const session = {
        user_id: iserID,
        access_token: accessToken,
        refresh_token: refreshToken,
        issued_at: nowTime,
        secret: secretRefresh,
    }

    return session;
}