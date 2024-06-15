import { userDB } from '../../userDB.js';
import { responseTemplate } from '../../interface/responseTemplate.js';
import { validateEmptyFields } from './utils/validateEmptyFields.js';
import { encryptPassword } from './utils/encryptPassword.js';
import { logoutUser } from './logoutUser.js';
import { generateRandomString } from './utils/generateRandomString.js';
// import { generateJWT } from './utils/generateJWT.js';
import {
    ACCESS_TOKEN_TIMEOUT,
    REFRESH_TOKEN_TIMEOUT,
    SECRET_LENGTH
} from './config.js';
const {
    users,
} = userDB.data;

const checkAuthErrors = async(req) => {

    const {
        email,
        password,
    } = req;

    const fields = ['email', 'password'];
    
    const errorList = [
        ...validateEmptyFields(req, fields)
    ];
    
    if (errorList.length) {
        return {
            errorList,
            userData: {}
        };
    }

    const userData = await users.content.findOne({email: JSON.stringify(email)});

    if (!userData) {
        errorList.push('Email not found');
    }

    if (encryptPassword(JSON.stringify(password)) !== userData.password) {
        errorList.push('Incorrect password');
    }

    return {
        errorList,
        userData: errorList.length ? {} : {
            id: userData.id,
            name: userData.name,
        }
    };
}

const initUserSession = async (userData) => {
    const userSession = await users.session.findOne({user_id: userData.id});

    if (userSession) {
        await logoutUser(userData.id);
    }

    const secret = generateRandomString(SECRET_LENGTH);
    const nowTime = Math.round(Date.now() / 1000);
    const expireAccess = nowTime + ACCESS_TOKEN_TIMEOUT;
    const expireRefresh = nowTime + REFRESH_TOKEN_TIMEOUT;
    
    const accessToken = 'qwerty'
    //  await generateJWT({
    //     iss: userData.id, 
    //     sub: 'auth',
    //     exp: expireAccess,
    // }, secret);

    const refreshToken = 'qwerty'
    //  await generateJWT({
    //     iss: userData.id, 
    //     sub: 'auth',
    //     exp: expireRefresh,
    // }, secret);

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

export const authUser = async (req) => {
    const data = req.body;

    const { errorList, userData } = await checkAuthErrors(data);

    if (errorList.length) {
        return {
            ...responseTemplate,
            status: 500,
            message: errorList.join(', '),
            errors: errorList
        }
    }

    const {
        accessToken,
        refreshToken
    } = await initUserSession(userData);

    return {
        ...responseTemplate,
        status: 200,
        data: {
            id: userData.id,
            name: userData.name,
            email: data.email,
            accessToken,
            refreshToken
        }
    }
}