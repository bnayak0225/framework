"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client");
var dynamicImport_1 = __importDefault(require("../lib/dynamicImport"));
var Route_1 = require("../router/Route");
var Router_1 = require("../router/Router");
var Provider_1 = __importDefault(require("../state/Provider"));
var _404_1 = __importDefault(require("../Pages/404"));
var switch_1 = __importDefault(require("../router/switch"));
var errorBoundary_1 = __importDefault(require("../errorHandel/errorBoundary"));
window.__INITIAL__DATA__ = window.__INITIAL__DATA__ || {};
if (module.hot) {
    module.hot.accept();
}
var options = {
    page: '',
};
var setPageOption = function (pageOption) {
    options.page = pageOption.page;
};
if (__resourceQuery) {
    var querystring = require('querystring');
    var pageOption = querystring.parse(__resourceQuery.slice(1));
    setPageOption(pageOption);
}
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false, error: ""
        };
        return _this;
    }
    App.getDerivedStateFromError = function (error) {
        // Update state so the next render will show the fallback UI.
        // error['shouldIgnore'] = true;
        return { hasError: true, error: error };
    };
    App.prototype.render = function () {
        var _a = this.state, hasError = _a.hasError, error = _a.error;
        if (hasError) {
            return (react_1.default.createElement(errorBoundary_1.default, { hasError: hasError, error: error }));
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Router_1.RouterContextProvider, null,
                react_1.default.createElement(Provider_1.default, { initialState: window.__INITIAL__DATA__ ? window.__INITIAL__DATA__.initialServerState || {} : {} },
                    react_1.default.createElement(switch_1.default, null, this.props.routing.map(function (route, i) {
                        return (route);
                    }))))));
    };
    return App;
}(react_1.default.PureComponent));
;
// App = hot(module)(App)
var doRender = function (routing) { return __awaiter(void 0, void 0, void 0, function () {
    var container;
    return __generator(this, function (_a) {
        try {
            container = document.querySelector('#root');
            client_1.createRoot(container).render(react_1.default.createElement(App, { routing: routing }));
        }
        catch (e) {
        }
        return [2 /*return*/];
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var routing, route, i, Component, check404;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (window.client === true) {
                    document.onreadystatechange = function () {
                        if (document.readyState === "complete") {
                            document.getElementById("slash-screen").style.display = "none";
                        }
                    };
                }
                routing = window.__INITIAL__DATA__.routing;
                route = [];
                if (routing.length === 0) {
                    route.push(react_1.default.createElement(Route_1.Route, { path: "/*", component: _404_1.default, props: { value: "" } }));
                }
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < routing.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, dynamicImport_1.default(routing[i].file)];
            case 2:
                Component = _a.sent();
                route.push(react_1.default.createElement(Route_1.Route, { key: i, path: routing[i].url, component: Component, props: { value: "" } }));
                check404 = routing.filter(function (route) { return route.file.indexOf("404.") > -1; })[0];
                if (!check404 && i === routing.length - 1) {
                    route.push(react_1.default.createElement(Route_1.Route, { key: i, path: "/*", component: _404_1.default, props: { value: "" } }));
                }
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4:
                doRender(route);
                return [2 /*return*/];
        }
    });
}); })();
