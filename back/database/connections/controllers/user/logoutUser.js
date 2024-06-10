import { db } from '../../userDB.js';
const {
    users,
} = db.data;

export const logoutUser = async (id) => {
    await users.session.destroy({
        where: {
            user_id: id
        }
    });
}