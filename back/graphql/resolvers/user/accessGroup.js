import { AuthenticationError, ApolloError } from 'apollo-server-express';

import { getAccessGroup } from '#userDB_fun/accessGroups/getAccessGroup.js';
import { getAllAccessGroups } from '#userDB_fun/accessGroups/getAllAccessGroups.js';
import { accessGroupsByUserID } from '#userDB_fun/accessGroups/accessGroupsByUserID.js';

import { createAccessGroup } from '#userDB_fun/accessGroups/createAccessGroup.js';
import { updateAccessGroup } from '#userDB_fun/accessGroups/updateAccessGroup.js';
import { deleteAccessGroup } from '#userDB_fun/accessGroups/deleteAccessGroup.js';

import { grantAccessGroupToUser } from '#userDB_fun/accessGroups/grantAccessGroupToUser.js';
import { removeUserFromAccessGroup } from '#userDB_fun/accessGroups/removeUserFromAccessGroup.js';

export const accessGroupResolvers = {
    Mutation: {
        async createAccessGroup(root, input, { user = null }) {
            // if (!user) {
            //     throw new AuthenticationError('You must login');
            // }

            const result = await createAccessGroup(input);
            return result;
        },

        async updateAccessGroup(root, input, { user = null }) {
            const result = await updateAccessGroup(input);
            return result;
        },

        async deleteAccessGroup(root, input, { user = null }) {
            const result = await deleteAccessGroup(input);
            return result;
        },

        async grantAccessGroupToUser(root, input, { user = null }) {
            const result = await grantAccessGroupToUser(input);
            return result;
        },

        async removeUserFromAccessGroup(root, input, { user = null }) {
            const result = await removeUserFromAccessGroup(input);
            return result;
        },
    },

    Query: {
        async getAllAccessGroups(root, args, context) {
            const accessGroups = await getAllAccessGroups();
            return accessGroups;
        },

        async getAccessGroup(root, input, context) {
            const accessGroup = await getAccessGroup(input);
            return accessGroup;
        },

        async accessGroupsByUserID(root, input, { user = null }) {
            const result = await accessGroupsByUserID(input.id);
            return result;
        },
    }
};