"use strict";
exports.__esModule = true;
var path_1 = require("path");
// This plugin modifies the require-ensure code generated by Webpack
// to work with Next.js SSR
var NextJsSsrImportPlugin = /** @class */ (function () {
    function NextJsSsrImportPlugin() {
    }
    NextJsSsrImportPlugin.prototype.apply = function (compiler) {
        compiler.hooks.compilation.tap('NextJsSSRImport', function (compilation) {
            compilation.mainTemplate.hooks.requireEnsure.tap('NextJsSSRImport', function (code, chunk) {
                // Update to load chunks from our custom chunks directory
                var outputPath = path_1.resolve('/');
                var pagePath = path_1.join('/', path_1.dirname(chunk.name));
                var relativePathToBaseDir = path_1.relative(pagePath, outputPath);
                // Make sure even in windows, the path looks like in unix
                // Node.js require system will convert it accordingly
                var relativePathToBaseDirNormalized = relativePathToBaseDir.replace(/\\/g, '/');
                return code
                    .replace('require("./"', "require(\"" + relativePathToBaseDirNormalized + "/\"")
                    .replace('readFile(join(__dirname', "readFile(join(__dirname, \"" + relativePathToBaseDirNormalized + "\"");
            });
        });
    };
    return NextJsSsrImportPlugin;
}());
exports["default"] = NextJsSsrImportPlugin;
//# sourceMappingURL=import.js.map