import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import http, { createServer } from 'http';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';
import { context } from './context/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cookieParser());

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
              response.http.headers.set('Access-Control-Allow-Origin', process.env.CLIENT_HOST);
              response.http.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
              response.http.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
    origin: [
      process.env.CLIENT_HOST
    ],
    credentials: true,
  }),
  express.json({ limit: '50mb' }),
  expressMiddleware(apolloServer, {
    context,
  }),
);

export const server = createServer(app);
