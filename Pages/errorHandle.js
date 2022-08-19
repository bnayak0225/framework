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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: [],
            errorInfo: [],
            hasError: false,
        };
        _this.callBackFunction = _this.callBackFunction.bind(_this);
        ErrorBoundary._that = _this;
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        console.log(error);
        return { hasError: true };
    };
    ErrorBoundary.prototype.componentDidCatch = function (error, info) {
        console.log(error);
        // set the the hasError state to true so on the next render it will display the `<div>Error occured.</div>` in the DOM.
        this.setState({ hasError: true });
    };
    // callBackFunction=(errorArray)=>{
    //     let error = this.state.error
    //     let errorStackFrame = []
    //     // console.log(errorArray.stack.toString().split("\n"));
    //     var gps = new StackTraceGPS()
    //     this.errorFrame = ErrorStackParser.parse(errorArray)
    //     this.newFrames = new Array(this.errorFrame.length)
    //     var frameResolved = 0;
    //     this.errorFrame.forEach((stackFrame, i) =>{
    //         gps.pinpoint(stackFrame).then((newFrame) =>{
    //             this.newFrames[i] = newFrame
    //             frameResolved++;
    //             if (frameResolved === this.errorFrame.length){
    //                 this.allFramesResolved(errorArray)
    //             }
    //         }, function(){
    //             console.error(arguments)
    //         })
    //     })
    //     console.log("--------",errorStackFrame);
    //     // let errorWithoutModule = ErrorStackParser.parse(errorArray).filter(stack=>stack && stack.fileName.includes("node_modules")===false)
    //     // console.log({message: errorArray.message, stack: errorWithoutModule});
    //     // error.push({message: errorArray.message, stack: errorWithoutModule})
    //     // this.setState({error})
    // }
    // allFramesResolved=(errorArray)=>{
    //     let error = this.state.error
    //     var newFrameStrings = this.newFrames.map(function(frame){
    //         return frame.toString();
    //     })
    //     error.push({message: errorArray.message, stack: newFrameStrings.filter(stack=>stack.includes("node_modules")===false)})
    //     this.setState({error})
    //     console.log("---------xx",newFrameStrings)
    // }
    // allFramesResolved=()=>{
    //     var newFrameStrings = newFrames.map(function(frame){
    //         return frame.toString();
    //     })
    //     console.log(newFrameStrings.join("\n"))
    // }
    // static throwError = (error)=> {
    //     ErrorBoundary._that.callBackFunction(error)
    // }
    ErrorBoundary.prototype.render = function () {
        return (this.props.children);
        // return <div style={{backgroundColor: "#ffffff", position:"fixed", width: "100%", height: "100%", left: "0", top: "0", zIndex: "1111111111111111"}}>
        //     {this.state.error.map((error)=>{
        //         console.log(error);
        //         return(<div>
        //             {error.message}
        //             {error.stack.map(stack=>{
        //                 return(
        //                     <div>
        //                        <span>{stack}</span>
        //                     </div>
        //                 )
        //             })}
        //         </div>)
        //     })}
        // </div>;
    };
    return ErrorBoundary;
}(react_1.Component));
exports.default = ErrorBoundary;
