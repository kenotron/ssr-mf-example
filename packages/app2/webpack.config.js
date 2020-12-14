const LoadablePlugin = require("@loadable/webpack-plugin");
const ServerSideModuleFederationPlugin = require("server-side-module-federation-plugin");

module.exports = {
  optimization: { minimize: false },
  output: {
    libraryTarget: "commonjs-module",
    chunkLoading: "async-http-node",
    publicPath: "http://localhost:3001/",
  },
  target: "node",
  module: {
    rules: [{ test: /\.jsx?/, use: "babel-loader" }],
  },
  plugins: [
    new LoadablePlugin(),
    new ServerSideModuleFederationPlugin({
      name: "app2",
      library: {
        type: "commonjs-module",
      },
      exposes: {
        "./Header": "./src/Header",
        ".": "./src",
      },
      shared: {
        react: { singleton: true },
      },
    }),
  ],
  devServer: {
    port: 3001,
    writeToDisk: true,
  },
};
