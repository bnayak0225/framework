"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dynamicImport_1 = __importDefault(require("../lib/dynamicImport"));
var constant_1 = require("../lib/constant");
var express = require('express');
var cors_1 = __importDefault(require("cors"));
var render_1 = require("./render");
var _404_1 = __importDefault(require("../Pages/404"));
var findPage_1 = __importDefault(require("./findPage"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var validatePath_1 = __importDefault(require("../router/validatePath"));
var fs_1 = __importDefault(require("fs"));
var jsdom_1 = require("jsdom");
var errorHandle_1 = __importDefault(require("./errorHandle"));
var express_manifest_helpers_1 = __importDefault(require("express-manifest-helpers"));
var port = constant_1.DEFAULT_PORT;
if (__resourceQuery) {
    var querystring = require('querystring');
    var query = querystring.parse(__resourceQuery.slice(1));
    port = query.port ? query.port : constant_1.DEFAULT_PORT;
}
var ignoreFavicon = function (req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({ nope: true });
    }
    else {
        next();
    }
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var app, importComponent, pages, page, dom, appDirectory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                app = express();
                importComponent = [];
                return [4 /*yield*/, findPage_1["default"]()];
            case 1:
                pages = _a.sent();
                page = [];
                return [4 /*yield*/, Promise.all(importComponent)
                        .then(function (results) {
                        page = results;
                    })["catch"](function (e) {
                        // Handle errors here
                    })];
            case 2:
                _a.sent();
                if (typeof window === 'undefined') {
                    dom = new jsdom_1.JSDOM('<!doctype html><html><body></body></html>');
                    global.window = dom.window;
                    global.document = dom.window.document;
                    global.navigator = dom.window.navigator;
                }
                app.use(cors_1["default"]());
                app.use(body_parser_1["default"].json());
                app.use(body_parser_1["default"].urlencoded({ extended: true }));
                appDirectory = fs_1["default"].realpathSync(process.cwd());
                app.use(express_manifest_helpers_1["default"]({
                    manifestPath: path_1["default"].resolve(appDirectory, 'build/assets/manifest.json')
                }));
                app.use("/", express.static('build/assets'));
                app.use("/", express.static('build/client'));
                app.use("/", express.static('build'));
                app.use(ignoreFavicon);
                app.get("*", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                    var routing, host, assets, splashScreenComponent, splashScreen, routeData_1, page, component, fileList, html;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                window.location.pathname = req.url;
                                routing = [];
                                host = req.protocol + "://" + req.hostname + ":" + port;
                                assets = res.locals;
                                splashScreen = fs_1["default"].readdirSync(path_1["default"].resolve(process.cwd() + '/src/splash'));
                                if (!splashScreen) return [3 /*break*/, 3];
                                if (!fs_1["default"].existsSync(path_1["default"].resolve(process.cwd() + '/src/splash/index.js'))) return [3 /*break*/, 2];
                                return [4 /*yield*/, dynamicImport_1["default"]("index.js", "splash")];
                            case 1:
                                splashScreenComponent = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                console.log("Splash index file is missing.");
                                _a.label = 3;
                            case 3:
                                try {
                                    routeData_1 = require('dirPage/route.json');
                                    Object.keys(routeData_1).forEach(function (route, i) {
                                        if (!route) {
                                            console.log("Route url is missing");
                                        }
                                        if (!routeData_1[route]) {
                                            console.warn("Route file is missing");
                                        }
                                        routing.push({ "url": route, "file": routeData_1[route] });
                                    });
                                }
                                catch (e) {
                                    pages.map(function (page) {
                                        var url = page.replace(/\.[^/.]+$/, "").toLowerCase();
                                        routing.push({ "url": "" + url + (url !== "index" ? "/*" : ""), "file": page });
                                    });
                                }
                                page = "";
                                routing.map(function (path, i) {
                                    if (validatePath_1["default"](path.url, req.url)) {
                                        page = path.file;
                                    }
                                });
                                if (!!page) return [3 /*break*/, 4];
                                component = _404_1["default"];
                                return [3 /*break*/, 7];
                            case 4:
                                fileList = fs_1["default"].readdirSync(path_1["default"].resolve(process.cwd() + '/src/pages'));
                                if (!(fileList.indexOf(page) !== -1)) return [3 /*break*/, 6];
                                return [4 /*yield*/, dynamicImport_1["default"](page)];
                            case 5:
                                component = _a.sent();
                                return [3 /*break*/, 7];
                            case 6: throw new Error('File not found: ' + page);
                            case 7: return [4 /*yield*/, render_1.renderHtml(component, splashScreenComponent, routing, page, assets, host)];
                            case 8:
                                html = _a.sent();
                                res.send(html);
                                return [2 /*return*/];
                        }
                    });
                }); });
                app.use(errorHandle_1["default"]);
                app.listen(port, function () { return console.log("Example app listening at http://localhost:" + port); });
                return [2 /*return*/];
        }
    });
}); })();
