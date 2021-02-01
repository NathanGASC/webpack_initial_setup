var path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require("copy-webpack-plugin");

let port = 8080;

module.exports = {
    entry: './src/controllers/root.ts',
    mode: 'development',
    target: 'node',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: "public.tsconfig.json"
                }
            }]
        },
        {
            test: /\.html$/,
            use: 'html-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif|txt|lp|py)$/i,
            use: [
            {
                loader: 'file-loader',
            },
        ],
        }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.html', '.css' ],
    },
    output: {
        filename: 'root.js',
        path: path.resolve(__dirname, 'dist/public/'),
        publicPath: '/',
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/views/", to: "./views/" },
            ],
        }),
    ],
    devtool: 'inline-source-map',
    externals: [nodeExternals()]
};