import express from 'express';
import cors from 'cors';
import http, { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './schemas';
import { resolvers } from './resolvers';
import { context } from './context';

const app = express();

app.use(cors());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: {
    settings: {
      'schema.polling.enable': false,
      'editor.fontSize': 18,
    },
  },
});

apolloServer.applyMiddleware({ app, path: '/ql' });

export const server = createServer(app);
