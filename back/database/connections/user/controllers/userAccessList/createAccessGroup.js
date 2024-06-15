import { userDB } from '../../userDB.js';
import { responseTemplate } from '../../interface/responseTemplate.js';

const {
    accessList
} = userDB.data;

export const createAccessGroup = async (name) => {
    const newGroup = await accessList.groups.create({
        name,
    });

    return {
        ...responseTemplate,
        data: {
            id: newGroup.id,
            name,
        }
    }
}
