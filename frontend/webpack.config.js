const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
					"css-loader",
					"less-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/assets/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
	]
};
