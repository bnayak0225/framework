"use strict";
exports.__esModule = true;
exports.history = void 0;
var history = {
    push: function (to) {
        if (typeof (window) !== "undefined") {
            window.history.pushState({ url: to }, "", to);
        }
    },
    replace: function (to) {
        if (typeof (window) !== "undefined") {
            window.history.replaceState({ url: to }, "", to);
        }
    }
};
exports.history = history;
