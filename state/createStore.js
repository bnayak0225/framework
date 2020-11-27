"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
var react_1 = require("react");
var context_1 = require("./context");
var useStateContext_1 = require("./useStateContext");
function createStore(context) {
    if (context === void 0) { context = context_1.StoreContext; }
    var useStoreContext = context === context_1.StoreContext ? useStateContext_1.useStateContext : function () { return react_1.useContext(context); };
    console.log(useStoreContext);
    return function useStore() {
        var store = useStoreContext().store;
        return store;
    };
}
exports.createStore = createStore;
