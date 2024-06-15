import { userDB } from '#userDB/userDB.js';
import { validateRegisterUser } from './validation/validateRegisterUser.js';
import { encryptPassword } from './utils/encryptPassword.js';


export const createUser = async (input) => {
    const {
        users,
    } = userDB.data;
    // const errorList = await validateRegisterUser(data);
    // if (errorList.length) {
    //     return {
    //         message: errorList.join(', '),
    //         errors: errorList
    //     }
    // }

    const {
        name, 
        email,
        password,
    } = input;

    const result = await users.content.create({
        name,
        email,
        password,
    });
    
    return result;
}