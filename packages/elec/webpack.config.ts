const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// import { Configuration } from 'webpack'

/**
 * {Configuration}
 */
const cfg = {
    /** development production */
    mode: 'production',
    entry: {
        root: './src/index.ts',
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
    },
    target: 'electron-main',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            root: __dirname,
            verbose: true,
            dry: false,
        }),
    ],
}
module.exports = cfg
