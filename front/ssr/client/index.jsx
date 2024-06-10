import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { loadableReady } from "@loadable/component";

import { routesArray } from "../../src/routes/routesData";

const renderApp = () => {

  const router = createBrowserRouter(routesArray);
  ReactDOM.hydrateRoot(
    document.querySelector('#root'),
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

loadableReady(() => {
  renderApp();
});

if (module.hot) {
  module.hot.accept();
}
