// Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const minicss = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[name].css",
});

/**
 * @type { import('webpack').Configuration }
 */
const config = {
  entry: [__dirname + "/src/index.scss"],
  output: {
    publicPath: "dist",
    cssFilename: "[name].css",
    // filename: (a,b) => {
    //     return false
    // },
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [minicss],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        // https://webpack.js.org/configuration/module/#ruleuse
        // RTL
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoader: 2,
            },
          },
          ,
          "postcss-loader",
          "sass-loader",
        ],
      },
      // {
      //     test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //     type: 'asset',
      // },
    ],
  },
  // resolve: {
  //     extensions: ['.scss'],
  // },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
