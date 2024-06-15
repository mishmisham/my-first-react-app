import { userDB } from '#userDB/userDB.js';
import { logoutUser } from '#userDB_fun/userSession/logoutUser.js';

export const initUserSession = async (userData) => {

    const {
        users,
    } = userDB.data;

    const userSession = await users.session.findOne({user_id: userData.id});

    if (userSession) {
        await logoutUser(userData.id);
    }

    const secret = generateRandomString(SECRET_LENGTH);
    const nowTime = Math.round(Date.now() / 1000);
    const expireAccess = nowTime + ACCESS_TOKEN_TIMEOUT;
    const expireRefresh = nowTime + REFRESH_TOKEN_TIMEOUT;
    
    const accessToken = 'qwerty'
   
    const refreshToken = 'qwerty'
   
    const session = {
        user_id: userData.id,
        access_token: accessToken,
        refresh_token: refreshToken,
        issued_at: nowTime,
        refresh_expires_in: expireRefresh,
        access_expires_in: expireAccess,
        secret,
    }

    await users.session.create({
        ...session
    });

    return {
        accessToken,
        refreshToken
    }
}