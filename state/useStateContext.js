"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateContext = void 0;
var react_1 = require("react");
var context_1 = __importDefault(require("./context"));
var ServerProvider_1 = __importDefault(require("../server/ServerProvider"));
function useStateContext() {
    console.log("connect", ServerProvider_1.default.getInitialValue);
    var contextValue = react_1.useContext(context_1.default);
    // console.log(contextValue);
    return { context: contextValue, initialValue: ServerProvider_1.default.getInitialValue };
}
exports.useStateContext = useStateContext;
