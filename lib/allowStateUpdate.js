"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var allowStateUpdate = function (objectValue1, objectValue2) {
    if (typeof objectValue1 === typeof objectValue2) {
        if ((typeof objectValue1 === "undefined"
            || typeof objectValue1 === "boolean"
            || typeof objectValue1 === "number"
            || typeof objectValue1 === "string"
            || typeof objectValue1 === "bigint"
            || typeof objectValue1 === "symbol")
            && objectValue1 === objectValue2) {
            return false;
        }
        else if (typeof objectValue1 === "object") {
            if (objectValue1 === null && objectValue1 === objectValue2) {
                return false;
            }
        }
    }
    return true;
};
exports.default = allowStateUpdate;
