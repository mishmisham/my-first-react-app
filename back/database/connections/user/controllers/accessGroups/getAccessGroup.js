import { userDB } from '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const getAccessGroup = async (input) => {
    const accessGroup = await accessList.groups.findByPk(input.id);

    return {
      id: accessGroup.id,
      name: accessGroup.name
    };
}