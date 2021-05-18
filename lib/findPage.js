"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var constant_1 = require("./constant");
var process_1 = __importDefault(require("process"));
/**
 * @class findPage.
 * @return {Array<Object>} pages.
 */
function findPage() {
    var pagesPath = path_1["default"].join(process_1["default"].cwd(), constant_1.SRC_LOCATION);
    var files = fs_1["default"].readdirSync(pagesPath);
    var pageArray = [];
    files.forEach(function (file) {
        var fileObject = fs_1["default"].statSync(path_1["default"].join(pagesPath, file));
        if (fileObject.isFile()) {
            var file_name = file.split('.').slice(0, -1).join('.');
            pageArray.push({ path: pagesPath, file: file, name: file_name });
        }
    });
    return pageArray;
}
exports["default"] = findPage;
;
