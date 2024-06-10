import { db } from '../../db.js';
import { responseTemplate } from '../../interface/responseTemplate.js';

const {
    accessList
} = db.data;

export const grantAccessGroupToUser = async (params) => {

    const isset = await accessList.users.findOne({
        user_id: params.user_id,
        group_id: params.group_id
    })

    if (isset) {
        const errorsList = ["This user has already been added to this group."]
        return {
            ...responseTemplate,
            status: 500,
            message: errorsList.join(''),
            errors: errorsList
        }
    }
   
    const newItem = await accessList.users.create();
    await accessList.groups.update({
            user_id,
        },
        {
            where: {
                id: newItem.id
            }
        }
    );

    return {
        ...responseTemplate,
        message: 'success'
    }
}