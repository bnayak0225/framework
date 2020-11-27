"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var useStateContext_1 = require("./useStateContext");
exports.store = function () {
    var _a = useStateContext_1.useStateContext(), state = _a.state, dispatch = _a.dispatch;
    var getState = function () {
        return state;
    };
    return {
        getState: function () { return getState(); },
        dispatch: function (props) { return dispatch(props); }
    };
};
