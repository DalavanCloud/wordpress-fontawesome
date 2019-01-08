module.exports = {
	entry: './font-awesome/index.js',
	output: {
		path: __dirname,
		filename: './font-awesome/block.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
