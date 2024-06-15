import { userResolvers } from './user/user.js';
import { accessGroupResolvers } from './user/accessGroup.js';

export const resolvers = [
    userResolvers,
    accessGroupResolvers,
];
