var path = require('path');
var webpack = require('webpack');
var version = require('./package.json').version;

module.exports = {
	entry: {
		picker: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: 'Picker',
		libraryTarget: 'umd',
		publicPath: '/assets/',
		filename: '[name].js'
	},
	devtool: '#eval-source-map',
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint',
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!less-loader'
			},
			{
				test: /\.png|\.gif$/,
				loader: 'url-loader?limit=8192'
			},
			{
				test: /\.handlebars$/,
				loader: "handlebars-loader"
			}
		]
	},
	resolve: {
		extensions: ['', '.js'],
		fallback: [path.join(__dirname, '../node_modules')]
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	plugins: [
		new webpack.DefinePlugin({
			__VERSION__: JSON.stringify(version)
		})
	]
};
