var path = require('path');
const nodeExternals = require('webpack-node-externals');

let port = 8080;

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    target: 'node',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: "server.tsconfig.json"
                }
            }]
        },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    plugins: [
        
    ],
    devtool: 'inline-source-map',
    externals: [nodeExternals()]
};