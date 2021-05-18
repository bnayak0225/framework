"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.locationToRoute = void 0;
var querystringify_1 = __importDefault(require("querystringify"));
function locationToRoute(location) {
    // location comes from the history package
    return {
        path: location.pathname,
        hash: location.hash,
        query: querystringify_1["default"].parse(location.search)
    };
}
exports.locationToRoute = locationToRoute;
