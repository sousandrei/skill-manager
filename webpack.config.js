require('dotenv')

console.log(process.env)

const { normalize } = require('path')
const Dotenv = require('dotenv-webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const CSSExtract = new ExtractTextWebpackPlugin('styles.css')

module.exports = {
	entry: ['babel-polyfill', './src/app.js'],
	output: {
		path: normalize(`${__dirname}/public/dist`),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}, {
			test: /\.s?css$/,
			use: CSSExtract.extract({
				use: [
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
				]
			})
		}]
	},
	plugins: [
		CSSExtract,
		new Dotenv()
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: normalize(`${__dirname}/public`),
		historyApiFallback: true,
		publicPath: '/dist/'
	}
}