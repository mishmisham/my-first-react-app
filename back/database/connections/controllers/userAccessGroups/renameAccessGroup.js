import { userDB } from '../../userDB.js';
import { responseTemplate } from '../../interface/responseTemplate.js';

const {
    accessList
} = userDB.data;

export const renameAccessGroup = async (params) => {
    await accessList.groups.update({
            name: params.name,
        },
        {
            where: {
                id: params.id
            }
        }
    );

    return {
        ...responseTemplate,
        message: 'success'
    }
}
