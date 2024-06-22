
import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const configureApolloClient = () => {

  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_HOST,
    credentials: 'include',  // || same-origin
  });


  const authLink = setContext(async (_, { headers }) => {
    // const token = Cookies.get('token');
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

  return client;

}