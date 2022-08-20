"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateContext = void 0;
var react_1 = require("react");
var context_1 = __importDefault(require("./context"));
function useStateContext() {
    var contextValue = react_1.useContext(context_1.default);
    return contextValue;
}
exports.useStateContext = useStateContext;
