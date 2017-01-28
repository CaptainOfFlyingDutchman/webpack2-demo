module.exports = {
	entry: ['./src/app.js'],
	output: {
		filename: 'app.js',
		path: './build'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	}
}
