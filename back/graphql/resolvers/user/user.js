import http from 'http';
import { v4 as uuidv4 } from 'uuid';

import { createUser } from '#userDB_fun/user/createUser.js';
import { authUser } from '#userDB_fun/user/authUser.js';
import { getAllUsers } from '#userDB_fun/user/getAllUsers.js';
import { getUserByID } from '#userDB_fun/user/getUserByID.js';
import { getUserByEmail } from '#userDB_fun/user/getUserByEmail.js';
import { authUserByToken } from '#userDB_fun/user/authUserByToken.js';
import { refreshTokens } from '#userDB_fun/userSession/refreshTokens.js';
import { logoutUser } from '#userDB_fun/userSession/logoutUser.js';

import {
  ACCESS_TOKEN_TIMEOUT,
  REFRESH_TOKEN_TIMEOUT
} from '#configs/config.js'

const setContextToken = (context, token, isAccess=true) => {
  context.token = token;
  context.response.cookie('token', token, {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: isAccess ? ACCESS_TOKEN_TIMEOUT : REFRESH_TOKEN_TIMEOUT,
  });
}

export const userResolvers = {
  Mutation: {

    async register(root, { input }, context) {
      const { name, email, password } = input;
      const result = await createUser({ name, email, password });
      return result
    },

    async login(root, { input }, context) {
      const result = await authUser(input);

      if (!result.errors) {
        setContextToken(context, result.data.accessToken);
      }

      // console.log(context.user)
      return result;
    },

    async reAuthorize(root, { input }, context) {
      
      const result = await authUserByToken(input);
      
      if (!result.errors) {
        setContextToken(context, result.data.accessToken);
      }

      return result;
    },

    async refreshTokens(root, { input }, context) {
      
      const result = await refreshTokens(input);

      if (!result.errors) {
        setContextToken(context, result.data.accessToken);
      }

      return result;
    },

    async logout (root, { input }, context) { 
      const result = await logoutUser(input.id);
      // context.response.cookie('token', '');
      return result;
    }
  },

  Query: {
    async getAllUsers(root, args, context) {
      const result = await getAllUsers();
      return result;
    },

    async getUserByID(_, input, context) {
      const result = await getUserByID(input.id);
      return result;
    },
   
    async getUserByEmail(_, input, context) {
      const { email } = input;
      const result = await getUserByEmail(email);
      return result;
    },
  },
};
