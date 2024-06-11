import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import graphql from 'graphql';
import dotenv from 'dotenv';
import { server } from '../graphql/server.js';

dotenv.config();

// const QueryRoot = new graphql.GraphQLObjectType({
//     name: 'Query',
//     fields: () => ({
//         hello: {
//             type: graphql.GraphQLString,
//             resolve: () => "Hello world!"
//         }
//     })
// })

// const schema = new graphql.GraphQLSchema({ query: QueryRoot });




export const graphQLServer = (port) => {
    process.on('uncaughtException', (err) => {
      console.error(`${(new Date()).toUTCString()} uncaughtException:`, err);
      process.exit(0);
    });

    process.on('SIGINT', (err) => {
      console.error(`${(new Date()).toUTCString()} SIGINT:`, err);
      process.exit(0);
    });

    process.on('SIGTERM', (err) => {
      console.error(`${(new Date()).toUTCString()} SIGTERM:`, err);
      process.exit(0);
    });
    
    process.on('ELIFECYCLE', (err) => {
      console.error(`${(new Date()).toUTCString()} ELIFECYCLE:`, err);
      process.exit(0);
    });

    process.on('unhandledRejection', (err) => {
      console.error(`${(new Date()).toUTCString()} unhandledRejection:`, err);
    });
    
    server.listen({ port }, () => console.log("🚀 GraphQL listening at http://localhost:%s/ql/", port));
}
