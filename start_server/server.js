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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.__esModule = true;
exports.server = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var webpack_1 = __importDefault(require("webpack"));
var nodemon_1 = __importDefault(require("nodemon"));
var webpack_config_1 = require("../webpackConfig/webpack.config");
var process_1 = __importDefault(require("process"));
var appDirectory = fs_1["default"].realpathSync(process_1["default"].cwd());
var resolvePath = function (relativePath) { return path_1["default"].resolve(appDirectory, relativePath); };
var resolveDir = function (relativePath) { return path_1["default"].resolve(appDirectory, relativePath); };
var write_file_webpack_plugin_1 = __importDefault(require("write-file-webpack-plugin"));
var react_refresh_webpack_plugin_1 = __importDefault(require("@pmmmwh/react-refresh-webpack-plugin"));
var compiler_1 = __importDefault(require("./compiler"));
var webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
var middleware_1 = __importDefault(require("../client/webpack-hot-middleware/middleware"));
var jsdom = __importStar(require("jsdom"));
var JSDOM = jsdom.JSDOM;
var window = new JSDOM().window;
// or even
var document = (new JSDOM()).window.document;
// import App from '../shared/App';
exports.server = function (port) { return __awaiter(void 0, void 0, void 0, function () {
    var serverConfiguration, clintConfiguration, watchOptions, serverWebpackConfig, clientEntry, clientWebpackConfig, PORT, HOST, app, clientCompiler, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                serverConfiguration = webpack_config_1.serverConfig(port, "development", port ? "http://localhost:" + port : "http://localhost:9000");
                clintConfiguration = webpack_config_1.clientConfig("development");
                watchOptions = {
                    ignored: /node_modules/,
                    stats: serverConfiguration.stats
                };
                serverWebpackConfig = __assign(__assign({}, serverConfiguration), { plugins: __spread(serverConfiguration.plugins), mode: 'development', performance: {
                        hints: false
                    } });
                clientEntry = {};
                Object.keys(clintConfiguration.entry).map(function (key, i) {
                    var _a;
                    clientEntry = __assign(__assign({}, clientEntry), (_a = {}, _a[key] = [clintConfiguration.entry[key],
                        path_1["default"].join(__dirname, "../client/webpack-hot-middleware/client?path=__webpack_hmr&port=3006&overlay=true")
                    ], _a));
                });
                clientWebpackConfig = __assign(__assign({}, clintConfiguration), { entry: clientEntry, output: __assign(__assign({}, clintConfiguration.output), { hotUpdateMainFilename: 'hmr/updates/[hash].hot-update.json', hotUpdateChunkFilename: 'hmr/updates/[id].[hash].hot-update.js' }), plugins: __spread(clintConfiguration.plugins, [
                        new write_file_webpack_plugin_1["default"](),
                        new webpack_1["default"].HotModuleReplacementPlugin(),
                        new react_refresh_webpack_plugin_1["default"]({
                            overlay: false
                        }),
                    ]), devServer: {
                        hot: true
                    }, mode: 'development', performance: {
                        hints: false
                    } });
                PORT = 3006;
                HOST = 'http://google.com';
                app = express_1["default"]();
                clientCompiler = webpack_1["default"](clientWebpackConfig);
                app.use(function (_req, res, next) {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
                    res.header("Access-Control-Allow-Headers", "access-control-allow-origin, Origin, X-Requested-With, Content-Type, Accept, Authorization");
                    return next();
                });
                app.get('/get-error-file-text', function (_req, res) { return getFileErrorCode(_req, res); });
                app.use(webpack_dev_middleware_1["default"](clientCompiler, {
                    publicPath: clientWebpackConfig.output.publicPath,
                    stats: clientWebpackConfig.stats,
                    watchOptions: watchOptions
                }));
                app.use(middleware_1["default"](clientCompiler));
                app.listen(PORT);
                _b = (_a = Promise).all;
                return [4 /*yield*/, compiler_1["default"](serverWebpackConfig, watchOptions)];
            case 1:
                _b.apply(_a, [[
                        _c.sent()
                    ]]).then(function (values) {
                    try {
                        var script = nodemon_1["default"]({
                            script: resolvePath('build/server/') + "/app.js",
                            ignore: ['./src', './*.*', 'build', '**/locales', '**/tmp'],
                            delay: 3
                        });
                        script.on('restart', function () {
                            console.log('Server side app has been restarted.', 'warning');
                        });
                        script.on('quit', function () {
                            console.log('Process ended');
                            process_1["default"].exit();
                        });
                        script.on('error', function () {
                            console.log('An error occured. Exiting', 'error');
                            process_1["default"].exit(1);
                        });
                    }
                    catch (e) {
                        console.log('Waiting for build');
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
var getFileErrorCode = function (_req, res) {
    var _a = _req.query, path = _a.path, line = _a.line, column = _a.column;
    fs_1["default"].readFile(resolvePath(path), 'utf8', function (_err, data) {
        var textArray = data.split('\n');
        var number = (line - 1) - 3;
        var movedIndex = number > -1 ? 3 : 3 + number;
        var firstIndex = number < 0 ? 0 : number;
        textArray = textArray.slice(firstIndex, firstIndex + 7);
        var container = document.createElement("div");
        textArray.map(function (text, i) {
            var line = document.createElement("div");
            var numberSpan = document.createElement('span');
            numberSpan.textContent = (firstIndex + i + 1).toString();
            line.appendChild(numberSpan);
            var numberSeparatorSpan = document.createElement('span');
            numberSeparatorSpan.textContent = '|';
            line.appendChild(numberSeparatorSpan);
            var errorString = text;
            if (movedIndex === i) {
                var errorStringArray = errorString.split("");
                var leftArray = void 0, rightArray = void 0;
                var endColPosition = column - 1;
                leftArray = errorStringArray.slice(0, endColPosition);
                rightArray = errorStringArray.slice(endColPosition);
                var leftErrorString = leftArray.join('');
                var rightErrorString = rightArray.join('');
                var leftError = document.createElement("pre");
                leftError.style.display = "inline";
                leftError.textContent = leftErrorString;
                var rightErrorSpan = document.createElement("span");
                var rightError = document.createElement("pre");
                rightError.style.display = "inline";
                rightError.textContent = rightErrorString;
                rightErrorSpan.appendChild(rightError);
                line.appendChild(leftError);
                line.appendChild(rightErrorSpan);
            }
            else {
                var code = document.createElement("pre");
                code.style.display = "inline";
                code.textContent = text;
                line.appendChild(code);
            }
            // let textNode = document.createTextNode(text)
            container.appendChild(line);
            if (movedIndex === i) {
                var blankLine = document.createElement("div");
                blankLine.innerHTML = "<span></span><span>|</span>";
                container.appendChild(blankLine);
            }
        });
        res.set('Content-Type', 'text/html');
        res.send(new Buffer(container.innerHTML));
    });
};
