const path = require("path");

module.exports = {
  entry: "./src/playground/redux-101.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        //when one loader use loader when more then use "use"
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
    // this attribute means we are going to handle routing through client side
    historyApiFallback: true,
  },
};

//loader
