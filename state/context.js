"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ServerProvider_1 = __importDefault(require("../server/ServerProvider"));
var StoreContext = react_1.default.createContext({ state: ServerProvider_1.default.getInitialValue, dispatch: function () { } });
exports.default = StoreContext;
