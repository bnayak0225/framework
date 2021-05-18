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
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var context_1 = __importDefault(require("./context"));
var Provider = react_1.memo(function (_a) {
    var initialState = _a.initialState, children = _a.children;
    var Context = context_1["default"];
    // let state=initialState
    var _b = __read(react_1["default"].useState({}), 2), state = _b[0], setState = _b[1];
    var allowStateUpdate = function (objectValue1, objectValue2) {
        // console.log(typeof objectValue1);
        // if (typeof objectValue1 === typeof objectValue2){
        //     if(
        //         (typeof objectValue1 === "undefined"
        //             || typeof objectValue1 === "boolean"
        //             || typeof objectValue1 === "number"
        //             || typeof objectValue1 === "string"
        //             || typeof objectValue1 === "bigint"
        //             || typeof objectValue1 === "symbol")
        //         && objectValue1 === objectValue2
        //     ){
        //         return false
        //     }
        //     else if(typeof objectValue1 === "object"){
        //         if(objectValue1 ===null && objectValue1===objectValue2){
        //             return false
        //         }
        //     }
        // }
        return true;
    };
    var dispatch = function (props) {
        var key = Object.keys(props);
        if (!state[key]) {
            setState(function (prevState) {
                var _a;
                return (__assign(__assign({}, prevState), (_a = {}, _a[key] = props[key], _a)));
            });
        }
    };
    return (react_1["default"].createElement(Context.Provider, { value: { state: __assign(__assign({}, initialState), state), dispatch: function (props) { return dispatch(props); } } }, children));
});
exports["default"] = Provider;
