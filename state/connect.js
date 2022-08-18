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
exports.__esModule = true;
exports.Connect = void 0;
var react_1 = __importStar(require("react"));
var useStateContext_1 = require("./useStateContext");
var Connect = function (getState, setState) {
    // let getState
    return function (WrappedComponent) {
        return react_1.memo(function (props) {
            var context = useStateContext_1.useStateContext();
            var store = function () {
                var state = context.state, dispatch = context.dispatch;
                console.log("state", state);
                var getState = function () {
                    return state;
                };
                return {
                    getState: function () { return getState(); },
                    dispatch: function (props) { return dispatch(props); }
                };
            };
            var Store = store();
            var state = Store.getState();
            var dispatch = Store.dispatch;
            var stateToProps = getState(state);
            var statePush = setState(dispatch);
            return (react_1["default"].createElement(WrappedComponent, __assign({}, stateToProps, statePush, props, Store)));
        });
    };
};
exports.Connect = Connect;
