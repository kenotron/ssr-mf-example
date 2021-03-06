const LoadablePlugin = require("@loadable/webpack-plugin");
const ServerSideModuleFederationPlugin = require("server-side-module-federation-plugin");

module.exports = {
  optimization: { minimize: false },
  output: {
    libraryTarget: "commonjs-module",
    chunkLoading: "async-http-node",
  },
  entry: "./src/serverEntry.js",
  target: "node",
  module: {
    rules: [{ test: /\.jsx?/, use: "babel-loader" }],
  },
  plugins: [
    new LoadablePlugin(),
    new ServerSideModuleFederationPlugin({
      name: "app1",
      library: { type: "commonjs-module" },
      remotes: {
        app2: "http://localhost:3001/app2.js",
      },
      shared: {
        react: { singleton: true },
      },
    }),
  ],
};
