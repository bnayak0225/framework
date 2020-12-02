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
var store_1 = require("./store");
var Connect = function (getState, setState) {
    // let getState
    return function (WrappedComponent) {
        return function () {
            var Store = store_1.store();
            var state = Store.getState();
            var dispatch = Store.dispatch;
            var stateToProps = getState(state);
            var statePush = setState(dispatch);
            return (react_1.default.createElement(WrappedComponent, __assign({}, stateToProps, { setState: statePush }, Store)));
        };
    };
};
exports.Connect = Connect;
