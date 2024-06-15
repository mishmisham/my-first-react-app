import { userDB } from '#userDB/userDB.js';
import { validateEmptyFields } from './validateEmptyFields.js';

export const  validateRegisterUser = async(req) => {

    const {
        users,
    } = userDB.data;

    const fields = ['email', 'name', 'password'];
    
    const errorList = [
        ...validateEmptyFields(req, fields)
    ];
    
    if (errorList.length) {
        return errorList;
    }

    const issetEmail = await users.content.findOne({email: JSON.stringify(req.email)});

    if (issetEmail) {
        errorList.push('This email has already been used');
    }

    return errorList;
}