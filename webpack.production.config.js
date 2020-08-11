// webpack.production.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",
        filename:  "bundle-[hash].js",
        publicPath:'build/' //注意这里哦，分离出来的模块会按这个路径来加载
    },
    devtool: 'null', //注意修改了这里，这能大大压缩我们的打包代码
    // devServer: {
    //     contentBase: "./public", //本地服务器所加载的页面所在的目录
    //     historyApiFallback: true, //不跳转
    //     inline: true,
    //     hot: true
    // },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true,
                        importLoaders: 1,
                    }
                }, 
                {
                    loader: "postcss-loader"
                },
                {
                    loader:'sass-loader'
                }
            ],
            })
        }]
    },
    plugins: [
        //new 一个这个插件的实例，并传入相关的参数
        new webpack.BannerPlugin('版权所有，翻版必究'),                 // 一个添加声明的插件
        new HtmlWebpackPlugin({                             // 一个根据模板生成不同的具有hash名字js的html
            template: __dirname + "/app/index.tmpl.html" 
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),       // 一个优化，可以分析和优先考虑使用最多的模块，并为他们分配最小id
        new ExtractTextPlugin("[name]-[hash].css"),              // 分离css和js文件
        new CleanWebpackPlugin()                    // 将生成的生产环节中多余的js（hash值不同）去掉
    ],
    optimization: {                     // 压缩js代码
        minimizer: [new UglifyJsPlugin()],
    },
};