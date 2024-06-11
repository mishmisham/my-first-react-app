import { gql } from 'apollo-server-express';
import { userType } from './user.js';

const rootType = gql`
    type Query {
        root: String
    }
    type Mutation {
        root: String
    }
`;

export const schemas = [
    rootType,
    userType
];