import { db } from '../../db.js';
import { responseTemplate } from '../../interface/responseTemplate.js';

const {
    accessList
} = db.data;

export const createAccessGroup = async (name) => {
    const newGroup = await accessList.groups.create();
    await accessList.groups.update({
            name,
        },
        {
            where: {
                id: newGroup.id
            }
        }
    );

    return {
        ...responseTemplate,
        data: {
            id: newGroup.id,
            name,
        }
    }
}
