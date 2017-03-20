/**
 * Created by Administrator on 2017/3/13.
 */
var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    html = require('html-withimg-loader'),
    autoprefixer = require('autoprefixer'),
    px2rem = require('postcss-px2rem');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
    ? ['./src/js/main.js']
    : [
    './src/js/main.js',
    './src/style/main.less',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081'
];
var plugins = PRODUCTION
    ? []
    : [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: 'html-withimg-loader!' + path.resolve("src/index.html"),
        filename: "index.html",
        inject: "body"
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
            context: __dirname,
            postcss() {
                return [
                    require('autoprefixer')({browsers: ['last 2 versions']}),
                    px2rem({remUnit: 64})];
            }
        }
    })
];

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        /*publicPath: '/dist/',*/
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options:{
                    "presets": [
                        "es2015"
                    ],
                    "plugins": [
                        "transform-runtime"
                    ]
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]


            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "images/[hash:8].[name].[ext]!image-webpack"
                        }
                    }

                ]
            }
    ]
    },
    plugins: plugins
};