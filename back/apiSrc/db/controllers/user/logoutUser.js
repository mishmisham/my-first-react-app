import { db } from '../../db.js';
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