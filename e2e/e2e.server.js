const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack.common");

const server = new WebpackDevServer(webpack(config), {});
server.listen(8080, "localhost", (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send("ok");
  }
});
