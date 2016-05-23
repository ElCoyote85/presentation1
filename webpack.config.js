
var
    // webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./entry.js",
    output: {
        path: "./",
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: /sass/,
                loader: ExtractTextPlugin.extract("style", "css!autoprefixer?browsers=last 3 versions!sass")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/css/presentation.css'),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ]
}