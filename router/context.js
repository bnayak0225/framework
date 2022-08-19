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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterContext = void 0;
var react_1 = __importStar(require("react"));
var history_1 = require("./history");
var pathname = window.location.pathname;
var push = function (to) {
    history_1.history.push(to);
    pathname = to;
};
var replace = function (to) {
    history_1.history.replace(to);
    pathname = to;
};
exports.RouterContext = react_1.default.createContext({ pathname: pathname, push: function (to) { return push(to); }, replace: function (to) { return replace(to); } });
var RouterContextProvider = react_1.memo(function (props) {
    var _a = __read(react_1.useState({ pathname: window.location.pathname }), 2), state = _a[0], setState = _a[1];
    var push = function (to) {
        history_1.history.push(to);
        setState({
            pathname: to
        });
    };
    var replace = function (to) {
        history_1.history.replace(to);
        setState({
            pathname: to
        });
    };
    var setPath = function () {
        pathname = window.location.pathname;
        setState({
            pathname: pathname
        });
    };
    react_1.useEffect(function () {
        window.addEventListener('popstate', setPath);
        return function () {
            window.removeEventListener('popstate', setPath);
        };
    }, []);
    return (react_1.default.createElement(exports.RouterContext.Provider, { value: __assign(__assign({}, state), { push: function (to) { return push(to); }, replace: function (to) { return replace(to); } }) }, props.children));
});
exports.default = RouterContextProvider;
