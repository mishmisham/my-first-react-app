import express from 'express';
import cors from 'cors';
import http, { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';
import { context } from './context/index.js';

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

await apolloServer.start()

apolloServer.applyMiddleware({ app, path: '/ql' });

export const server = createServer(app);
