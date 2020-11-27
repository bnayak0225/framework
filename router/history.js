"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.history = void 0;
var history = {
    push: function (to) {
        if (typeof (window) !== "undefined") {
            window.history.pushState({ url: to }, "title 1", to);
        }
    }
};
exports.history = history;
