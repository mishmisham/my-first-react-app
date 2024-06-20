import { userDB } from '#userDB/userDB.js';
import { logoutUser } from '#userDB_fun/userSession/logoutUser.js';
import { generateRandomString, STATIC_SECRET_FOR_ACCESS_TOKEN } from './utils/generateRandomString.js';
import jwt from 'jsonwebtoken';

const SECRET_LENGTH = 32;
const ACCESS_TOKEN_TIMEOUT = 3 * 60 * 1000;
const REFRESH_TOKEN_TIMEOUT = 24 * 60 * 60 * 1000;

export const initUserSession = async (userData) => {

    const {
        users,
    } = userDB.data;

    const userSession = await users.session.findOne({user_id: userData.id});

    if (userSession) {
        await logoutUser(userData.id);
    }
    
    const secretAccess = STATIC_SECRET_FOR_ACCESS_TOKEN;
    const secretRefresh = generateRandomString(SECRET_LENGTH);
    const nowTime = Math.round(Date.now() / 1000);
    const expireAccess = nowTime + ACCESS_TOKEN_TIMEOUT;
    const expireRefresh = nowTime + REFRESH_TOKEN_TIMEOUT;

    const accessToken = jwt.sign({ 
        id: userData.id,
        exp: expireAccess
    }, secretAccess);

    const refreshToken = jwt.sign({ 
        id: userData.id,
        exp: expireRefresh
    }, secretRefresh);
    
    const session = {
        user_id: userData.id,
        access_token: accessToken,
        refresh_token: refreshToken,
        issued_at: nowTime,
        refresh_expires_in: expireRefresh,
        access_expires_in: expireAccess,
        secret: secretRefresh,
    }

    await users.session.create({
        ...session
    });

    return {
        accessToken,
        refreshToken
    }
}