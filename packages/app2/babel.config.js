const isServer = process.env.SERVER !== undefined;

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: isServer
          ? {
              node: true,
            }
          : "> 0.25%, not dead",
      },
    ],
    "@babel/preset-react",
  ],
  plugins: ["@loadable/babel-plugin"],
};
