import { userDB } from '#userDB/userDB.js';
import jwt from 'jsonwebtoken';
import { logoutUser } from '#userDB_fun/userSession/logoutUser.js';
import { createSessionObject } from './utils/createSessionObject.js';

export const refreshTokens = async (input) => {

    const {
        refresh_token,
    } = input;

    const {
        users,
    } = userDB.data;

    const userSession = await users.session.findOne({where: {
        refresh_token: refresh_token,
    }});

    // console.log(userSession)

    if (!userSession) {
        return null;
    }

    const data = await jwt.verify(refresh_token, userSession.dataValues.secret);
    
    if (!data) {
        return null;
    }

    const nowTime = (new Date().getTime() / 1000);
    if (nowTime > data.exp) {
      return null;
    }

    const session = createSessionObject(userSession.dataValues.user_id);

    // console.log(session)

    await logoutUser(userSession.dataValues.user_id);
    await users.session.create({
        ...session
    });

    return {
        data: {
            accessToken: session.access_token,
            refreshToken: session.refresh_token
        }
    }
}