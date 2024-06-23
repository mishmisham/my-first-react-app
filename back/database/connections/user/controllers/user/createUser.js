import { userDB } from '#userDB/userDB.js';
import { validateRegisterUser } from './validation/validateRegisterUser.js';
import bcrypt from 'bcryptjs';

export const createUser = async (input) => {
    const {
        users,
    } = userDB.data;

    const errorList = await validateRegisterUser(input);
    if (errorList.length) {
        return {
            errors: {
                message: errorList.join(',\n'),
                errors: errorList
            }
        }
    }

    const {
        name, 
        email,
        password,
    } = input;

    const encryptedPass = await bcrypt.hash(password, 10);

    const result = await users.content.create({
        name,
        email,
        password: encryptedPass,
    });

    return {
        data: {
            name: result.name,
            email: result.email
        }
    };
}