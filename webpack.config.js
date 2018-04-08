var HTMLWebpackPlugin= require('html-webpack-plugin');
var HTMLWebpackPluginConfig= new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: 
		[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel', 'react-hot', 'babel-loader'] 
			},
			   {
			   test: /\.scss$/,
			   loader: 'style!css!sass?sourceMap'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'

			}, 
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname 
	}
};