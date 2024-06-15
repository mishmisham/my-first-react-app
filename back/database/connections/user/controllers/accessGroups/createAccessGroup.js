import { userDB } from '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const createAccessGroup = async (input) => {
    const { name } = input;
    const result = await accessList.groups.create({ name });
    return result;
}