"use strict";
exports.__esModule = true;
function Shape(value) {
    //here count is variable and it is static declaration contains constructor function name  
    /* Shape.Count=++Shape.Count||1;  */
    // this is static function   
    // @ts-ignore
    Shape.GetTotalCount = function () {
        return value;
    };
}
exports["default"] = Shape;
