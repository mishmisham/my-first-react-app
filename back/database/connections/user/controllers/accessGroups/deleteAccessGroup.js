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

    return {
        deleted: true
    };
}