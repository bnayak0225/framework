"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var error404 = function () {
    return (react_1.default.createElement("div", { style: { textAlign: "center", position: "absolute", top: "40%", left: "50%", transform: "translate(-50%)", fontFamily: "sans-serif", color: "#4d505a" } },
        react_1.default.createElement("h1", { style: { borderBottom: "1px solid #ffa9a9" } }, "404 error!"),
        react_1.default.createElement("p", null, "Page not found")));
};
exports.default = error404;
