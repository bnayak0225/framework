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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Head = void 0;
var react_1 = __importDefault(require("react"));
var clientToSserver_1 = __importDefault(require("./clientToSserver"));
var HeadTag = /** @class */ (function (_super) {
    __extends(HeadTag, _super);
    function HeadTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeadTag.prototype.componentWillUnmount = function () {
        removeElement();
    };
    HeadTag.prototype.render = function () {
        return null;
    };
    return HeadTag;
}(react_1["default"].PureComponent));
var removeElement = function () {
    var e_1, _a;
    var elements = document.querySelectorAll('[head-tag="true"]');
    try {
        for (var _b = __values(elements), _c = _b.next(); !_c.done; _c = _b.next()) {
            var element = _c.value;
            element.remove();
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
var createElement = function (type) {
    var element = document.createElement(type);
    element.setAttribute("HEAD-TAG", "true");
    return element;
};
var getTagArray = function (props) {
    var e_2, _a, e_3, _b, e_4, _c;
    var elementsArray = document.createDocumentFragment();
    var tags = [];
    if (!Array.isArray(props.children)) {
        tags = [props.children];
    }
    else {
        tags = props.children;
    }
    try {
        for (var tags_1 = __values(tags), tags_1_1 = tags_1.next(); !tags_1_1.done; tags_1_1 = tags_1.next()) {
            var tag = tags_1_1.value;
            var element = createElement(tag.type);
            var attributeNameArray = Object.keys(tag.props);
            var indexChildren = attributeNameArray.findIndex(function (a) { return a === "children"; });
            switch (tag.type) {
                case "title":
                    element.innerHTML = tag.props.children;
                    break;
                case "meta":
                    if (indexChildren !== -1) {
                        attributeNameArray.splice(indexChildren, 1);
                    }
                    try {
                        for (var attributeNameArray_1 = (e_3 = void 0, __values(attributeNameArray)), attributeNameArray_1_1 = attributeNameArray_1.next(); !attributeNameArray_1_1.done; attributeNameArray_1_1 = attributeNameArray_1.next()) {
                            var attribute = attributeNameArray_1_1.value;
                            element.setAttribute(attribute, tag.props[attribute]);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (attributeNameArray_1_1 && !attributeNameArray_1_1.done && (_b = attributeNameArray_1["return"])) _b.call(attributeNameArray_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    break;
                case "script":
                    var scriptText = "";
                    if (indexChildren !== -1) {
                        scriptText = tag.props["children"];
                        attributeNameArray.splice(indexChildren, 1);
                    }
                    try {
                        try {
                            for (var attributeNameArray_2 = (e_4 = void 0, __values(attributeNameArray)), attributeNameArray_2_1 = attributeNameArray_2.next(); !attributeNameArray_2_1.done; attributeNameArray_2_1 = attributeNameArray_2.next()) {
                                var attribute = attributeNameArray_2_1.value;
                                element.setAttribute(attribute, tag.props[attribute]);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (attributeNameArray_2_1 && !attributeNameArray_2_1.done && (_c = attributeNameArray_2["return"])) _c.call(attributeNameArray_2);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                    catch (e) {
                    }
                    if (scriptText) {
                        element.innerText = scriptText;
                    }
                    break;
            }
            elementsArray.appendChild(element);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (tags_1_1 && !tags_1_1.done && (_a = tags_1["return"])) _a.call(tags_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return elementsArray;
};
var stateOnChange = function (props) {
    removeElement();
    var html = getTagArray(props);
    document.head.appendChild(html);
};
var propsToState = function (props) {
    var fragment = getTagArray(props);
    var element = document.createElement("div");
    element.appendChild(fragment);
    return element.innerHTML.toString();
};
var Head = (clientToSserver_1["default"](propsToState, stateOnChange)(HeadTag));
exports.Head = Head;
