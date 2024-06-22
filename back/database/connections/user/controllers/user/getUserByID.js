import { userDB } from '#userDB/userDB.js';
const {
    users,
} = userDB.data;

export const getUserByID = async (id) => {
    const user = await users.content.findOne({ where: { id }});
    return {
        id: user.id,
        name: user.name,
    };
}

export const getFullUserByID = async (id) => {
    const user = await users.content.findOne({ where: { id }});
    return {
        ...user,
    };
}