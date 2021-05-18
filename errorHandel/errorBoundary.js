"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var errorParser_1 = __importDefault(require("./errorParser"));
var http = require('http');
var error = [];
var ErrorOverlay = /** @class */ (function (_super) {
    __extends(ErrorOverlay, _super);
    function ErrorOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorOverlay.prototype.componentWillReceiveProps = function (nextProps) {
        console.log(nextProps.error.html);
        if (this.props !== nextProps && nextProps.error.html) {
            document.getElementById("code-overlay").innerHTML = nextProps.error.html;
        }
    };
    ErrorOverlay.prototype.render = function () {
        var error = this.props.error;
        return (react_1["default"].createElement("div", { style: style.overlay },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h4", { style: style.overlay_h4 },
                    react_1["default"].createElement("span", { style: style.errorType }, error.name),
                    " in ",
                    react_1["default"].createElement("span", { style: style.errorFileName }, error.fileName),
                    " at line ",
                    error.line,
                    ":",
                    error.column),
                react_1["default"].createElement("h5", { style: style.overlay_h5 }, error.message)),
            react_1["default"].createElement("div", { id: "code-overlay" }),
            react_1["default"].createElement("div", { style: style.stack },
                react_1["default"].createElement("pre", null, error.stack))));
    };
    return ErrorOverlay;
}(react_1["default"].Component));
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
            }
        }
    };
    rawFile.send(null);
}
var ErrorBoundary = react_1.memo(function (_a) {
    var children = _a.children, hasError = _a.hasError, error = _a.error;
    var _b = __read(react_1.useState({
        stack: "",
        name: "",
        message: "",
        fileName: "",
        line: "",
        column: "",
        html: ""
    }), 2), errorDetail = _b[0], setErrorDetail = _b[1];
    react_1.useEffect(function () {
        errorParser_1["default"](error).then(function (parsedError) {
            console.log(error.name, error.message);
            var firstLine = parsedError[0].match(/(?:webpack:\/\/)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm);
            firstLine = firstLine[0].split("webpack:///")[1].split(":");
            var fileName = firstLine[0];
            var line = firstLine[1];
            var column = firstLine[2];
            var errorStack = parsedError.join("\n").replace(/webpack:\/\/\//g, "");
            console.log(errorStack);
            fetch("http://localhost:3006/get-error-file-text?path=" + fileName + "&line=" + line + "&column=" + column, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(function (response) {
                return response.text();
            }).then(function (html) {
                // var parser = new DOMParser();
                //
                // // Parse the text
                // var doc = parser.parseFromString(html, "text/html");
                // let div = doc.body.firstChild
                // console.log(div);
                // You can now even select part of that html as you would in the regular DOM
                // Example:
                // var docArticle = doc.querySelector('article').innerHTML;
                setErrorDetail({
                    stack: errorStack,
                    name: error.name,
                    message: error.message,
                    fileName: fileName,
                    line: line,
                    column: column,
                    html: html
                });
            });
        });
    }, [error]);
    return (react_1["default"].createElement("div", { style: style.container },
        react_1["default"].createElement(ErrorOverlay, { error: errorDetail, errorName: true })));
});
var style = {
    container: {
        padding: "30px"
    },
    overlay: {
        color: "#323232",
        fontFamily: "'Roboto', sans-serif",
        fontSize: "16px",
        border: "1px solid rgb(252 58 58)",
        padding: "20px",
        borderRadius: "4px",
        boxShadow: "0px 1px 5px 2px #0000002e",
        maxWidth: "900px",
        margin: "auto"
    },
    stack: {
        color: "rgb(255 82 82)"
    },
    overlay_h4: {
        fontSize: "20px",
        margin: "10px 0 10px"
    },
    overlay_h5: {
        fontSize: "18px",
        margin: "5px 0 10px",
        color: "#e57526",
        fontWeight: 500
    },
    errorType: {
        color: "red"
    },
    errorFileName: {
        color: "#187cb6"
    }
};
exports["default"] = ErrorBoundary;
//# sourceMappingURL=errorBoundary.js.map