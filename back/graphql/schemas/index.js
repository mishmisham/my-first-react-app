import { gql } from 'apollo-server-express';
import { userType } from './user/user.js';
import { accessGroupType } from './user/accessGroup.js';

const rootType = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

export const typeDefs = [
    rootType,
    userType,
    accessGroupType
];