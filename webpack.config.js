const path = require('path');

module.exports = {
    entry: "./index.js",
    output: {
        filename: "web/js/bundle.js",
        sourceMapFilename: "web/js/bundle.map"
    },
    resolve: {
       extensions: [ '.web.js', '.js' ],
       symlinks: false
     },
    module: {
        rules: [
            {
              test: /\.js$/,
              include:[
                path.resolve(__dirname, 'index.js'),
                path.resolve(__dirname, 'src')
              ],
              loader: ['babel-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer: {
      historyApiFallback: true,
    },
};
