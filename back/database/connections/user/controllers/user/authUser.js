import { userDB } from '#userDB/userDB.js';
import { initUserSession } from '#userDB_fun/userSession/initUserSession.js';
import { checkAuthErrors } from './validation/checkAuthErrors.js';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthenticationError } from 'apollo-server-express';



const {
    users,
} = userDB.data;



export const authUser = async (req) => {
    const data = req.body;

    const { errorList, userData } = await checkAuthErrors(data);

    if (errorList.length) {
        return {
            message: errorList.join(', '),
            errors: errorList
        }
    }

    // if (user && bcrypt.compareSync(password, user.password)) {

    //   // todo - add secret generator
    //   const token = jwt.sign({ id: user.id }, 'mySecret');

    //   return { ...user.toJSON(), token };
    // }

    const {
        accessToken,
        refreshToken
    } = await initUserSession(userData);

    return {
        id: userData.id,
        name: userData.name,
        email: data.email,
        accessToken,
        refreshToken
    }
}