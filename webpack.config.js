require('dotenv')

const webpack = require('webpack')
const { normalize } = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
	const isProduction = env == 'production'
	const CSSExtract = new ExtractTextWebpackPlugin('styles.css')

	return {
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
			new webpack.DefinePlugin({})
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: normalize(`${__dirname}/public`),
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	}
}