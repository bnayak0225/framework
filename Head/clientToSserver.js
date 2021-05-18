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
var react_1 = __importStar(require("react"));
var useComponentWillMount = function (func) {
    var willMount = react_1.useRef(true);
    if (willMount.current) {
        func();
    }
    willMount.current = false;
};
var canUseDOM = !!(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);
var withClientToServer = function (propsToState, onChange) {
    return function (WrappedComponent) {
        var state;
        var updateState = function (props) {
            state = propsToState(props);
        };
        var changeState = function (props) {
            if (ClientToServer.canUseDOM) {
                onChange(props);
            }
        };
        var ClientToServer = react_1.memo(function (props) {
            useComponentWillMount(function () {
                updateState(props);
            });
            react_1.useEffect(function () {
                changeState(props);
            }, [props]);
            return (react_1["default"].createElement(WrappedComponent, __assign({}, props)));
        });
        ClientToServer.canUseDOM = canUseDOM;
        ClientToServer.getState = function () {
            var stateStore = state;
            return stateStore ? stateStore : "";
        };
        return ClientToServer;
    };
};
exports["default"] = withClientToServer;
//# sourceMappingURL=clientToSserver.js.map