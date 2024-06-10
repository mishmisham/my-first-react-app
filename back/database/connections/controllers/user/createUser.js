import { userDB } from '../../userDB.js';
import { responseTemplate } from '../../interface/responseTemplate.js';
import { validateEmptyFields } from './utils/validateEmptyFields.js';
import { encryptPassword } from './utils/encryptPassword.js';

const {
    users,
} = userDB.data;

const validateUser = async(req) => {
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

export const createUser = async (req) => {
    const data = req.body;

    const errorList = await validateUser(data);

    if (errorList.length) {
        return {
            ...responseTemplate,
            status: 500,
            message: errorList.join(', '),
            errors: errorList
        }
    }

    const {
        name, 
        email,
        password,
    } = data;

    await users.content.create({
        name: JSON.stringify(name),
        email: JSON.stringify(email),
        password: encryptPassword(JSON.stringify(password)),
    });
    
    return {
        ...responseTemplate,
        message: 'User created',
    }
}