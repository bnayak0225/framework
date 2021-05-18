"use strict";
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
exports.__esModule = true;
var webpack_sources_1 = require("webpack-sources");
var PagesManifestPlugin = /** @class */ (function () {
    function PagesManifestPlugin(type) {
        this.type = type;
    }
    PagesManifestPlugin.prototype.apply = function (compiler) {
        compiler.hooks.emit.tap('PagesManifest', function (compilation) {
            var e_1, _a;
            var chunks = compilation.chunks;
            var pages = {};
            try {
                for (var chunks_1 = __values(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
                    var chunk = chunks_1_1.value;
                    var pagePath = chunk.files[0];
                    var pageName = chunk.name;
                    if (!pagePath) {
                        continue;
                    }
                    pages[pageName] = pagePath;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (chunks_1_1 && !chunks_1_1.done && (_a = chunks_1["return"])) _a.call(chunks_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            compilation.assets['pages-manifest.json'] = new webpack_sources_1.RawSource(JSON.stringify(pages));
        });
    };
    return PagesManifestPlugin;
}());
exports["default"] = PagesManifestPlugin;
