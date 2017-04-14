const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './assets/js/app.js',
    output: {
        path: path.resolve(__dirname, './assets/'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
        }]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}