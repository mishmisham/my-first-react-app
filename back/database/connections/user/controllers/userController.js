import {
    authUser
} from './user/authUser.js';
import {
    createUser
} from './user/createUser.js';
import {
    logoutUser
} from './user/logoutUser.js';

export const authtorizeUser = async (req, res) => {
    try {
        const data = await authUser(req);
        res.status(data.status).json(data);
    } catch (err) {
        console.log(err)
    }
}

export const createNewUser = async (req, res) => {
    try {
        const data = await createUser(req);
        res.status(data.status).json(data);
    } catch (err) {
        console.log(err)
    }
}

export const logOutUser = async (req, res) => {
    try {
        const data = await logoutUser(req);
        res.status(data.status).json(data);
    } catch (err) {
        console.log(err)
    }
}