import { userDB } from '#userDB/userDB.js';
const {
    users,
} = userDB.data;

export const getAllUsers = async () => {
    const userList = await users.content.findAll();
    return userList.map(user => {
      const { id, name } = user;
      return {
        id,
        name
      }
    });
}