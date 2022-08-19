"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dynamicImport = function (pathname) {
    return new Promise(function (resolve) {
        require(["dirPage/pages/" + pathname], function (require) {
            resolve(require("dirPage/pages/" + pathname).default);
        });
    });
};
exports.default = dynamicImport;
