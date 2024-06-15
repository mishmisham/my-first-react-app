import { userDB } from '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const deleteAccessGroup = async (input) => {
    const { id } = input;
    await accessList.groups.destroy({
        where: {
            id
        }
    });

    await accessList.users.destroy({
        where: {
            group_id: id
        }
    });

    return {
        deleted: true
    };
}