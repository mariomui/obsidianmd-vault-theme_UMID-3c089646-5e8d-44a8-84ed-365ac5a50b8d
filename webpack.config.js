// // Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");

const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
// const minicss = new MiniCssExtractPlugin();

const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

const plugins = [
  new HtmlBundlerPlugin({
    // js: {
    //   // define the output name of a generated JS file here
    //   filename: "assets/js/[name].[contenthash:8].js",
    // },
    outputPath: path.resolve(__dirname, "graveyard"),
    entry: {
      // define templates here
      index: {
        // => dist/index.html (key is output filename w/o '.html')
        import: "src/index.html", // template file
        data: { title: "Homepage", name: "Heisenberg" }, // pass variables into template
      },
    },
    css: {
      // define the output name of a generated CSS file here
      filename: "[name].css",
    },
  }),
];
/**
 * @type { import('webpack').Configuration }
 */
const config = {
  output: {
    clean: true,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        // https://webpack.js.org/configuration/module/#ruleuse
        // RTL
        use: [
          {
            loader: "css-loader",
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".js",".scss"],
  },
  devServer: {
    devMiddleware: {
      writeToDisk: (filePath) => {
        return /.css$/.test(filePath);
      },    },
    static: path.join(__dirname, "dist"),
    port: 9100,
    watchFiles: {
      paths: ["src/**/*.scss"],
      options: {
        usePolling: true,
      },
    },
  },
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
