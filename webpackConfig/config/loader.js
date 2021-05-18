"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
var Loader = {
    jsLoader: {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    },
    cssModuleLoaderClient: {
        test: /\.module\.css$/,
        use: [
            require.resolve('css-hot-loader'),
            mini_css_extract_plugin_1["default"].loader,
            {
                loader: require.resolve('css-loader'),
                options: {
                    localsConvention: 'camelCase',
                    modules: { localIdentName: '[hash:base64:8]' },
                    importLoaders: 1,
                    sourceMap: false
                }
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    plugins: [
                        require('postcss-nested')(),
                        require('postcss-flexbugs-fixes')(),
                        require('autoprefixer')(),
                        require('postcss-custom-properties')(),
                        require('postcss-assets')({
                            basePath: './assets'
                        }),
                    ],
                    sourceMap: false
                }
            },
        ]
    },
    cssClientLoader: {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
            require.resolve('css-hot-loader'),
            mini_css_extract_plugin_1["default"].loader,
            require.resolve('css-loader'),
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    plugins: [
                        require('postcss-nested')(),
                        require('postcss-flexbugs-fixes')(),
                        require('autoprefixer')(),
                        require('postcss-custom-properties')(),
                        require('postcss-assets')({
                            basePath: './assets'
                        }),
                    ],
                    sourceMap: false
                }
            },
        ]
    },
    cssServerLoader: {
        test: /\.css$/,
        use: [
            // require.resolve('css-hot-loader'),
            require.resolve('css-loader'),
        ]
    },
    urlServerLoader: {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: require.resolve('url-loader'),
        options: {
            limit: 2048,
            publicPath: "http://localhost:9000",
            name: 'image/[name].[hash:8].[ext]',
            emitFile: false
        }
    },
    urlClientLoader: {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: require.resolve('file-loader'),
        options: {
            publicPath: "/",
            outputPath: 'assets',
            name: 'image/[name].[hash:8].[ext]'
        }
    },
    fontFamilyClientLoader: {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    publicPath: "/",
                    name: 'font/[name].[ext]',
                    outputPath: 'assets'
                }
            }
        ]
    },
    fontFamilyServerLoader: {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    publicPath: "/",
                    name: 'font/[name].[ext]',
                    outputPath: 'assets'
                }
            }
        ]
    }
};
exports["default"] = Loader;
