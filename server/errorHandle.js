"use strict";
exports.__esModule = true;
var errorHandler = function (err, _req, res, _next) {
    res.status(500).send('<pre>' + err.stack + '</pre>');
};
exports["default"] = errorHandler;
//# sourceMappingURL=errorHandle.js.map