export default async (express, app, done) => {
  const renderThunk = require("../dist/main.js").default;

  const serverRender = renderThunk();
  app.get("/*", serverRender);

  done();
};
