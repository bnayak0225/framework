"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = exports.Provider = void 0;
var Provider_1 = __importDefault(require("./Provider"));
exports.Provider = Provider_1.default;
var connect_1 = require("./connect");
Object.defineProperty(exports, "Connect", { enumerable: true, get: function () { return connect_1.Connect; } });
