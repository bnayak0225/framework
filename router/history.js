"use strict";
exports.__esModule = true;
exports.history = void 0;
var history = {
    push: function (to) {
        if (typeof (window) !== "undefined") {
            window.history.pushState({ url: to }, "title 1", to);
        }
    }
};
exports.history = history;
