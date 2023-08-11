// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';


/**
 * @type { import('webpack').Configuration }
 */
const config = {
    entry: [__dirname + "/src/index.scss"],
    output: {
        cssFilename: "dist/[name].css"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                // https://webpack.js.org/configuration/module/#ruleuse
                // RTL
                use: ['css-loader', 'postcss-loader', 
                {
                    loader: 'sass-loader',
                    options: {
                        webpackImporter: false,
                    }
                }],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.scss'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
