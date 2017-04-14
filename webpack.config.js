const path = require('path');

module.exports = {
    entry: './assets/js-src/app.js',
    output: {
        path: path.resolve(__dirname, './assets/js'),
        filename: 'bundle.js'
    },
    watch: false,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}