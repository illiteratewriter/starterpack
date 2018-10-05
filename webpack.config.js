const env = process.env.NODE_ENV
const path = require('path');

var config = {
  mode: env || 'development',
   entry: './index.js',
   output: {
      path:'/',
      filename: 'bundle.js',
   },
   devServer: {
      inline: true,
      port: 3000
   },
   resolve: {
     extensions: [ '.web.js', '.js' ],
     symlinks: false
   },
   module: {
     rules: [
       {
         test: /\.jsx?$/,
         include:[
           path.resolve(__dirname, 'index.js'),
           path.resolve(__dirname, 'src'),
         ],
         loader: 'babel-loader',
       query: {
         presets: ['@babel/preset-env', '@babel/preset-react']
            }
         },
         {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
   }
}
module.exports = config;
