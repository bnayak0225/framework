"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var entries = function (fileArray) {
    var entry = {};
    fileArray.forEach(function (page) {
        var _a;
        entry = __assign(__assign({}, entry), (_a = {}, _a[page.name] = path_1["default"].join(page.path, page.file), _a));
    });
    return entry;
};
exports["default"] = entries;
//# sourceMappingURL=entries.js.map