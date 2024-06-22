import { userDB } from '#userDB/userDB.js';
import { logoutUser } from '#userDB_fun/userSession/logoutUser.js';
import { createSessionObject } from './utils/createSessionObject.js';

export const initUserSession = async (userData) => {

    const {
        users,
    } = userDB.data;

    const userSession = await users.session.findOne({where: {user_id: userData.id}});

    if (userSession) {
        await logoutUser(userData.id);
    }
    
    const session = createSessionObject(userData.id);

    await users.session.create({
        ...session
    });

    return {
        accessToken: session.access_token,
        refreshToken: session.refresh_token
    }
}