const path = require("path");
const testPlugin = require("./postcss/index.js");
module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: [["autoprefixer"], testPlugin],
};
