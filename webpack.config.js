const env = process.env.NODE_ENV

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
   module: {
     rules: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
       query: {
         plugins: ['transform-class-properties', 'transform-object-rest-spread'],
         presets: ['env', 'react']
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
