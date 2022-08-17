"use strict";
exports.__esModule = true;
var webpack_sources_1 = require("webpack-sources");
var Html = /** @class */ (function () {
    function Html() {
    }
    Html.prototype.apply = function (compiler) {
        compiler.hooks.emit.tap('Html', function (compilation) {
            var chunks = compilation.chunks, assets = compilation.assets;
            var pages = {};
            var fileJson = [];
            Array.from(compilation.entrypoints.keys()).map(function (arr) {
                var json = {
                    entry: arr + ".js", chunk: []
                };
                compilation.entrypoints.get(arr).chunks.map(function (chunk) {
                    var modules = [];
                    chunk.getModules().map(function (mod) {
                        // console.log(mod && mod.id.toString().split(".").pop().split(".").pop());
                        if (mod && mod.id.toString().split(".").pop().split(".").pop() === "css") {
                            modules.push(mod.id.match(/^.*?([^\\/.]*)[^\\/]*$/)[1] + ".css");
                        }
                    });
                    json.chunk.push({
                        file: chunk.id + ".js", css: modules.toString()
                    });
                });
                fileJson.push(json);
            });
            compilation.assets['pages-assets.json'] = new webpack_sources_1.RawSource(JSON.stringify(fileJson));
        });
    };
    return Html;
}());
exports["default"] = Html;
