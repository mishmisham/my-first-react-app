import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routesArray } from "../../src/routes/routesData";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

const renderApp = () => {

  const client = new ApolloClient({
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://localhost:4000/ql/',
      credentials: 'same-origin',
    }),
    ssrForceFetchDelay: 100,
  });

  
  const router = createBrowserRouter(routesArray);
  ReactDOM.hydrateRoot(
    document.querySelector('#root'),
    <React.StrictMode>
      <ApolloProvider client={client}>
        <RouterProvider router={router}/>
      </ApolloProvider>
    </React.StrictMode>
  );
}

renderApp();
