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
Object.defineProperty(exports, "__esModule", { value: true });
var validatePath = function (path, url) {
    var _a;
    var pathname = path;
    var locationPath = url;
    if (pathname.charAt(0) === "/") {
        pathname = pathname.substring(1);
    }
    if (pathname.charAt(pathname.length - 1) === "/") {
        pathname = pathname.slice(0, -1);
    }
    if (locationPath.charAt(0) === "/") {
        locationPath = locationPath.substring(1);
    }
    if (locationPath.charAt(locationPath.length - 1) === "/") {
        locationPath = locationPath.slice(0, -1);
    }
    var pathArray = pathname.split("/");
    var locationArray = locationPath.split("/");
    var prop = {};
    if (pathArray.length === locationArray.length || (pathArray[pathArray.length - 1] === "*" && pathArray.length - 1 === locationArray.length)) {
        if (pathArray[0] !== "index" || (pathArray[0] === "index" && locationArray[0] !== "")) {
            for (var i = 0; i < pathArray.length; i++) {
                if (pathArray[i] !== "*" && pathArray[i] !== locationArray[i] && pathArray[i].charAt(0) !== ":") {
                    return null;
                }
                else if (pathArray[i].charAt(0) === ":") {
                    prop = __assign(__assign({}, prop), (_a = {}, _a[pathArray[i].substring(1)] = locationArray[i], _a));
                }
            }
        }
    }
    else {
        return null;
    }
    return prop;
};
exports.default = validatePath;
