const path = require('path');
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
    mode: 'development',
   entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'menu.bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/i,
            use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            }, {
                test: /\.hbs/,
                loader: 'handlebars-loader',
                exclude: /(node_modules|bower_components)/
        }]
    },
    plugins: [
   new HtmlWebpackPlugin({template: 'src/index.html'}), new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
]
};