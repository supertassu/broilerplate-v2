const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					'less-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(woff|woff2|ttf|eot|svg|png|jpg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/assets/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	output: {
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: true
	}
};
