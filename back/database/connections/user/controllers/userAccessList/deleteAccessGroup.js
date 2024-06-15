import { userDB } from '../../userDB.js';
import { responseTemplate } from '../../interface/responseTemplate.js';

const {
    accessList
} = userDB.data;

export const deleteAccessGroup = async (id) => {
    await accessList.groups.destroy({
        where: {
            id: id
        }
    });

    await accessList.users.destroy({
        where: {
            group_id: id
        }
    });

    return {
        ...responseTemplate,
        message: 'access groups deleted'
    }
}
