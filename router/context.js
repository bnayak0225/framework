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
exports.RouterContext = void 0;
var react_1 = __importDefault(require("react"));
var history_1 = require("./history");
// const history = () =>{
//     if(typeof(window) !== "undefined"){
//         return window.history
//     }
// }
var pathname = window.location.pathname;
var push = function (to) {
    history_1.history.push(to);
    pathname = to;
};
exports.RouterContext = react_1.default.createContext({ pathname: pathname, push: function (to) { return push(to); } });
var RouterContextProvider = /** @class */ (function (_super) {
    __extends(RouterContextProvider, _super);
    function RouterContextProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { pathname: window.location.pathname };
        _this.push = function (to) {
            history_1.history.push(to);
            _this.setState({
                pathname: to
            });
        };
        return _this;
    }
    RouterContextProvider.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener('popstate', function (e) {
            pathname = window.location.pathname;
            _this.setState({
                pathname: pathname
            });
        });
    };
    RouterContextProvider.prototype.componentDidUpdate = function () {
    };
    RouterContextProvider.prototype.render = function () {
        var _this = this;
        // console.log({...this.context, push: (to) => push(to)});
        return (react_1.default.createElement(exports.RouterContext.Provider, { value: __assign(__assign({}, this.state), { push: function (to) { return _this.push(to); } }) }, this.props.children));
    };
    RouterContextProvider.contextType = exports.RouterContext;
    return RouterContextProvider;
}(react_1.default.Component));
// RouterContextProvider.contextType=RouterContext
exports.default = RouterContextProvider;
