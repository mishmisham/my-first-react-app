import { userDB } from '#userDB/userDB.js';
const {
    users,
} = userDB.data;

export const getUserByID = async (id) => {
    const user = await users.content.findByPk(id);
    return {
        id: user.id,
        name: user.name
    };
}