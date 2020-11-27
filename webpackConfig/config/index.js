"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = exports.Loader = void 0;
var loader_1 = __importDefault(require("./loader"));
exports.Loader = loader_1.default;
var Plugin_1 = require("./Plugin");
Object.defineProperty(exports, "Plugin", { enumerable: true, get: function () { return Plugin_1.Plugin; } });
