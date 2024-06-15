import { userDB } from '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const getAllAccessGroups = async (input) => {
    const accessGroups =  await accessList.groups.findAll();
    return accessGroups;
}