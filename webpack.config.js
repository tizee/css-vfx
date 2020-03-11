const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const devSettings = {
    port: 9000,
    compress: false,
};

const paths = {
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, './src/index.jsx'),
    ],
    src: path.resolve(__dirname, './src'),
    dist: path.resolve(__dirname, './dist'),
};

const config = {
    entry: paths.entry,
    output: {
        path: paths.dist,
        filename: '[name].js',
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', 'vue'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                include: paths.src,
                test: /\.(js|jsx|vue)$/,
                exclude: /node_modules/,
                use: 'eslint-loader',
            },
            {
                test: /\.(js|jsx)$/,
                include: paths.src,
                loader: 'babel-loader',
                options: {
                    // feature of babel-loader for webpack
                    cacheDirectory: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                include: paths.src,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(s*)css$/,
                include: paths.src,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                include: paths.src,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|svg|jp(e*)g|gif)$/,
                include: paths.src,
                use: [
                    {
                        // loader: 'file-loader',
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[hash:8]-[name].[ext]',
                            // fallback: require.resolve('file-loader'),
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWepackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
            inject: 'body',
        }),
        new LodashModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: paths.dist,
        port: devSettings.port,
        compress: devSettings.compress,
        stats: 'errors-warnings',
    },
    stats: {
        env: true,
        builtAt: true,
        colors: true,
        errors: true,
        errorDetails: true,
        logging: 'warn',
    },
};

module.exports = (env, argv) => {
    if (argv.hot) {
        config.output.filename = '[name].[hash].js';
        config.resolve.alias = {
            'react-dom': '@hot-loader/react-dom',
        };
    }
    if (env != null && env.production) {
        config.devtool = 'source-map';
    }
    return config;
};
