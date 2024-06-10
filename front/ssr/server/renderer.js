import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from 'react-redux'
import getHtml from "./html";
import path from "path";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { ServerStyleSheet } from "styled-components";
import { routesArray } from '../../src/routes/routesData.js';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider
} from "react-router-dom/server";
import { createFetchRequest } from './request';
import { renderToReadableStream } from 'react-dom/server';
export default async (req, res, store, contextData) => {
  
  const sheet = new ServerStyleSheet();
  const loadableJson = path.resolve(__dirname, "./loadable-stats.json");

  const extractor = new ChunkExtractor({
    statsFile: loadableJson,
    entrypoints: ["client"],
  });

  const handler = createStaticHandler(routesArray);
  const fetchRequest = createFetchRequest(req, res);
  const context = await handler.query(fetchRequest);
  const router = createStaticRouter(
    handler.dataRoutes,
    context
  );

  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <ChunkExtractorManager extractor={extractor}>
          <StaticRouterProvider
            router={router}
            context={context}
            location={req.url}
          />
        </ChunkExtractorManager>
      </Provider>
    )
  );

  const styles = sheet.getStyleTags();

  const htmlData = {
    styles,
    children: content,
    extractor,
    store,
  };

  const html = getHtml(htmlData);

  return html;
};
