import express from 'express';
import cors from 'cors';
import http, { createServer } from 'http';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';
import { context } from './context/index.js';

const app = express();

const httpServer = http.createServer(app);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: {
    settings: {
      'schema.polling.enable': false,
      'editor.fontSize': 18,
    },
  },
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      requestDidStart(requestContext) {
        return {
            willSendResponse({ response }) {
                // response.http.headers.set('Access-Control-Allow-Origin', '*');
            },
        };
      },
    },
  ],
});

await apolloServer.start()

app.use(
  '/ql',
  cors({
    // origin: "http://localhost:4000",
    credentials: true,
  }),
  express.json({ limit: '50mb' }),
  expressMiddleware(apolloServer, {
    context,
  }),
);

export const server = createServer(app);
