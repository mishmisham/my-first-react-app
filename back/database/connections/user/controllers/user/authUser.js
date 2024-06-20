import { userDB } from '#userDB/userDB.js';
import { initUserSession } from '#userDB_fun/userSession/initUserSession.js';
import { checkAuthErrors } from './validation/checkAuthErrors.js';


export const authUser = async (input, req) => {
    const { errorList, userData } = await checkAuthErrors(input);

    console.log(input)

    console.log(errorList, userData)

    if (errorList.length) {
        return {
            message: errorList.join(', '),
            errors: errorList
        }
    }

    const {
        accessToken,
        refreshToken
    } = await initUserSession(userData);

    const result = {
        id: userData.id,
        name: userData.name,
        email: input.email,
        accessToken,
        refreshToken
    }

    console.log(result)

    return result;
}