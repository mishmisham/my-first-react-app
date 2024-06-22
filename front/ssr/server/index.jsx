/* eslint @typescript-eslint/no-var-requires: 0 */

import express from "express";
import compression from "compression";
import dotenv from "dotenv";
import webpack from "webpack";
import WebpackDevMiddleware from "webpack-dev-middleware";
import WebpackHotMiddleware from "webpack-hot-middleware";
import renderer from "./renderer.js";
import createStore from './createStore.js';
import cors from 'cors';

dotenv.config();

const port = process.env.FRONTEND_PORT;

const app = express();

const corsOptions = {
  origin: 'http://localhost',
  credentials: true
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV === "development") {
  const webpackConfig = require("../../webpack/dev/webpack.dev.client.js");
  const compiler = webpack(webpackConfig);

  app.use(
    WebpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      serverSideRender: true,
    })
  );

  app.use(WebpackHotMiddleware(compiler));
}

app.use(compression());
app.use(express.static("dist"));

app.get("*", async (req, res) => {

  const context = {};
  const store = await createStore(req);
  await renderer(req, res, store, context);

  try {

    if (context.url) {
      res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

  } catch (err) {
    console.log("error in rendering server side:", err);
  }
});

app.listen(port, () => {
  console.log("Listening on port "+port);
});
