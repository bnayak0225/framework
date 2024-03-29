#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = __importDefault(require("../build_ssr/compiler"));
var constant_1 = require("../lib/constant");
var inquirer = require('inquirer');
var argv = process.argv.slice(2);
var option = {
    start: false,
    build: false,
    port: constant_1.DEFAULT_PORT,
    host: "http://localhost:" + constant_1.DEFAULT_PORT
};
var checkOption = function (argv, option) {
    var e_1, _a;
    try {
        for (var argv_1 = __values(argv), argv_1_1 = argv_1.next(); !argv_1_1.done; argv_1_1 = argv_1.next()) {
            var arg = argv_1_1.value;
            var argKey = arg.includes(":") ? arg.split(":")[0] : arg;
            if (option.hasOwnProperty(argKey)) {
                if (typeof option[argKey] === 'boolean') {
                    option[argKey] = true;
                }
                else {
                    option[argKey] = typeof option[argKey] === "number" ? Number(arg.split(":")[1]) : arg.split(":").slice(1).join(':');
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (argv_1_1 && !argv_1_1.done && (_a = argv_1.return)) _a.call(argv_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return option;
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var argOption, mode, port, question, answer, question, answer, host;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                argOption = checkOption(argv, option);
                mode = "", port = constant_1.DEFAULT_PORT;
                if (!(!argOption["start"] && !argOption["build"])) return [3 /*break*/, 2];
                question = [
                    {
                        type: "list",
                        name: "mode",
                        message: "Select your mode",
                        choices: ['build', 'start'],
                        default: 'start'
                    }
                ];
                return [4 /*yield*/, inquirer.prompt(question)];
            case 1:
                answer = _a.sent();
                mode = answer.mode;
                return [3 /*break*/, 3];
            case 2:
                if (argOption["start"] && argOption["build"]) {
                    console.log("Usage:\x1b[33m framework \x1b[34m<command>\n\x1b[0m");
                    console.log("where \x1b[34m<command>\x1b[0m", "is one of: \x1b[31mstart, build", "\x1b[0m");
                    return [2 /*return*/, ""];
                }
                else {
                    mode = argOption["start"] ? "start" : "build";
                }
                _a.label = 3;
            case 3:
                if (!!argOption["port"]) return [3 /*break*/, 5];
                question = [
                    {
                        type: "number",
                        name: "port",
                        message: "Select your port range 1024 to 49151: ",
                        choices: [''],
                        default: constant_1.DEFAULT_PORT
                    }
                ];
                return [4 /*yield*/, inquirer.prompt(question)];
            case 4:
                answer = _a.sent();
                if (!answer.port || (answer.port > 49151 || answer.port < 1024)) {
                    console.log("Invalid \x1b[31mport number", "\x1b[0m");
                    return [2 /*return*/];
                }
                port = argOption["port"];
                return [3 /*break*/, 6];
            case 5:
                if (argOption["port"]) {
                    if (typeof argOption["port"] !== 'number' || (argOption["port"] > 49151 || argOption["port"] < 1024)) {
                        console.log("Invalid \x1b[31mport number, range from 1024 to 49151", "\x1b[0m");
                        return [2 /*return*/];
                    }
                    port = argOption["port"];
                }
                _a.label = 6;
            case 6:
                if (argOption["host"]) {
                    host = argOption["host"];
                }
                if (!(mode === "start")) return [3 /*break*/, 8];
                return [4 /*yield*/, require('../start_server/server').server(port)];
            case 7:
                _a.sent();
                return [3 /*break*/, 9];
            case 8:
                compiler_1.default(port, host);
                _a.label = 9;
            case 9: return [2 /*return*/];
        }
    });
}); })();
