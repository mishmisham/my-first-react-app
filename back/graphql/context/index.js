


import { User } from '../../database/connections/user/model/user.js';

import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';


const verifyToken = async (token) => {
  try {
    if (!token) return null;
    // await get secret
    const { id } = await jwt.verify(token, 'mySecret');
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new AuthenticationError(error.message);
  }
};

export const context = async ({ req }) => {
  // const token = (req.headers && req.headers.authorization) || '';
  // const user = await verifyToken(token)
  return { user : 'user' };
};
