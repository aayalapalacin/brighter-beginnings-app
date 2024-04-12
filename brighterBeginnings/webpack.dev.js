const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;

//only for github
if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split("://");
  publicUrl = `wss://${port}-${host}/ws`;
}

//only for codespaces
if (process.env.CODESPACE_NAME) {
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.app.github.dev/ws`;
}

module.exports = merge(common, {
  mode: "production",
  devtool: "cheap-module-source-map",
  devServer: {
    port,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    client: {
      webSocketURL: publicUrl,
    },
  },
  plugins: [
    // new FriendlyErrorsWebpackPlugin(),
    // new ErrorOverlayPlugin(),
    // new PrettierPlugin({
    //     parser: "babylon",
    //     printWidth: 120,             // Specify the length of line that the printer will wrap on.
    //     tabWidth: 4,                // Specify the number of spaces per indentation-level.
    //     useTabs: true,              // Indent lines with tabs instead of spaces.
    //     bracketSpacing: true,
    //     extensions: [ ".js", ".jsx" ],
    //     jsxBracketSameLine: true,
    //     semi: true,                 // Print semicolons at the ends of statements.
    //     encoding: 'utf-8'           // Which encoding scheme to use on files
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
    ],
  },
});
