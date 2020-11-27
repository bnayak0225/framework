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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
var react_1 = __importDefault(require("react"));
var context_1 = require("./context");
var validatePath_1 = __importDefault(require("./validatePath"));
var Route = function (_a) {
    var path = _a.path, component = _a.component, children = _a.children, props = _a.props;
    console.log("hello", props);
    var error = false;
    if (path === undefined) {
        // throw new ValidationError('Router error: path is missing');
        error = true;
        // ErrorBoundary.throwError(new Error('Router error: path is missing'))
        return "";
    }
    var Component = component;
    var routerContext = context_1.RouterContext;
    var url = react_1.default.useContext(routerContext).pathname;
    console.log(url);
    var pathValidate = validatePath_1.default(path, url);
    if (!pathValidate) {
        return null;
    }
    console.log(pathValidate);
    var childrenWithProps = react_1.default.Children.map(children, function (child) {
        // checking isValidElement is the safe way and avoids a typescript error too
        if (react_1.default.isValidElement(child)) {
            return react_1.default.cloneElement(child, __assign(__assign({}, props), { params: pathValidate }));
        }
        return child;
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        children ? childrenWithProps : react_1.default.createElement(Component, __assign({}, props, { params: pathValidate })),
        " "));
};
exports.Route = Route;
Route.propTypes = {
    path: function (props, propName, componentName) {
        if (!props[propName]) {
            // console.log(new Error(propName + ' is missing ' + componentName + '.'));
            // try {
            // }
            // catch(error){
            //     console.log(error);
            //     ErrorBoundary.throwError(error)
            // }
        }
    }
};
