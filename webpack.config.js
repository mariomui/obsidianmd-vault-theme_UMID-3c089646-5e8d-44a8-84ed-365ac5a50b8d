// // Generated using webpack-cli https://github.com/webpack/webpack-cli
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const minicss = new MiniCssExtractPlugin();

/**
 * @type { import('webpack').Configuration }
 */
const config = {
  entry: {
    index: path.resolve(__dirname, "src", "index.scss"),
    importtest: path.resolve(__dirname, "src", "importtest.scss"),
  },
  output: {
    filename: (filename) => {
      return false;
    },
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [minicss],
  optimization: {
    splitChunks: {
      cacheGroups: {
        js: {
          type: "js",
          chunks: (chunk) => {
            console.log(chunk, "me");
            return false;
          },
        },
        index: {
          name: "index",
          type: "css/mini-extract",
          chunks: (chunk) => {
            if (chunk.name === "index") {
              return chunk;
            }
            return chunk.name === "index";
          },
          enforce: true,
        },
        importtest: {
          name: "importtest",
          type: "css/mini-extract",
          chunks: (chunk) => {
            if (chunk.name === "importtest") {
              return chunk;
            }
            return chunk.name === "importtest";
          },
          enforce: true,
        },
      },
    },
  },
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
            // options: {
            //   modules: {
            //     mode: "local",
            //     exportGlobals: true,
            //     localIdentName: "[path][name]__[local]--[hash:base64:5]",
            //     localIdentContext: path.resolve(__dirname, "src"),
            //     localIdentHashSalt: "my-custom-hash",
            //     namedExport: true,
            //     exportLocalsConvention: "camelCase",
            //     exportOnlyLocals: false,
            //   },
            // },
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
    extensions: [".scss"],
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
