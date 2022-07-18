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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.renderHtml = void 0;
var react_1 = __importDefault(require("react"));
var server_1 = require("react-dom/server");
var main_1 = __importDefault(require("./main"));
var Head_1 = require("../Head");
var HeaderHtml = function (headerData, routing, cssFileArray, host, requestDetail) {
    var e_1, _a;
    if (cssFileArray === void 0) { cssFileArray = []; }
    // cssFileArray.map(css=>{
    //     return <link rel={"stylesheet"} type="text/css" href={css}></link>
    // })
    var cssFile = "";
    try {
        for (var cssFileArray_1 = __values(cssFileArray), cssFileArray_1_1 = cssFileArray_1.next(); !cssFileArray_1_1.done; cssFileArray_1_1 = cssFileArray_1.next()) {
            var css = cssFileArray_1_1.value;
            cssFile = cssFile + ("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + host + "/css/" + css + "\"></link>");
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (cssFileArray_1_1 && !cssFileArray_1_1.done && (_a = cssFileArray_1["return"])) _a.call(cssFileArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return ("<meta charset=\"utf-8\">" +
        "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">" +
        "<meta name=\"HandheldFriendly\" content=\"true\"> " +
        "<meta name=\"MobileOptimized\" content=\"320\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">" +
        ("" + headerData) +
        ("<script>window.__INITIAL__DATA__ = " + JSON.stringify({ routing: routing }) + "</script>") +
        ("<script>window.client = " + true + "</script>") +
        ("<script>window.location.requestDetail = " + (requestDetail ? JSON.stringify(requestDetail) : null) + "</script>") +
        ("" + cssFile));
};
var TopHtmlContainer = function (splasHtml, headerData, routing, cssArray, host, requestDetail) {
    if (cssArray === void 0) { cssArray = []; }
    var headHtml = HeaderHtml(headerData, routing, cssArray, host, requestDetail);
    return ("<html>" +
        ("<head>" + headHtml + "</head>") +
        "<body>" +
        // `<div id="slash-screen">${splasHtml}</div>`+
        "<div id=\"app\">");
};
var BottomHtmlContainer = function (jsArray, host) {
    var e_2, _a;
    if (jsArray === void 0) { jsArray = []; }
    var jsFile = "";
    try {
        for (var jsArray_1 = __values(jsArray), jsArray_1_1 = jsArray_1.next(); !jsArray_1_1.done; jsArray_1_1 = jsArray_1.next()) {
            var js = jsArray_1_1.value;
            jsFile = jsFile + ("<script src=\"" + host + "/" + js.replace("/client/", "") + "\"></script>");
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (jsArray_1_1 && !jsArray_1_1.done && (_a = jsArray_1["return"])) _a.call(jsArray_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return ("</div>" +
        ("" + jsFile) +
        "</body>" +
        "</html>");
};
var renderHtml = function (res, component, SplashScreenComponent, routing, assets, host, requestDetail, params) { return __awaiter(void 0, void 0, void 0, function () {
    var splashScreen, jsArray, cssArray, initialAsyncProps, e_3, App, headTag, topHtml, botHtml, htmlStream;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (SplashScreenComponent) {
                    splashScreen = server_1.renderToString(react_1["default"].createElement(SplashScreenComponent, null));
                }
                jsArray = assets.getJavascripts();
                cssArray = assets.getStylesheetSources();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, component.getInitialProps({ params: params })];
            case 2:
                initialAsyncProps = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                return [3 /*break*/, 4];
            case 4:
                App = component;
                headTag = Head_1.Head.getState();
                topHtml = TopHtmlContainer(splashScreen, headTag, routing, cssArray, host, requestDetail);
                botHtml = BottomHtmlContainer(jsArray, host);
                res.write(topHtml);
                htmlStream = server_1.renderToPipeableStream(react_1["default"].createElement(main_1["default"], { page: App, initialProps: initialAsyncProps }));
                htmlStream.pipe(res, { end: false });
                htmlStream.on("end", function () {
                    res.write(botHtml);
                    res.end();
                });
                return [2 /*return*/];
        }
    });
}); };
exports.renderHtml = renderHtml;
