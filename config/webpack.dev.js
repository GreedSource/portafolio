const path = require("path");
const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;

const PORT = 3000;
const PUBLIC_PATH = `http://localhost:${PORT}/`;

const config = {
  entry: "./src/index.tsx",
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: PORT,
    liveReload: true,
    hot: true,
    historyApiFallback: true,
    // contentBase: path.join(__dirname, "dist"),
    // disableHostCheck: true,
  },
  output: {
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "portafolioApp",
      filename: "remoteEntry.js",
      exposes: {
        "./PortafolioApp": "./src/bootstrap",
      },
      shared: {
        ...() => {
          let newDebs = {};
          Object.entries(deps).forEach((entry) => {
            newDebs[entry[0]] = {
              singleton: true,
              eager: true,
              requiredVersion: entry[1],
            };
          });

          return newDebs;
        },
      },
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = merge(commonConfig, config);
