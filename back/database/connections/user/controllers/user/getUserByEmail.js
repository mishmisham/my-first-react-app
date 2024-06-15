import { userDB } from '#userDB/userDB.js';
const {
    users,
} = userDB.data;

export const getUserByEmail = async (email) => {
    const user = await users.content.findOne({ where: { email } });
    return {
        id: user.id,
        name: user.name
    };
}