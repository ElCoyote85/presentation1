
var
    // webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./entry.js",
    output: {
        path: "./",
        filename: "./bundle.js"
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: /sass/,
                loader: ExtractTextPlugin.extract("style", "css?sourceMap!autoprefixer?browsers=last 3 versions!sass?sourceMap")
            },
            // {
            //     test: /\.(png)$/,
            //     include: /public\/img/,
            //     loader: ["url-loader"]
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/css/presentation.css'),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ]
}