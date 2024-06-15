import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthenticationError } from 'apollo-server-express';


import { userDB } from '../../../database/connections/user/userDB.js'
import { User } from '../../../database/connections/user/model/user.js';


const {
  users,
} = userDB.data;


export const userResolvers = {
  Mutation: {

    async register(root, args, context) {
      const { name, email, password } = args.input;
      const result = await User.create({ name, email, password });
      return result
    },

    async login(root, { input }, context) {
      const { email, password } = input;

      const user = await User.findOne({ where: { email } });

      // if (user && bcrypt.compareSync(password, user.password)) {

      //   // todo - add secret generator
      //   const token = jwt.sign({ id: user.id }, 'mySecret');

      //   return { ...user.toJSON(), token };
      // }

      return {...user.toJSON()};

      // throw new AuthenticationError('Invalid credentials');
    },
  },

  Query: {
    async getAllUsers(root, args, context) {
      const Users = await users.content.findAll();
      return Users.map(user => {
        const { id, name } = user;
        return {
          id,
          name
        }
      });
    },

    async getUserByID(_, { input }, context) {
      const user = await User.findByPk(input.id);
      return {
        id: user.id,
        name: user.name
      };
    },

    async getUserByEmail(_, { input }, context) {
      const { email } = input;
      const user = await User.findOne({ where: { email } });
      return {
        id: user.id,
        name: user.name
      };
    },
  },
};
