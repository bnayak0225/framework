"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var webpack_1 = __importDefault(require("webpack"));
var compiler = function (config, option) {
    return new Promise(function (resolve) {
        var compiler = webpack_1["default"](config);
        compiler.watch(option, function (error, stats) {
            if (!error && !stats.hasErrors()) {
                // console.log(stats.toString(config.stats));
                // async () => await import('../server/server');
                resolve();
            }
            if (error) {
                console.log('error', error);
            }
            if (stats.hasErrors()) {
                var info = stats.toJson();
                var errors = info.errors[0].split('\n');
                console.log('error', errors[0]);
                console.log('error', errors[1]);
                console.log('error', errors[2]);
            }
        });
    });
};
exports["default"] = compiler;
//# sourceMappingURL=compiler.js.map