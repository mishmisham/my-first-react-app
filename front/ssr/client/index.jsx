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
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'

const renderApp = () => {

  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_HOST,
    credentials: 'include',  // || same-origin
  });

  const authLink = setContext((_, { headers }) => {
    // const token = Cookies.get('token');
    // console.log(token)
    return {
      headers: {
        ...headers,
        // authorization: token || '',
      }
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    ssrMode: true,
    link: authLink.concat(httpLink),
    credentials: 'include',
    ssrForceFetchDelay: 100,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers: { 
          cookie: headers && headers.cookie
        },
      });
    },
  });

  const router = createBrowserRouter(routesArray);

  ReactDOM.hydrateRoot(
    document.querySelector('#root'),
      <ApolloProvider client={client}>
        <RouterProvider router={router} suppressHydrationWarning={true}/>
      </ApolloProvider>
  );
}

renderApp();
