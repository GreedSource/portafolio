const path = require("path");
const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const PUBLIC_PATH = `${process.env.PUBLIC_URL}/`;

const config = {
  entry: "./src/index.tsx",
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  output: {
    // publicPath: PUBLIC_PATH,
    path: path.join(__dirname, "dist/"),
    filename: "bundle.js",
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
};

module.exports = merge(commonConfig, config);
