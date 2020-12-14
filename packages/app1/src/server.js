import express from "express";
import initMiddleware from "./middleware";

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";

const app = express();

const webpackConfig = require("../webpack.config.js");
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler));

const done = () => {
  app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`);
  });
};

initMiddleware(express, app, done);
