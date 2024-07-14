import React from "react";
import fs from 'fs';
import { Provider } from 'react-redux';
import { routesArray } from '../../src/routes/routesData.js';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider
} from "react-router-dom/server";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import serializeJavascript from "serialize-javascript";
import { createFetchRequest } from './request';
import { renderToPipeableStream } from 'react-dom/server';
export default async (req, res, store, contextData) => {
  
  const apolloClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: process.env.GRAPHQL_HOST,
      credentials: 'same-origin', // ||  include
      headers: {
        cookie: req.header('Cookie'),
      },
    }),
    cache: new InMemoryCache(),
  });

  const handler = createStaticHandler(routesArray);
  const fetchRequest = createFetchRequest(req, res);
  const context = await handler.query(fetchRequest);
  const router = createStaticRouter(
    handler.dataRoutes,
    context,
    {
      future: {
        v7_partialHydration: true,
      }
    },
  );

  const initialApolloState = apolloClient.extract();

  // /src_layouts_default_jsx.css - нужно будет поменять при смене темы
  const App = () => {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/server.css"></link>
          <link rel="icon" type="image/x-icon" href="/client/favicon.ico"></link>
          <title>App</title>
        </head>
        <body>
          <div id="root">
            <ApolloProvider client={apolloClient}>
              <Provider store={store}>
                <StaticRouterProvider
                  router={router}
                  context={context}
                  location={req.url}
                />
              </Provider>
            </ApolloProvider>
          </div>
        </body>
      </html>
    );
  }

  const { pipe, abort } = renderToPipeableStream(
    <App/>,
    {
      bootstrapScripts: [
        '/client/vendor.js',
        '/client/client.js',
      ],
      bootstrapScriptContent: `
        window.__APOLLO_STATE__ = ${serializeJavascript(initialApolloState)};
        window.__INITIAL_STATE__ = ${serializeJavascript(store.getState())};
      `,
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        pipe(res);
      }
    }
  );
};
