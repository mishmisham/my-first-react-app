import { userDB } from '#userDB/userDB.js';
import { validateEmptyFields } from './validateEmptyFields.js';
import { encryptPassword } from '../utils/encryptPassword.js';

export const checkAuthErrors = async(req) => {

    const {
        users,
    } = userDB.data;

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