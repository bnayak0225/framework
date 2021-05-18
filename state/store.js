"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var context_1 = __importDefault(require("./context"));
var store = function () {
    var _a = context_1.default._currentValue, state = _a.state, dispatch = _a.dispatch;
    var getState = function () {
        return state;
    };
    return {
        getState: function () { return getState(); },
        dispatch: function (props) { return dispatch(props); }
    };
};
exports.store = store;
