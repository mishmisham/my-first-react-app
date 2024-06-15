import { userDB } from '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const removeUserFromAccessGroup = async (input) => {
    await accessList.users.destroy({
        where: {
            user_id: input.user_id,
            group_id: input.group_id,
        }
    });

    return true
}
