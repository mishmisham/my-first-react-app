import { userDB } from '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const getAllAccessGroups = async () => {
    const accessGroups =  await accessList.groups.findAll();
    return accessGroups;
}