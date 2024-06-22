


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

export const context = async ({ req, res }) => {
  // const user = await verifyToken(token)
  console.log('2', req.headers)
  // const token = (req.headers && req.headers.authorization) || '';
  return { 
    // token,
    request: req,
    response: res
  };
};
