require("dotenv").config();

// toolboxes
const path = require("path");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { access, constants } = require("fs/promises");
const util = require("util")
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

// derived toolboxes
const logg = createLogg();

// # knobs
const DEV_WRITE_PATH = process.env.OMD_SNIPPETS_PATH;
const isProduction = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV !== "production";

// ## complex knobs
/**
 * @type { import('webpack').Configuration }
 */
const config = {
  plugins: [],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        // https://webpack.js.org/configuration/module/#ruleuse
        use: [ // RTL
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
    extensions: [".js", ".scss"],
  },
  devServer: {
    devMiddleware: {
      writeToDisk: (filePath) => {

        return /.css$/.test(filePath);
      },
    },
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

module.exports = async () => {
  if (isProduction) {
    config.plugins.push(configureHtmlBundlerPluginForProd());
    config.mode = "production";
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  }

  if (isDev) {
    try {
      await access(DEV_WRITE_PATH, constants.F_OK);
    } catch (err) {
      return process.exit(1);
    }


    setConfig(["output.path", DEV_WRITE_PATH], config)
    config.plugins.push(configureHtmlBundlerPluginForDev());

    return config;
  }

  return config;
};


// helpers

function createLogg(config = {}) {
  const _config = {
    depth: 3,
    color: true,
    ...config
  }
  return function logg(obj) {
    const logLine = util.inspect(obj, _config);

  }
}
function setConfig(tuple, config) {
  const [location, value] = tuple
  const locations = location.split(".");
  let context = config;
  let previousContext = null;
  let lastLocation = locations.at(0);
  for (let location of locations) {
    previousContext = context;
    if (context?.[location]) {
      context = context[location]
      lastLocation = location;
      continue;
    }
    context[location] = {};
    context = context[location]
    lastLocation = location;
  }
  previousContext[lastLocation] = value;
  return previousContext;
}
function configureHtmlBundlerPluginForDev() {
  return new HtmlBundlerPlugin({
    outputPath: path.resolve(__dirname, "graveyard"),
    entry: {
      index: {
        import: "src/index.html",
      },
    },
    css: {
      filename: "[name].css",
    },
  });
}
function configureHtmlBundlerPluginForProd() {
  return new HtmlBundlerPlugin({
    // - fix: when the Webpack `output.path` option is undefined, set the default path as CWD + `/dist`
    outputPath: path.resolve(__dirname, "graveyard"),
    entry: {
      index: {
        import: "src/index.html",
      },
    },
    css: {
      filename: "[name].css",
    },
  });
}