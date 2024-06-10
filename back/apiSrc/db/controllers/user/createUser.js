import { db } from '../../db.js';
import { responseTemplate } from '../../interface/responseTemplate.js';
import { validateEmptyFields } from './utils/validateEmptyFields.js';
import { encryptPassword } from './utils/encryptPassword.js';

const {
    users,
} = db.data;

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

    const newUser = await users.content.create();

    await users.content.update({
        name: JSON.stringify(name),
        email: JSON.stringify(email),
        password: encryptPassword(JSON.stringify(password)),
    }, {
        where: {
            id: newUser.id
        }
    });
    
    return {
        ...responseTemplate,
        message: 'User created',
    }
}