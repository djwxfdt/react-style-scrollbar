const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry:{
        'bundle':'./examples/index.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js',
    },
    module: {
        rules: [
           {
               test: /\.js$/,
               loader: 'babel-loader',
               exclude: /node_modules/

           }
       ]
    },
    devServer: {
        contentBase: [path.join(__dirname, "dist"),path.join(__dirname, "examples")],
        port: 9000,
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
};
