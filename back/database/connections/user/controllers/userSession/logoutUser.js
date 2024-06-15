import { userDB } from '#userDB/userDB.js';
const {
    users,
} = userDB.data;

export const logoutUser = async (id) => {
    await users.session.destroy({
        where: {
            user_id: id
        }
    });
}