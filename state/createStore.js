"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createStore = void 0;
var react_1 = require("react");
var context_1 = __importDefault(require("./context"));
var useStateContext_1 = require("./useStateContext");
function createStore(context) {
    if (context === void 0) { context = context_1["default"]; }
    var useStoreContext = context === context_1["default"] ? useStateContext_1.useStateContext : function () { return react_1.useContext(context); };
    return function useStore() {
        var store = useStoreContext().store;
        return store;
    };
}
exports.createStore = createStore;
