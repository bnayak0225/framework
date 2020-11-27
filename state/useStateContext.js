"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateContext = void 0;
var react_1 = require("react");
var context_1 = require("./context");
function useStateContext() {
    var contextValue = react_1.useContext(context_1.StoreContext);
    // console.log(contextValue);
    return contextValue;
}
exports.useStateContext = useStateContext;
