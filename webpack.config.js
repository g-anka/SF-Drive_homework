const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/module19(FAQ).js',
    mode: "development",
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
        new StylelintPlugin(),
        new HtmlWebpackPlugin(  {
            template: 'src/About_us.pug',
            filename: 'myIndex.html'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [ new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, "css-loader" ],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: 'eslint-loader'
            }
        ]
    }
};