const path = require('path');

module.exports = {
    entry:'./src/index.js',
    mode:'development',
    devServer: {
        hot: true,
        historyApiFallback: true,
      },
    output: {
        path:path.resolve(__dirname,'static/js'),
        filename:'compiled.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
      ]
    }
}