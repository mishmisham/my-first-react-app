import { userDB } from '../../userDB.js';
import { responseTemplate } from '../../interface/responseTemplate.js';

const {
    accessList
} = userDB.data;

export const removeUserFromAccessGroup = async (params) => {
    await accessList.users.destroy({
        where: {
            user_id: params.user_id,
            group_id: params.group_id,
        }
    });

    return {
        ...responseTemplate,
        message: 'user removed from group'
    }
}
