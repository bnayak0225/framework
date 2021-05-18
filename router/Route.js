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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Route = void 0;
var react_1 = __importStar(require("react"));
var context_1 = require("./context");
var validatePath_1 = __importDefault(require("./validatePath"));
var Route = react_1.memo(function (_a) {
    var path = _a.path, component = _a.component, children = _a.children, props = _a.props;
    var error = false;
    if (path === undefined) {
        // throw new ValidationError('Router error: path is missing');
        error = true;
        // ErrorBoundary.throwError(new Error('Router error: path is missing'))
        return "";
    }
    var Component = component;
    var routerContext = context_1.RouterContext;
    var url = react_1["default"].useContext(routerContext).pathname;
    var callbackValidatePath = react_1.useCallback(function (pathname, url) { return function () { return validatePath_1["default"](pathname, url); }; }, [url]);
    var pathValidate = callbackValidatePath(path, url);
    if (!pathValidate) {
        return null;
    }
    var childrenWithProps = react_1["default"].Children.map(children, function (child) {
        // checking isValidElement is the safe way and avoids a typescript error too
        if (react_1["default"].isValidElement(child)) {
            return react_1["default"].cloneElement(child, __assign(__assign({}, props), { params: pathValidate }));
        }
        return child;
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        children ? childrenWithProps : react_1["default"].createElement(Component, __assign({}, props, { params: pathValidate })),
        " "));
});
exports.Route = Route;
