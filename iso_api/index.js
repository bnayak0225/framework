"use strict";
exports.__esModule = true;
var apiCall = function () {
    var apiList = ["0"];
    return {
        fetchApi: function (value) {
            apiList.push(value);
            console.log("---", apiList);
            return value;
        },
        getApiList: function () {
            return apiList;
        }
    };
};
var isoApi = apiCall();
exports["default"] = isoApi;
