import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  ApolloProvider,
} from '@apollo/client';
import {
  configureApolloClient
} from './apolloClient';
import { routesArray } from "@/routes/routesData";
import createStore from './createStore';

const renderApp = async () => {
  const apolloClient = configureApolloClient();
  const router = createBrowserRouter(routesArray);
  const store = await createStore();

  ReactDOM.hydrateRoot(
    document.querySelector('#root'),
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <RouterProvider router={router} suppressHydrationWarning={true}/>
        </Provider>
      </ApolloProvider>
  );
}

renderApp();
