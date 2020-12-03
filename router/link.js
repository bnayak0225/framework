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
exports.Link = void 0;
var react_1 = __importDefault(require("react"));
var context_1 = require("./context");
function Link(props) {
    var to = props.to, onClick = props.onClick, children = props.children;
    var push = react_1.default.useContext(context_1.RouterContext).push;
    var handleClick = function (e) {
        e.preventDefault();
        // const routerContext = RouterContext
        if (typeof (window) !== "undefined") {
            push(to);
        }
    };
    return (react_1.default.createElement("span", __assign({}, props, { onClick: handleClick }),
        react_1.default.createElement("a", { href: props.to, onclick: function (e) { return e.preventDefault(); } }, children)));
}
exports.Link = Link;
