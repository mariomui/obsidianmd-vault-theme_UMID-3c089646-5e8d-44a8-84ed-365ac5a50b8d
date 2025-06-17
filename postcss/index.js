/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: "testPlugin",

    // Root (root, postcss) {
    //   // Transform CSS AST here
    // 	root.variables()
    // }

    /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

    Declaration: {
      color(decl, postcss) {
        // Parse the value of the declaration
        //console.log(decl.prop, decl.value);
        // The fastest way find Declaration node if you know property name
      },
    },
  };
};

module.exports.postcss = true;
