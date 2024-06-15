import { userDB } from '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const accessGroupsByUserID = async (id) => {
    const { count, rows } = await accessList.users.findAndCountAll({
        where: {
            user_id: id
        }
    });

    return {
        count,
        rows,
    }
}