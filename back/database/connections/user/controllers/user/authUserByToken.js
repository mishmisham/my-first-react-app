import { userDB } from '#userDB/userDB.js';
import jwt from 'jsonwebtoken';
import { initUserSession } from '#userDB_fun/userSession/initUserSession.js';
import { getFullUserByID } from '#userDB_fun/user/getUserByID.js'

export const authUserByToken = async (input) => {
   
    const {token, mode} = input;
    
    const {
        users,
        // accessList
    } = userDB.data;

    const checkRule = mode === 'accessToken' ? { access_token: token } : { refresh_token: token };
    
    console.log(checkRule)
    
    const userSession = await users.session.findOne({ where: checkRule });
    console.log(userSession)

    if (!userSession) {
        return null;
    }

    const secret = mode === 'accessToken' ? process.env.STATIC_SECRET_FOR_ACCESS_TOKEN : userSession.secret; 

    const data = await jwt.verify(token, secret);
    console.log(data)
    if (!data) {
        return null;
    }

    const nowTime = (new Date().getTime() / 1000);

    if (nowTime > data.exp) {
      return null;
    }

    const user = await getFullUserByID(data.id);
    console.log(user.dataValues)
    const {
        accessToken,
        refreshToken
    } = await initUserSession(user.dataValues);

    const result = {
        data: {
            id: user.dataValues.id,
            name: user.dataValues.name,
            email: user.dataValues.email,
            accessToken,
            refreshToken
        }
    }

    return result;
}