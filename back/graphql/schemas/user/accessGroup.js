import { gql } from 'apollo-server-express';

export const accessGroupType = gql`
    type AccessGroup {
        id: Int!
        name: String!
    }

    extend type Mutation {
        createAccessGroup(input: AccessGroupCreateInput!): AccessGroup
        updateAccessGroup(input: AccessGroupInput!): AccessGroup
        deleteAccessGroup(input: AccessGroupInput!): AccessGroupDeleteResponse
    }

    extend type Query {
        getAllAccessGroups: [AccessGroup!]
        getAccessGroup(id: Int!): AccessGroup!
    }

    input AccessGroupCreateInput {
        name: String!
    }

    input AccessGroupInput {
        id: Int!
        name: String
    }

    type AccessGroupDeleteResponse {
        deleted: Boolean!
    }
`;
