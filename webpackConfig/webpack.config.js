"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.clientConfig = exports.serverConfig = void 0;
var path_1 = __importDefault(require("path"));
var webpack_1 = __importDefault(require("webpack"));
var webpack_node_externals_1 = __importDefault(require("webpack-node-externals"));
var process_1 = __importDefault(require("process"));
var fs_1 = __importDefault(require("fs"));
var findPage_1 = __importDefault(require("../lib/findPage"));
var entries_1 = __importDefault(require("../lib/entries"));
var import_1 = __importDefault(require("./Plugin/import"));
var nameChunk_1 = __importDefault(require("./Plugin/nameChunk"));
var ManifestPlugin = require('webpack-manifest-plugin');
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
var Dotenv = require("dotenv-webpack");
var config_1 = require("./config");
var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
var appDirectory = fs_1["default"].realpathSync(process_1["default"].cwd());
var resolveAbsolutePath = function (relativePath) { return path_1["default"].resolve(appDirectory, relativePath); };
var getDependencyPath = function (dependencyName) {
    return path_1["default"].join(__dirname, '..', '..', 'node_modules', dependencyName);
};
var resolve = {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
    modules: ['src', 'node_modules'],
    alias: {
        'react': require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
        'react-i18next': getDependencyPath('react-i18next'),
        'i18next': getDependencyPath('i18next'),
        'dirPage': path_1["default"].resolve(process_1["default"].cwd() + '/src'),
        'buildServerPage': path_1["default"].resolve(process_1["default"].cwd() + '/build/server')
    }
};
var pages = findPage_1["default"]();
var clientEntryPoint = __assign(__assign({}, entries_1["default"](pages)), { app: path_1["default"].join(__dirname, '../client/client.js') });
var customOptionList = [
    {
        useExistChunk: false,
        chunkName: 'vendor-or-lib-or-else',
        filterChunk: function (_a) {
            var chunk = _a.chunk, chunkList = _a.chunkList, initialChunkNameList = _a.initialChunkNameList;
            return true;
        },
        filterModule: function (_a) {
            var module = _a.module, moduleChunkList = _a.moduleChunkList, selectedChunkList = _a.selectedChunkList, chunkList = _a.chunkList, initialChunkNameList = _a.initialChunkNameList;
            return true;
        }
    },
];
var serverConfig = function (port, environment) {
    var serverEntryPoint = __assign(__assign({}, entries_1["default"](pages)), { app: path_1["default"].join(__dirname, environment === "development" ? '../server/server.js?port=' + port : '../server/server.js') });
    return ({
        optimization: {
            nodeEnv: false
        },
        name: 'server',
        mode: environment,
        target: 'node',
        // watch: true,
        devtool: "inline-source-map",
        entry: serverEntryPoint,
        node: { setImmediate: false },
        output: {
            filename: 'server/[name].js',
            path: resolveAbsolutePath('build'),
            publicPath: '/',
            chunkFilename: 'server/chunk/[id].js',
            libraryTarget: 'umd'
        },
        resolve: __assign({}, resolve),
        externals: [
            webpack_node_externals_1["default"]({
                // we still want imported css from external files to be bundled otherwise 3rd party packages
                // which require us to include their own css would not work properly
                whitelist: /\.css$/
            }),
        ],
        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    options: require('./babel.config.js'),
                    exclude: /node_modules/
                }, __assign({}, config_1.Loader.cssServerLoader), __assign({}, config_1.Loader.urlServerLoader), __assign({}, config_1.Loader.fontFamilyServerLoader),]
        },
        plugins: [
            // new PagesManifestPlugin('server'),
            new import_1["default"](),
            // new Html(),
            new Dotenv({
                path: "./.env",
                safe: true,
                systemvars: true,
                silent: true,
                defaults: false
            }),
            new webpack_1["default"].DefinePlugin({
                __SERVER__: 'true',
                __BROWSER__: 'false'
            }),
        ],
        stats: {
            assets: false,
            cached: false,
            cachedAssets: false,
            chunks: false,
            chunkModules: false,
            children: false,
            colors: true,
            hash: false,
            modules: false,
            performance: false,
            reasons: false,
            timings: true,
            version: false
        }
    });
};
exports.serverConfig = serverConfig;
var clientConfig = function (environment) {
    return {
        optimization: {
            runtimeChunk: { name: 'bootstrap-main/main' },
            minimize: true,
            splitChunks: {
                chunks: 'all',
                minSize: 20000,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true
                    },
                    "default": {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            },
            minimizer: [
                // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
                // `...`
                new CssMinimizerPlugin(),
            ]
        },
        name: 'client',
        target: 'web',
        mode: environment,
        entry: clientEntryPoint,
        output: {
            filename: 'client/js/[name].js',
            path: resolveAbsolutePath('build'),
            publicPath: "/",
            chunkFilename: 'client/js/chunk/[name].js'
        },
        resolve: __assign({}, resolve),
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: require('./babel.config.js')
                },
                {
                    test: /\.(ts|tsx)$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                __assign({}, config_1.Loader.cssClientLoader),
                __assign({}, config_1.Loader.cssModuleLoaderClient),
                __assign({}, config_1.Loader.urlClientLoader),
                __assign({}, config_1.Loader.fontFamilyClientLoader)
            ]
        },
        plugins: [
            // new PagesManifestPlugin('client'),
            new mini_css_extract_plugin_1["default"]({
                filename: 'assets/css/[name].css',
                chunkFilename: 'assets/css/[name].css'
            }),
            new ManifestPlugin({
                fileName: 'assets/manifest.json'
            }),
            new nameChunk_1["default"](),
            // ChunkSplit(customOptionList),
            new Dotenv({
                path: "./.env",
                safe: true,
                systemvars: true,
                silent: true,
                defaults: false
            }),
            new webpack_1["default"].DefinePlugin({
                __SERVER__: 'false',
                __BROWSER__: 'true'
            }),
        ],
        node: {
            __filename: false,
            __dirname: false,
            dgram: 'empty',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
            child_process: 'empty'
        },
        devtool: 'source-maps',
        stats: {
            cached: false,
            cachedAssets: false,
            chunks: false,
            chunkModules: false,
            children: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            timings: true,
            version: false
        }
    };
};
exports.clientConfig = clientConfig;
