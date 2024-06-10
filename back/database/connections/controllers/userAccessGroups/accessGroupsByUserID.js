import { db } from '../../db.js';
import { responseTemplate } from '../../interface/responseTemplate.js';

const {
    accessList
} = db.data;

export const accessGroupsByUserID = async (id) => {
    const { count, rows } = await accessList.users.findAndCountAll({
        where: {
            user_id: id
        }
    });

    return {
        ...responseTemplate,
        data: {
            count,
            rows,
        }
    }
}