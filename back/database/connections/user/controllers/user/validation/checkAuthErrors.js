import { userDB } from '#userDB/userDB.js';
import { validateEmptyFields } from './validateEmptyFields.js';
import bcrypt from 'bcryptjs';

export const checkAuthErrors = async(input) => {

    const {
        users,
    } = userDB.data;

    const {
        email,
        password,
    } = input;

    const fields = ['email', 'password'];
    
    const errorList = [
        ...validateEmptyFields(input, fields)
    ];

    if (errorList.length) {
        return {
            errorList,
            userData: {}
        };
    }

    const userData = await users.content.findOne({ where: { email } });

    if (!userData) {
        errorList.push('Email not found');
    }

    const passwordOk = await bcrypt.compare(password, userData.password);

    if (!passwordOk) {
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