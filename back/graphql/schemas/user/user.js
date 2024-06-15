import { gql } from 'apollo-server-express';

export const userType = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
    }

    type UserPublic {
        id: Int!
        name: String!
    }

    extend type Mutation {
        register(input: RegisterInput!): RegisterResponse
        login(input: LoginInput!): LoginResponse
        logout(input: UserAuthData!): Boolean
    }

    extend type Query {
        getAllUsers: [UserPublic!]
        getUserByID(id: Int!): UserPublic
        getUserByEmail(email: String!): UserPublic
    }

    type RegisterResponse {
        id: Int!
        name: String!
        email: String!
    }

    input RegisterInput {
        name: String!
        email: String!
        password: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }

    input UserAuthData {
        id: Int!
        token: String!
    }

    type LoginResponse {
        id: Int!
        name: String!
        email: String!
        refreshToken: String
        accessToken: String!
    }
`;
