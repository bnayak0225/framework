"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("./context");
var validatePath_1 = __importDefault(require("./validatePath"));
var Switch = react_1.memo(function (_a) {
    var children = _a.children;
    var _b = __read(react_1.useState(), 2), component = _b[0], setComponent = _b[1];
    var routerContext = context_1.RouterContext;
    var pathname = react_1.default.useContext(routerContext).pathname;
    react_1.useEffect(function () {
        for (var i = 0; i < children.length; i++) {
            if (children[i].props && children[i].props.path) {
                var pathValidate = validatePath_1.default(children[i].props.path, pathname);
                if (pathValidate) {
                    setComponent(children[i]);
                    break;
                }
            }
        }
    }, [pathname]);
    return (react_1.default.createElement(react_1.default.Fragment, null, component));
});
exports.default = Switch;
