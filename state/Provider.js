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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useStateContext_1 = require("./useStateContext");
function Provider(_a) {
    var initialState = _a.initialState, children = _a.children;
    var Context = useStateContext_1.useStateContext();
    // let state=initialState
    var _b = __read(react_1.default.useState(), 2), state = _b[0], setState = _b[1];
    var dispatch = function (props) {
        var key = Object.keys(props);
        setState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[key] = props[key], _a)));
        });
    };
    return (react_1.default.createElement(Context.Provider, { value: { state: __assign(__assign({}, initialState), state), dispatch: function (props) { return dispatch(props); } } }, children));
}
exports.default = Provider;
