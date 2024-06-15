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
        grantAccessGroupToUser(input: GrantAccessListType!): Boolean
        removeUserFromAccessGroup(input: GrantAccessListType!): Boolean
    }

    extend type Query {
        getAllAccessGroups: [AccessGroup!]
        getAccessGroup(id: Int!): AccessGroup!
        accessGroupsByUserID(id: Int!): UserAccesGroupList!
    }



    type UserAccesGroupList {
        rows: [AccessGroup!]
        count: Int!
    }

    input GrantAccessListType {
        user_id: Int!
        group_id: Int!
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
