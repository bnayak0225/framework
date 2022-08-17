"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var error_stack_parser_1 = __importDefault(require("error-stack-parser"));
var stacktrace_gps_1 = __importDefault(require("stacktrace-gps"));
var ErrorParser = function (error) {
    return new Promise(function (resolve) {
        try {
            var errorStackFrame = [];
            var gps_1 = new stacktrace_gps_1["default"]();
            var errorFrame_1 = error_stack_parser_1["default"].parse(error);
            var frames_1 = new Array(errorFrame_1.length);
            var frameResolved_1 = 0;
            errorFrame_1.forEach(function (stackFrame, i) {
                gps_1.pinpoint(stackFrame).then(function (newFrame) {
                    frames_1[i] = newFrame.toString();
                    frameResolved_1++;
                    if (frameResolved_1 === errorFrame_1.length) {
                        resolve(frames_1);
                    }
                }, function () {
                    // console.error(arguments)
                });
            });
        }
        catch (e) {
            console.log(e);
            return "Unknown Error";
        }
    });
};
exports["default"] = ErrorParser;
