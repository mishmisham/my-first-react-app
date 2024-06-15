
import { createUser } from '#userDB_fun/user/createUser.js';
import { authUser } from '#userDB_fun/user/authUser.js';
import { getAllUsers } from '#userDB_fun/user/getAllUsers.js';
import { getUserByID } from '#userDB_fun/user/getUserByID.js';
import { getUserByEmail } from '#userDB_fun/user/getUserByEmail.js';
import { logoutUser } from '#userDB_fun/userSession/logoutUser.js';

export const userResolvers = {
  Mutation: {

    async register(root, args, context) {
      const { name, email, password } = args.input;
      const result = await createUser({ name, email, password });
      return result
    },

    async login(root, { input }, context) {
      const { email, password } = input;
      const result = await authUser({ email, password });
      return result;
    },

    async logout (root, { input }, context) { 
      const result = await logoutUser(input.id);
      return result;
    }
  },

  Query: {
    async getAllUsers(root, args, context) {
      const result = await getAllUsers();
      return result;
    },

    async getUserByID(_, { input }, context) {
      const result = await getUserByID(input.id);
      return result;
    },
   
    async getUserByEmail(_, { input }, context) {
      const { email } = input;
      const result = await getUserByEmail(email);
      return result;
    },
  },
};
