const path = require('path');
const environment = require('./env.config.ts');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: `${this.environment.isProduction()}`,
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [ {test: /\.(js|ts|mjs|jsx)$/i, loader: 'babel-loader', exclude: /node_modules/}]
    },
    plugins: [ new HtmlWebPackPlugin()]
}