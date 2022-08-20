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
exports.Connect = void 0;
var react_1 = __importDefault(require("react"));
var useStateContext_1 = require("./useStateContext");
var Connect = function (getState, setState) {
    // let getState
    return function (WrappedComponent) {
        return function (props) {
            var _a = useStateContext_1.useStateContext(), context = _a.context, initialValue = _a.initialValue;
            console.log("connect", initialValue);
            var store = function () {
                var state = context.state, dispatch = context.dispatch;
                console.log("connect-state", state);
                if (!window.client) {
                    state = __assign(__assign({}, initialValue), state);
                }
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
            // console.log(serverSideProvider.getInitialValue);
            return (react_1.default.createElement(WrappedComponent, __assign({}, stateToProps, statePush, props, Store)));
        };
    };
};
exports.Connect = Connect;
