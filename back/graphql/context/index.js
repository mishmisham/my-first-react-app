


import { userDB } from '#userDB/userDB.js';
import jwt from 'jsonwebtoken';
// import { AuthenticationError } from 'apollo-server-express';
import { accessGroupsByUserID } from '#userDB_fun/accessGroups/accessGroupsByUserID.js'
import { getFullUserByID } from '#userDB_fun/user/getUserByID.js'

const verifyToken = async (token) => {

  const {
    users,
    // accessList
  } = userDB.data;

  try {
    if (!token) {
      return null;
    }

    const data = await jwt.verify(token, process.env.STATIC_SECRET_FOR_ACCESS_TOKEN);

    if (!data) {
      return null
    }
    
    const userSession = await users.session.findOne({ where: {
      user_id: data.id,
      access_token: token
    } });

    if (!userSession) {
      return null;
    }

    const nowTime = (new Date().getTime() / 1000);

    if (nowTime > data.exp) {
      return null;
    }

    const user = await getFullUserByID(data.id);
    const { rows } = await accessGroupsByUserID(data.id)
    return {
      user,
      access: rows
    }
  } catch (error) {
    // throw new AuthenticationError(error.message);
    return null;
  }
};

export const context = async ({ req, res }) => {
  const { token } = req.cookies;
  const user = await verifyToken(token);
  return { 
    user,
    request: req,
    response: res
  };
};
