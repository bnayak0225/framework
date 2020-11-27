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
exports.withRouter = void 0;
var react_1 = __importDefault(require("react"));
var context_1 = require("./context");
function withRouter(WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            // location = window.location
            _this.location = __assign({}, window.location);
            return _this;
        }
        class_1.prototype.render = function () {
            var _this = this;
            return (react_1.default.createElement(context_1.RouterContext.Consumer, null, function (state) { return (react_1.default.createElement(WrappedComponent, __assign({}, _this.props, { location: __assign(__assign({}, _this.location), { push: state.push }) }))); }));
        };
        return class_1;
    }(react_1.default.Component));
}
exports.withRouter = withRouter;
