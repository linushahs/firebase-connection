const path = require("path");

module.exports = {
  mode: "development",
  entry: "./connect.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    historyApiFallback: true,
  },
};
