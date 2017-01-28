var Path = require('path');
var webpack = require('webpack');

var isProd = process.env.NODE_ENV === 'production';

var plugins = [
	new webpack.LoaderOptionsPlugin({
		options: {
			sassLoader: {
				outputStyle: 'expanded' // nested, expanded, compact, compressed
			}
		}
	}),
	new webpack.DefinePlugin({
		_PROD_: isProd,
		_DEV_: !isProd
	})
];

if (isProd) {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		copmress: {
			warnings: false // default now
		},
		sourceMap: true
	}));
}

module.exports = {
	entry: ['./src/app.js'],
	output: {
		filename: 'app.js',
		path: './build'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.(handlebars|hbs)$/, loader: 'handlebars-loader' },
			{
				test: /\.(sass|scss)$/,
				include: Path.resolve(process.cwd(), 'src/styles/'),
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{ test: /.(eot|woff2|woff|ttf|svg)$/, loader: 'url-loader?limit=10000' }
		]
	},
	plugins: plugins,
	devServer: {
		publicPath: '/build/',
		inline: true
	}
}
