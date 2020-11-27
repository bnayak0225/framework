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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_1 = __importDefault(require("webpack"));
var webpack_config_1 = require("../webpackConfig/webpack.config");
var write_file_webpack_plugin_1 = __importDefault(require("write-file-webpack-plugin"));
var compilerStart = function () {
    var serverWebpackConfig = __assign(__assign({}, webpack_config_1.serverConfig("", "production")), { plugins: __spread(webpack_config_1.serverConfig("", "production").plugins), mode: 'production', performance: {
            hints: false,
        } });
    var clientWebpackConfig = __assign(__assign({}, webpack_config_1.clientConfig("production")), { plugins: __spread(webpack_config_1.clientConfig("production").plugins, [
            new write_file_webpack_plugin_1.default(),
        ]), mode: 'production', performance: {
            hints: false,
        } });
    var clientCompiler = webpack_1.default([clientWebpackConfig, serverWebpackConfig]);
    clientCompiler.run(function (err, stats) {
        console.log(stats.toString({
            colors: true,
            entrypoints: false,
            cached: false,
            cachedAssets: false,
            chunkModules: false,
            hash: false,
            modules: false,
            reasons: false,
            version: false,
        }));
        console.log("\x1b[31m\x1b[5m", "Build ready. Ready for deploy!", '\x1b[0m');
    });
};
exports.default = compilerStart;
