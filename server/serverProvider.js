"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverSideProvider = {
    initialValue: {}
};
Object.defineProperty(serverSideProvider, 'getInitialValue', {
    get: function () {
        return this.initialValue;
    }
});
Object.defineProperty(serverSideProvider, 'setInitialValue', {
    set: function (value) {
        this.initialValue = value;
    }
});
exports.default = serverSideProvider;
