// TODO merge multiple tsconfig.json

var webpackMerge = require('webpack-merge');

var common = {
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

var client = {
    target: 'web',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
};

var server = {

};

module.exports = [
    /*** Demo01 ***/

    // Client
    webpackMerge({
        entry: {
            'app': './demo01/src/boot.ts',
            'vendor': './demo01/src/vendor.ts'
        },
        output: {
            path: __dirname + '/dist/demo01/client',
            publicPath: 'dist/demo01/client'
        }
    }, common, client),
    // Server
    webpackMerge({}, common, server)
];

/*
module.exports = {
    entry: {
        'app': './src/boot.ts',
        'vendor': './src/vendor.ts'
    },
    target: 'web',
    output: {
        path: __dirname + '/dist/client',
        publicPath: 'dist/client',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};
*/