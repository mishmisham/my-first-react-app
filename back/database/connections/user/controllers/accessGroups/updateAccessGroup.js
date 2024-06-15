import { userDB } from '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const updateAccessGroup = async (input) => {
    const { name, id } = input;
    const result = await accessList.groups.update(
        { name },
        {
            where: { id }
        }
    );

    return result;
}