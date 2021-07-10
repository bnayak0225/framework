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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Route = exports.withRouter = exports.Link = exports.Router = exports.RouterContext = void 0;
var react_1 = __importDefault(require("react"));
var utils_1 = require("./utils");
var context_1 = require("./context");
exports.RouterContext = context_1.RouterContext;
var link_1 = require("./link");
exports.Link = link_1.Link;
var withRouter_1 = require("./withRouter");
exports.withRouter = withRouter_1.withRouter;
var Route_1 = require("./Route");
exports.Route = Route_1.Route;
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router(props) {
        var _this = _super.call(this, props) || this;
        _this.handleRouteChange = function (location) {
            var route = utils_1.locationToRoute(location);
            _this.setState({ route: route });
        };
        // Convert our routes into an array for easy 404 checking
        _this.routes = Object.keys(props.routes).map(function (key) { return props.routes[key].path; });
        // Listen for path changes from the history API
        _this.unlisten = history.listen(_this.handleRouteChange);
        // Define the initial RouterContext value
        _this.state = {
            route: utils_1.locationToRoute(history.location)
        };
        return _this;
    }
    Router.prototype.componentWillUnmount = function () {
        // Stop listening for changes if the Router component unmounts
        this.unlisten();
    };
    Router.prototype.render = function () {
        // Define our variables
        var _a = this.props, children = _a.children, NotFound = _a.NotFound;
        var route = this.state.route;
        // Create our RouterContext value
        var routerContextValue = { route: route };
        // Check if 404 if no route matched
        var is404 = this.routes.indexOf(route.path) === -1;
        console.log("time");
        return (react_1["default"].createElement(context_1.RouterContext.Provider, { value: routerContextValue }, is404 ? react_1["default"].createElement(NotFound, null) : children));
    };
    return Router;
}(react_1["default"].PureComponent));
exports.Router = Router;
