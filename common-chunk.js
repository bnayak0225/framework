(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-chunk"],{

/***/ "./dist/Head/Head.js":
/*!***************************!*\
  !*** ./dist/Head/Head.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {var __extends=this&&this.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values=this&&this.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function next(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.ClientToServer=void 0;var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var clientToSserver_1=__importDefault(__webpack_require__(/*! ./clientToSserver */ "./dist/Head/clientToSserver.js"));var HeadTag=/** @class */function(_super){__extends(HeadTag,_super);function HeadTag(){return _super!==null&&_super.apply(this,arguments)||this;}HeadTag.prototype.componentWillUnmount=function(){removeElement();};HeadTag.prototype.render=function(){return null;};return HeadTag;}(react_1["default"].PureComponent);var removeElement=function removeElement(){var e_1,_a;var elements=document.querySelectorAll('[head-tag="true"]');try{for(var _b=__values(elements),_c=_b.next();!_c.done;_c=_b.next()){var element=_c.value;element.remove();}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b["return"]))_a.call(_b);}finally{if(e_1)throw e_1.error;}}};var createElement=function createElement(type){var element=document.createElement(type);element.setAttribute("HEAD-TAG","true");return element;};var getTagArray=function getTagArray(props){var e_2,_a,e_3,_b;var elementsArray=document.createDocumentFragment();var tags=[];if(!Array.isArray(props.children)){tags=[props.children];}else{tags=props.children;}try{for(var tags_1=__values(tags),tags_1_1=tags_1.next();!tags_1_1.done;tags_1_1=tags_1.next()){var tag=tags_1_1.value;var element=createElement(tag.type);switch(tag.type){case"title":element.innerHTML=tag.props.children;break;case"meta":var attributeNameArray=Object.keys(tag.props);var indexChildren=attributeNameArray.findIndex(function(a){return a==="children";});if(indexChildren!==-1){attributeNameArray.splice(indexChildren,1);}try{for(var attributeNameArray_1=(e_3=void 0,__values(attributeNameArray)),attributeNameArray_1_1=attributeNameArray_1.next();!attributeNameArray_1_1.done;attributeNameArray_1_1=attributeNameArray_1.next()){var attribute=attributeNameArray_1_1.value;element.setAttribute(attribute,tag.props[attribute]);}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(attributeNameArray_1_1&&!attributeNameArray_1_1.done&&(_b=attributeNameArray_1["return"]))_b.call(attributeNameArray_1);}finally{if(e_3)throw e_3.error;}}break;}elementsArray.appendChild(element);}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(tags_1_1&&!tags_1_1.done&&(_a=tags_1["return"]))_a.call(tags_1);}finally{if(e_2)throw e_2.error;}}return elementsArray;};var stateOnChange=function stateOnChange(props){removeElement();var html=getTagArray(props);document.head.appendChild(html);};var propsToState=function propsToState(props){var fragment=getTagArray(props);var element=document.createElement("div");element.appendChild(fragment);return element.innerHTML.toString();};var ClientToServer=clientToSserver_1["default"](propsToState,stateOnChange)(HeadTag);exports.ClientToServer=ClientToServer;

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/Head/clientToSserver.js":
/*!**************************************!*\
  !*** ./dist/Head/clientToSserver.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {var __assign=this&&this.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:true,value:v});}:function(o,v){o["default"]=v;});var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod){if(k!=="default"&&Object.prototype.hasOwnProperty.call(mod,k))__createBinding(result,mod,k);}__setModuleDefault(result,mod);return result;};Object.defineProperty(exports,"__esModule",{value:true});var react_1=__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var useComponentWillMount=function useComponentWillMount(func){var willMount=react_1.useRef(true);if(willMount.current){func();}willMount.current=false;};var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);var withClientToServer=function withClientToServer(propsToState,onChange){return function(WrappedComponent){var state;var updateState=function updateState(props){state=propsToState(props);};var changeState=function changeState(props){if(ClientToServer.canUseDOM){onChange(props);}};var ClientToServer=react_1.memo(function(props){useComponentWillMount(function(){updateState(props);});react_1.useEffect(function(){changeState(props);},[props]);return react_1["default"].createElement(WrappedComponent,__assign({},props));});ClientToServer.canUseDOM=canUseDOM;ClientToServer.getState=function(){var stateStore=state;return stateStore?stateStore:"";};return ClientToServer;};};exports["default"]=withClientToServer;

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/client/webpack-hot-middleware/client-overlay.js":
/*!**************************************************************!*\
  !*** ./dist/client/webpack-hot-middleware/client-overlay.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/*eslint-env browser*/var clientOverlay=document.createElement('div');clientOverlay.id='webpack-hot-middleware-clientOverlay';var styles={background:'red',color:'#e8e8e8',lineHeight:'1.6',whiteSpace:'pre',fontFamily:'Menlo, Consolas, monospace',fontSize:'13px',position:'fixed',zIndex:9999,padding:'10px',left:0,right:0,top:0,bottom:0,overflow:'auto',dir:'ltr',textAlign:'left'};var ansiHTML=__webpack_require__(/*! ansi-html */ "./node_modules/ansi-html/index.js");var colors={reset:['transparent','transparent'],black:'181818',red:'ff3348',green:'3fff4f',yellow:'ffd30e',blue:'169be0',magenta:'f840b7',cyan:'0ad8e9',lightgrey:'ebe7e3',darkgrey:'6d7891'};var Entities=__webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js").AllHtmlEntities;var entities=new Entities();function showProblems(type,lines){clientOverlay.innerHTML='';lines.forEach(function(msg){msg=ansiHTML(entities.encode(msg));var div=document.createElement('div');div.style.marginBottom='26px';div.innerHTML=problemType(type)+' in '+msg;clientOverlay.appendChild(div);});if(document.body){document.body.appendChild(clientOverlay);}}function clear(){if(document.body&&clientOverlay.parentNode){document.body.removeChild(clientOverlay);}}function problemType(type){var problemColors={errors:colors.red,warnings:colors.yellow};var color=problemColors[type]||colors.red;return'<span style="background-color:#'+color+'; color:#000000; padding:3px 6px; border-radius: 4px;">'+type.slice(0,-1).toUpperCase()+'</span>';}module.exports=function(options){for(var color in options.ansiColors){if(color in colors){colors[color]=options.ansiColors[color];}ansiHTML.setColors(colors);}for(var style in options.overlayStyles){styles[style]=options.overlayStyles[style];}for(var key in styles){clientOverlay.style[key]=styles[key];}return{showProblems:showProblems,clear:clear};};module.exports.clear=clear;module.exports.showProblems=showProblems;

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/client/webpack-hot-middleware/client.js?path=__webpack_hmr&port=3006&overlay=true":
/*!************************************************************************************************!*\
  !*** ./dist/client/webpack-hot-middleware/client.js?path=__webpack_hmr&port=3006&overlay=true ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery, module) {/*eslint-env browser*/ /*global __resourceQuery __webpack_public_path__*/var options={path:'/__webpack_hmr',port:'3006',timeout:20*1000,overlay:true,reload:false,log:true,warn:true,name:'',autoConnect:true,overlayStyles:{},overlayWarnings:false,ansiColors:{}};if(true){var querystring=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");var overrides=querystring.parse(__resourceQuery.slice(1));setOverrides(overrides);}if(typeof window==='undefined'){// do nothing
}else if(typeof window.EventSource==='undefined'){console.warn("webpack-hot-middleware's client requires EventSource to work. "+'You should include a polyfill if you want to support this browser: '+'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events#Tools');}else{if(options.autoConnect){connect();}}/* istanbul ignore next */function setOptionsAndConnect(overrides){setOverrides(overrides);connect();}function setOverrides(overrides){if(overrides.autoConnect)options.autoConnect=overrides.autoConnect=='true';if(overrides.path)options.path=overrides.path;if(overrides.timeout)options.timeout=overrides.timeout;if(overrides.overlay)options.overlay=overrides.overlay!=='false';if(overrides.reload)options.reload=overrides.reload!=='false';if(overrides.port)options.port=overrides.port;if(overrides.noInfo&&overrides.noInfo!=='false'){options.log=false;}if(overrides.name){options.name=overrides.name;}if(overrides.quiet&&overrides.quiet!=='false'){options.log=false;options.warn=false;}if(overrides.dynamicPublicPath){options.path=__webpack_require__.p+options.path;}if(overrides.ansiColors)options.ansiColors=JSON.parse(overrides.ansiColors);if(overrides.overlayStyles)options.overlayStyles=JSON.parse(overrides.overlayStyles);if(overrides.overlayWarnings){options.overlayWarnings=overrides.overlayWarnings=='true';}}function EventSourceWrapper(){var source;var lastActivity=new Date();var listeners=[];init();var timer=setInterval(function(){if(new Date()-lastActivity>options.timeout){handleDisconnect();}},options.timeout/2);function init(){source=new window.EventSource("http://localhost:"+options.port+"/"+options.path);// source.url=options.path
console.log(source);source.onopen=handleOnline;source.onerror=handleDisconnect;source.onmessage=handleMessage;}function handleOnline(){if(options.log)console.log('[HMR] connected');lastActivity=new Date();}function handleMessage(event){lastActivity=new Date();for(var i=0;i<listeners.length;i++){listeners[i](event);}}function handleDisconnect(){clearInterval(timer);source.close();setTimeout(init,options.timeout);}return{addMessageListener:function addMessageListener(fn){listeners.push(fn);}};}function getEventSourceWrapper(){if(!window.__whmEventSourceWrapper){window.__whmEventSourceWrapper={};}if(!window.__whmEventSourceWrapper[options.path]){// cache the wrapper for other entries loaded on
// the same page with the same options.path
window.__whmEventSourceWrapper[options.path]=EventSourceWrapper();}return window.__whmEventSourceWrapper[options.path];}function connect(){getEventSourceWrapper().addMessageListener(handleMessage);function handleMessage(event){if(event.data=="\uD83D\uDC93"){return;}try{processMessage(JSON.parse(event.data));}catch(ex){if(options.warn){console.warn('Invalid HMR message: '+event.data+'\n'+ex);}}}}// the reporter needs to be a singleton on the page
// in case the client is being used by multiple bundles
// we only want to report once.
// all the errors will go to all clients
var singletonKey='__webpack_hot_middleware_reporter__';var reporter;if(typeof window!=='undefined'){if(!window[singletonKey]){window[singletonKey]=createReporter();}reporter=window[singletonKey];}function createReporter(){var strip=__webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js");var overlay;if(typeof document!=='undefined'&&options.overlay){overlay=__webpack_require__(/*! ./client-overlay */ "./dist/client/webpack-hot-middleware/client-overlay.js")({ansiColors:options.ansiColors,overlayStyles:options.overlayStyles});}var styles={errors:'color: #ff0000;',warnings:'color: #999933;'};var previousProblems=null;function log(type,obj){var newProblems=obj[type].map(function(msg){;return strip(msg);}).join('\n');if(previousProblems==newProblems){return;}else{previousProblems=newProblems;}var style=styles[type];var name=obj.name?"'"+obj.name+"' ":'';var title='[HMR] bundle '+name+'has '+obj[type].length+' '+type;// NOTE: console.warn or console.error will print the stack trace
// which isn't helpful here, so using console.log to escape it.
if(console.group&&console.groupEnd){console.group('%c'+title,style);console.log('%c'+newProblems,style);console.groupEnd();}else{console.log('%c'+title+'\n\t%c'+newProblems.replace(/\n/g,'\n\t'),style+'font-weight: bold;',style+'font-weight: normal;');}}return{cleanProblemsCache:function cleanProblemsCache(){previousProblems=null;},problems:function problems(type,obj){if(options.warn){log(type,obj);}if(overlay){if(options.overlayWarnings||type==='errors'){overlay.showProblems(type,obj[type]);return false;}overlay.clear();}return true;},success:function success(){if(overlay)overlay.clear();},useCustomOverlay:function useCustomOverlay(customOverlay){overlay=customOverlay;}};}var processUpdate=__webpack_require__(/*! ./process-update */ "./dist/client/webpack-hot-middleware/process-update.js");var customHandler;var subscribeAllHandler;function processMessage(obj){switch(obj.action){case'building':if(options.log){console.log('[HMR] bundle '+(obj.name?"'"+obj.name+"' ":'')+'rebuilding');}break;case'built':if(options.log){console.log('[HMR] bundle '+(obj.name?"'"+obj.name+"' ":'')+'rebuilt in '+obj.time+'ms');}// fall through
case'sync':if(obj.name&&options.name&&obj.name!==options.name){return;}var applyUpdate=true;if(obj.errors.length>0){if(reporter)reporter.problems('errors',obj);applyUpdate=false;}else if(obj.warnings.length>0){if(reporter){var overlayShown=reporter.problems('warnings',obj);applyUpdate=overlayShown;}}else{if(reporter){reporter.cleanProblemsCache();reporter.success();}}if(applyUpdate){processUpdate(obj.hash,obj.modules,options);}break;default:if(customHandler){customHandler(obj);}}if(subscribeAllHandler){subscribeAllHandler(obj);}}if(module){module.exports={subscribeAll:function subscribeAll(handler){subscribeAllHandler=handler;},subscribe:function subscribe(handler){customHandler=handler;},useCustomOverlay:function useCustomOverlay(customOverlay){if(reporter)reporter.useCustomOverlay(customOverlay);},setOptionsAndConnect:setOptionsAndConnect};}
/* WEBPACK VAR INJECTION */}.call(this, "?path=__webpack_hmr&port=3006&overlay=true", __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/client/webpack-hot-middleware/process-update.js":
/*!**************************************************************!*\
  !*** ./dist/client/webpack-hot-middleware/process-update.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/**
 * Based heavily on https://github.com/webpack/webpack/blob/
 *  c0afdf9c6abc1dd70707c594e473802a566f7b6e/hot/only-dev-server.js
 * Original copyright Tobias Koppers @sokra (MIT license)
 */ /* global window __webpack_hash__ */if(false){}var hmrDocsUrl='https://webpack.js.org/concepts/hot-module-replacement/';// eslint-disable-line max-len
var lastHash;var failureStatuses={abort:1,fail:1};var applyOptions={ignoreUnaccepted:true,ignoreDeclined:true,ignoreErrored:true,onUnaccepted:function onUnaccepted(data){console.warn('Ignored an update to unaccepted module '+data.chain.join(' -> '));},onDeclined:function onDeclined(data){console.warn('Ignored an update to declined module '+data.chain.join(' -> '));},onErrored:function onErrored(data){console.error(data.error);console.warn('Ignored an error while updating module '+data.moduleId+' ('+data.type+')');}};function upToDate(hash){if(hash)lastHash=hash;return lastHash==__webpack_require__.h();}module.exports=function(hash,moduleMap,options){var reload=options.reload;if(!upToDate(hash)&&module.hot.status()=='idle'){if(options.log)console.log('[HMR] Checking for updates on the server...');check();}function check(){var cb=function cb(err,updatedModules){if(err)return handleError(err);if(!updatedModules){if(options.warn){console.warn('[HMR] Cannot find update (Full reload needed)');console.warn('[HMR] (Probably because of restarting the server)');}performReload();return null;}var applyCallback=function applyCallback(applyErr,renewedModules){if(applyErr)return handleError(applyErr);if(!upToDate())check();logUpdates(updatedModules,renewedModules);};var applyResult=module.hot.apply(applyOptions,applyCallback);// webpack 2 promise
if(applyResult&&applyResult.then){// HotModuleReplacement.runtime.js refers to the result as `outdatedModules`
applyResult.then(function(outdatedModules){applyCallback(null,outdatedModules);});applyResult["catch"](applyCallback);}};var result=module.hot.check(false,cb);// webpack 2 promise
if(result&&result.then){result.then(function(updatedModules){cb(null,updatedModules);});result["catch"](cb);}}function logUpdates(updatedModules,renewedModules){var unacceptedModules=updatedModules.filter(function(moduleId){return renewedModules&&renewedModules.indexOf(moduleId)<0;});if(unacceptedModules.length>0){if(options.warn){console.warn("[HMR] The following modules couldn't be hot updated: "+'(Full reload needed)\n'+'This is usually because the modules which have changed '+'(and their parents) do not know how to hot reload themselves. '+'See '+hmrDocsUrl+' for more details.');unacceptedModules.forEach(function(moduleId){console.warn('[HMR]  - '+(moduleMap[moduleId]||moduleId));});}performReload();return;}if(options.log){if(!renewedModules||renewedModules.length===0){console.log('[HMR] Nothing hot updated.');}else{console.log('[HMR] Updated modules:');renewedModules.forEach(function(moduleId){console.log('[HMR]  - '+(moduleMap[moduleId]||moduleId));});}if(upToDate()){console.log('[HMR] App is up to date.');}}}function handleError(err){if(module.hot.status()in failureStatuses){if(options.warn){console.warn('[HMR] Cannot check for update (Full reload needed)');console.warn('[HMR] '+(err.stack||err.message));}performReload();return;}if(options.warn){console.warn('[HMR] Update check failed: '+(err.stack||err.message));}}function performReload(){if(reload){if(options.warn)console.warn('[HMR] Reloading page');window.location.reload();}}};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/router/Route.js":
/*!******************************!*\
  !*** ./dist/router/Route.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {var __assign=this&&this.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.Route=void 0;var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var context_1=__webpack_require__(/*! ./context */ "./dist/router/context.js");var validatePath_1=__importDefault(__webpack_require__(/*! ./validatePath */ "./dist/router/validatePath.js"));var Route=function Route(_a){var path=_a.path,component=_a.component,children=_a.children,props=_a.props;var error=false;if(path===undefined){// throw new ValidationError('Router error: path is missing');
error=true;// ErrorBoundary.throwError(new Error('Router error: path is missing'))
return"";}var Component=component;var routerContext=context_1.RouterContext;var url=react_1["default"].useContext(routerContext).pathname;var pathValidate=validatePath_1["default"](path,url);if(!pathValidate){return null;}var childrenWithProps=react_1["default"].Children.map(children,function(child){// checking isValidElement is the safe way and avoids a typescript error too
if(react_1["default"].isValidElement(child)){return react_1["default"].cloneElement(child,props);}return child;});return react_1["default"].createElement(react_1["default"].Fragment,null,children?childrenWithProps:react_1["default"].createElement(Component,__assign({},props))," ");};exports.Route=Route;Route.propTypes={path:function path(props,propName,componentName){if(!props[propName]){// console.log(new Error(propName + ' is missing ' + componentName + '.'));
// try {
// }
// catch(error){
//     console.log(error);
//     ErrorBoundary.throwError(error)
// }
}}};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/router/context.js":
/*!********************************!*\
  !*** ./dist/router/context.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {var __extends=this&&this.__extends||function(){var _extendStatics=function extendStatics(d,b){_extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(Object.prototype.hasOwnProperty.call(b,p))d[p]=b[p];}};return _extendStatics(d,b);};return function(d,b){_extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __assign=this&&this.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod};};Object.defineProperty(exports,"__esModule",{value:true});exports.RouterContext=void 0;var react_1=__importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));var history_1=__webpack_require__(/*! ./history */ "./dist/router/history.js");// const history = () =>{
//     if(typeof(window) !== "undefined"){
//         return window.history
//     }
// }
var pathname=window.location.pathname;var _push=function push(to){history_1.history.push(to);pathname=to;};exports.RouterContext=react_1["default"].createContext({pathname:pathname,push:function push(to){return _push(to);}});var RouterContextProvider=/** @class */function(_super){__extends(RouterContextProvider,_super);function RouterContextProvider(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.state={pathname:window.location.pathname};_this.push=function(to){history_1.history.push(to);_this.setState({pathname:to});};return _this;}RouterContextProvider.prototype.componentDidMount=function(){var _this=this;window.addEventListener('popstate',function(e){pathname=window.location.pathname;_this.setState({pathname:pathname});});};RouterContextProvider.prototype.componentDidUpdate=function(){};RouterContextProvider.prototype.render=function(){var _this=this;// console.log({...this.context, push: (to) => push(to)});
return react_1["default"].createElement(exports.RouterContext.Provider,{value:__assign(__assign({},this.state),{push:function push(to){return _this.push(to);}})},this.props.children);};RouterContextProvider.contextType=exports.RouterContext;return RouterContextProvider;}(react_1["default"].Component);// RouterContextProvider.contextType=RouterContext
exports["default"]=RouterContextProvider;

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/router/history.js":
/*!********************************!*\
  !*** ./dist/router/history.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {Object.defineProperty(exports,"__esModule",{value:true});exports.history=void 0;var history={push:function push(to){if(typeof window!=="undefined"){window.history.pushState({url:to},"title 1",to);}}};exports.history=history;

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/router/validatePath.js":
/*!*************************************!*\
  !*** ./dist/router/validatePath.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {var __assign=this&&this.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}}return t;};return __assign.apply(this,arguments);};Object.defineProperty(exports,"__esModule",{value:true});var validatePath=function validatePath(path,url){var _a;var pathname=path;var locationPath=url;if(pathname.charAt(0)==="/"){pathname=pathname.substring(1);}if(pathname.charAt(pathname.length-1)==="/"){pathname=pathname.slice(0,-1);}if(locationPath.charAt(0)==="/"){locationPath=locationPath.substring(1);}if(locationPath.charAt(locationPath.length-1)==="/"){locationPath=locationPath.slice(0,-1);}var pathArray=pathname.split("/");var locationArray=locationPath.split("/");var prop={};if(pathArray.length===locationArray.length||pathArray[pathArray.length-1]==="*"&&pathArray.length-1===locationArray.length){if(pathArray[0]!=="index"||pathArray[0]==="index"&&locationArray[0]!==""){for(var i=0;i<pathArray.length;i++){if(pathArray[i]!=="*"&&pathArray[i]!==locationArray[i]&&pathArray[i].charAt(0)!==":"){return null;}else if(pathArray[i].charAt(0)===":"){prop=__assign(__assign({},prop),(_a={},_a[pathArray[i].substring(1)]=locationArray[i],_a));}}}}else{return null;}return prop;};exports["default"]=validatePath;

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ReactRefreshEntry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ReactRefreshEntry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if ( true && typeof window !== 'undefined') {
  const Refresh = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");

  // Inject refresh runtime into global
  Refresh.injectIntoGlobalHook(window);

  // Setup placeholder functions
  window.$RefreshReg$ = function () {};
  window.$RefreshSig$ = function () {
    return function (type) {
      return type;
    };
  };

  /**
   * Setup module refresh.
   * @param {number} moduleId An ID of a module.
   * @returns {function(): void} A function to restore handlers to their previous state.
   */
  window.$RefreshSetup$ = function setupModuleRefresh(moduleId) {
    // Capture previous refresh state
    const prevRefreshReg = window.$RefreshReg$;
    const prevRefreshSig = window.$RefreshSig$;

    /**
     * Registers a refresh to react-refresh.
     * @param {string} [type] A valid type of a module.
     * @param {number} [id] An ID of a module.
     * @returns {void}
     */
    window.$RefreshReg$ = function (type, id) {
      const typeId = moduleId + ' ' + id;
      Refresh.register(type, typeId);
    };

    /**
     * Creates a module signature function from react-refresh.
     * @returns {function(string): string} A created signature function.
     */
    window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;

    // Restore to previous refresh functions after initialization
    return function cleanup() {
      window.$RefreshReg$ = prevRefreshReg;
      window.$RefreshSig$ = prevRefreshSig;
    };
  };
}


/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global __react_refresh_error_overlay__ */
const Refresh = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");

/**
 * Extracts exports from a webpack module object.
 * @param {*} module A Webpack module object.
 * @returns {*} An exports object from the module.
 */
function getModuleExports(module) {
  return module.exports || module.__proto__.exports;
}

/**
 * Calculates the signature of a React refresh boundary.
 * If this signature changes, it's unsafe to accept the boundary.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {string[]} A React refresh boundary signature array.
 */
function getReactRefreshBoundarySignature(moduleExports) {
  const signature = [];
  signature.push(Refresh.getFamilyByType(moduleExports));

  if (moduleExports == null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return signature;
  }

  for (let key in moduleExports) {
    if (key === '__esModule') {
      continue;
    }

    signature.push(key);
    signature.push(Refresh.getFamilyByType(moduleExports[key]));
  }

  return signature;
}

/**
 * Creates conditional full refresh dispose handler for Webpack hot.
 * @param {*} module A Webpack module object.
 * @returns {hotDisposeCallback} A webpack hot dispose callback.
 */
function createHotDisposeCallback(module) {
  /**
   * A callback to performs a full refresh if React has unrecoverable errors,
   * and also caches the to-be-disposed module.
   * @param {*} data A hot module data object from Webpack HMR.
   * @returns {void}
   */
  function hotDisposeCallback(data) {
    // We have to mutate the data object to get data registered and cached
    data.module = module;
  }

  return hotDisposeCallback;
}

/**
 * Creates self-recovering an error handler for webpack hot.
 * @param {string} moduleId A unique ID for a Webpack module.
 * @returns {selfAcceptingHotErrorHandler} A self-accepting webpack hot error handler.
 */
function createHotErrorHandler(moduleId) {
  /**
   * An error handler to show a module evaluation error with an error overlay.
   * @param {Error} error An error occurred during evaluation of a module.
   * @returns {void}
   */
  function hotErrorHandler(error) {
    if (false) {}
  }

  /**
   * An error handler to allow self-recovering behaviours.
   * @param {Error} error An error occurred during evaluation of a module.
   * @returns {void}
   */
  function selfAcceptingHotErrorHandler(error) {
    hotErrorHandler(error);
    __webpack_require__.c[moduleId].hot.accept(hotErrorHandler);
  }

  return selfAcceptingHotErrorHandler;
}

/**
 * Creates a helper that performs a delayed React refresh.
 * @returns {enqueueUpdate} A debounced React refresh function.
 */
function createDebounceUpdate() {
  /**
   * A cached setTimeout handler.
   * @type {number | void}
   */
  let refreshTimeout = undefined;

  /**
   * Performs react refresh on a delay and clears the error overlay.
   * @returns {void}
   */
  function enqueueUpdate() {
    if (refreshTimeout === undefined) {
      refreshTimeout = setTimeout(function () {
        refreshTimeout = undefined;
        Refresh.performReactRefresh();
        if (false) {}
      }, 30);
    }
  }

  return enqueueUpdate;
}

/**
 * Checks if all exports are likely a React component.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).
 * @param {*} module A Webpack module object.
 * @returns {boolean} Whether the exports are React component like.
 */
function isReactRefreshBoundary(module) {
  const moduleExports = getModuleExports(module);

  if (Refresh.isLikelyComponentType(moduleExports)) {
    return true;
  }
  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return false;
  }

  let hasExports = false;
  let areAllExportsComponents = true;
  for (let key in moduleExports) {
    hasExports = true;

    // This is the ES Module indicator flag set by Webpack
    if (key === '__esModule') {
      continue;
    }

    // We can (and have to) safely execute getters here,
    // as Webpack manually assigns harmony exports to getters,
    // without any side-effects attached.
    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281
    const exportValue = moduleExports[key];
    if (!Refresh.isLikelyComponentType(exportValue)) {
      areAllExportsComponents = false;
    }
  }

  return hasExports && areAllExportsComponents;
}

/**
 * Checks if exports are likely a React component and registers them.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).
 * @param {*} module A Webpack module object.
 * @returns {void}
 */
function registerExportsForReactRefresh(module) {
  const moduleExports = getModuleExports(module);
  const moduleId = module.id;

  if (Refresh.isLikelyComponentType(moduleExports)) {
    // Register module.exports if it is likely a component
    Refresh.register(moduleExports, moduleId + ' %exports%');
  }

  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over the exports.
    return;
  }

  for (let key in moduleExports) {
    // Skip registering the Webpack ES Module indicator
    if (key === '__esModule') {
      continue;
    }

    const exportValue = moduleExports[key];
    if (Refresh.isLikelyComponentType(exportValue)) {
      const typeID = moduleId + ' %exports% ' + key;
      Refresh.register(exportValue, typeID);
    }
  }
}

/**
 * Compares previous and next module objects to check for mutated boundaries.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).
 * @param prevModule {*} The current Webpack module exports object.
 * @param nextModule {*} The next Webpack module exports object.
 * @returns {boolean} Whether the React refresh boundary should be invalidated.
 */
function shouldInvalidateReactRefreshBoundary(prevModule, nextModule) {
  const prevSignature = getReactRefreshBoundarySignature(getModuleExports(prevModule));
  const nextSignature = getReactRefreshBoundarySignature(getModuleExports(nextModule));

  if (prevSignature.length !== nextSignature.length) {
    return true;
  }

  for (let i = 0; i < nextSignature.length; i += 1) {
    if (prevSignature[i] !== nextSignature[i]) {
      return true;
    }
  }

  return false;
}

module.exports = Object.freeze({
  createHotDisposeCallback: createHotDisposeCallback,
  createHotErrorHandler: createHotErrorHandler,
  enqueueUpdate: createDebounceUpdate(),
  isReactRefreshBoundary: isReactRefreshBoundary,
  shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,
  registerExportsForReactRefresh: registerExportsForReactRefresh,
});


/***/ }),

/***/ "./node_modules/ansi-html/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ansi-html/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)*m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ({onlyFirst = false} = {}) => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
};


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * Bootstrap v4.5.3 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n  -webkit-text-decoration-skip-ink: none;\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na:not([href]):not([class]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\nselect {\n  word-wrap: normal;\n}\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\nbutton:not(:disabled),\n[type=\"button\"]:not(:disabled),\n[type=\"reset\"]:not(:disabled),\n[type=\"submit\"]:not(:disabled) {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1, .h1 {\n  font-size: 2.5rem;\n}\n\nh2, .h2 {\n  font-size: 2rem;\n}\n\nh3, .h3 {\n  font-size: 1.75rem;\n}\n\nh4, .h4 {\n  font-size: 1.5rem;\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400;\n}\n\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d;\n}\n\n.blockquote-footer::before {\n  content: \"\\2014\\00A0\";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d;\n}\n\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-wrap: break-word;\n}\n\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: 700;\n}\n\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n}\n\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container,\n.container-fluid,\n.container-sm,\n.container-md,\n.container-lg,\n.container-xl {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container, .container-sm {\n    max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container, .container-sm, .container-md {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container, .container-sm, .container-md, .container-lg {\n    max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container, .container-sm, .container-md, .container-lg, .container-xl {\n    max-width: 1140px;\n  }\n}\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.no-gutters > .col,\n.no-gutters > [class*=\"col-\"] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.row-cols-1 > * {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.row-cols-2 > * {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.row-cols-3 > * {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.row-cols-4 > * {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.row-cols-5 > * {\n  -ms-flex: 0 0 20%;\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.row-cols-6 > * {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-auto {\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  width: auto;\n  max-width: 100%;\n}\n\n.col-1 {\n  -ms-flex: 0 0 8.333333%;\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.col-2 {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.col-3 {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.col-4 {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.col-5 {\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.col-6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.col-7 {\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.col-8 {\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.col-9 {\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.col-10 {\n  -ms-flex: 0 0 83.333333%;\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.col-11 {\n  -ms-flex: 0 0 91.666667%;\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.col-12 {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n.order-first {\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.order-last {\n  -ms-flex-order: 13;\n  order: 13;\n}\n\n.order-0 {\n  -ms-flex-order: 0;\n  order: 0;\n}\n\n.order-1 {\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.order-2 {\n  -ms-flex-order: 2;\n  order: 2;\n}\n\n.order-3 {\n  -ms-flex-order: 3;\n  order: 3;\n}\n\n.order-4 {\n  -ms-flex-order: 4;\n  order: 4;\n}\n\n.order-5 {\n  -ms-flex-order: 5;\n  order: 5;\n}\n\n.order-6 {\n  -ms-flex-order: 6;\n  order: 6;\n}\n\n.order-7 {\n  -ms-flex-order: 7;\n  order: 7;\n}\n\n.order-8 {\n  -ms-flex-order: 8;\n  order: 8;\n}\n\n.order-9 {\n  -ms-flex-order: 9;\n  order: 9;\n}\n\n.order-10 {\n  -ms-flex-order: 10;\n  order: 10;\n}\n\n.order-11 {\n  -ms-flex-order: 11;\n  order: 11;\n}\n\n.order-12 {\n  -ms-flex-order: 12;\n  order: 12;\n}\n\n.offset-1 {\n  margin-left: 8.333333%;\n}\n\n.offset-2 {\n  margin-left: 16.666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.333333%;\n}\n\n.offset-5 {\n  margin-left: 41.666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.333333%;\n}\n\n.offset-8 {\n  margin-left: 66.666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.333333%;\n}\n\n.offset-11 {\n  margin-left: 91.666667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-sm-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-sm-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-sm-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-sm-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-sm-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-sm-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-sm-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-sm-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-sm-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-sm-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-sm-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-sm-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-sm-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-sm-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-sm-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-sm-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-sm-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-sm-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-sm-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-sm-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-sm-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-sm-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-sm-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-sm-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-sm-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-sm-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-sm-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-sm-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-sm-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-md-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-md-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-md-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-md-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-md-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-md-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-md-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-md-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-md-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-md-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-md-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-md-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-md-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-md-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-md-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-md-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-md-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-md-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-md-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-md-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-md-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-md-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-md-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-md-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-md-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-md-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-md-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-md-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-md-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-md-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-md-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-md-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-md-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-lg-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-lg-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-lg-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-lg-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-lg-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-lg-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-lg-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-lg-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-lg-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-lg-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-lg-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-lg-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-lg-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-lg-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-lg-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-lg-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-lg-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-lg-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-lg-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-lg-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-lg-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-lg-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-lg-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-lg-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-lg-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-lg-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-lg-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-lg-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-lg-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .row-cols-xl-1 > * {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .row-cols-xl-4 > * {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    -ms-flex: 0 0 20%;\n    flex: 0 0 20%;\n    max-width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-auto {\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    width: auto;\n    max-width: 100%;\n  }\n  .col-xl-1 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .col-xl-2 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .col-xl-3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .col-xl-4 {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .col-xl-5 {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .col-xl-6 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .col-xl-7 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .col-xl-8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .col-xl-9 {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .col-xl-10 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .col-xl-11 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .col-xl-12 {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n  .order-xl-first {\n    -ms-flex-order: -1;\n    order: -1;\n  }\n  .order-xl-last {\n    -ms-flex-order: 13;\n    order: 13;\n  }\n  .order-xl-0 {\n    -ms-flex-order: 0;\n    order: 0;\n  }\n  .order-xl-1 {\n    -ms-flex-order: 1;\n    order: 1;\n  }\n  .order-xl-2 {\n    -ms-flex-order: 2;\n    order: 2;\n  }\n  .order-xl-3 {\n    -ms-flex-order: 3;\n    order: 3;\n  }\n  .order-xl-4 {\n    -ms-flex-order: 4;\n    order: 4;\n  }\n  .order-xl-5 {\n    -ms-flex-order: 5;\n    order: 5;\n  }\n  .order-xl-6 {\n    -ms-flex-order: 6;\n    order: 6;\n  }\n  .order-xl-7 {\n    -ms-flex-order: 7;\n    order: 7;\n  }\n  .order-xl-8 {\n    -ms-flex-order: 8;\n    order: 8;\n  }\n  .order-xl-9 {\n    -ms-flex-order: 9;\n    order: 9;\n  }\n  .order-xl-10 {\n    -ms-flex-order: 10;\n    order: 10;\n  }\n  .order-xl-11 {\n    -ms-flex-order: 11;\n    order: 11;\n  }\n  .order-xl-12 {\n    -ms-flex-order: 12;\n    order: 12;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.666667%;\n  }\n}\n\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody {\n  border: 0;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff;\n}\n\n.table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody {\n  border-color: #7abaff;\n}\n\n.table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n\n.table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th {\n  background-color: #9fcdff;\n}\n\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db;\n}\n\n.table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody {\n  border-color: #b3b7bb;\n}\n\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf;\n}\n\n.table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th {\n  background-color: #c8cbcf;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb;\n}\n\n.table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody {\n  border-color: #8fd19e;\n}\n\n.table-hover .table-success:hover {\n  background-color: #b1dfbb;\n}\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #b1dfbb;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb;\n}\n\n.table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody {\n  border-color: #86cfda;\n}\n\n.table-hover .table-info:hover {\n  background-color: #abdde5;\n}\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #abdde5;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba;\n}\n\n.table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody {\n  border-color: #ffdf7e;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1;\n}\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #ffe8a1;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb;\n}\n\n.table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody {\n  border-color: #ed969e;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7;\n}\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #f1b0b7;\n}\n\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe;\n}\n\n.table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody {\n  border-color: #fbfcfc;\n}\n\n.table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n\n.table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca;\n}\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody {\n  border-color: #95999c;\n}\n\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe;\n}\n\n.table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th {\n  background-color: #b9bbbe;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.table-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n\n.table-dark th,\n.table-dark td,\n.table-dark thead th {\n  border-color: #454d55;\n}\n\n.table-dark.table-bordered {\n  border: 0;\n}\n\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.table-dark.table-hover tbody tr:hover {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.table-responsive > .table-bordered {\n  border: 0;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control:disabled, .form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\ninput[type=\"date\"].form-control,\ninput[type=\"time\"].form-control,\ninput[type=\"datetime-local\"].form-control,\ninput[type=\"month\"].form-control {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #212529;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0;\n}\n\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.form-control-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\nselect.form-control[size], select.form-control[multiple] {\n  height: auto;\n}\n\ntextarea.form-control {\n  height: auto;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.25rem;\n}\n\n.form-row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px;\n}\n\n.form-row > .col,\n.form-row > [class*=\"col-\"] {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem;\n}\n\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem;\n}\n\n.form-check-input[disabled] ~ .form-check-label,\n.form-check-input:disabled ~ .form-check-label {\n  color: #6c757d;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n}\n\n.form-check-inline {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem;\n}\n\n.form-check-inline .form-check-input {\n  position: static;\n  margin-top: 0;\n  margin-right: 0.3125rem;\n  margin-left: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .custom-select:valid, .custom-select.is-valid {\n  border-color: #28a745;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745;\n}\n\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  border-color: #34ce57;\n  background-color: #34ce57;\n}\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #28a745;\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745;\n}\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem;\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .custom-select:invalid, .custom-select.is-invalid {\n  border-color: #dc3545;\n  padding-right: calc(0.75em + 2.3125rem);\n  background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545;\n}\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  border-color: #e4606d;\n  background-color: #e4606d;\n}\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545;\n}\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.form-inline .form-check {\n  width: 100%;\n}\n\n@media (min-width: 576px) {\n  .form-inline label {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -ms-flex-align: center;\n    align-items: center;\n    margin-bottom: 0;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-plaintext {\n    display: inline-block;\n  }\n  .form-inline .input-group,\n  .form-inline .custom-select {\n    width: auto;\n  }\n  .form-inline .form-check {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    width: auto;\n    padding-left: 0;\n  }\n  .form-inline .form-check-input {\n    position: relative;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    margin-top: 0;\n    margin-right: 0.25rem;\n    margin-left: 0;\n  }\n  .form-inline .custom-control {\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  color: #212529;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n\n.btn:hover {\n  color: #212529;\n  text-decoration: none;\n}\n\n.btn:focus, .btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.btn.disabled, .btn:disabled {\n  opacity: 0.65;\n}\n\n.btn:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n\n.btn-primary:focus, .btn-primary.focus {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n\n.btn-primary.disabled, .btn-primary:disabled {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary:hover {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n}\n\n.btn-secondary:focus, .btn-secondary.focus {\n  color: #fff;\n  background-color: #5a6268;\n  border-color: #545b62;\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #545b62;\n  border-color: #4e555b;\n}\n\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n\n.btn-success:focus, .btn-success.focus {\n  color: #fff;\n  background-color: #218838;\n  border-color: #1e7e34;\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n\n.btn-success.disabled, .btn-success:disabled {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #1e7e34;\n  border-color: #1c7430;\n}\n\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n}\n\n.btn-info:focus, .btn-info.focus {\n  color: #fff;\n  background-color: #138496;\n  border-color: #117a8b;\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n.btn-info.disabled, .btn-info:disabled {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #117a8b;\n  border-color: #10707f;\n}\n\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning:hover {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n}\n\n.btn-warning:focus, .btn-warning.focus {\n  color: #212529;\n  background-color: #e0a800;\n  border-color: #d39e00;\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n\n.btn-warning.disabled, .btn-warning:disabled {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #d39e00;\n  border-color: #c69500;\n}\n\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n}\n\n.btn-danger:focus, .btn-danger.focus {\n  color: #fff;\n  background-color: #c82333;\n  border-color: #bd2130;\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n\n.btn-danger.disabled, .btn-danger:disabled {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #bd2130;\n  border-color: #b21f2d;\n}\n\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\n}\n\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n\n.btn-light:focus, .btn-light.focus {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n.btn-light.disabled, .btn-light:disabled {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n  color: #212529;\n  background-color: #dae0e5;\n  border-color: #d3d9df;\n}\n\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark:hover {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n}\n\n.btn-dark:focus, .btn-dark.focus {\n  color: #fff;\n  background-color: #23272b;\n  border-color: #1d2124;\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n.btn-dark.disabled, .btn-dark:disabled {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #1d2124;\n  border-color: #171a1d;\n}\n\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n\n.btn-outline-primary {\n  color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color: #007bff;\n  background-color: transparent;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:hover {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d;\n}\n\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-secondary.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success {\n  color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success:hover {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success:focus, .btn-outline-success.focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color: #28a745;\n  background-color: transparent;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info {\n  color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:hover {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:focus, .btn-outline-info.focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color: #17a2b8;\n  background-color: transparent;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-info.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning {\n  color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:hover {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color: #ffc107;\n  background-color: transparent;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n}\n\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-warning.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color: #dc3545;\n  background-color: transparent;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-danger.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light {\n  color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:hover {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:focus, .btn-outline-light.focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color: #f8f9fa;\n  background-color: transparent;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa;\n}\n\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-light.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark {\n  color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:hover {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color: #343a40;\n  background-color: transparent;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40;\n}\n\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-dark.dropdown-toggle:focus {\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  text-decoration: none;\n}\n\n.btn-link:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\n.btn-link:focus, .btn-link.focus {\n  text-decoration: underline;\n}\n\n.btn-link:disabled, .btn-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 0.5rem;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropright,\n.dropdown,\n.dropleft {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-sm-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 768px) {\n  .dropdown-menu-md-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-md-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 992px) {\n  .dropdown-menu-lg-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-lg-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-left {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xl-right {\n    right: 0;\n    left: auto;\n  }\n}\n\n.dropup .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem;\n}\n\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-menu {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem;\n}\n\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropright .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropleft .dropdown-menu {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem;\n}\n\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n\n.dropleft .dropdown-toggle::after {\n  display: none;\n}\n\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\n  right: auto;\n  bottom: auto;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n}\n\n.dropdown-item:hover, .dropdown-item:focus {\n  color: #16181b;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.dropdown-item.active, .dropdown-item:active {\n  color: #fff;\n  text-decoration: none;\n  background-color: #007bff;\n}\n\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 1;\n}\n\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-toolbar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: -1px;\n}\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n\n.dropdown-toggle-split::after,\n.dropup .dropdown-toggle-split::after,\n.dropright .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n\n.dropleft .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: -1px;\n}\n\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0;\n}\n\n.btn-group-toggle > .btn input[type=\"radio\"],\n.btn-group-toggle > .btn input[type=\"checkbox\"],\n.btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n.btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  width: 100%;\n}\n\n.input-group > .form-control,\n.input-group > .form-control-plaintext,\n.input-group > .custom-select,\n.input-group > .custom-file {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n  margin-bottom: 0;\n}\n\n.input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .form-control-plaintext + .form-control,\n.input-group > .form-control-plaintext + .custom-select,\n.input-group > .form-control-plaintext + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file {\n  margin-left: -1px;\n}\n\n.input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\n  z-index: 3;\n}\n\n.input-group > .custom-file .custom-file-input:focus {\n  z-index: 4;\n}\n\n.input-group > .form-control:not(:last-child),\n.input-group > .custom-select:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group > .custom-file {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n.input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .custom-file:not(:first-child) .custom-file-label {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-prepend,\n.input-group-append {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.input-group-prepend .btn,\n.input-group-append .btn {\n  position: relative;\n  z-index: 2;\n}\n\n.input-group-prepend .btn:focus,\n.input-group-append .btn:focus {\n  z-index: 3;\n}\n\n.input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn {\n  margin-left: -1px;\n}\n\n.input-group-prepend {\n  margin-right: -1px;\n}\n\n.input-group-append {\n  margin-left: -1px;\n}\n\n.input-group-text {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.input-group-text input[type=\"radio\"],\n.input-group-text input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select {\n  height: calc(1.5em + 1rem + 2px);\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select {\n  height: calc(1.5em + 0.5rem + 2px);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.input-group-lg > .custom-select,\n.input-group-sm > .custom-select {\n  padding-right: 1.75rem;\n}\n\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.custom-control {\n  position: relative;\n  z-index: 1;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n}\n\n.custom-control-inline {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 1rem;\n}\n\n.custom-control-input {\n  position: absolute;\n  left: 0;\n  z-index: -1;\n  width: 1rem;\n  height: 1.25rem;\n  opacity: 0;\n}\n\n.custom-control-input:checked ~ .custom-control-label::before {\n  color: #fff;\n  border-color: #007bff;\n  background-color: #007bff;\n}\n\n.custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\n  border-color: #80bdff;\n}\n\n.custom-control-input:not(:disabled):active ~ .custom-control-label::before {\n  color: #fff;\n  background-color: #b3d7ff;\n  border-color: #b3d7ff;\n}\n\n.custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\n  color: #6c757d;\n}\n\n.custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\n  background-color: #e9ecef;\n}\n\n.custom-control-label {\n  position: relative;\n  margin-bottom: 0;\n  vertical-align: top;\n}\n\n.custom-control-label::before {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  pointer-events: none;\n  content: \"\";\n  background-color: #fff;\n  border: #adb5bd solid 1px;\n}\n\n.custom-control-label::after {\n  position: absolute;\n  top: 0.25rem;\n  left: -1.5rem;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  background: no-repeat 50% / 50% 50%;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\");\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  border-color: #007bff;\n  background-color: #007bff;\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\");\n}\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio .custom-control-label::before {\n  border-radius: 50%;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-switch {\n  padding-left: 2.25rem;\n}\n\n.custom-switch .custom-control-label::before {\n  left: -2.25rem;\n  width: 1.75rem;\n  pointer-events: all;\n  border-radius: 0.5rem;\n}\n\n.custom-switch .custom-control-label::after {\n  top: calc(0.25rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc(1rem - 4px);\n  height: calc(1rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 0.5rem;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch .custom-control-label::after {\n    transition: none;\n  }\n}\n\n.custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  background-color: #fff;\n  -webkit-transform: translateX(0.75rem);\n  transform: translateX(0.75rem);\n}\n\n.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5);\n}\n\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.custom-select:focus {\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-select:focus::-ms-value {\n  color: #495057;\n  background-color: #fff;\n}\n\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n  height: auto;\n  padding-right: 0.75rem;\n  background-image: none;\n}\n\n.custom-select:disabled {\n  color: #6c757d;\n  background-color: #e9ecef;\n}\n\n.custom-select::-ms-expand {\n  display: none;\n}\n\n.custom-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\n.custom-select-sm {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.custom-select-lg {\n  height: calc(1.5em + 1rem + 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n}\n\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin-bottom: 0;\n}\n\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n\n.custom-file-input:focus ~ .custom-file-label {\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-file-input[disabled] ~ .custom-file-label,\n.custom-file-input:disabled ~ .custom-file-label {\n  background-color: #e9ecef;\n}\n\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content: \"Browse\";\n}\n\n.custom-file-input ~ .custom-file-label[data-browse]::after {\n  content: attr(data-browse);\n}\n\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.custom-file-label::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(1.5em + 0.75rem);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: inherit;\n  border-radius: 0 0.25rem 0.25rem 0;\n}\n\n.custom-range {\n  width: 100%;\n  height: 1.4rem;\n  padding: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.custom-range:focus {\n  outline: none;\n}\n\n.custom-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.custom-range::-moz-focus-outer {\n  border: 0;\n}\n\n.custom-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-webkit-slider-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n\n.custom-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-moz-range-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: #dee2e6;\n  border-color: transparent;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: 0;\n  margin-right: 0.2rem;\n  margin-left: 0.2rem;\n  background-color: #007bff;\n  border: 0;\n  border-radius: 1rem;\n  -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  appearance: none;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-range::-ms-thumb {\n    -ms-transition: none;\n    transition: none;\n  }\n}\n\n.custom-range::-ms-thumb:active {\n  background-color: #b3d7ff;\n}\n\n.custom-range::-ms-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: transparent;\n  border-color: transparent;\n  border-width: 0.5rem;\n}\n\n.custom-range::-ms-fill-lower {\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n\n.custom-range::-ms-fill-upper {\n  margin-right: 15px;\n  background-color: #dee2e6;\n  border-radius: 1rem;\n}\n\n.custom-range:disabled::-webkit-slider-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-range:disabled::-webkit-slider-runnable-track {\n  cursor: default;\n}\n\n.custom-range:disabled::-moz-range-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-range:disabled::-moz-range-track {\n  cursor: default;\n}\n\n.custom-range:disabled::-ms-thumb {\n  background-color: #adb5bd;\n}\n\n.custom-control-label::before,\n.custom-file-label,\n.custom-select {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-control-label::before,\n  .custom-file-label,\n  .custom-select {\n    transition: none;\n  }\n}\n\n.nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem;\n}\n\n.nav-link:hover, .nav-link:focus {\n  text-decoration: none;\n}\n\n.nav-link.disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.nav-tabs .nav-item {\n  margin-bottom: -1px;\n}\n\n.nav-tabs .nav-link {\n  border: 1px solid transparent;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color: #e9ecef #e9ecef #dee2e6;\n}\n\n.nav-tabs .nav-link.disabled {\n  color: #6c757d;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills .nav-link {\n  border-radius: 0.25rem;\n}\n\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n}\n\n.navbar .container,\n.navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n}\n\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration: none;\n}\n\n.navbar-nav {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.navbar-nav .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-nav .dropdown-menu {\n  position: static;\n  float: none;\n}\n\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration: none;\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%;\n}\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n}\n\n.navbar-expand {\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.navbar-expand .navbar-nav {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.navbar-expand > .container,\n.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.navbar-expand .navbar-collapse {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n}\n\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.navbar-light .navbar-nav .nav-link.disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.navbar-light .navbar-text a {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.navbar-dark .navbar-brand {\n  color: #fff;\n}\n\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color: #fff;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color: rgba(255, 255, 255, 0.25);\n}\n\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff;\n}\n\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.navbar-dark .navbar-text a {\n  color: #fff;\n}\n\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color: #fff;\n}\n\n.card {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n\n.card-body {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-header:first-child {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.card-footer:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0;\n}\n\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n  border-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n}\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-deck .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-deck {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n  }\n  .card-deck .card {\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    margin-right: 15px;\n    margin-bottom: 0;\n    margin-left: 15px;\n  }\n}\n\n.card-group > .card {\n  margin-bottom: 15px;\n}\n\n@media (min-width: 576px) {\n  .card-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    -ms-flex: 1 0 0%;\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n  .card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n  .card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n  .card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n  .card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n\n.card-columns .card {\n  margin-bottom: 0.75rem;\n}\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n    -moz-column-count: 3;\n    column-count: 3;\n    -webkit-column-gap: 1.25rem;\n    -moz-column-gap: 1.25rem;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1;\n  }\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n.accordion {\n  overflow-anchor: none;\n}\n\n.accordion > .card {\n  overflow: hidden;\n}\n\n.accordion > .card:not(:last-of-type) {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.accordion > .card:not(:first-of-type) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.accordion > .card > .card-header {\n  border-radius: 0;\n  margin-bottom: -1px;\n}\n\n.breadcrumb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb-item {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: 0.5rem;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  color: #6c757d;\n  content: \"/\";\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline;\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none;\n}\n\n.breadcrumb-item.active {\n  color: #6c757d;\n}\n\n.pagination {\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n\n.page-link:hover {\n  z-index: 2;\n  color: #0056b3;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.page-link:focus {\n  z-index: 3;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index: 3;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .badge {\n    transition: none;\n  }\n}\n\na.badge:hover, a.badge:focus {\n  text-decoration: none;\n}\n\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n\n.badge-primary {\n  color: #fff;\n  background-color: #007bff;\n}\n\na.badge-primary:hover, a.badge-primary:focus {\n  color: #fff;\n  background-color: #0062cc;\n}\n\na.badge-primary:focus, a.badge-primary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d;\n}\n\na.badge-secondary:hover, a.badge-secondary:focus {\n  color: #fff;\n  background-color: #545b62;\n}\n\na.badge-secondary:focus, a.badge-secondary.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.badge-success {\n  color: #fff;\n  background-color: #28a745;\n}\n\na.badge-success:hover, a.badge-success:focus {\n  color: #fff;\n  background-color: #1e7e34;\n}\n\na.badge-success:focus, a.badge-success.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8;\n}\n\na.badge-info:hover, a.badge-info:focus {\n  color: #fff;\n  background-color: #117a8b;\n}\n\na.badge-info:focus, a.badge-info.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107;\n}\n\na.badge-warning:hover, a.badge-warning:focus {\n  color: #212529;\n  background-color: #d39e00;\n}\n\na.badge-warning:focus, a.badge-warning.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545;\n}\n\na.badge-danger:hover, a.badge-danger:focus {\n  color: #fff;\n  background-color: #bd2130;\n}\n\na.badge-danger:focus, a.badge-danger.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa;\n}\n\na.badge-light:hover, a.badge-light:focus {\n  color: #212529;\n  background-color: #dae0e5;\n}\n\na.badge-light:focus, a.badge-light.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.badge-dark {\n  color: #fff;\n  background-color: #343a40;\n}\n\na.badge-dark:hover, a.badge-dark:focus {\n  color: #fff;\n  background-color: #1d2124;\n}\n\na.badge-dark:focus, a.badge-dark.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem;\n}\n\n@media (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n}\n\n.alert-dismissible {\n  padding-right: 4rem;\n}\n\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n\n.alert-primary hr {\n  border-top-color: #9fcdff;\n}\n\n.alert-primary .alert-link {\n  color: #002752;\n}\n\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n\n.alert-secondary hr {\n  border-top-color: #c8cbcf;\n}\n\n.alert-secondary .alert-link {\n  color: #202326;\n}\n\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.alert-success hr {\n  border-top-color: #b1dfbb;\n}\n\n.alert-success .alert-link {\n  color: #0b2e13;\n}\n\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n\n.alert-info hr {\n  border-top-color: #abdde5;\n}\n\n.alert-info .alert-link {\n  color: #062c33;\n}\n\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.alert-warning hr {\n  border-top-color: #ffe8a1;\n}\n\n.alert-warning .alert-link {\n  color: #533f03;\n}\n\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n\n.alert-danger hr {\n  border-top-color: #f1b0b7;\n}\n\n.alert-danger .alert-link {\n  color: #491217;\n}\n\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n\n.alert-light hr {\n  border-top-color: #ececf6;\n}\n\n.alert-light .alert-link {\n  color: #686868;\n}\n\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n\n.alert-dark hr {\n  border-top-color: #b9bbbe;\n}\n\n.alert-dark .alert-link {\n  color: #040505;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  line-height: 0;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n}\n\n.progress-bar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #007bff;\n  transition: width 0.6s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n  animation: progress-bar-stripes 1s linear infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n.media {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.media-body {\n  -ms-flex: 1;\n  flex: 1;\n}\n\n.list-group {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: 0.25rem;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit;\n}\n\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: #495057;\n  text-decoration: none;\n  background-color: #f8f9fa;\n}\n\n.list-group-item-action:active {\n  color: #212529;\n  background-color: #e9ecef;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}\n\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n\n.list-group-item.disabled, .list-group-item:disabled {\n  color: #6c757d;\n  pointer-events: none;\n  background-color: #fff;\n}\n\n.list-group-item.active {\n  z-index: 2;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n\n.list-group-item + .list-group-item.active {\n  margin-top: -1px;\n  border-top-width: 1px;\n}\n\n.list-group-horizontal {\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.list-group-horizontal > .list-group-item:first-child {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n}\n\n.list-group-horizontal > .list-group-item:last-child {\n  border-top-right-radius: 0.25rem;\n  border-bottom-left-radius: 0;\n}\n\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: 1px;\n  border-left-width: 0;\n}\n\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: -1px;\n  border-left-width: 1px;\n}\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-md > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    -ms-flex-direction: row;\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl > .list-group-item:first-child {\n    border-bottom-left-radius: 0.25rem;\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item:last-child {\n    border-top-right-radius: 0.25rem;\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: 1px;\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: -1px;\n    border-left-width: 1px;\n  }\n}\n\n.list-group-flush {\n  border-radius: 0;\n}\n\n.list-group-flush > .list-group-item {\n  border-width: 0 0 1px;\n}\n\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff;\n}\n\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color: #004085;\n  background-color: #9fcdff;\n}\n\n.list-group-item-primary.list-group-item-action.active {\n  color: #fff;\n  background-color: #004085;\n  border-color: #004085;\n}\n\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db;\n}\n\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color: #383d41;\n  background-color: #c8cbcf;\n}\n\n.list-group-item-secondary.list-group-item-action.active {\n  color: #fff;\n  background-color: #383d41;\n  border-color: #383d41;\n}\n\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb;\n}\n\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color: #155724;\n  background-color: #b1dfbb;\n}\n\n.list-group-item-success.list-group-item-action.active {\n  color: #fff;\n  background-color: #155724;\n  border-color: #155724;\n}\n\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb;\n}\n\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color: #0c5460;\n  background-color: #abdde5;\n}\n\n.list-group-item-info.list-group-item-action.active {\n  color: #fff;\n  background-color: #0c5460;\n  border-color: #0c5460;\n}\n\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba;\n}\n\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color: #856404;\n  background-color: #ffe8a1;\n}\n\n.list-group-item-warning.list-group-item-action.active {\n  color: #fff;\n  background-color: #856404;\n  border-color: #856404;\n}\n\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb;\n}\n\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color: #721c24;\n  background-color: #f1b0b7;\n}\n\n.list-group-item-danger.list-group-item-action.active {\n  color: #fff;\n  background-color: #721c24;\n  border-color: #721c24;\n}\n\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe;\n}\n\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color: #818182;\n  background-color: #ececf6;\n}\n\n.list-group-item-light.list-group-item-action.active {\n  color: #fff;\n  background-color: #818182;\n  border-color: #818182;\n}\n\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca;\n}\n\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color: #1b1e21;\n  background-color: #b9bbbe;\n}\n\n.list-group-item-dark.list-group-item-action.active {\n  color: #fff;\n  background-color: #1b1e21;\n  border-color: #1b1e21;\n}\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5;\n}\n\n.close:hover {\n  color: #000;\n  text-decoration: none;\n}\n\n.close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\n  opacity: .75;\n}\n\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n}\n\na.close.disabled {\n  pointer-events: none;\n}\n\n.toast {\n  -ms-flex-preferred-size: 350px;\n  flex-basis: 350px;\n  max-width: 350px;\n  font-size: 0.875rem;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  border-radius: 0.25rem;\n}\n\n.toast:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n\n.toast.showing {\n  opacity: 1;\n}\n\n.toast.show {\n  display: block;\n  opacity: 1;\n}\n\n.toast.hide {\n  display: none;\n}\n\n.toast-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.25rem 0.75rem;\n  color: #6c757d;\n  background-color: rgba(255, 255, 255, 0.85);\n  background-clip: padding-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px);\n}\n\n.toast-body {\n  padding: 0.75rem;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none;\n}\n\n.modal.fade .modal-dialog {\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n  -webkit-transform: translate(0, -50px);\n  transform: translate(0, -50px);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n\n.modal.show .modal-dialog {\n  -webkit-transform: none;\n  transform: none;\n}\n\n.modal.modal-static .modal-dialog {\n  -webkit-transform: scale(1.02);\n  transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  display: -ms-flexbox;\n  display: flex;\n  max-height: calc(100% - 1rem);\n}\n\n.modal-dialog-scrollable .modal-content {\n  max-height: calc(100vh - 1rem);\n  overflow: hidden;\n}\n\n.modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer {\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  min-height: calc(100% - 1rem);\n}\n\n.modal-dialog-centered::before {\n  display: block;\n  height: calc(100vh - 1rem);\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  content: \"\";\n}\n\n.modal-dialog-centered.modal-dialog-scrollable {\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.modal-dialog-centered.modal-dialog-scrollable .modal-content {\n  max-height: none;\n}\n\n.modal-dialog-centered.modal-dialog-scrollable::before {\n  content: none;\n}\n\n.modal-content {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n}\n\n.modal-backdrop.show {\n  opacity: 0.5;\n}\n\n.modal-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n\n.modal-header .close {\n  padding: 1rem 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n.modal-footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 0.75rem;\n  border-top: 1px solid #dee2e6;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n\n.modal-footer > * {\n  margin: 0.25rem;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto;\n  }\n  .modal-dialog-scrollable {\n    max-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-scrollable .modal-content {\n    max-height: calc(100vh - 3.5rem);\n  }\n  .modal-dialog-centered {\n    min-height: calc(100% - 3.5rem);\n  }\n  .modal-dialog-centered::before {\n    height: calc(100vh - 3.5rem);\n    height: -webkit-min-content;\n    height: -moz-min-content;\n    height: min-content;\n  }\n  .modal-sm {\n    max-width: 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    max-width: 800px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1140px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0;\n}\n\n.tooltip.show {\n  opacity: 0.9;\n}\n\n.tooltip .arrow {\n  position: absolute;\n  display: block;\n  width: 0.8rem;\n  height: 0.4rem;\n}\n\n.tooltip .arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n  bottom: 0;\n}\n\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n  top: 0;\n  border-width: 0.4rem 0.4rem 0;\n  border-top-color: #000;\n}\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n  left: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n  right: 0;\n  border-width: 0.4rem 0.4rem 0.4rem 0;\n  border-right-color: #000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0;\n}\n\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n  top: 0;\n}\n\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n  bottom: 0;\n  border-width: 0 0.4rem 0.4rem;\n  border-bottom-color: #000;\n}\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem;\n}\n\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n  right: 0;\n  width: 0.4rem;\n  height: 0.8rem;\n}\n\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n  left: 0;\n  border-width: 0.4rem 0 0.4rem 0.4rem;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n}\n\n.popover .arrow {\n  position: absolute;\n  display: block;\n  width: 1rem;\n  height: 0.5rem;\n  margin: 0 0.3rem;\n}\n\n.popover .arrow::before, .popover .arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem;\n}\n\n.bs-popover-top > .arrow, .bs-popover-auto[x-placement^=\"top\"] > .arrow {\n  bottom: calc(-0.5rem - 1px);\n}\n\n.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=\"top\"] > .arrow::before {\n  bottom: 0;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=\"top\"] > .arrow::after {\n  bottom: 1px;\n  border-width: 0.5rem 0.5rem 0;\n  border-top-color: #fff;\n}\n\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem;\n}\n\n.bs-popover-right > .arrow, .bs-popover-auto[x-placement^=\"right\"] > .arrow {\n  left: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=\"right\"] > .arrow::before {\n  left: 0;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=\"right\"] > .arrow::after {\n  left: 1px;\n  border-width: 0.5rem 0.5rem 0.5rem 0;\n  border-right-color: #fff;\n}\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem;\n}\n\n.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow {\n  top: calc(-0.5rem - 1px);\n}\n\n.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::before {\n  top: 0;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::after {\n  top: 1px;\n  border-width: 0 0.5rem 0.5rem 0.5rem;\n  border-bottom-color: #fff;\n}\n\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: 1rem;\n  margin-left: -0.5rem;\n  content: \"\";\n  border-bottom: 1px solid #f7f7f7;\n}\n\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem;\n}\n\n.bs-popover-left > .arrow, .bs-popover-auto[x-placement^=\"left\"] > .arrow {\n  right: calc(-0.5rem - 1px);\n  width: 0.5rem;\n  height: 1rem;\n  margin: 0.3rem 0;\n}\n\n.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=\"left\"] > .arrow::before {\n  right: 0;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=\"left\"] > .arrow::after {\n  right: 1px;\n  border-width: 0.5rem 0 0.5rem 0.5rem;\n  border-left-color: #fff;\n}\n\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px);\n}\n\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529;\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  -webkit-transform: none;\n  transform: none;\n}\n\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right {\n  z-index: 1;\n  opacity: 1;\n}\n\n.carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-right {\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n  .carousel-control-next {\n    transition: none;\n  }\n}\n\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: no-repeat 50% / 100% 100%;\n}\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 15;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none;\n}\n\n.carousel-indicators li {\n  box-sizing: content-box;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: .5;\n  transition: opacity 0.6s ease;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators li {\n    transition: none;\n  }\n}\n\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n}\n\n@-webkit-keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner-border {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.spinner-border {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  -webkit-animation: spinner-border .75s linear infinite;\n  animation: spinner-border .75s linear infinite;\n}\n\n.spinner-border-sm {\n  width: 1rem;\n  height: 1rem;\n  border-width: 0.2em;\n}\n\n@-webkit-keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes spinner-grow {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n.spinner-grow {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  background-color: currentColor;\n  border-radius: 50%;\n  opacity: 0;\n  -webkit-animation: spinner-grow .75s linear infinite;\n  animation: spinner-grow .75s linear infinite;\n}\n\n.spinner-grow-sm {\n  width: 1rem;\n  height: 1rem;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.bg-primary {\n  background-color: #007bff !important;\n}\n\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important;\n}\n\n.bg-secondary {\n  background-color: #6c757d !important;\n}\n\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important;\n}\n\n.bg-success {\n  background-color: #28a745 !important;\n}\n\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important;\n}\n\n.bg-info {\n  background-color: #17a2b8 !important;\n}\n\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important;\n}\n\n.bg-warning {\n  background-color: #ffc107 !important;\n}\n\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important;\n}\n\n.bg-danger {\n  background-color: #dc3545 !important;\n}\n\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important;\n}\n\n.bg-light {\n  background-color: #f8f9fa !important;\n}\n\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important;\n}\n\n.bg-dark {\n  background-color: #343a40 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important;\n}\n\n.bg-white {\n  background-color: #fff !important;\n}\n\n.bg-transparent {\n  background-color: transparent !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-right-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-left-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  border-color: #007bff !important;\n}\n\n.border-secondary {\n  border-color: #6c757d !important;\n}\n\n.border-success {\n  border-color: #28a745 !important;\n}\n\n.border-info {\n  border-color: #17a2b8 !important;\n}\n\n.border-warning {\n  border-color: #ffc107 !important;\n}\n\n.border-danger {\n  border-color: #dc3545 !important;\n}\n\n.border-light {\n  border-color: #f8f9fa !important;\n}\n\n.border-dark {\n  border-color: #343a40 !important;\n}\n\n.border-white {\n  border-color: #fff !important;\n}\n\n.rounded-sm {\n  border-radius: 0.2rem !important;\n}\n\n.rounded {\n  border-radius: 0.25rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important;\n}\n\n.rounded-lg {\n  border-radius: 0.3rem !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: 50rem !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n@media print {\n  .d-print-none {\n    display: none !important;\n  }\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important;\n  }\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive::before {\n  display: block;\n  content: \"\";\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9::before {\n  padding-top: 42.857143%;\n}\n\n.embed-responsive-16by9::before {\n  padding-top: 56.25%;\n}\n\n.embed-responsive-4by3::before {\n  padding-top: 75%;\n}\n\n.embed-responsive-1by1::before {\n  padding-top: 100%;\n}\n\n.flex-row {\n  -ms-flex-direction: row !important;\n  flex-direction: row !important;\n}\n\n.flex-column {\n  -ms-flex-direction: column !important;\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  -ms-flex-direction: row-reverse !important;\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  -ms-flex-direction: column-reverse !important;\n  flex-direction: column-reverse !important;\n}\n\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n  flex-wrap: wrap-reverse !important;\n}\n\n.flex-fill {\n  -ms-flex: 1 1 auto !important;\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  -ms-flex-positive: 0 !important;\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  -ms-flex-positive: 1 !important;\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  -ms-flex-negative: 0 !important;\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  -ms-flex-negative: 1 !important;\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start {\n  -ms-flex-pack: start !important;\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  -ms-flex-pack: end !important;\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  -ms-flex-pack: center !important;\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  -ms-flex-pack: justify !important;\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n  justify-content: space-around !important;\n}\n\n.align-items-start {\n  -ms-flex-align: start !important;\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  -ms-flex-align: end !important;\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  -ms-flex-align: center !important;\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  -ms-flex-align: baseline !important;\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  -ms-flex-align: stretch !important;\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n  align-content: center !important;\n}\n\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n  align-self: auto !important;\n}\n\n.align-self-start {\n  -ms-flex-item-align: start !important;\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  -ms-flex-item-align: end !important;\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  -ms-flex-item-align: center !important;\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n  align-self: stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-sm-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-sm-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-sm-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-md-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-md-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-md-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-md-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-lg-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-lg-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-lg-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -ms-flex-direction: row !important;\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    -ms-flex-direction: column !important;\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    -ms-flex-direction: row-reverse !important;\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    -ms-flex-direction: column-reverse !important;\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n    flex-wrap: wrap-reverse !important;\n  }\n  .flex-xl-fill {\n    -ms-flex: 1 1 auto !important;\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-grow-0 {\n    -ms-flex-positive: 0 !important;\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    -ms-flex-positive: 1 !important;\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    -ms-flex-negative: 0 !important;\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    -ms-flex-negative: 1 !important;\n    flex-shrink: 1 !important;\n  }\n  .justify-content-xl-start {\n    -ms-flex-pack: start !important;\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    -ms-flex-pack: end !important;\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    -ms-flex-pack: center !important;\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    -ms-flex-pack: justify !important;\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n    justify-content: space-around !important;\n  }\n  .align-items-xl-start {\n    -ms-flex-align: start !important;\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    -ms-flex-align: end !important;\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    -ms-flex-align: center !important;\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    -ms-flex-align: baseline !important;\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    -ms-flex-align: stretch !important;\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n    align-self: stretch !important;\n  }\n}\n\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important;\n  }\n  .float-sm-right {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important;\n  }\n  .float-md-right {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important;\n  }\n  .float-lg-right {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important;\n  }\n  .float-xl-right {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n}\n\n.user-select-all {\n  -webkit-user-select: all !important;\n  -moz-user-select: all !important;\n  -ms-user-select: all !important;\n  user-select: all !important;\n}\n\n.user-select-auto {\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  user-select: auto !important;\n}\n\n.user-select-none {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n\n.shadow-sm {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-lg {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.mt-0,\n.my-0 {\n  margin-top: 0 !important;\n}\n\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important;\n}\n\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important;\n}\n\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important;\n}\n\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important;\n}\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important;\n}\n\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important;\n}\n\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important;\n}\n\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important;\n}\n\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important;\n}\n\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important;\n}\n\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important;\n}\n\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.pt-0,\n.py-0 {\n  padding-top: 0 !important;\n}\n\n.pr-0,\n.px-0 {\n  padding-right: 0 !important;\n}\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important;\n}\n\n.pl-0,\n.px-0 {\n  padding-left: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important;\n}\n\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important;\n}\n\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important;\n}\n\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important;\n}\n\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important;\n}\n\n.m-n1 {\n  margin: -0.25rem !important;\n}\n\n.mt-n1,\n.my-n1 {\n  margin-top: -0.25rem !important;\n}\n\n.mr-n1,\n.mx-n1 {\n  margin-right: -0.25rem !important;\n}\n\n.mb-n1,\n.my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n\n.ml-n1,\n.mx-n1 {\n  margin-left: -0.25rem !important;\n}\n\n.m-n2 {\n  margin: -0.5rem !important;\n}\n\n.mt-n2,\n.my-n2 {\n  margin-top: -0.5rem !important;\n}\n\n.mr-n2,\n.mx-n2 {\n  margin-right: -0.5rem !important;\n}\n\n.mb-n2,\n.my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n\n.ml-n2,\n.mx-n2 {\n  margin-left: -0.5rem !important;\n}\n\n.m-n3 {\n  margin: -1rem !important;\n}\n\n.mt-n3,\n.my-n3 {\n  margin-top: -1rem !important;\n}\n\n.mr-n3,\n.mx-n3 {\n  margin-right: -1rem !important;\n}\n\n.mb-n3,\n.my-n3 {\n  margin-bottom: -1rem !important;\n}\n\n.ml-n3,\n.mx-n3 {\n  margin-left: -1rem !important;\n}\n\n.m-n4 {\n  margin: -1.5rem !important;\n}\n\n.mt-n4,\n.my-n4 {\n  margin-top: -1.5rem !important;\n}\n\n.mr-n4,\n.mx-n4 {\n  margin-right: -1.5rem !important;\n}\n\n.mb-n4,\n.my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n\n.ml-n4,\n.mx-n4 {\n  margin-left: -1.5rem !important;\n}\n\n.m-n5 {\n  margin: -3rem !important;\n}\n\n.mt-n5,\n.my-n5 {\n  margin-top: -3rem !important;\n}\n\n.mr-n5,\n.mx-n5 {\n  margin-right: -3rem !important;\n}\n\n.mb-n5,\n.my-n5 {\n  margin-bottom: -3rem !important;\n}\n\n.ml-n5,\n.mx-n5 {\n  margin-left: -3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mt-auto,\n.my-auto {\n  margin-top: auto !important;\n}\n\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important;\n}\n\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important;\n}\n\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important;\n  }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .m-sm-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-sm-n1,\n  .my-sm-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-sm-n1,\n  .mx-sm-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-sm-n1,\n  .my-sm-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-sm-n1,\n  .mx-sm-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-sm-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-sm-n2,\n  .my-sm-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-sm-n2,\n  .mx-sm-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-sm-n2,\n  .my-sm-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-sm-n2,\n  .mx-sm-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-sm-n3 {\n    margin: -1rem !important;\n  }\n  .mt-sm-n3,\n  .my-sm-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-sm-n3,\n  .mx-sm-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-sm-n3,\n  .my-sm-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-sm-n3,\n  .mx-sm-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-sm-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-sm-n4,\n  .my-sm-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-sm-n4,\n  .mx-sm-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-sm-n4,\n  .my-sm-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-sm-n4,\n  .mx-sm-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-sm-n5 {\n    margin: -3rem !important;\n  }\n  .mt-sm-n5,\n  .my-sm-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-sm-n5,\n  .mx-sm-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-sm-n5,\n  .my-sm-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-sm-n5,\n  .mx-sm-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important;\n  }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important;\n  }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important;\n  }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important;\n  }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important;\n  }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important;\n  }\n  .m-md-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-md-n1,\n  .my-md-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-md-n1,\n  .mx-md-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-md-n1,\n  .my-md-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-md-n1,\n  .mx-md-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-md-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-md-n2,\n  .my-md-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-md-n2,\n  .mx-md-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-md-n2,\n  .my-md-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-md-n2,\n  .mx-md-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-md-n3 {\n    margin: -1rem !important;\n  }\n  .mt-md-n3,\n  .my-md-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-md-n3,\n  .mx-md-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-md-n3,\n  .my-md-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-md-n3,\n  .mx-md-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-md-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-md-n4,\n  .my-md-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-md-n4,\n  .mx-md-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-md-n4,\n  .my-md-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-md-n4,\n  .mx-md-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-md-n5 {\n    margin: -3rem !important;\n  }\n  .mt-md-n5,\n  .my-md-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-md-n5,\n  .mx-md-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-md-n5,\n  .my-md-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-md-n5,\n  .mx-md-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important;\n  }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important;\n  }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .m-lg-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-lg-n1,\n  .my-lg-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-lg-n1,\n  .mx-lg-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-lg-n1,\n  .my-lg-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-lg-n1,\n  .mx-lg-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-lg-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-lg-n2,\n  .my-lg-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-lg-n2,\n  .mx-lg-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-lg-n2,\n  .my-lg-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-lg-n2,\n  .mx-lg-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-lg-n3 {\n    margin: -1rem !important;\n  }\n  .mt-lg-n3,\n  .my-lg-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-lg-n3,\n  .mx-lg-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-lg-n3,\n  .my-lg-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-lg-n3,\n  .mx-lg-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-lg-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-lg-n4,\n  .my-lg-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-lg-n4,\n  .mx-lg-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-lg-n4,\n  .my-lg-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-lg-n4,\n  .mx-lg-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-lg-n5 {\n    margin: -3rem !important;\n  }\n  .mt-lg-n5,\n  .my-lg-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-lg-n5,\n  .mx-lg-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-lg-n5,\n  .my-lg-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-lg-n5,\n  .mx-lg-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important;\n  }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important;\n  }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .m-xl-n1 {\n    margin: -0.25rem !important;\n  }\n  .mt-xl-n1,\n  .my-xl-n1 {\n    margin-top: -0.25rem !important;\n  }\n  .mr-xl-n1,\n  .mx-xl-n1 {\n    margin-right: -0.25rem !important;\n  }\n  .mb-xl-n1,\n  .my-xl-n1 {\n    margin-bottom: -0.25rem !important;\n  }\n  .ml-xl-n1,\n  .mx-xl-n1 {\n    margin-left: -0.25rem !important;\n  }\n  .m-xl-n2 {\n    margin: -0.5rem !important;\n  }\n  .mt-xl-n2,\n  .my-xl-n2 {\n    margin-top: -0.5rem !important;\n  }\n  .mr-xl-n2,\n  .mx-xl-n2 {\n    margin-right: -0.5rem !important;\n  }\n  .mb-xl-n2,\n  .my-xl-n2 {\n    margin-bottom: -0.5rem !important;\n  }\n  .ml-xl-n2,\n  .mx-xl-n2 {\n    margin-left: -0.5rem !important;\n  }\n  .m-xl-n3 {\n    margin: -1rem !important;\n  }\n  .mt-xl-n3,\n  .my-xl-n3 {\n    margin-top: -1rem !important;\n  }\n  .mr-xl-n3,\n  .mx-xl-n3 {\n    margin-right: -1rem !important;\n  }\n  .mb-xl-n3,\n  .my-xl-n3 {\n    margin-bottom: -1rem !important;\n  }\n  .ml-xl-n3,\n  .mx-xl-n3 {\n    margin-left: -1rem !important;\n  }\n  .m-xl-n4 {\n    margin: -1.5rem !important;\n  }\n  .mt-xl-n4,\n  .my-xl-n4 {\n    margin-top: -1.5rem !important;\n  }\n  .mr-xl-n4,\n  .mx-xl-n4 {\n    margin-right: -1.5rem !important;\n  }\n  .mb-xl-n4,\n  .my-xl-n4 {\n    margin-bottom: -1.5rem !important;\n  }\n  .ml-xl-n4,\n  .mx-xl-n4 {\n    margin-left: -1.5rem !important;\n  }\n  .m-xl-n5 {\n    margin: -3rem !important;\n  }\n  .mt-xl-n5,\n  .my-xl-n5 {\n    margin-top: -3rem !important;\n  }\n  .mr-xl-n5,\n  .mx-xl-n5 {\n    margin-right: -3rem !important;\n  }\n  .mb-xl-n5,\n  .my-xl-n5 {\n    margin-bottom: -3rem !important;\n  }\n  .ml-xl-n5,\n  .mx-xl-n5 {\n    margin-left: -3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important;\n  }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important;\n  }\n}\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  pointer-events: auto;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.text-monospace {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-left {\n  text-align: left !important;\n}\n\n.text-right {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-light {\n  font-weight: 300 !important;\n}\n\n.font-weight-lighter {\n  font-weight: lighter !important;\n}\n\n.font-weight-normal {\n  font-weight: 400 !important;\n}\n\n.font-weight-bold {\n  font-weight: 700 !important;\n}\n\n.font-weight-bolder {\n  font-weight: bolder !important;\n}\n\n.font-italic {\n  font-style: italic !important;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.text-primary {\n  color: #007bff !important;\n}\n\na.text-primary:hover, a.text-primary:focus {\n  color: #0056b3 !important;\n}\n\n.text-secondary {\n  color: #6c757d !important;\n}\n\na.text-secondary:hover, a.text-secondary:focus {\n  color: #494f54 !important;\n}\n\n.text-success {\n  color: #28a745 !important;\n}\n\na.text-success:hover, a.text-success:focus {\n  color: #19692c !important;\n}\n\n.text-info {\n  color: #17a2b8 !important;\n}\n\na.text-info:hover, a.text-info:focus {\n  color: #0f6674 !important;\n}\n\n.text-warning {\n  color: #ffc107 !important;\n}\n\na.text-warning:hover, a.text-warning:focus {\n  color: #ba8b00 !important;\n}\n\n.text-danger {\n  color: #dc3545 !important;\n}\n\na.text-danger:hover, a.text-danger:focus {\n  color: #a71d2a !important;\n}\n\n.text-light {\n  color: #f8f9fa !important;\n}\n\na.text-light:hover, a.text-light:focus {\n  color: #cbd3da !important;\n}\n\n.text-dark {\n  color: #343a40 !important;\n}\n\na.text-dark:hover, a.text-dark:focus {\n  color: #121416 !important;\n}\n\n.text-body {\n  color: #212529 !important;\n}\n\n.text-muted {\n  color: #6c757d !important;\n}\n\n.text-black-50 {\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-break {\n  word-break: break-word !important;\n  word-wrap: break-word !important;\n}\n\n.text-reset {\n  color: inherit !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n  a:not(.btn) {\n    text-decoration: underline;\n  }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  @page {\n    size: a3;\n  }\n  body {\n    min-width: 992px !important;\n  }\n  .container {\n    min-width: 992px !important;\n  }\n  .navbar {\n    display: none;\n  }\n  .badge {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6 !important;\n  }\n  .table-dark {\n    color: inherit;\n  }\n  .table-dark th,\n  .table-dark td,\n  .table-dark thead th,\n  .table-dark tbody + tbody {\n    border-color: #dee2e6;\n  }\n  .table .thead-dark th {\n    color: inherit;\n    border-color: #dee2e6;\n  }\n}", ""]);
// Exports
module.exports = exports;

    if(true) {
      // 1605447368199
      var cssReload = __webpack_require__(/*! ../../../css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ "./node_modules/css-hot-loader/hotModuleReplacement.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-hot-loader/hotModuleReplacement.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var normalizeUrl = __webpack_require__(/*! normalize-url */ "./node_modules/css-hot-loader/node_modules/normalize-url/index.js");
var srcByModuleId = Object.create(null);
var debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

var noDocument = typeof document === 'undefined';
var forEach = Array.prototype.forEach;

var noop = function () {};

var getCurrentScriptUrl = function(moduleId) {
  var src = srcByModuleId[moduleId];

  if (!src) {
    if (document.currentScript) {
      src = document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName('script');
      var lastScriptTag = scripts[scripts.length - 1];

      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  return function(fileMap) {
    var splitResult = /([^\\/]+)\.js$/.exec(src);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace('.js', '.css')];
    }
    return fileMap.split(',').map(function(mapRule) {
      var reg = new RegExp(filename + '\\.js$', 'g')
      return normalizeUrl(src.replace(reg, mapRule.replace(/{fileName}/g, filename) + '.css'), { stripWWW: false });
    });
  };
};

function updateCss(el, url) {
  if (!url) {
    url = el.href.split('?')[0];
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf('.css') > -1)) return;

  el.visited = true;
  var newEl = el.cloneNode();

  newEl.isLoaded = false;
  newEl.addEventListener('load', function () {
    newEl.isLoaded = true;
    newEl.parentNode.removeChild(el);
  });

  newEl.addEventListener('error', function () {
    newEl.isLoaded = true;
    if (newEl.parentNode.contains(el)) {
      newEl.parentNode.removeChild(el);
    }
  });

  newEl.href = url + '?' + Date.now();
  // insert new <link /> right to the old one's position
  el.parentNode.insertBefore(newEl, el.nextSibling);
}

function reloadStyle(src) {
  var elements = document.querySelectorAll('link');
  var loaded = false;

  forEach.call(elements, function(el) {
    if (el.visited === true) return;

    var url = getReloadUrl(el.href, src);
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });

  return loaded;
}

function getReloadUrl(href, src) {
  href = normalizeUrl(href, { stripWWW: false });
  var ret;
  src.some(function(url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

function reloadAll() {
  var elements = document.querySelectorAll('link');
  forEach.call(elements, function(el) {
    if (el.visited === true) return;
    updateCss(el);
  });
}

module.exports = function(moduleId, options) {
  var getScriptSrc;

  if (noDocument) {
    return noop;
  }

  getScriptSrc = getCurrentScriptUrl(moduleId);

  function update() {
    var src = getScriptSrc(options.fileMap);
    var reloaded = reloadStyle(src);
    if (reloaded && !options.reloadAll) {
      console.log('[HMR] css reload %s', src.join(' '));
    } else {
      console.log('[HMR] Reload all css');
      reloadAll();
    }
  }

  return debounce(update, 10);
};


/***/ }),

/***/ "./node_modules/css-hot-loader/node_modules/normalize-url/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/css-hot-loader/node_modules/normalize-url/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");
var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
var prependHttp = __webpack_require__(/*! prepend-http */ "./node_modules/css-hot-loader/node_modules/prepend-http/index.js");
var sortKeys = __webpack_require__(/*! sort-keys */ "./node_modules/sort-keys/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var DEFAULT_PORTS = {
	'http:': 80,
	'https:': 443,
	'ftp:': 21
};

// protocols that always contain a `//`` bit
var slashedProtocol = {
	'http': true,
	'https': true,
	'ftp': true,
	'gopher': true,
	'file': true,
	'http:': true,
	'https:': true,
	'ftp:': true,
	'gopher:': true,
	'file:': true
};

function testParameter(name, filters) {
	return filters.some(function (filter) {
		return filter instanceof RegExp ? filter.test(name) : filter === name;
	});
}

module.exports = function (str, opts) {
	opts = objectAssign({
		normalizeProtocol: true,
		normalizeHttps: false,
		stripFragment: true,
		stripWWW: true,
		removeQueryParameters: [/^utm_\w+/i],
		removeTrailingSlash: true,
		removeDirectoryIndex: false
	}, opts);

	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	var hasRelativeProtocol = str.indexOf('//') === 0;

	// prepend protocol
	str = prependHttp(str.trim()).replace(/^\/\//, 'http://');

	var urlObj = url.parse(str);

	if (opts.normalizeHttps && urlObj.protocol === 'https:') {
		urlObj.protocol = 'http:';
	}

	if (!urlObj.hostname && !urlObj.pathname) {
		throw new Error('Invalid URL');
	}

	// prevent these from being used by `url.format`
	delete urlObj.host;
	delete urlObj.query;

	// remove fragment
	if (opts.stripFragment) {
		delete urlObj.hash;
	}

	// remove default port
	var port = DEFAULT_PORTS[urlObj.protocol];
	if (Number(urlObj.port) === port) {
		delete urlObj.port;
	}

	// remove duplicate slashes
	if (urlObj.pathname) {
		urlObj.pathname = urlObj.pathname.replace(/\/{2,}/g, '/');
	}

	// decode URI octets
	if (urlObj.pathname) {
		urlObj.pathname = decodeURI(urlObj.pathname);
	}

	// remove directory index
	if (opts.removeDirectoryIndex === true) {
		opts.removeDirectoryIndex = [/^index\.[a-z]+$/];
	}

	if (Array.isArray(opts.removeDirectoryIndex) && opts.removeDirectoryIndex.length) {
		var pathComponents = urlObj.pathname.split('/');
		var lastComponent = pathComponents[pathComponents.length - 1];

		if (testParameter(lastComponent, opts.removeDirectoryIndex)) {
			pathComponents = pathComponents.slice(0, pathComponents.length - 1);
			urlObj.pathname = pathComponents.slice(1).join('/') + '/';
		}
	}

	// resolve relative paths, but only for slashed protocols
	if (slashedProtocol[urlObj.protocol]) {
		var domain = urlObj.protocol + '//' + urlObj.hostname;
		var relative = url.resolve(domain, urlObj.pathname);
		urlObj.pathname = relative.replace(domain, '');
	}

	if (urlObj.hostname) {
		// IDN to Unicode
		urlObj.hostname = punycode.toUnicode(urlObj.hostname).toLowerCase();

		// remove trailing dot
		urlObj.hostname = urlObj.hostname.replace(/\.$/, '');

		// remove `www.`
		if (opts.stripWWW) {
			urlObj.hostname = urlObj.hostname.replace(/^www\./, '');
		}
	}

	// remove URL with empty query string
	if (urlObj.search === '?') {
		delete urlObj.search;
	}

	var queryParameters = queryString.parse(urlObj.search);

	// remove query unwanted parameters
	if (Array.isArray(opts.removeQueryParameters)) {
		for (var key in queryParameters) {
			if (testParameter(key, opts.removeQueryParameters)) {
				delete queryParameters[key];
			}
		}
	}

	// sort query parameters
	urlObj.search = queryString.stringify(sortKeys(queryParameters));

	// decode query parameters
	urlObj.search = decodeURIComponent(urlObj.search);

	// take advantage of many of the Node `url` normalizations
	str = url.format(urlObj);

	// remove ending `/`
	if (opts.removeTrailingSlash || urlObj.pathname === '/') {
		str = str.replace(/\/$/, '');
	}

	// restore relative protocol, if applicable
	if (hasRelativeProtocol && !opts.normalizeProtocol) {
		str = str.replace(/^http:\/\//, '//');
	}

	return str;
};


/***/ }),

/***/ "./node_modules/css-hot-loader/node_modules/prepend-http/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-hot-loader/node_modules/prepend-http/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (url) {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string, got ' + typeof url);
	}

	url = url.trim();

	if (/^\.*\/|^(?!localhost)\w+:/.test(url)) {
		return url;
	}

	return url.replace(/^(?!(?:\w+:)?\/\/)/, 'http://');
};


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/html-entities/lib/html4-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html4-entities.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HTML_ALPHA = ['apos', 'nbsp', 'iexcl', 'cent', 'pound', 'curren', 'yen', 'brvbar', 'sect', 'uml', 'copy', 'ordf', 'laquo', 'not', 'shy', 'reg', 'macr', 'deg', 'plusmn', 'sup2', 'sup3', 'acute', 'micro', 'para', 'middot', 'cedil', 'sup1', 'ordm', 'raquo', 'frac14', 'frac12', 'frac34', 'iquest', 'Agrave', 'Aacute', 'Acirc', 'Atilde', 'Auml', 'Aring', 'Aelig', 'Ccedil', 'Egrave', 'Eacute', 'Ecirc', 'Euml', 'Igrave', 'Iacute', 'Icirc', 'Iuml', 'ETH', 'Ntilde', 'Ograve', 'Oacute', 'Ocirc', 'Otilde', 'Ouml', 'times', 'Oslash', 'Ugrave', 'Uacute', 'Ucirc', 'Uuml', 'Yacute', 'THORN', 'szlig', 'agrave', 'aacute', 'acirc', 'atilde', 'auml', 'aring', 'aelig', 'ccedil', 'egrave', 'eacute', 'ecirc', 'euml', 'igrave', 'iacute', 'icirc', 'iuml', 'eth', 'ntilde', 'ograve', 'oacute', 'ocirc', 'otilde', 'ouml', 'divide', 'oslash', 'ugrave', 'uacute', 'ucirc', 'uuml', 'yacute', 'thorn', 'yuml', 'quot', 'amp', 'lt', 'gt', 'OElig', 'oelig', 'Scaron', 'scaron', 'Yuml', 'circ', 'tilde', 'ensp', 'emsp', 'thinsp', 'zwnj', 'zwj', 'lrm', 'rlm', 'ndash', 'mdash', 'lsquo', 'rsquo', 'sbquo', 'ldquo', 'rdquo', 'bdquo', 'dagger', 'Dagger', 'permil', 'lsaquo', 'rsaquo', 'euro', 'fnof', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigmaf', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega', 'thetasym', 'upsih', 'piv', 'bull', 'hellip', 'prime', 'Prime', 'oline', 'frasl', 'weierp', 'image', 'real', 'trade', 'alefsym', 'larr', 'uarr', 'rarr', 'darr', 'harr', 'crarr', 'lArr', 'uArr', 'rArr', 'dArr', 'hArr', 'forall', 'part', 'exist', 'empty', 'nabla', 'isin', 'notin', 'ni', 'prod', 'sum', 'minus', 'lowast', 'radic', 'prop', 'infin', 'ang', 'and', 'or', 'cap', 'cup', 'int', 'there4', 'sim', 'cong', 'asymp', 'ne', 'equiv', 'le', 'ge', 'sub', 'sup', 'nsub', 'sube', 'supe', 'oplus', 'otimes', 'perp', 'sdot', 'lceil', 'rceil', 'lfloor', 'rfloor', 'lang', 'rang', 'loz', 'spades', 'clubs', 'hearts', 'diams'];
var HTML_CODES = [39, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 34, 38, 60, 62, 338, 339, 352, 353, 376, 710, 732, 8194, 8195, 8201, 8204, 8205, 8206, 8207, 8211, 8212, 8216, 8217, 8218, 8220, 8221, 8222, 8224, 8225, 8240, 8249, 8250, 8364, 402, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 982, 8226, 8230, 8242, 8243, 8254, 8260, 8472, 8465, 8476, 8482, 8501, 8592, 8593, 8594, 8595, 8596, 8629, 8656, 8657, 8658, 8659, 8660, 8704, 8706, 8707, 8709, 8711, 8712, 8713, 8715, 8719, 8721, 8722, 8727, 8730, 8733, 8734, 8736, 8743, 8744, 8745, 8746, 8747, 8756, 8764, 8773, 8776, 8800, 8801, 8804, 8805, 8834, 8835, 8836, 8838, 8839, 8853, 8855, 8869, 8901, 8968, 8969, 8970, 8971, 9001, 9002, 9674, 9824, 9827, 9829, 9830];
var alphaIndex = {};
var numIndex = {};
(function () {
    var i = 0;
    var length = HTML_ALPHA.length;
    while (i < length) {
        var a = HTML_ALPHA[i];
        var c = HTML_CODES[i];
        alphaIndex[a] = String.fromCharCode(c);
        numIndex[c] = a;
        i++;
    }
})();
var Html4Entities = /** @class */ (function () {
    function Html4Entities() {
    }
    Html4Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1).toLowerCase() === 'x' ?
                    parseInt(entity.substr(2), 16) :
                    parseInt(entity.substr(1));
                if (!(isNaN(code) || code < -32768 || code > 65535)) {
                    chr = String.fromCharCode(code);
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html4Entities.decode = function (str) {
        return new Html4Entities().decode(str);
    };
    Html4Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var alpha = numIndex[str.charCodeAt(i)];
            result += alpha ? "&" + alpha + ";" : str.charAt(i);
            i++;
        }
        return result;
    };
    Html4Entities.encode = function (str) {
        return new Html4Entities().encode(str);
    };
    Html4Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var cc = str.charCodeAt(i);
            var alpha = numIndex[cc];
            if (alpha) {
                result += "&" + alpha + ";";
            }
            else if (cc < 32 || cc > 126) {
                result += "&#" + cc + ";";
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonUTF = function (str) {
        return new Html4Entities().encodeNonUTF(str);
    };
    Html4Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            result += '&#' + c + ';';
            i++;
        }
        return result;
    };
    Html4Entities.encodeNonASCII = function (str) {
        return new Html4Entities().encodeNonASCII(str);
    };
    return Html4Entities;
}());
exports.Html4Entities = Html4Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/html5-entities.js":
/*!**********************************************************!*\
  !*** ./node_modules/html-entities/lib/html5-entities.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ENTITIES = [['Aacute', [193]], ['aacute', [225]], ['Abreve', [258]], ['abreve', [259]], ['ac', [8766]], ['acd', [8767]], ['acE', [8766, 819]], ['Acirc', [194]], ['acirc', [226]], ['acute', [180]], ['Acy', [1040]], ['acy', [1072]], ['AElig', [198]], ['aelig', [230]], ['af', [8289]], ['Afr', [120068]], ['afr', [120094]], ['Agrave', [192]], ['agrave', [224]], ['alefsym', [8501]], ['aleph', [8501]], ['Alpha', [913]], ['alpha', [945]], ['Amacr', [256]], ['amacr', [257]], ['amalg', [10815]], ['amp', [38]], ['AMP', [38]], ['andand', [10837]], ['And', [10835]], ['and', [8743]], ['andd', [10844]], ['andslope', [10840]], ['andv', [10842]], ['ang', [8736]], ['ange', [10660]], ['angle', [8736]], ['angmsdaa', [10664]], ['angmsdab', [10665]], ['angmsdac', [10666]], ['angmsdad', [10667]], ['angmsdae', [10668]], ['angmsdaf', [10669]], ['angmsdag', [10670]], ['angmsdah', [10671]], ['angmsd', [8737]], ['angrt', [8735]], ['angrtvb', [8894]], ['angrtvbd', [10653]], ['angsph', [8738]], ['angst', [197]], ['angzarr', [9084]], ['Aogon', [260]], ['aogon', [261]], ['Aopf', [120120]], ['aopf', [120146]], ['apacir', [10863]], ['ap', [8776]], ['apE', [10864]], ['ape', [8778]], ['apid', [8779]], ['apos', [39]], ['ApplyFunction', [8289]], ['approx', [8776]], ['approxeq', [8778]], ['Aring', [197]], ['aring', [229]], ['Ascr', [119964]], ['ascr', [119990]], ['Assign', [8788]], ['ast', [42]], ['asymp', [8776]], ['asympeq', [8781]], ['Atilde', [195]], ['atilde', [227]], ['Auml', [196]], ['auml', [228]], ['awconint', [8755]], ['awint', [10769]], ['backcong', [8780]], ['backepsilon', [1014]], ['backprime', [8245]], ['backsim', [8765]], ['backsimeq', [8909]], ['Backslash', [8726]], ['Barv', [10983]], ['barvee', [8893]], ['barwed', [8965]], ['Barwed', [8966]], ['barwedge', [8965]], ['bbrk', [9141]], ['bbrktbrk', [9142]], ['bcong', [8780]], ['Bcy', [1041]], ['bcy', [1073]], ['bdquo', [8222]], ['becaus', [8757]], ['because', [8757]], ['Because', [8757]], ['bemptyv', [10672]], ['bepsi', [1014]], ['bernou', [8492]], ['Bernoullis', [8492]], ['Beta', [914]], ['beta', [946]], ['beth', [8502]], ['between', [8812]], ['Bfr', [120069]], ['bfr', [120095]], ['bigcap', [8898]], ['bigcirc', [9711]], ['bigcup', [8899]], ['bigodot', [10752]], ['bigoplus', [10753]], ['bigotimes', [10754]], ['bigsqcup', [10758]], ['bigstar', [9733]], ['bigtriangledown', [9661]], ['bigtriangleup', [9651]], ['biguplus', [10756]], ['bigvee', [8897]], ['bigwedge', [8896]], ['bkarow', [10509]], ['blacklozenge', [10731]], ['blacksquare', [9642]], ['blacktriangle', [9652]], ['blacktriangledown', [9662]], ['blacktriangleleft', [9666]], ['blacktriangleright', [9656]], ['blank', [9251]], ['blk12', [9618]], ['blk14', [9617]], ['blk34', [9619]], ['block', [9608]], ['bne', [61, 8421]], ['bnequiv', [8801, 8421]], ['bNot', [10989]], ['bnot', [8976]], ['Bopf', [120121]], ['bopf', [120147]], ['bot', [8869]], ['bottom', [8869]], ['bowtie', [8904]], ['boxbox', [10697]], ['boxdl', [9488]], ['boxdL', [9557]], ['boxDl', [9558]], ['boxDL', [9559]], ['boxdr', [9484]], ['boxdR', [9554]], ['boxDr', [9555]], ['boxDR', [9556]], ['boxh', [9472]], ['boxH', [9552]], ['boxhd', [9516]], ['boxHd', [9572]], ['boxhD', [9573]], ['boxHD', [9574]], ['boxhu', [9524]], ['boxHu', [9575]], ['boxhU', [9576]], ['boxHU', [9577]], ['boxminus', [8863]], ['boxplus', [8862]], ['boxtimes', [8864]], ['boxul', [9496]], ['boxuL', [9563]], ['boxUl', [9564]], ['boxUL', [9565]], ['boxur', [9492]], ['boxuR', [9560]], ['boxUr', [9561]], ['boxUR', [9562]], ['boxv', [9474]], ['boxV', [9553]], ['boxvh', [9532]], ['boxvH', [9578]], ['boxVh', [9579]], ['boxVH', [9580]], ['boxvl', [9508]], ['boxvL', [9569]], ['boxVl', [9570]], ['boxVL', [9571]], ['boxvr', [9500]], ['boxvR', [9566]], ['boxVr', [9567]], ['boxVR', [9568]], ['bprime', [8245]], ['breve', [728]], ['Breve', [728]], ['brvbar', [166]], ['bscr', [119991]], ['Bscr', [8492]], ['bsemi', [8271]], ['bsim', [8765]], ['bsime', [8909]], ['bsolb', [10693]], ['bsol', [92]], ['bsolhsub', [10184]], ['bull', [8226]], ['bullet', [8226]], ['bump', [8782]], ['bumpE', [10926]], ['bumpe', [8783]], ['Bumpeq', [8782]], ['bumpeq', [8783]], ['Cacute', [262]], ['cacute', [263]], ['capand', [10820]], ['capbrcup', [10825]], ['capcap', [10827]], ['cap', [8745]], ['Cap', [8914]], ['capcup', [10823]], ['capdot', [10816]], ['CapitalDifferentialD', [8517]], ['caps', [8745, 65024]], ['caret', [8257]], ['caron', [711]], ['Cayleys', [8493]], ['ccaps', [10829]], ['Ccaron', [268]], ['ccaron', [269]], ['Ccedil', [199]], ['ccedil', [231]], ['Ccirc', [264]], ['ccirc', [265]], ['Cconint', [8752]], ['ccups', [10828]], ['ccupssm', [10832]], ['Cdot', [266]], ['cdot', [267]], ['cedil', [184]], ['Cedilla', [184]], ['cemptyv', [10674]], ['cent', [162]], ['centerdot', [183]], ['CenterDot', [183]], ['cfr', [120096]], ['Cfr', [8493]], ['CHcy', [1063]], ['chcy', [1095]], ['check', [10003]], ['checkmark', [10003]], ['Chi', [935]], ['chi', [967]], ['circ', [710]], ['circeq', [8791]], ['circlearrowleft', [8634]], ['circlearrowright', [8635]], ['circledast', [8859]], ['circledcirc', [8858]], ['circleddash', [8861]], ['CircleDot', [8857]], ['circledR', [174]], ['circledS', [9416]], ['CircleMinus', [8854]], ['CirclePlus', [8853]], ['CircleTimes', [8855]], ['cir', [9675]], ['cirE', [10691]], ['cire', [8791]], ['cirfnint', [10768]], ['cirmid', [10991]], ['cirscir', [10690]], ['ClockwiseContourIntegral', [8754]], ['clubs', [9827]], ['clubsuit', [9827]], ['colon', [58]], ['Colon', [8759]], ['Colone', [10868]], ['colone', [8788]], ['coloneq', [8788]], ['comma', [44]], ['commat', [64]], ['comp', [8705]], ['compfn', [8728]], ['complement', [8705]], ['complexes', [8450]], ['cong', [8773]], ['congdot', [10861]], ['Congruent', [8801]], ['conint', [8750]], ['Conint', [8751]], ['ContourIntegral', [8750]], ['copf', [120148]], ['Copf', [8450]], ['coprod', [8720]], ['Coproduct', [8720]], ['copy', [169]], ['COPY', [169]], ['copysr', [8471]], ['CounterClockwiseContourIntegral', [8755]], ['crarr', [8629]], ['cross', [10007]], ['Cross', [10799]], ['Cscr', [119966]], ['cscr', [119992]], ['csub', [10959]], ['csube', [10961]], ['csup', [10960]], ['csupe', [10962]], ['ctdot', [8943]], ['cudarrl', [10552]], ['cudarrr', [10549]], ['cuepr', [8926]], ['cuesc', [8927]], ['cularr', [8630]], ['cularrp', [10557]], ['cupbrcap', [10824]], ['cupcap', [10822]], ['CupCap', [8781]], ['cup', [8746]], ['Cup', [8915]], ['cupcup', [10826]], ['cupdot', [8845]], ['cupor', [10821]], ['cups', [8746, 65024]], ['curarr', [8631]], ['curarrm', [10556]], ['curlyeqprec', [8926]], ['curlyeqsucc', [8927]], ['curlyvee', [8910]], ['curlywedge', [8911]], ['curren', [164]], ['curvearrowleft', [8630]], ['curvearrowright', [8631]], ['cuvee', [8910]], ['cuwed', [8911]], ['cwconint', [8754]], ['cwint', [8753]], ['cylcty', [9005]], ['dagger', [8224]], ['Dagger', [8225]], ['daleth', [8504]], ['darr', [8595]], ['Darr', [8609]], ['dArr', [8659]], ['dash', [8208]], ['Dashv', [10980]], ['dashv', [8867]], ['dbkarow', [10511]], ['dblac', [733]], ['Dcaron', [270]], ['dcaron', [271]], ['Dcy', [1044]], ['dcy', [1076]], ['ddagger', [8225]], ['ddarr', [8650]], ['DD', [8517]], ['dd', [8518]], ['DDotrahd', [10513]], ['ddotseq', [10871]], ['deg', [176]], ['Del', [8711]], ['Delta', [916]], ['delta', [948]], ['demptyv', [10673]], ['dfisht', [10623]], ['Dfr', [120071]], ['dfr', [120097]], ['dHar', [10597]], ['dharl', [8643]], ['dharr', [8642]], ['DiacriticalAcute', [180]], ['DiacriticalDot', [729]], ['DiacriticalDoubleAcute', [733]], ['DiacriticalGrave', [96]], ['DiacriticalTilde', [732]], ['diam', [8900]], ['diamond', [8900]], ['Diamond', [8900]], ['diamondsuit', [9830]], ['diams', [9830]], ['die', [168]], ['DifferentialD', [8518]], ['digamma', [989]], ['disin', [8946]], ['div', [247]], ['divide', [247]], ['divideontimes', [8903]], ['divonx', [8903]], ['DJcy', [1026]], ['djcy', [1106]], ['dlcorn', [8990]], ['dlcrop', [8973]], ['dollar', [36]], ['Dopf', [120123]], ['dopf', [120149]], ['Dot', [168]], ['dot', [729]], ['DotDot', [8412]], ['doteq', [8784]], ['doteqdot', [8785]], ['DotEqual', [8784]], ['dotminus', [8760]], ['dotplus', [8724]], ['dotsquare', [8865]], ['doublebarwedge', [8966]], ['DoubleContourIntegral', [8751]], ['DoubleDot', [168]], ['DoubleDownArrow', [8659]], ['DoubleLeftArrow', [8656]], ['DoubleLeftRightArrow', [8660]], ['DoubleLeftTee', [10980]], ['DoubleLongLeftArrow', [10232]], ['DoubleLongLeftRightArrow', [10234]], ['DoubleLongRightArrow', [10233]], ['DoubleRightArrow', [8658]], ['DoubleRightTee', [8872]], ['DoubleUpArrow', [8657]], ['DoubleUpDownArrow', [8661]], ['DoubleVerticalBar', [8741]], ['DownArrowBar', [10515]], ['downarrow', [8595]], ['DownArrow', [8595]], ['Downarrow', [8659]], ['DownArrowUpArrow', [8693]], ['DownBreve', [785]], ['downdownarrows', [8650]], ['downharpoonleft', [8643]], ['downharpoonright', [8642]], ['DownLeftRightVector', [10576]], ['DownLeftTeeVector', [10590]], ['DownLeftVectorBar', [10582]], ['DownLeftVector', [8637]], ['DownRightTeeVector', [10591]], ['DownRightVectorBar', [10583]], ['DownRightVector', [8641]], ['DownTeeArrow', [8615]], ['DownTee', [8868]], ['drbkarow', [10512]], ['drcorn', [8991]], ['drcrop', [8972]], ['Dscr', [119967]], ['dscr', [119993]], ['DScy', [1029]], ['dscy', [1109]], ['dsol', [10742]], ['Dstrok', [272]], ['dstrok', [273]], ['dtdot', [8945]], ['dtri', [9663]], ['dtrif', [9662]], ['duarr', [8693]], ['duhar', [10607]], ['dwangle', [10662]], ['DZcy', [1039]], ['dzcy', [1119]], ['dzigrarr', [10239]], ['Eacute', [201]], ['eacute', [233]], ['easter', [10862]], ['Ecaron', [282]], ['ecaron', [283]], ['Ecirc', [202]], ['ecirc', [234]], ['ecir', [8790]], ['ecolon', [8789]], ['Ecy', [1069]], ['ecy', [1101]], ['eDDot', [10871]], ['Edot', [278]], ['edot', [279]], ['eDot', [8785]], ['ee', [8519]], ['efDot', [8786]], ['Efr', [120072]], ['efr', [120098]], ['eg', [10906]], ['Egrave', [200]], ['egrave', [232]], ['egs', [10902]], ['egsdot', [10904]], ['el', [10905]], ['Element', [8712]], ['elinters', [9191]], ['ell', [8467]], ['els', [10901]], ['elsdot', [10903]], ['Emacr', [274]], ['emacr', [275]], ['empty', [8709]], ['emptyset', [8709]], ['EmptySmallSquare', [9723]], ['emptyv', [8709]], ['EmptyVerySmallSquare', [9643]], ['emsp13', [8196]], ['emsp14', [8197]], ['emsp', [8195]], ['ENG', [330]], ['eng', [331]], ['ensp', [8194]], ['Eogon', [280]], ['eogon', [281]], ['Eopf', [120124]], ['eopf', [120150]], ['epar', [8917]], ['eparsl', [10723]], ['eplus', [10865]], ['epsi', [949]], ['Epsilon', [917]], ['epsilon', [949]], ['epsiv', [1013]], ['eqcirc', [8790]], ['eqcolon', [8789]], ['eqsim', [8770]], ['eqslantgtr', [10902]], ['eqslantless', [10901]], ['Equal', [10869]], ['equals', [61]], ['EqualTilde', [8770]], ['equest', [8799]], ['Equilibrium', [8652]], ['equiv', [8801]], ['equivDD', [10872]], ['eqvparsl', [10725]], ['erarr', [10609]], ['erDot', [8787]], ['escr', [8495]], ['Escr', [8496]], ['esdot', [8784]], ['Esim', [10867]], ['esim', [8770]], ['Eta', [919]], ['eta', [951]], ['ETH', [208]], ['eth', [240]], ['Euml', [203]], ['euml', [235]], ['euro', [8364]], ['excl', [33]], ['exist', [8707]], ['Exists', [8707]], ['expectation', [8496]], ['exponentiale', [8519]], ['ExponentialE', [8519]], ['fallingdotseq', [8786]], ['Fcy', [1060]], ['fcy', [1092]], ['female', [9792]], ['ffilig', [64259]], ['fflig', [64256]], ['ffllig', [64260]], ['Ffr', [120073]], ['ffr', [120099]], ['filig', [64257]], ['FilledSmallSquare', [9724]], ['FilledVerySmallSquare', [9642]], ['fjlig', [102, 106]], ['flat', [9837]], ['fllig', [64258]], ['fltns', [9649]], ['fnof', [402]], ['Fopf', [120125]], ['fopf', [120151]], ['forall', [8704]], ['ForAll', [8704]], ['fork', [8916]], ['forkv', [10969]], ['Fouriertrf', [8497]], ['fpartint', [10765]], ['frac12', [189]], ['frac13', [8531]], ['frac14', [188]], ['frac15', [8533]], ['frac16', [8537]], ['frac18', [8539]], ['frac23', [8532]], ['frac25', [8534]], ['frac34', [190]], ['frac35', [8535]], ['frac38', [8540]], ['frac45', [8536]], ['frac56', [8538]], ['frac58', [8541]], ['frac78', [8542]], ['frasl', [8260]], ['frown', [8994]], ['fscr', [119995]], ['Fscr', [8497]], ['gacute', [501]], ['Gamma', [915]], ['gamma', [947]], ['Gammad', [988]], ['gammad', [989]], ['gap', [10886]], ['Gbreve', [286]], ['gbreve', [287]], ['Gcedil', [290]], ['Gcirc', [284]], ['gcirc', [285]], ['Gcy', [1043]], ['gcy', [1075]], ['Gdot', [288]], ['gdot', [289]], ['ge', [8805]], ['gE', [8807]], ['gEl', [10892]], ['gel', [8923]], ['geq', [8805]], ['geqq', [8807]], ['geqslant', [10878]], ['gescc', [10921]], ['ges', [10878]], ['gesdot', [10880]], ['gesdoto', [10882]], ['gesdotol', [10884]], ['gesl', [8923, 65024]], ['gesles', [10900]], ['Gfr', [120074]], ['gfr', [120100]], ['gg', [8811]], ['Gg', [8921]], ['ggg', [8921]], ['gimel', [8503]], ['GJcy', [1027]], ['gjcy', [1107]], ['gla', [10917]], ['gl', [8823]], ['glE', [10898]], ['glj', [10916]], ['gnap', [10890]], ['gnapprox', [10890]], ['gne', [10888]], ['gnE', [8809]], ['gneq', [10888]], ['gneqq', [8809]], ['gnsim', [8935]], ['Gopf', [120126]], ['gopf', [120152]], ['grave', [96]], ['GreaterEqual', [8805]], ['GreaterEqualLess', [8923]], ['GreaterFullEqual', [8807]], ['GreaterGreater', [10914]], ['GreaterLess', [8823]], ['GreaterSlantEqual', [10878]], ['GreaterTilde', [8819]], ['Gscr', [119970]], ['gscr', [8458]], ['gsim', [8819]], ['gsime', [10894]], ['gsiml', [10896]], ['gtcc', [10919]], ['gtcir', [10874]], ['gt', [62]], ['GT', [62]], ['Gt', [8811]], ['gtdot', [8919]], ['gtlPar', [10645]], ['gtquest', [10876]], ['gtrapprox', [10886]], ['gtrarr', [10616]], ['gtrdot', [8919]], ['gtreqless', [8923]], ['gtreqqless', [10892]], ['gtrless', [8823]], ['gtrsim', [8819]], ['gvertneqq', [8809, 65024]], ['gvnE', [8809, 65024]], ['Hacek', [711]], ['hairsp', [8202]], ['half', [189]], ['hamilt', [8459]], ['HARDcy', [1066]], ['hardcy', [1098]], ['harrcir', [10568]], ['harr', [8596]], ['hArr', [8660]], ['harrw', [8621]], ['Hat', [94]], ['hbar', [8463]], ['Hcirc', [292]], ['hcirc', [293]], ['hearts', [9829]], ['heartsuit', [9829]], ['hellip', [8230]], ['hercon', [8889]], ['hfr', [120101]], ['Hfr', [8460]], ['HilbertSpace', [8459]], ['hksearow', [10533]], ['hkswarow', [10534]], ['hoarr', [8703]], ['homtht', [8763]], ['hookleftarrow', [8617]], ['hookrightarrow', [8618]], ['hopf', [120153]], ['Hopf', [8461]], ['horbar', [8213]], ['HorizontalLine', [9472]], ['hscr', [119997]], ['Hscr', [8459]], ['hslash', [8463]], ['Hstrok', [294]], ['hstrok', [295]], ['HumpDownHump', [8782]], ['HumpEqual', [8783]], ['hybull', [8259]], ['hyphen', [8208]], ['Iacute', [205]], ['iacute', [237]], ['ic', [8291]], ['Icirc', [206]], ['icirc', [238]], ['Icy', [1048]], ['icy', [1080]], ['Idot', [304]], ['IEcy', [1045]], ['iecy', [1077]], ['iexcl', [161]], ['iff', [8660]], ['ifr', [120102]], ['Ifr', [8465]], ['Igrave', [204]], ['igrave', [236]], ['ii', [8520]], ['iiiint', [10764]], ['iiint', [8749]], ['iinfin', [10716]], ['iiota', [8489]], ['IJlig', [306]], ['ijlig', [307]], ['Imacr', [298]], ['imacr', [299]], ['image', [8465]], ['ImaginaryI', [8520]], ['imagline', [8464]], ['imagpart', [8465]], ['imath', [305]], ['Im', [8465]], ['imof', [8887]], ['imped', [437]], ['Implies', [8658]], ['incare', [8453]], ['in', [8712]], ['infin', [8734]], ['infintie', [10717]], ['inodot', [305]], ['intcal', [8890]], ['int', [8747]], ['Int', [8748]], ['integers', [8484]], ['Integral', [8747]], ['intercal', [8890]], ['Intersection', [8898]], ['intlarhk', [10775]], ['intprod', [10812]], ['InvisibleComma', [8291]], ['InvisibleTimes', [8290]], ['IOcy', [1025]], ['iocy', [1105]], ['Iogon', [302]], ['iogon', [303]], ['Iopf', [120128]], ['iopf', [120154]], ['Iota', [921]], ['iota', [953]], ['iprod', [10812]], ['iquest', [191]], ['iscr', [119998]], ['Iscr', [8464]], ['isin', [8712]], ['isindot', [8949]], ['isinE', [8953]], ['isins', [8948]], ['isinsv', [8947]], ['isinv', [8712]], ['it', [8290]], ['Itilde', [296]], ['itilde', [297]], ['Iukcy', [1030]], ['iukcy', [1110]], ['Iuml', [207]], ['iuml', [239]], ['Jcirc', [308]], ['jcirc', [309]], ['Jcy', [1049]], ['jcy', [1081]], ['Jfr', [120077]], ['jfr', [120103]], ['jmath', [567]], ['Jopf', [120129]], ['jopf', [120155]], ['Jscr', [119973]], ['jscr', [119999]], ['Jsercy', [1032]], ['jsercy', [1112]], ['Jukcy', [1028]], ['jukcy', [1108]], ['Kappa', [922]], ['kappa', [954]], ['kappav', [1008]], ['Kcedil', [310]], ['kcedil', [311]], ['Kcy', [1050]], ['kcy', [1082]], ['Kfr', [120078]], ['kfr', [120104]], ['kgreen', [312]], ['KHcy', [1061]], ['khcy', [1093]], ['KJcy', [1036]], ['kjcy', [1116]], ['Kopf', [120130]], ['kopf', [120156]], ['Kscr', [119974]], ['kscr', [120000]], ['lAarr', [8666]], ['Lacute', [313]], ['lacute', [314]], ['laemptyv', [10676]], ['lagran', [8466]], ['Lambda', [923]], ['lambda', [955]], ['lang', [10216]], ['Lang', [10218]], ['langd', [10641]], ['langle', [10216]], ['lap', [10885]], ['Laplacetrf', [8466]], ['laquo', [171]], ['larrb', [8676]], ['larrbfs', [10527]], ['larr', [8592]], ['Larr', [8606]], ['lArr', [8656]], ['larrfs', [10525]], ['larrhk', [8617]], ['larrlp', [8619]], ['larrpl', [10553]], ['larrsim', [10611]], ['larrtl', [8610]], ['latail', [10521]], ['lAtail', [10523]], ['lat', [10923]], ['late', [10925]], ['lates', [10925, 65024]], ['lbarr', [10508]], ['lBarr', [10510]], ['lbbrk', [10098]], ['lbrace', [123]], ['lbrack', [91]], ['lbrke', [10635]], ['lbrksld', [10639]], ['lbrkslu', [10637]], ['Lcaron', [317]], ['lcaron', [318]], ['Lcedil', [315]], ['lcedil', [316]], ['lceil', [8968]], ['lcub', [123]], ['Lcy', [1051]], ['lcy', [1083]], ['ldca', [10550]], ['ldquo', [8220]], ['ldquor', [8222]], ['ldrdhar', [10599]], ['ldrushar', [10571]], ['ldsh', [8626]], ['le', [8804]], ['lE', [8806]], ['LeftAngleBracket', [10216]], ['LeftArrowBar', [8676]], ['leftarrow', [8592]], ['LeftArrow', [8592]], ['Leftarrow', [8656]], ['LeftArrowRightArrow', [8646]], ['leftarrowtail', [8610]], ['LeftCeiling', [8968]], ['LeftDoubleBracket', [10214]], ['LeftDownTeeVector', [10593]], ['LeftDownVectorBar', [10585]], ['LeftDownVector', [8643]], ['LeftFloor', [8970]], ['leftharpoondown', [8637]], ['leftharpoonup', [8636]], ['leftleftarrows', [8647]], ['leftrightarrow', [8596]], ['LeftRightArrow', [8596]], ['Leftrightarrow', [8660]], ['leftrightarrows', [8646]], ['leftrightharpoons', [8651]], ['leftrightsquigarrow', [8621]], ['LeftRightVector', [10574]], ['LeftTeeArrow', [8612]], ['LeftTee', [8867]], ['LeftTeeVector', [10586]], ['leftthreetimes', [8907]], ['LeftTriangleBar', [10703]], ['LeftTriangle', [8882]], ['LeftTriangleEqual', [8884]], ['LeftUpDownVector', [10577]], ['LeftUpTeeVector', [10592]], ['LeftUpVectorBar', [10584]], ['LeftUpVector', [8639]], ['LeftVectorBar', [10578]], ['LeftVector', [8636]], ['lEg', [10891]], ['leg', [8922]], ['leq', [8804]], ['leqq', [8806]], ['leqslant', [10877]], ['lescc', [10920]], ['les', [10877]], ['lesdot', [10879]], ['lesdoto', [10881]], ['lesdotor', [10883]], ['lesg', [8922, 65024]], ['lesges', [10899]], ['lessapprox', [10885]], ['lessdot', [8918]], ['lesseqgtr', [8922]], ['lesseqqgtr', [10891]], ['LessEqualGreater', [8922]], ['LessFullEqual', [8806]], ['LessGreater', [8822]], ['lessgtr', [8822]], ['LessLess', [10913]], ['lesssim', [8818]], ['LessSlantEqual', [10877]], ['LessTilde', [8818]], ['lfisht', [10620]], ['lfloor', [8970]], ['Lfr', [120079]], ['lfr', [120105]], ['lg', [8822]], ['lgE', [10897]], ['lHar', [10594]], ['lhard', [8637]], ['lharu', [8636]], ['lharul', [10602]], ['lhblk', [9604]], ['LJcy', [1033]], ['ljcy', [1113]], ['llarr', [8647]], ['ll', [8810]], ['Ll', [8920]], ['llcorner', [8990]], ['Lleftarrow', [8666]], ['llhard', [10603]], ['lltri', [9722]], ['Lmidot', [319]], ['lmidot', [320]], ['lmoustache', [9136]], ['lmoust', [9136]], ['lnap', [10889]], ['lnapprox', [10889]], ['lne', [10887]], ['lnE', [8808]], ['lneq', [10887]], ['lneqq', [8808]], ['lnsim', [8934]], ['loang', [10220]], ['loarr', [8701]], ['lobrk', [10214]], ['longleftarrow', [10229]], ['LongLeftArrow', [10229]], ['Longleftarrow', [10232]], ['longleftrightarrow', [10231]], ['LongLeftRightArrow', [10231]], ['Longleftrightarrow', [10234]], ['longmapsto', [10236]], ['longrightarrow', [10230]], ['LongRightArrow', [10230]], ['Longrightarrow', [10233]], ['looparrowleft', [8619]], ['looparrowright', [8620]], ['lopar', [10629]], ['Lopf', [120131]], ['lopf', [120157]], ['loplus', [10797]], ['lotimes', [10804]], ['lowast', [8727]], ['lowbar', [95]], ['LowerLeftArrow', [8601]], ['LowerRightArrow', [8600]], ['loz', [9674]], ['lozenge', [9674]], ['lozf', [10731]], ['lpar', [40]], ['lparlt', [10643]], ['lrarr', [8646]], ['lrcorner', [8991]], ['lrhar', [8651]], ['lrhard', [10605]], ['lrm', [8206]], ['lrtri', [8895]], ['lsaquo', [8249]], ['lscr', [120001]], ['Lscr', [8466]], ['lsh', [8624]], ['Lsh', [8624]], ['lsim', [8818]], ['lsime', [10893]], ['lsimg', [10895]], ['lsqb', [91]], ['lsquo', [8216]], ['lsquor', [8218]], ['Lstrok', [321]], ['lstrok', [322]], ['ltcc', [10918]], ['ltcir', [10873]], ['lt', [60]], ['LT', [60]], ['Lt', [8810]], ['ltdot', [8918]], ['lthree', [8907]], ['ltimes', [8905]], ['ltlarr', [10614]], ['ltquest', [10875]], ['ltri', [9667]], ['ltrie', [8884]], ['ltrif', [9666]], ['ltrPar', [10646]], ['lurdshar', [10570]], ['luruhar', [10598]], ['lvertneqq', [8808, 65024]], ['lvnE', [8808, 65024]], ['macr', [175]], ['male', [9794]], ['malt', [10016]], ['maltese', [10016]], ['Map', [10501]], ['map', [8614]], ['mapsto', [8614]], ['mapstodown', [8615]], ['mapstoleft', [8612]], ['mapstoup', [8613]], ['marker', [9646]], ['mcomma', [10793]], ['Mcy', [1052]], ['mcy', [1084]], ['mdash', [8212]], ['mDDot', [8762]], ['measuredangle', [8737]], ['MediumSpace', [8287]], ['Mellintrf', [8499]], ['Mfr', [120080]], ['mfr', [120106]], ['mho', [8487]], ['micro', [181]], ['midast', [42]], ['midcir', [10992]], ['mid', [8739]], ['middot', [183]], ['minusb', [8863]], ['minus', [8722]], ['minusd', [8760]], ['minusdu', [10794]], ['MinusPlus', [8723]], ['mlcp', [10971]], ['mldr', [8230]], ['mnplus', [8723]], ['models', [8871]], ['Mopf', [120132]], ['mopf', [120158]], ['mp', [8723]], ['mscr', [120002]], ['Mscr', [8499]], ['mstpos', [8766]], ['Mu', [924]], ['mu', [956]], ['multimap', [8888]], ['mumap', [8888]], ['nabla', [8711]], ['Nacute', [323]], ['nacute', [324]], ['nang', [8736, 8402]], ['nap', [8777]], ['napE', [10864, 824]], ['napid', [8779, 824]], ['napos', [329]], ['napprox', [8777]], ['natural', [9838]], ['naturals', [8469]], ['natur', [9838]], ['nbsp', [160]], ['nbump', [8782, 824]], ['nbumpe', [8783, 824]], ['ncap', [10819]], ['Ncaron', [327]], ['ncaron', [328]], ['Ncedil', [325]], ['ncedil', [326]], ['ncong', [8775]], ['ncongdot', [10861, 824]], ['ncup', [10818]], ['Ncy', [1053]], ['ncy', [1085]], ['ndash', [8211]], ['nearhk', [10532]], ['nearr', [8599]], ['neArr', [8663]], ['nearrow', [8599]], ['ne', [8800]], ['nedot', [8784, 824]], ['NegativeMediumSpace', [8203]], ['NegativeThickSpace', [8203]], ['NegativeThinSpace', [8203]], ['NegativeVeryThinSpace', [8203]], ['nequiv', [8802]], ['nesear', [10536]], ['nesim', [8770, 824]], ['NestedGreaterGreater', [8811]], ['NestedLessLess', [8810]], ['nexist', [8708]], ['nexists', [8708]], ['Nfr', [120081]], ['nfr', [120107]], ['ngE', [8807, 824]], ['nge', [8817]], ['ngeq', [8817]], ['ngeqq', [8807, 824]], ['ngeqslant', [10878, 824]], ['nges', [10878, 824]], ['nGg', [8921, 824]], ['ngsim', [8821]], ['nGt', [8811, 8402]], ['ngt', [8815]], ['ngtr', [8815]], ['nGtv', [8811, 824]], ['nharr', [8622]], ['nhArr', [8654]], ['nhpar', [10994]], ['ni', [8715]], ['nis', [8956]], ['nisd', [8954]], ['niv', [8715]], ['NJcy', [1034]], ['njcy', [1114]], ['nlarr', [8602]], ['nlArr', [8653]], ['nldr', [8229]], ['nlE', [8806, 824]], ['nle', [8816]], ['nleftarrow', [8602]], ['nLeftarrow', [8653]], ['nleftrightarrow', [8622]], ['nLeftrightarrow', [8654]], ['nleq', [8816]], ['nleqq', [8806, 824]], ['nleqslant', [10877, 824]], ['nles', [10877, 824]], ['nless', [8814]], ['nLl', [8920, 824]], ['nlsim', [8820]], ['nLt', [8810, 8402]], ['nlt', [8814]], ['nltri', [8938]], ['nltrie', [8940]], ['nLtv', [8810, 824]], ['nmid', [8740]], ['NoBreak', [8288]], ['NonBreakingSpace', [160]], ['nopf', [120159]], ['Nopf', [8469]], ['Not', [10988]], ['not', [172]], ['NotCongruent', [8802]], ['NotCupCap', [8813]], ['NotDoubleVerticalBar', [8742]], ['NotElement', [8713]], ['NotEqual', [8800]], ['NotEqualTilde', [8770, 824]], ['NotExists', [8708]], ['NotGreater', [8815]], ['NotGreaterEqual', [8817]], ['NotGreaterFullEqual', [8807, 824]], ['NotGreaterGreater', [8811, 824]], ['NotGreaterLess', [8825]], ['NotGreaterSlantEqual', [10878, 824]], ['NotGreaterTilde', [8821]], ['NotHumpDownHump', [8782, 824]], ['NotHumpEqual', [8783, 824]], ['notin', [8713]], ['notindot', [8949, 824]], ['notinE', [8953, 824]], ['notinva', [8713]], ['notinvb', [8951]], ['notinvc', [8950]], ['NotLeftTriangleBar', [10703, 824]], ['NotLeftTriangle', [8938]], ['NotLeftTriangleEqual', [8940]], ['NotLess', [8814]], ['NotLessEqual', [8816]], ['NotLessGreater', [8824]], ['NotLessLess', [8810, 824]], ['NotLessSlantEqual', [10877, 824]], ['NotLessTilde', [8820]], ['NotNestedGreaterGreater', [10914, 824]], ['NotNestedLessLess', [10913, 824]], ['notni', [8716]], ['notniva', [8716]], ['notnivb', [8958]], ['notnivc', [8957]], ['NotPrecedes', [8832]], ['NotPrecedesEqual', [10927, 824]], ['NotPrecedesSlantEqual', [8928]], ['NotReverseElement', [8716]], ['NotRightTriangleBar', [10704, 824]], ['NotRightTriangle', [8939]], ['NotRightTriangleEqual', [8941]], ['NotSquareSubset', [8847, 824]], ['NotSquareSubsetEqual', [8930]], ['NotSquareSuperset', [8848, 824]], ['NotSquareSupersetEqual', [8931]], ['NotSubset', [8834, 8402]], ['NotSubsetEqual', [8840]], ['NotSucceeds', [8833]], ['NotSucceedsEqual', [10928, 824]], ['NotSucceedsSlantEqual', [8929]], ['NotSucceedsTilde', [8831, 824]], ['NotSuperset', [8835, 8402]], ['NotSupersetEqual', [8841]], ['NotTilde', [8769]], ['NotTildeEqual', [8772]], ['NotTildeFullEqual', [8775]], ['NotTildeTilde', [8777]], ['NotVerticalBar', [8740]], ['nparallel', [8742]], ['npar', [8742]], ['nparsl', [11005, 8421]], ['npart', [8706, 824]], ['npolint', [10772]], ['npr', [8832]], ['nprcue', [8928]], ['nprec', [8832]], ['npreceq', [10927, 824]], ['npre', [10927, 824]], ['nrarrc', [10547, 824]], ['nrarr', [8603]], ['nrArr', [8655]], ['nrarrw', [8605, 824]], ['nrightarrow', [8603]], ['nRightarrow', [8655]], ['nrtri', [8939]], ['nrtrie', [8941]], ['nsc', [8833]], ['nsccue', [8929]], ['nsce', [10928, 824]], ['Nscr', [119977]], ['nscr', [120003]], ['nshortmid', [8740]], ['nshortparallel', [8742]], ['nsim', [8769]], ['nsime', [8772]], ['nsimeq', [8772]], ['nsmid', [8740]], ['nspar', [8742]], ['nsqsube', [8930]], ['nsqsupe', [8931]], ['nsub', [8836]], ['nsubE', [10949, 824]], ['nsube', [8840]], ['nsubset', [8834, 8402]], ['nsubseteq', [8840]], ['nsubseteqq', [10949, 824]], ['nsucc', [8833]], ['nsucceq', [10928, 824]], ['nsup', [8837]], ['nsupE', [10950, 824]], ['nsupe', [8841]], ['nsupset', [8835, 8402]], ['nsupseteq', [8841]], ['nsupseteqq', [10950, 824]], ['ntgl', [8825]], ['Ntilde', [209]], ['ntilde', [241]], ['ntlg', [8824]], ['ntriangleleft', [8938]], ['ntrianglelefteq', [8940]], ['ntriangleright', [8939]], ['ntrianglerighteq', [8941]], ['Nu', [925]], ['nu', [957]], ['num', [35]], ['numero', [8470]], ['numsp', [8199]], ['nvap', [8781, 8402]], ['nvdash', [8876]], ['nvDash', [8877]], ['nVdash', [8878]], ['nVDash', [8879]], ['nvge', [8805, 8402]], ['nvgt', [62, 8402]], ['nvHarr', [10500]], ['nvinfin', [10718]], ['nvlArr', [10498]], ['nvle', [8804, 8402]], ['nvlt', [60, 8402]], ['nvltrie', [8884, 8402]], ['nvrArr', [10499]], ['nvrtrie', [8885, 8402]], ['nvsim', [8764, 8402]], ['nwarhk', [10531]], ['nwarr', [8598]], ['nwArr', [8662]], ['nwarrow', [8598]], ['nwnear', [10535]], ['Oacute', [211]], ['oacute', [243]], ['oast', [8859]], ['Ocirc', [212]], ['ocirc', [244]], ['ocir', [8858]], ['Ocy', [1054]], ['ocy', [1086]], ['odash', [8861]], ['Odblac', [336]], ['odblac', [337]], ['odiv', [10808]], ['odot', [8857]], ['odsold', [10684]], ['OElig', [338]], ['oelig', [339]], ['ofcir', [10687]], ['Ofr', [120082]], ['ofr', [120108]], ['ogon', [731]], ['Ograve', [210]], ['ograve', [242]], ['ogt', [10689]], ['ohbar', [10677]], ['ohm', [937]], ['oint', [8750]], ['olarr', [8634]], ['olcir', [10686]], ['olcross', [10683]], ['oline', [8254]], ['olt', [10688]], ['Omacr', [332]], ['omacr', [333]], ['Omega', [937]], ['omega', [969]], ['Omicron', [927]], ['omicron', [959]], ['omid', [10678]], ['ominus', [8854]], ['Oopf', [120134]], ['oopf', [120160]], ['opar', [10679]], ['OpenCurlyDoubleQuote', [8220]], ['OpenCurlyQuote', [8216]], ['operp', [10681]], ['oplus', [8853]], ['orarr', [8635]], ['Or', [10836]], ['or', [8744]], ['ord', [10845]], ['order', [8500]], ['orderof', [8500]], ['ordf', [170]], ['ordm', [186]], ['origof', [8886]], ['oror', [10838]], ['orslope', [10839]], ['orv', [10843]], ['oS', [9416]], ['Oscr', [119978]], ['oscr', [8500]], ['Oslash', [216]], ['oslash', [248]], ['osol', [8856]], ['Otilde', [213]], ['otilde', [245]], ['otimesas', [10806]], ['Otimes', [10807]], ['otimes', [8855]], ['Ouml', [214]], ['ouml', [246]], ['ovbar', [9021]], ['OverBar', [8254]], ['OverBrace', [9182]], ['OverBracket', [9140]], ['OverParenthesis', [9180]], ['para', [182]], ['parallel', [8741]], ['par', [8741]], ['parsim', [10995]], ['parsl', [11005]], ['part', [8706]], ['PartialD', [8706]], ['Pcy', [1055]], ['pcy', [1087]], ['percnt', [37]], ['period', [46]], ['permil', [8240]], ['perp', [8869]], ['pertenk', [8241]], ['Pfr', [120083]], ['pfr', [120109]], ['Phi', [934]], ['phi', [966]], ['phiv', [981]], ['phmmat', [8499]], ['phone', [9742]], ['Pi', [928]], ['pi', [960]], ['pitchfork', [8916]], ['piv', [982]], ['planck', [8463]], ['planckh', [8462]], ['plankv', [8463]], ['plusacir', [10787]], ['plusb', [8862]], ['pluscir', [10786]], ['plus', [43]], ['plusdo', [8724]], ['plusdu', [10789]], ['pluse', [10866]], ['PlusMinus', [177]], ['plusmn', [177]], ['plussim', [10790]], ['plustwo', [10791]], ['pm', [177]], ['Poincareplane', [8460]], ['pointint', [10773]], ['popf', [120161]], ['Popf', [8473]], ['pound', [163]], ['prap', [10935]], ['Pr', [10939]], ['pr', [8826]], ['prcue', [8828]], ['precapprox', [10935]], ['prec', [8826]], ['preccurlyeq', [8828]], ['Precedes', [8826]], ['PrecedesEqual', [10927]], ['PrecedesSlantEqual', [8828]], ['PrecedesTilde', [8830]], ['preceq', [10927]], ['precnapprox', [10937]], ['precneqq', [10933]], ['precnsim', [8936]], ['pre', [10927]], ['prE', [10931]], ['precsim', [8830]], ['prime', [8242]], ['Prime', [8243]], ['primes', [8473]], ['prnap', [10937]], ['prnE', [10933]], ['prnsim', [8936]], ['prod', [8719]], ['Product', [8719]], ['profalar', [9006]], ['profline', [8978]], ['profsurf', [8979]], ['prop', [8733]], ['Proportional', [8733]], ['Proportion', [8759]], ['propto', [8733]], ['prsim', [8830]], ['prurel', [8880]], ['Pscr', [119979]], ['pscr', [120005]], ['Psi', [936]], ['psi', [968]], ['puncsp', [8200]], ['Qfr', [120084]], ['qfr', [120110]], ['qint', [10764]], ['qopf', [120162]], ['Qopf', [8474]], ['qprime', [8279]], ['Qscr', [119980]], ['qscr', [120006]], ['quaternions', [8461]], ['quatint', [10774]], ['quest', [63]], ['questeq', [8799]], ['quot', [34]], ['QUOT', [34]], ['rAarr', [8667]], ['race', [8765, 817]], ['Racute', [340]], ['racute', [341]], ['radic', [8730]], ['raemptyv', [10675]], ['rang', [10217]], ['Rang', [10219]], ['rangd', [10642]], ['range', [10661]], ['rangle', [10217]], ['raquo', [187]], ['rarrap', [10613]], ['rarrb', [8677]], ['rarrbfs', [10528]], ['rarrc', [10547]], ['rarr', [8594]], ['Rarr', [8608]], ['rArr', [8658]], ['rarrfs', [10526]], ['rarrhk', [8618]], ['rarrlp', [8620]], ['rarrpl', [10565]], ['rarrsim', [10612]], ['Rarrtl', [10518]], ['rarrtl', [8611]], ['rarrw', [8605]], ['ratail', [10522]], ['rAtail', [10524]], ['ratio', [8758]], ['rationals', [8474]], ['rbarr', [10509]], ['rBarr', [10511]], ['RBarr', [10512]], ['rbbrk', [10099]], ['rbrace', [125]], ['rbrack', [93]], ['rbrke', [10636]], ['rbrksld', [10638]], ['rbrkslu', [10640]], ['Rcaron', [344]], ['rcaron', [345]], ['Rcedil', [342]], ['rcedil', [343]], ['rceil', [8969]], ['rcub', [125]], ['Rcy', [1056]], ['rcy', [1088]], ['rdca', [10551]], ['rdldhar', [10601]], ['rdquo', [8221]], ['rdquor', [8221]], ['CloseCurlyDoubleQuote', [8221]], ['rdsh', [8627]], ['real', [8476]], ['realine', [8475]], ['realpart', [8476]], ['reals', [8477]], ['Re', [8476]], ['rect', [9645]], ['reg', [174]], ['REG', [174]], ['ReverseElement', [8715]], ['ReverseEquilibrium', [8651]], ['ReverseUpEquilibrium', [10607]], ['rfisht', [10621]], ['rfloor', [8971]], ['rfr', [120111]], ['Rfr', [8476]], ['rHar', [10596]], ['rhard', [8641]], ['rharu', [8640]], ['rharul', [10604]], ['Rho', [929]], ['rho', [961]], ['rhov', [1009]], ['RightAngleBracket', [10217]], ['RightArrowBar', [8677]], ['rightarrow', [8594]], ['RightArrow', [8594]], ['Rightarrow', [8658]], ['RightArrowLeftArrow', [8644]], ['rightarrowtail', [8611]], ['RightCeiling', [8969]], ['RightDoubleBracket', [10215]], ['RightDownTeeVector', [10589]], ['RightDownVectorBar', [10581]], ['RightDownVector', [8642]], ['RightFloor', [8971]], ['rightharpoondown', [8641]], ['rightharpoonup', [8640]], ['rightleftarrows', [8644]], ['rightleftharpoons', [8652]], ['rightrightarrows', [8649]], ['rightsquigarrow', [8605]], ['RightTeeArrow', [8614]], ['RightTee', [8866]], ['RightTeeVector', [10587]], ['rightthreetimes', [8908]], ['RightTriangleBar', [10704]], ['RightTriangle', [8883]], ['RightTriangleEqual', [8885]], ['RightUpDownVector', [10575]], ['RightUpTeeVector', [10588]], ['RightUpVectorBar', [10580]], ['RightUpVector', [8638]], ['RightVectorBar', [10579]], ['RightVector', [8640]], ['ring', [730]], ['risingdotseq', [8787]], ['rlarr', [8644]], ['rlhar', [8652]], ['rlm', [8207]], ['rmoustache', [9137]], ['rmoust', [9137]], ['rnmid', [10990]], ['roang', [10221]], ['roarr', [8702]], ['robrk', [10215]], ['ropar', [10630]], ['ropf', [120163]], ['Ropf', [8477]], ['roplus', [10798]], ['rotimes', [10805]], ['RoundImplies', [10608]], ['rpar', [41]], ['rpargt', [10644]], ['rppolint', [10770]], ['rrarr', [8649]], ['Rrightarrow', [8667]], ['rsaquo', [8250]], ['rscr', [120007]], ['Rscr', [8475]], ['rsh', [8625]], ['Rsh', [8625]], ['rsqb', [93]], ['rsquo', [8217]], ['rsquor', [8217]], ['CloseCurlyQuote', [8217]], ['rthree', [8908]], ['rtimes', [8906]], ['rtri', [9657]], ['rtrie', [8885]], ['rtrif', [9656]], ['rtriltri', [10702]], ['RuleDelayed', [10740]], ['ruluhar', [10600]], ['rx', [8478]], ['Sacute', [346]], ['sacute', [347]], ['sbquo', [8218]], ['scap', [10936]], ['Scaron', [352]], ['scaron', [353]], ['Sc', [10940]], ['sc', [8827]], ['sccue', [8829]], ['sce', [10928]], ['scE', [10932]], ['Scedil', [350]], ['scedil', [351]], ['Scirc', [348]], ['scirc', [349]], ['scnap', [10938]], ['scnE', [10934]], ['scnsim', [8937]], ['scpolint', [10771]], ['scsim', [8831]], ['Scy', [1057]], ['scy', [1089]], ['sdotb', [8865]], ['sdot', [8901]], ['sdote', [10854]], ['searhk', [10533]], ['searr', [8600]], ['seArr', [8664]], ['searrow', [8600]], ['sect', [167]], ['semi', [59]], ['seswar', [10537]], ['setminus', [8726]], ['setmn', [8726]], ['sext', [10038]], ['Sfr', [120086]], ['sfr', [120112]], ['sfrown', [8994]], ['sharp', [9839]], ['SHCHcy', [1065]], ['shchcy', [1097]], ['SHcy', [1064]], ['shcy', [1096]], ['ShortDownArrow', [8595]], ['ShortLeftArrow', [8592]], ['shortmid', [8739]], ['shortparallel', [8741]], ['ShortRightArrow', [8594]], ['ShortUpArrow', [8593]], ['shy', [173]], ['Sigma', [931]], ['sigma', [963]], ['sigmaf', [962]], ['sigmav', [962]], ['sim', [8764]], ['simdot', [10858]], ['sime', [8771]], ['simeq', [8771]], ['simg', [10910]], ['simgE', [10912]], ['siml', [10909]], ['simlE', [10911]], ['simne', [8774]], ['simplus', [10788]], ['simrarr', [10610]], ['slarr', [8592]], ['SmallCircle', [8728]], ['smallsetminus', [8726]], ['smashp', [10803]], ['smeparsl', [10724]], ['smid', [8739]], ['smile', [8995]], ['smt', [10922]], ['smte', [10924]], ['smtes', [10924, 65024]], ['SOFTcy', [1068]], ['softcy', [1100]], ['solbar', [9023]], ['solb', [10692]], ['sol', [47]], ['Sopf', [120138]], ['sopf', [120164]], ['spades', [9824]], ['spadesuit', [9824]], ['spar', [8741]], ['sqcap', [8851]], ['sqcaps', [8851, 65024]], ['sqcup', [8852]], ['sqcups', [8852, 65024]], ['Sqrt', [8730]], ['sqsub', [8847]], ['sqsube', [8849]], ['sqsubset', [8847]], ['sqsubseteq', [8849]], ['sqsup', [8848]], ['sqsupe', [8850]], ['sqsupset', [8848]], ['sqsupseteq', [8850]], ['square', [9633]], ['Square', [9633]], ['SquareIntersection', [8851]], ['SquareSubset', [8847]], ['SquareSubsetEqual', [8849]], ['SquareSuperset', [8848]], ['SquareSupersetEqual', [8850]], ['SquareUnion', [8852]], ['squarf', [9642]], ['squ', [9633]], ['squf', [9642]], ['srarr', [8594]], ['Sscr', [119982]], ['sscr', [120008]], ['ssetmn', [8726]], ['ssmile', [8995]], ['sstarf', [8902]], ['Star', [8902]], ['star', [9734]], ['starf', [9733]], ['straightepsilon', [1013]], ['straightphi', [981]], ['strns', [175]], ['sub', [8834]], ['Sub', [8912]], ['subdot', [10941]], ['subE', [10949]], ['sube', [8838]], ['subedot', [10947]], ['submult', [10945]], ['subnE', [10955]], ['subne', [8842]], ['subplus', [10943]], ['subrarr', [10617]], ['subset', [8834]], ['Subset', [8912]], ['subseteq', [8838]], ['subseteqq', [10949]], ['SubsetEqual', [8838]], ['subsetneq', [8842]], ['subsetneqq', [10955]], ['subsim', [10951]], ['subsub', [10965]], ['subsup', [10963]], ['succapprox', [10936]], ['succ', [8827]], ['succcurlyeq', [8829]], ['Succeeds', [8827]], ['SucceedsEqual', [10928]], ['SucceedsSlantEqual', [8829]], ['SucceedsTilde', [8831]], ['succeq', [10928]], ['succnapprox', [10938]], ['succneqq', [10934]], ['succnsim', [8937]], ['succsim', [8831]], ['SuchThat', [8715]], ['sum', [8721]], ['Sum', [8721]], ['sung', [9834]], ['sup1', [185]], ['sup2', [178]], ['sup3', [179]], ['sup', [8835]], ['Sup', [8913]], ['supdot', [10942]], ['supdsub', [10968]], ['supE', [10950]], ['supe', [8839]], ['supedot', [10948]], ['Superset', [8835]], ['SupersetEqual', [8839]], ['suphsol', [10185]], ['suphsub', [10967]], ['suplarr', [10619]], ['supmult', [10946]], ['supnE', [10956]], ['supne', [8843]], ['supplus', [10944]], ['supset', [8835]], ['Supset', [8913]], ['supseteq', [8839]], ['supseteqq', [10950]], ['supsetneq', [8843]], ['supsetneqq', [10956]], ['supsim', [10952]], ['supsub', [10964]], ['supsup', [10966]], ['swarhk', [10534]], ['swarr', [8601]], ['swArr', [8665]], ['swarrow', [8601]], ['swnwar', [10538]], ['szlig', [223]], ['Tab', [9]], ['target', [8982]], ['Tau', [932]], ['tau', [964]], ['tbrk', [9140]], ['Tcaron', [356]], ['tcaron', [357]], ['Tcedil', [354]], ['tcedil', [355]], ['Tcy', [1058]], ['tcy', [1090]], ['tdot', [8411]], ['telrec', [8981]], ['Tfr', [120087]], ['tfr', [120113]], ['there4', [8756]], ['therefore', [8756]], ['Therefore', [8756]], ['Theta', [920]], ['theta', [952]], ['thetasym', [977]], ['thetav', [977]], ['thickapprox', [8776]], ['thicksim', [8764]], ['ThickSpace', [8287, 8202]], ['ThinSpace', [8201]], ['thinsp', [8201]], ['thkap', [8776]], ['thksim', [8764]], ['THORN', [222]], ['thorn', [254]], ['tilde', [732]], ['Tilde', [8764]], ['TildeEqual', [8771]], ['TildeFullEqual', [8773]], ['TildeTilde', [8776]], ['timesbar', [10801]], ['timesb', [8864]], ['times', [215]], ['timesd', [10800]], ['tint', [8749]], ['toea', [10536]], ['topbot', [9014]], ['topcir', [10993]], ['top', [8868]], ['Topf', [120139]], ['topf', [120165]], ['topfork', [10970]], ['tosa', [10537]], ['tprime', [8244]], ['trade', [8482]], ['TRADE', [8482]], ['triangle', [9653]], ['triangledown', [9663]], ['triangleleft', [9667]], ['trianglelefteq', [8884]], ['triangleq', [8796]], ['triangleright', [9657]], ['trianglerighteq', [8885]], ['tridot', [9708]], ['trie', [8796]], ['triminus', [10810]], ['TripleDot', [8411]], ['triplus', [10809]], ['trisb', [10701]], ['tritime', [10811]], ['trpezium', [9186]], ['Tscr', [119983]], ['tscr', [120009]], ['TScy', [1062]], ['tscy', [1094]], ['TSHcy', [1035]], ['tshcy', [1115]], ['Tstrok', [358]], ['tstrok', [359]], ['twixt', [8812]], ['twoheadleftarrow', [8606]], ['twoheadrightarrow', [8608]], ['Uacute', [218]], ['uacute', [250]], ['uarr', [8593]], ['Uarr', [8607]], ['uArr', [8657]], ['Uarrocir', [10569]], ['Ubrcy', [1038]], ['ubrcy', [1118]], ['Ubreve', [364]], ['ubreve', [365]], ['Ucirc', [219]], ['ucirc', [251]], ['Ucy', [1059]], ['ucy', [1091]], ['udarr', [8645]], ['Udblac', [368]], ['udblac', [369]], ['udhar', [10606]], ['ufisht', [10622]], ['Ufr', [120088]], ['ufr', [120114]], ['Ugrave', [217]], ['ugrave', [249]], ['uHar', [10595]], ['uharl', [8639]], ['uharr', [8638]], ['uhblk', [9600]], ['ulcorn', [8988]], ['ulcorner', [8988]], ['ulcrop', [8975]], ['ultri', [9720]], ['Umacr', [362]], ['umacr', [363]], ['uml', [168]], ['UnderBar', [95]], ['UnderBrace', [9183]], ['UnderBracket', [9141]], ['UnderParenthesis', [9181]], ['Union', [8899]], ['UnionPlus', [8846]], ['Uogon', [370]], ['uogon', [371]], ['Uopf', [120140]], ['uopf', [120166]], ['UpArrowBar', [10514]], ['uparrow', [8593]], ['UpArrow', [8593]], ['Uparrow', [8657]], ['UpArrowDownArrow', [8645]], ['updownarrow', [8597]], ['UpDownArrow', [8597]], ['Updownarrow', [8661]], ['UpEquilibrium', [10606]], ['upharpoonleft', [8639]], ['upharpoonright', [8638]], ['uplus', [8846]], ['UpperLeftArrow', [8598]], ['UpperRightArrow', [8599]], ['upsi', [965]], ['Upsi', [978]], ['upsih', [978]], ['Upsilon', [933]], ['upsilon', [965]], ['UpTeeArrow', [8613]], ['UpTee', [8869]], ['upuparrows', [8648]], ['urcorn', [8989]], ['urcorner', [8989]], ['urcrop', [8974]], ['Uring', [366]], ['uring', [367]], ['urtri', [9721]], ['Uscr', [119984]], ['uscr', [120010]], ['utdot', [8944]], ['Utilde', [360]], ['utilde', [361]], ['utri', [9653]], ['utrif', [9652]], ['uuarr', [8648]], ['Uuml', [220]], ['uuml', [252]], ['uwangle', [10663]], ['vangrt', [10652]], ['varepsilon', [1013]], ['varkappa', [1008]], ['varnothing', [8709]], ['varphi', [981]], ['varpi', [982]], ['varpropto', [8733]], ['varr', [8597]], ['vArr', [8661]], ['varrho', [1009]], ['varsigma', [962]], ['varsubsetneq', [8842, 65024]], ['varsubsetneqq', [10955, 65024]], ['varsupsetneq', [8843, 65024]], ['varsupsetneqq', [10956, 65024]], ['vartheta', [977]], ['vartriangleleft', [8882]], ['vartriangleright', [8883]], ['vBar', [10984]], ['Vbar', [10987]], ['vBarv', [10985]], ['Vcy', [1042]], ['vcy', [1074]], ['vdash', [8866]], ['vDash', [8872]], ['Vdash', [8873]], ['VDash', [8875]], ['Vdashl', [10982]], ['veebar', [8891]], ['vee', [8744]], ['Vee', [8897]], ['veeeq', [8794]], ['vellip', [8942]], ['verbar', [124]], ['Verbar', [8214]], ['vert', [124]], ['Vert', [8214]], ['VerticalBar', [8739]], ['VerticalLine', [124]], ['VerticalSeparator', [10072]], ['VerticalTilde', [8768]], ['VeryThinSpace', [8202]], ['Vfr', [120089]], ['vfr', [120115]], ['vltri', [8882]], ['vnsub', [8834, 8402]], ['vnsup', [8835, 8402]], ['Vopf', [120141]], ['vopf', [120167]], ['vprop', [8733]], ['vrtri', [8883]], ['Vscr', [119985]], ['vscr', [120011]], ['vsubnE', [10955, 65024]], ['vsubne', [8842, 65024]], ['vsupnE', [10956, 65024]], ['vsupne', [8843, 65024]], ['Vvdash', [8874]], ['vzigzag', [10650]], ['Wcirc', [372]], ['wcirc', [373]], ['wedbar', [10847]], ['wedge', [8743]], ['Wedge', [8896]], ['wedgeq', [8793]], ['weierp', [8472]], ['Wfr', [120090]], ['wfr', [120116]], ['Wopf', [120142]], ['wopf', [120168]], ['wp', [8472]], ['wr', [8768]], ['wreath', [8768]], ['Wscr', [119986]], ['wscr', [120012]], ['xcap', [8898]], ['xcirc', [9711]], ['xcup', [8899]], ['xdtri', [9661]], ['Xfr', [120091]], ['xfr', [120117]], ['xharr', [10231]], ['xhArr', [10234]], ['Xi', [926]], ['xi', [958]], ['xlarr', [10229]], ['xlArr', [10232]], ['xmap', [10236]], ['xnis', [8955]], ['xodot', [10752]], ['Xopf', [120143]], ['xopf', [120169]], ['xoplus', [10753]], ['xotime', [10754]], ['xrarr', [10230]], ['xrArr', [10233]], ['Xscr', [119987]], ['xscr', [120013]], ['xsqcup', [10758]], ['xuplus', [10756]], ['xutri', [9651]], ['xvee', [8897]], ['xwedge', [8896]], ['Yacute', [221]], ['yacute', [253]], ['YAcy', [1071]], ['yacy', [1103]], ['Ycirc', [374]], ['ycirc', [375]], ['Ycy', [1067]], ['ycy', [1099]], ['yen', [165]], ['Yfr', [120092]], ['yfr', [120118]], ['YIcy', [1031]], ['yicy', [1111]], ['Yopf', [120144]], ['yopf', [120170]], ['Yscr', [119988]], ['yscr', [120014]], ['YUcy', [1070]], ['yucy', [1102]], ['yuml', [255]], ['Yuml', [376]], ['Zacute', [377]], ['zacute', [378]], ['Zcaron', [381]], ['zcaron', [382]], ['Zcy', [1047]], ['zcy', [1079]], ['Zdot', [379]], ['zdot', [380]], ['zeetrf', [8488]], ['ZeroWidthSpace', [8203]], ['Zeta', [918]], ['zeta', [950]], ['zfr', [120119]], ['Zfr', [8488]], ['ZHcy', [1046]], ['zhcy', [1078]], ['zigrarr', [8669]], ['zopf', [120171]], ['Zopf', [8484]], ['Zscr', [119989]], ['zscr', [120015]], ['zwj', [8205]], ['zwnj', [8204]]];
var alphaIndex = {};
var charIndex = {};
createIndexes(alphaIndex, charIndex);
var Html5Entities = /** @class */ (function () {
    function Html5Entities() {
    }
    Html5Entities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&(#?[\w\d]+);?/g, function (s, entity) {
            var chr;
            if (entity.charAt(0) === "#") {
                var code = entity.charAt(1) === 'x' ?
                    parseInt(entity.substr(2).toLowerCase(), 16) :
                    parseInt(entity.substr(1));
                if (!(isNaN(code) || code < -32768 || code > 65535)) {
                    chr = String.fromCharCode(code);
                }
            }
            else {
                chr = alphaIndex[entity];
            }
            return chr || s;
        });
    };
    Html5Entities.decode = function (str) {
        return new Html5Entities().decode(str);
    };
    Html5Entities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var charInfo = charIndex[str.charCodeAt(i)];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            result += str.charAt(i);
            i++;
        }
        return result;
    };
    Html5Entities.encode = function (str) {
        return new Html5Entities().encode(str);
    };
    Html5Entities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var charInfo = charIndex[c];
            if (charInfo) {
                var alpha = charInfo[str.charCodeAt(i + 1)];
                if (alpha) {
                    i++;
                }
                else {
                    alpha = charInfo[''];
                }
                if (alpha) {
                    result += "&" + alpha + ";";
                    i++;
                    continue;
                }
            }
            if (c < 32 || c > 126) {
                result += '&#' + c + ';';
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    Html5Entities.encodeNonUTF = function (str) {
        return new Html5Entities().encodeNonUTF(str);
    };
    Html5Entities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            result += '&#' + c + ';';
            i++;
        }
        return result;
    };
    Html5Entities.encodeNonASCII = function (str) {
        return new Html5Entities().encodeNonASCII(str);
    };
    return Html5Entities;
}());
exports.Html5Entities = Html5Entities;
function createIndexes(alphaIndex, charIndex) {
    var i = ENTITIES.length;
    while (i--) {
        var e = ENTITIES[i];
        var alpha = e[0];
        var chars = e[1];
        var chr = chars[0];
        var addChar = (chr < 32 || chr > 126) || chr === 62 || chr === 60 || chr === 38 || chr === 34 || chr === 39;
        var charInfo = void 0;
        if (addChar) {
            charInfo = charIndex[chr] = charIndex[chr] || {};
        }
        if (chars[1]) {
            var chr2 = chars[1];
            alphaIndex[alpha] = String.fromCharCode(chr) + String.fromCharCode(chr2);
            addChar && (charInfo[chr2] = alpha);
        }
        else {
            alphaIndex[alpha] = String.fromCharCode(chr);
            addChar && (charInfo[''] = alpha);
        }
    }
}


/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xml_entities_1 = __webpack_require__(/*! ./xml-entities */ "./node_modules/html-entities/lib/xml-entities.js");
exports.XmlEntities = xml_entities_1.XmlEntities;
var html4_entities_1 = __webpack_require__(/*! ./html4-entities */ "./node_modules/html-entities/lib/html4-entities.js");
exports.Html4Entities = html4_entities_1.Html4Entities;
var html5_entities_1 = __webpack_require__(/*! ./html5-entities */ "./node_modules/html-entities/lib/html5-entities.js");
exports.Html5Entities = html5_entities_1.Html5Entities;
exports.AllHtmlEntities = html5_entities_1.Html5Entities;


/***/ }),

/***/ "./node_modules/html-entities/lib/xml-entities.js":
/*!********************************************************!*\
  !*** ./node_modules/html-entities/lib/xml-entities.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ALPHA_INDEX = {
    '&lt': '<',
    '&gt': '>',
    '&quot': '"',
    '&apos': '\'',
    '&amp': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&'
};
var CHAR_INDEX = {
    60: 'lt',
    62: 'gt',
    34: 'quot',
    39: 'apos',
    38: 'amp'
};
var CHAR_S_INDEX = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
    '&': '&amp;'
};
var XmlEntities = /** @class */ (function () {
    function XmlEntities() {
    }
    XmlEntities.prototype.encode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/[<>"'&]/g, function (s) {
            return CHAR_S_INDEX[s];
        });
    };
    XmlEntities.encode = function (str) {
        return new XmlEntities().encode(str);
    };
    XmlEntities.prototype.decode = function (str) {
        if (!str || !str.length) {
            return '';
        }
        return str.replace(/&#?[0-9a-zA-Z]+;?/g, function (s) {
            if (s.charAt(1) === '#') {
                var code = s.charAt(2).toLowerCase() === 'x' ?
                    parseInt(s.substr(3), 16) :
                    parseInt(s.substr(2));
                if (isNaN(code) || code < -32768 || code > 65535) {
                    return '';
                }
                return String.fromCharCode(code);
            }
            return ALPHA_INDEX[s] || s;
        });
    };
    XmlEntities.decode = function (str) {
        return new XmlEntities().decode(str);
    };
    XmlEntities.prototype.encodeNonUTF = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLength = str.length;
        var result = '';
        var i = 0;
        while (i < strLength) {
            var c = str.charCodeAt(i);
            var alpha = CHAR_INDEX[c];
            if (alpha) {
                result += "&" + alpha + ";";
                i++;
                continue;
            }
            if (c < 32 || c > 126) {
                result += '&#' + c + ';';
            }
            else {
                result += str.charAt(i);
            }
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonUTF = function (str) {
        return new XmlEntities().encodeNonUTF(str);
    };
    XmlEntities.prototype.encodeNonASCII = function (str) {
        if (!str || !str.length) {
            return '';
        }
        var strLenght = str.length;
        var result = '';
        var i = 0;
        while (i < strLenght) {
            var c = str.charCodeAt(i);
            if (c <= 255) {
                result += str[i++];
                continue;
            }
            result += '&#' + c + ';';
            i++;
        }
        return result;
    };
    XmlEntities.encodeNonASCII = function (str) {
        return new XmlEntities().encodeNonASCII(str);
    };
    return XmlEntities;
}());
exports.XmlEntities = XmlEntities;


/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_RESPONDER_TYPE = 0xead6;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_RESPONDER_TYPE = symbolFor('react.responder');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
// It's OK to reference families, but use WeakMap/Set for types.

var allFamiliesByID = new Map();
var allFamiliesByType = new PossiblyWeakMap();
var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
// that have actually been edited here. This keeps checks fast.
// $FlowIssue

var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
// It is an array of [Family, NextType] tuples.

var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.

var helpersByRendererID = new Map();
var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.

var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.

var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
// It needs to be weak because we do this even for roots that failed to mount.
// If there is no WeakMap, we won't attempt to do retrying.
// $FlowIssue

var rootElements = // $FlowIssue
typeof WeakMap === 'function' ? new WeakMap() : null;
var isPerformingRefresh = false;

function computeFullKey(signature) {
  if (signature.fullKey !== null) {
    return signature.fullKey;
  }

  var fullKey = signature.ownKey;
  var hooks;

  try {
    hooks = signature.getCustomHooks();
  } catch (err) {
    // This can happen in an edge case, e.g. if expression like Foo.useSomething
    // depends on Foo which is lazily initialized during rendering.
    // In that case just assume we'll have to remount.
    signature.forceReset = true;
    signature.fullKey = fullKey;
    return fullKey;
  }

  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];

    if (typeof hook !== 'function') {
      // Something's wrong. Assume we need to remount.
      signature.forceReset = true;
      signature.fullKey = fullKey;
      return fullKey;
    }

    var nestedHookSignature = allSignaturesByType.get(hook);

    if (nestedHookSignature === undefined) {
      // No signature means Hook wasn't in the source code, e.g. in a library.
      // We'll skip it because we can assume it won't change during this session.
      continue;
    }

    var nestedHookKey = computeFullKey(nestedHookSignature);

    if (nestedHookSignature.forceReset) {
      signature.forceReset = true;
    }

    fullKey += '\n---\n' + nestedHookKey;
  }

  signature.fullKey = fullKey;
  return fullKey;
}

function haveEqualSignatures(prevType, nextType) {
  var prevSignature = allSignaturesByType.get(prevType);
  var nextSignature = allSignaturesByType.get(nextType);

  if (prevSignature === undefined && nextSignature === undefined) {
    return true;
  }

  if (prevSignature === undefined || nextSignature === undefined) {
    return false;
  }

  if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
    return false;
  }

  if (nextSignature.forceReset) {
    return false;
  }

  return true;
}

function isReactClass(type) {
  return type.prototype && type.prototype.isReactComponent;
}

function canPreserveStateBetween(prevType, nextType) {
  if (isReactClass(prevType) || isReactClass(nextType)) {
    return false;
  }

  if (haveEqualSignatures(prevType, nextType)) {
    return true;
  }

  return false;
}

function resolveFamily(type) {
  // Only check updated types to keep lookups fast.
  return updatedFamiliesByType.get(type);
} // If we didn't care about IE11, we could use new Map/Set(iterable).


function cloneMap(map) {
  var clone = new Map();
  map.forEach(function (value, key) {
    clone.set(key, value);
  });
  return clone;
}

function cloneSet(set) {
  var clone = new Set();
  set.forEach(function (value) {
    clone.add(value);
  });
  return clone;
}

function performReactRefresh() {

  if (pendingUpdates.length === 0) {
    return null;
  }

  if (isPerformingRefresh) {
    return null;
  }

  isPerformingRefresh = true;

  try {
    var staleFamilies = new Set();
    var updatedFamilies = new Set();
    var updates = pendingUpdates;
    pendingUpdates = [];
    updates.forEach(function (_ref) {
      var family = _ref[0],
          nextType = _ref[1];
      // Now that we got a real edit, we can create associations
      // that will be read by the React reconciler.
      var prevType = family.current;
      updatedFamiliesByType.set(prevType, family);
      updatedFamiliesByType.set(nextType, family);
      family.current = nextType; // Determine whether this should be a re-render or a re-mount.

      if (canPreserveStateBetween(prevType, nextType)) {
        updatedFamilies.add(family);
      } else {
        staleFamilies.add(family);
      }
    }); // TODO: rename these fields to something more meaningful.

    var update = {
      updatedFamilies: updatedFamilies,
      // Families that will re-render preserving state
      staleFamilies: staleFamilies // Families that will be remounted

    };
    helpersByRendererID.forEach(function (helpers) {
      // Even if there are no roots, set the handler on first update.
      // This ensures that if *new* roots are mounted, they'll use the resolve handler.
      helpers.setRefreshHandler(resolveFamily);
    });
    var didError = false;
    var firstError = null; // We snapshot maps and sets that are mutated during commits.
    // If we don't do this, there is a risk they will be mutated while
    // we iterate over them. For example, trying to recover a failed root
    // may cause another root to be added to the failed list -- an infinite loop.

    var failedRootsSnapshot = cloneSet(failedRoots);
    var mountedRootsSnapshot = cloneSet(mountedRoots);
    var helpersByRootSnapshot = cloneMap(helpersByRoot);
    failedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!failedRoots.has(root)) {// No longer failed.
      }

      if (rootElements === null) {
        return;
      }

      if (!rootElements.has(root)) {
        return;
      }

      var element = rootElements.get(root);

      try {
        helpers.scheduleRoot(root, element);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });
    mountedRootsSnapshot.forEach(function (root) {
      var helpers = helpersByRootSnapshot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      if (!mountedRoots.has(root)) {// No longer mounted.
      }

      try {
        helpers.scheduleRefresh(root, update);
      } catch (err) {
        if (!didError) {
          didError = true;
          firstError = err;
        } // Keep trying other roots.

      }
    });

    if (didError) {
      throw firstError;
    }

    return update;
  } finally {
    isPerformingRefresh = false;
  }
}
function register(type, id) {
  {
    if (type === null) {
      return;
    }

    if (typeof type !== 'function' && typeof type !== 'object') {
      return;
    } // This can happen in an edge case, e.g. if we register
    // return value of a HOC but it returns a cached component.
    // Ignore anything but the first registration for each type.


    if (allFamiliesByType.has(type)) {
      return;
    } // Create family or remember to update it.
    // None of this bookkeeping affects reconciliation
    // until the first performReactRefresh() call above.


    var family = allFamiliesByID.get(id);

    if (family === undefined) {
      family = {
        current: type
      };
      allFamiliesByID.set(id, family);
    } else {
      pendingUpdates.push([family, type]);
    }

    allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.

    if (typeof type === 'object' && type !== null) {
      switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          register(type.render, id + '$render');
          break;

        case REACT_MEMO_TYPE:
          register(type.type, id + '$type');
          break;
      }
    }
  }
}
function setSignature(type, key) {
  var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;

  {
    allSignaturesByType.set(type, {
      forceReset: forceReset,
      ownKey: key,
      fullKey: null,
      getCustomHooks: getCustomHooks || function () {
        return [];
      }
    });
  }
} // This is lazily called during first render for a type.
// It captures Hook list at that time so inline requires don't break comparisons.

function collectCustomHooksForSignature(type) {
  {
    var signature = allSignaturesByType.get(type);

    if (signature !== undefined) {
      computeFullKey(signature);
    }
  }
}
function getFamilyByID(id) {
  {
    return allFamiliesByID.get(id);
  }
}
function getFamilyByType(type) {
  {
    return allFamiliesByType.get(type);
  }
}
function findAffectedHostInstances(families) {
  {
    var affectedInstances = new Set();
    mountedRoots.forEach(function (root) {
      var helpers = helpersByRoot.get(root);

      if (helpers === undefined) {
        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
      }

      var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
      instancesForRoot.forEach(function (inst) {
        affectedInstances.add(inst);
      });
    });
    return affectedInstances;
  }
}
function injectIntoGlobalHook(globalObject) {
  {
    // For React Native, the global hook will be set up by require('react-devtools-core').
    // That code will run before us. So we need to monkeypatch functions on existing hook.
    // For React Web, the global hook will be set up by the extension.
    // This will also run before us.
    var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (hook === undefined) {
      // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
      // Note that in this case it's important that renderer code runs *after* this method call.
      // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
      var nextID = 0;
      globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
        renderers: new Map(),
        supportsFiber: true,
        inject: function (injected) {
          return nextID++;
        },
        onScheduleFiberRoot: function (id, root, children) {},
        onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},
        onCommitFiberUnmount: function () {}
      };
    } // Here, we just want to get a reference to scheduleRefresh.


    var oldInject = hook.inject;

    hook.inject = function (injected) {
      var id = oldInject.apply(this, arguments);

      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }

      return id;
    }; // Do the same for any already injected roots.
    // This is useful if ReactDOM has already been initialized.
    // https://github.com/facebook/react/issues/17626


    hook.renderers.forEach(function (injected, id) {
      if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
        // This version supports React Refresh.
        helpersByRendererID.set(id, injected);
      }
    }); // We also want to track currently mounted roots.

    var oldOnCommitFiberRoot = hook.onCommitFiberRoot;

    var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};

    hook.onScheduleFiberRoot = function (id, root, children) {
      if (!isPerformingRefresh) {
        // If it was intentionally scheduled, don't attempt to restore.
        // This includes intentionally scheduled unmounts.
        failedRoots.delete(root);

        if (rootElements !== null) {
          rootElements.set(root, children);
        }
      }

      return oldOnScheduleFiberRoot.apply(this, arguments);
    };

    hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
      var helpers = helpersByRendererID.get(id);

      if (helpers === undefined) {
        return;
      }

      helpersByRoot.set(root, helpers);
      var current = root.current;
      var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
      // This logic is copy-pasted from similar logic in the DevTools backend.
      // If this breaks with some refactoring, you'll want to update DevTools too.

      if (alternate !== null) {
        var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
        var isMounted = current.memoizedState != null && current.memoizedState.element != null;

        if (!wasMounted && isMounted) {
          // Mount a new root.
          mountedRoots.add(root);
          failedRoots.delete(root);
        } else if (wasMounted && isMounted) ; else if (wasMounted && !isMounted) {
          // Unmount an existing root.
          mountedRoots.delete(root);

          if (didError) {
            // We'll remount it on future edits.
            failedRoots.add(root);
          } else {
            helpersByRoot.delete(root);
          }
        } else if (!wasMounted && !isMounted) {
          if (didError) {
            // We'll remount it on future edits.
            failedRoots.add(root);
          }
        }
      } else {
        // Mount a new root.
        mountedRoots.add(root);
      }

      return oldOnCommitFiberRoot.apply(this, arguments);
    };
  }
}
function hasUnrecoverableErrors() {
  // TODO: delete this after removing dependency in RN.
  return false;
} // Exposed for testing.

function _getMountedRootCount() {
  {
    return mountedRoots.size;
  }
} // This is a wrapper over more primitive functions for setting signature.
// Signatures let us decide whether the Hook order has changed on refresh.
//
// This function is intended to be used as a transform target, e.g.:
// var _s = createSignatureFunctionForTransform()
//
// function Hello() {
//   const [foo, setFoo] = useState(0);
//   const value = useCustomHook();
//   _s(); /* Second call triggers collecting the custom Hook list.
//          * This doesn't happen during the module evaluation because we
//          * don't want to change the module order with inline requires.
//          * Next calls are noops. */
//   return <h1>Hi</h1>;
// }
//
// /* First call specifies the signature: */
// _s(
//   Hello,
//   'useState{[foo, setFoo]}(0)',
//   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
// );

function createSignatureFunctionForTransform() {
  {
    // We'll fill in the signature in two steps.
    // First, we'll know the signature itself. This happens outside the component.
    // Then, we'll know the references to custom Hooks. This happens inside the component.
    // After that, the returned function will be a fast path no-op.
    var status = 'needsSignature';
    var savedType;
    var hasCustomHooks;
    return function (type, key, forceReset, getCustomHooks) {
      switch (status) {
        case 'needsSignature':
          if (type !== undefined) {
            // If we received an argument, this is the initial registration call.
            savedType = type;
            hasCustomHooks = typeof getCustomHooks === 'function';
            setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.

            status = 'needsCustomHooks';
          }

          break;

        case 'needsCustomHooks':
          if (hasCustomHooks) {
            collectCustomHooksForSignature(savedType);
          }

          status = 'resolved';
          break;
      }

      return type;
    };
  }
}
function isLikelyComponentType(type) {
  {
    switch (typeof type) {
      case 'function':
        {
          // First, deal with classes.
          if (type.prototype != null) {
            if (type.prototype.isReactComponent) {
              // React class.
              return true;
            }

            var ownNames = Object.getOwnPropertyNames(type.prototype);

            if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
              // This looks like a class.
              return false;
            } // eslint-disable-next-line no-proto


            if (type.prototype.__proto__ !== Object.prototype) {
              // It has a superclass.
              return false;
            } // Pass through.
            // This looks like a regular function with empty prototype.

          } // For plain functions and arrows, use name as a heuristic.


          var name = type.name || type.displayName;
          return typeof name === 'string' && /^[A-Z]/.test(name);
        }

      case 'object':
        {
          if (type != null) {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
              case REACT_MEMO_TYPE:
                // Definitely React components.
                return true;

              default:
                return false;
            }
          }

          return false;
        }

      default:
        {
          return false;
        }
    }
  }
}

exports._getMountedRootCount = _getMountedRootCount;
exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
exports.findAffectedHostInstances = findAffectedHostInstances;
exports.getFamilyByID = getFamilyByID;
exports.getFamilyByType = getFamilyByType;
exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
exports.injectIntoGlobalHook = injectIntoGlobalHook;
exports.isLikelyComponentType = isLikelyComponentType;
exports.performReactRefresh = performReactRefresh;
exports.register = register;
exports.setSignature = setSignature;
  })();
}


/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/sort-keys/index.js":
/*!*****************************************!*\
  !*** ./node_modules/sort-keys/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isPlainObj = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js");

module.exports = function (obj, opts) {
	if (!isPlainObj(obj)) {
		throw new TypeError('Expected a plain object');
	}

	opts = opts || {};

	// DEPRECATED
	if (typeof opts === 'function') {
		opts = {compare: opts};
	}

	var deep = opts.deep;
	var seenInput = [];
	var seenOutput = [];

	var sortKeys = function (x) {
		var seenIndex = seenInput.indexOf(x);

		if (seenIndex !== -1) {
			return seenOutput[seenIndex];
		}

		var ret = {};
		var keys = Object.keys(x).sort(opts.compare);

		seenInput.push(x);
		seenOutput.push(ret);

		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			var val = x[key];

			ret[key] = deep && isPlainObj(val) ? sortKeys(val) : val;
		}

		return ret;
	};

	return sortKeys(obj);
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js");

module.exports = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/image/google.png":
/*!******************************!*\
  !*** ./src/image/google.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "image/google.3adbd879.png");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dist_Head_Head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dist/Head/Head */ "./dist/Head/Head.js");
/* harmony import */ var _dist_Head_Head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dist_Head_Head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dist_router_Route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dist/router/Route */ "./dist/router/Route.js");
/* harmony import */ var _dist_router_Route__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dist_router_Route__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _image_google_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image/google.png */ "./src/image/google.png");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_12__);
function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var Super=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}// import { from } from "webpack-sources/lib/CompatSource";
var Index=/*#__PURE__*/function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Index,_React$Component);var _super=_createSuper(Index);function Index(){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Index);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),"state",{counter:0});return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index,[{key:"render",value:function render(){// throw new Error('oh no!');
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img",{src:_image_google_png__WEBPACK_IMPORTED_MODULE_10__["default"]}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,"Hello"));}}]);return Index;}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Index);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (
      !module.hot.data.module ||
      __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)
    ) {
      window.location.reload();
    }
    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/refreshUtils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\r\n * Bootstrap v4.5.3 (https://getbootstrap.com/)\r\n * Copyright 2011-2020 The Bootstrap Authors\r\n * Copyright 2011-2020 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\r\n */\r\n :root {\r\n    --blue: #007bff;\r\n    --indigo: #6610f2;\r\n    --purple: #6f42c1;\r\n    --pink: #e83e8c;\r\n    --red: #dc3545;\r\n    --orange: #fd7e14;\r\n    --yellow: #ffc107;\r\n    --green: #28a745;\r\n    --teal: #20c997;\r\n    --cyan: #17a2b8;\r\n    --white: #fff;\r\n    --gray: #6c757d;\r\n    --gray-dark: #343a40;\r\n    --primary: #007bff;\r\n    --secondary: #6c757d;\r\n    --success: #28a745;\r\n    --info: #17a2b8;\r\n    --warning: #ffc107;\r\n    --danger: #dc3545;\r\n    --light: #f8f9fa;\r\n    --dark: #343a40;\r\n    --breakpoint-xs: 0;\r\n    --breakpoint-sm: 576px;\r\n    --breakpoint-md: 768px;\r\n    --breakpoint-lg: 992px;\r\n    --breakpoint-xl: 1200px;\r\n    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  }\r\n  \r\n  *,\r\n  *::before,\r\n  *::after {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  html {\r\n    font-family: sans-serif;\r\n    line-height: 1.15;\r\n    -webkit-text-size-adjust: 100%;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  }\r\n  \r\n  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\r\n    display: block;\r\n  }\r\n  \r\n  body {\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    text-align: left;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  [tabindex=\"-1\"]:focus:not(:focus-visible) {\r\n    outline: 0 !important;\r\n  }\r\n  \r\n  hr {\r\n    box-sizing: content-box;\r\n    height: 0;\r\n    overflow: visible;\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5, h6 {\r\n    margin-top: 0;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  \r\n  p {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  abbr[title],\r\n  abbr[data-original-title] {\r\n    text-decoration: underline;\r\n    -webkit-text-decoration: underline dotted;\r\n    text-decoration: underline dotted;\r\n    cursor: help;\r\n    border-bottom: 0;\r\n    -webkit-text-decoration-skip-ink: none;\r\n    text-decoration-skip-ink: none;\r\n  }\r\n  \r\n  address {\r\n    margin-bottom: 1rem;\r\n    font-style: normal;\r\n    line-height: inherit;\r\n  }\r\n  \r\n  ol,\r\n  ul,\r\n  dl {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  ol ol,\r\n  ul ul,\r\n  ol ul,\r\n  ul ol {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  dt {\r\n    font-weight: 700;\r\n  }\r\n  \r\n  dd {\r\n    margin-bottom: .5rem;\r\n    margin-left: 0;\r\n  }\r\n  \r\n  blockquote {\r\n    margin: 0 0 1rem;\r\n  }\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  \r\n  sub,\r\n  sup {\r\n    position: relative;\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -.5em;\r\n  }\r\n  \r\n  a {\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  a:hover {\r\n    color: #0056b3;\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  a:not([href]):not([class]) {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  a:not([href]):not([class]):hover {\r\n    color: inherit;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  pre,\r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n    font-size: 1em;\r\n  }\r\n  \r\n  pre {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n    overflow: auto;\r\n    -ms-overflow-style: scrollbar;\r\n  }\r\n  \r\n  figure {\r\n    margin: 0 0 1rem;\r\n  }\r\n  \r\n  img {\r\n    vertical-align: middle;\r\n    border-style: none;\r\n  }\r\n  \r\n  svg {\r\n    overflow: hidden;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  table {\r\n    border-collapse: collapse;\r\n  }\r\n  \r\n  caption {\r\n    padding-top: 0.75rem;\r\n    padding-bottom: 0.75rem;\r\n    color: #6c757d;\r\n    text-align: left;\r\n    caption-side: bottom;\r\n  }\r\n  \r\n  th {\r\n    text-align: inherit;\r\n    text-align: -webkit-match-parent;\r\n  }\r\n  \r\n  label {\r\n    display: inline-block;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  \r\n  button {\r\n    border-radius: 0;\r\n  }\r\n  \r\n  button:focus {\r\n    outline: 1px dotted;\r\n    outline: 5px auto -webkit-focus-ring-color;\r\n  }\r\n  \r\n  input,\r\n  button,\r\n  select,\r\n  optgroup,\r\n  textarea {\r\n    margin: 0;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n  }\r\n  \r\n  button,\r\n  input {\r\n    overflow: visible;\r\n  }\r\n  \r\n  button,\r\n  select {\r\n    text-transform: none;\r\n  }\r\n  \r\n  [role=\"button\"] {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  select {\r\n    word-wrap: normal;\r\n  }\r\n  \r\n  button,\r\n  [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  button:not(:disabled),\r\n  [type=\"button\"]:not(:disabled),\r\n  [type=\"reset\"]:not(:disabled),\r\n  [type=\"submit\"]:not(:disabled) {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    padding: 0;\r\n    border-style: none;\r\n  }\r\n  \r\n  input[type=\"radio\"],\r\n  input[type=\"checkbox\"] {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n  }\r\n  \r\n  textarea {\r\n    overflow: auto;\r\n    resize: vertical;\r\n  }\r\n  \r\n  fieldset {\r\n    min-width: 0;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n  }\r\n  \r\n  legend {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    padding: 0;\r\n    margin-bottom: .5rem;\r\n    font-size: 1.5rem;\r\n    line-height: inherit;\r\n    color: inherit;\r\n    white-space: normal;\r\n  }\r\n  \r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  [type=\"number\"]::-webkit-inner-spin-button,\r\n  [type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  \r\n  [type=\"search\"] {\r\n    outline-offset: -2px;\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  ::-webkit-file-upload-button {\r\n    font: inherit;\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  output {\r\n    display: inline-block;\r\n  }\r\n  \r\n  summary {\r\n    display: list-item;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  template {\r\n    display: none;\r\n  }\r\n  \r\n  [hidden] {\r\n    display: none !important;\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5, h6,\r\n  .h1, .h2, .h3, .h4, .h5, .h6 {\r\n    margin-bottom: 0.5rem;\r\n    font-weight: 500;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  h1, .h1 {\r\n    font-size: 2.5rem;\r\n  }\r\n  \r\n  h2, .h2 {\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  h3, .h3 {\r\n    font-size: 1.75rem;\r\n  }\r\n  \r\n  h4, .h4 {\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  h5, .h5 {\r\n    font-size: 1.25rem;\r\n  }\r\n  \r\n  h6, .h6 {\r\n    font-size: 1rem;\r\n  }\r\n  \r\n  .lead {\r\n    font-size: 1.25rem;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .display-1 {\r\n    font-size: 6rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  .display-2 {\r\n    font-size: 5.5rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  .display-3 {\r\n    font-size: 4.5rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  .display-4 {\r\n    font-size: 3.5rem;\r\n    font-weight: 300;\r\n    line-height: 1.2;\r\n  }\r\n  \r\n  hr {\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  small,\r\n  .small {\r\n    font-size: 80%;\r\n    font-weight: 400;\r\n  }\r\n  \r\n  mark,\r\n  .mark {\r\n    padding: 0.2em;\r\n    background-color: #fcf8e3;\r\n  }\r\n  \r\n  .list-unstyled {\r\n    padding-left: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .list-inline {\r\n    padding-left: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .list-inline-item {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .list-inline-item:not(:last-child) {\r\n    margin-right: 0.5rem;\r\n  }\r\n  \r\n  .initialism {\r\n    font-size: 90%;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .blockquote {\r\n    margin-bottom: 1rem;\r\n    font-size: 1.25rem;\r\n  }\r\n  \r\n  .blockquote-footer {\r\n    display: block;\r\n    font-size: 80%;\r\n    color: #6c757d;\r\n  }\r\n  \r\n  .blockquote-footer::before {\r\n    content: \"\\2014\\00A0\";\r\n  }\r\n  \r\n  .img-fluid {\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\n  \r\n  .img-thumbnail {\r\n    padding: 0.25rem;\r\n    background-color: #fff;\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 0.25rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\n  \r\n  .figure {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .figure-img {\r\n    margin-bottom: 0.5rem;\r\n    line-height: 1;\r\n  }\r\n  \r\n  .figure-caption {\r\n    font-size: 90%;\r\n    color: #6c757d;\r\n  }\r\n  \r\n  code {\r\n    font-size: 87.5%;\r\n    color: #e83e8c;\r\n    word-wrap: break-word;\r\n  }\r\n  \r\n  a > code {\r\n    color: inherit;\r\n  }\r\n  \r\n  kbd {\r\n    padding: 0.2rem 0.4rem;\r\n    font-size: 87.5%;\r\n    color: #fff;\r\n    background-color: #212529;\r\n    border-radius: 0.2rem;\r\n  }\r\n  \r\n  kbd kbd {\r\n    padding: 0;\r\n    font-size: 100%;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  pre {\r\n    display: block;\r\n    font-size: 87.5%;\r\n    color: #212529;\r\n  }\r\n  \r\n  pre code {\r\n    font-size: inherit;\r\n    color: inherit;\r\n    word-break: normal;\r\n  }\r\n  \r\n  .pre-scrollable {\r\n    max-height: 340px;\r\n    overflow-y: scroll;\r\n  }\r\n  \r\n  .container,\r\n  .container-fluid,\r\n  .container-sm,\r\n  .container-md,\r\n  .container-lg,\r\n  .container-xl {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .container, .container-sm {\r\n      max-width: 540px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .container, .container-sm, .container-md {\r\n      max-width: 720px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .container, .container-sm, .container-md, .container-lg {\r\n      max-width: 960px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .container, .container-sm, .container-md, .container-lg, .container-xl {\r\n      max-width: 1140px;\r\n    }\r\n  }\r\n  \r\n  .row {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n  }\r\n  \r\n  .no-gutters {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .no-gutters > .col,\r\n  .no-gutters > [class*=\"col-\"] {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  \r\n  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\r\n  .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\r\n  .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\r\n  .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\r\n  .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\r\n  .col-xl-auto {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n  \r\n  .col {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .row-cols-1 > * {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .row-cols-2 > * {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  \r\n  .row-cols-3 > * {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  \r\n  .row-cols-4 > * {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  \r\n  .row-cols-5 > * {\r\n    -ms-flex: 0 0 20%;\r\n    flex: 0 0 20%;\r\n    max-width: 20%;\r\n  }\r\n  \r\n  .row-cols-6 > * {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  \r\n  .col-auto {\r\n    -ms-flex: 0 0 auto;\r\n    flex: 0 0 auto;\r\n    width: auto;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .col-1 {\r\n    -ms-flex: 0 0 8.333333%;\r\n    flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  \r\n  .col-2 {\r\n    -ms-flex: 0 0 16.666667%;\r\n    flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  \r\n  .col-3 {\r\n    -ms-flex: 0 0 25%;\r\n    flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  \r\n  .col-4 {\r\n    -ms-flex: 0 0 33.333333%;\r\n    flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  \r\n  .col-5 {\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  \r\n  .col-6 {\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  \r\n  .col-7 {\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  \r\n  .col-8 {\r\n    -ms-flex: 0 0 66.666667%;\r\n    flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  \r\n  .col-9 {\r\n    -ms-flex: 0 0 75%;\r\n    flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  \r\n  .col-10 {\r\n    -ms-flex: 0 0 83.333333%;\r\n    flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  \r\n  .col-11 {\r\n    -ms-flex: 0 0 91.666667%;\r\n    flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  \r\n  .col-12 {\r\n    -ms-flex: 0 0 100%;\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  \r\n  .order-first {\r\n    -ms-flex-order: -1;\r\n    order: -1;\r\n  }\r\n  \r\n  .order-last {\r\n    -ms-flex-order: 13;\r\n    order: 13;\r\n  }\r\n  \r\n  .order-0 {\r\n    -ms-flex-order: 0;\r\n    order: 0;\r\n  }\r\n  \r\n  .order-1 {\r\n    -ms-flex-order: 1;\r\n    order: 1;\r\n  }\r\n  \r\n  .order-2 {\r\n    -ms-flex-order: 2;\r\n    order: 2;\r\n  }\r\n  \r\n  .order-3 {\r\n    -ms-flex-order: 3;\r\n    order: 3;\r\n  }\r\n  \r\n  .order-4 {\r\n    -ms-flex-order: 4;\r\n    order: 4;\r\n  }\r\n  \r\n  .order-5 {\r\n    -ms-flex-order: 5;\r\n    order: 5;\r\n  }\r\n  \r\n  .order-6 {\r\n    -ms-flex-order: 6;\r\n    order: 6;\r\n  }\r\n  \r\n  .order-7 {\r\n    -ms-flex-order: 7;\r\n    order: 7;\r\n  }\r\n  \r\n  .order-8 {\r\n    -ms-flex-order: 8;\r\n    order: 8;\r\n  }\r\n  \r\n  .order-9 {\r\n    -ms-flex-order: 9;\r\n    order: 9;\r\n  }\r\n  \r\n  .order-10 {\r\n    -ms-flex-order: 10;\r\n    order: 10;\r\n  }\r\n  \r\n  .order-11 {\r\n    -ms-flex-order: 11;\r\n    order: 11;\r\n  }\r\n  \r\n  .order-12 {\r\n    -ms-flex-order: 12;\r\n    order: 12;\r\n  }\r\n  \r\n  .offset-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  \r\n  .offset-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  \r\n  .offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  \r\n  .offset-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  \r\n  .offset-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  \r\n  .offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  \r\n  .offset-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  \r\n  .offset-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  \r\n  .offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  \r\n  .offset-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  \r\n  .offset-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .col-sm {\r\n      -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n      -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n      max-width: 100%;\r\n    }\r\n    .row-cols-sm-1 > * {\r\n      -ms-flex: 0 0 100%;\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n    .row-cols-sm-2 > * {\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n    .row-cols-sm-3 > * {\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    .row-cols-sm-4 > * {\r\n      -ms-flex: 0 0 25%;\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    .row-cols-sm-5 > * {\r\n      -ms-flex: 0 0 20%;\r\n      flex: 0 0 20%;\r\n      max-width: 20%;\r\n    }\r\n    .row-cols-sm-6 > * {\r\n      -ms-flex: 0 0 16.666667%;\r\n      flex: 0 0 16.666667%;\r\n      max-width: 16.666667%;\r\n    }\r\n    .col-sm-auto {\r\n      -ms-flex: 0 0 auto;\r\n      flex: 0 0 auto;\r\n      width: auto;\r\n      max-width: 100%;\r\n    }\r\n    .col-sm-1 {\r\n      -ms-flex: 0 0 8.333333%;\r\n      flex: 0 0 8.333333%;\r\n      max-width: 8.333333%;\r\n    }\r\n    .col-sm-2 {\r\n      -ms-flex: 0 0 16.666667%;\r\n      flex: 0 0 16.666667%;\r\n      max-width: 16.666667%;\r\n    }\r\n    .col-sm-3 {\r\n      -ms-flex: 0 0 25%;\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    .col-sm-4 {\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    .col-sm-5 {\r\n      -ms-flex: 0 0 41.666667%;\r\n      flex: 0 0 41.666667%;\r\n      max-width: 41.666667%;\r\n    }\r\n    .col-sm-6 {\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n    .col-sm-7 {\r\n      -ms-flex: 0 0 58.333333%;\r\n      flex: 0 0 58.333333%;\r\n      max-width: 58.333333%;\r\n    }\r\n    .col-sm-8 {\r\n      -ms-flex: 0 0 66.666667%;\r\n      flex: 0 0 66.666667%;\r\n      max-width: 66.666667%;\r\n    }\r\n    .col-sm-9 {\r\n      -ms-flex: 0 0 75%;\r\n      flex: 0 0 75%;\r\n      max-width: 75%;\r\n    }\r\n    .col-sm-10 {\r\n      -ms-flex: 0 0 83.333333%;\r\n      flex: 0 0 83.333333%;\r\n      max-width: 83.333333%;\r\n    }\r\n    .col-sm-11 {\r\n      -ms-flex: 0 0 91.666667%;\r\n      flex: 0 0 91.666667%;\r\n      max-width: 91.666667%;\r\n    }\r\n    .col-sm-12 {\r\n      -ms-flex: 0 0 100%;\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n    .order-sm-first {\r\n      -ms-flex-order: -1;\r\n      order: -1;\r\n    }\r\n    .order-sm-last {\r\n      -ms-flex-order: 13;\r\n      order: 13;\r\n    }\r\n    .order-sm-0 {\r\n      -ms-flex-order: 0;\r\n      order: 0;\r\n    }\r\n    .order-sm-1 {\r\n      -ms-flex-order: 1;\r\n      order: 1;\r\n    }\r\n    .order-sm-2 {\r\n      -ms-flex-order: 2;\r\n      order: 2;\r\n    }\r\n    .order-sm-3 {\r\n      -ms-flex-order: 3;\r\n      order: 3;\r\n    }\r\n    .order-sm-4 {\r\n      -ms-flex-order: 4;\r\n      order: 4;\r\n    }\r\n    .order-sm-5 {\r\n      -ms-flex-order: 5;\r\n      order: 5;\r\n    }\r\n    .order-sm-6 {\r\n      -ms-flex-order: 6;\r\n      order: 6;\r\n    }\r\n    .order-sm-7 {\r\n      -ms-flex-order: 7;\r\n      order: 7;\r\n    }\r\n    .order-sm-8 {\r\n      -ms-flex-order: 8;\r\n      order: 8;\r\n    }\r\n    .order-sm-9 {\r\n      -ms-flex-order: 9;\r\n      order: 9;\r\n    }\r\n    .order-sm-10 {\r\n      -ms-flex-order: 10;\r\n      order: 10;\r\n    }\r\n    .order-sm-11 {\r\n      -ms-flex-order: 11;\r\n      order: 11;\r\n    }\r\n    .order-sm-12 {\r\n      -ms-flex-order: 12;\r\n      order: 12;\r\n    }\r\n    .offset-sm-0 {\r\n      margin-left: 0;\r\n    }\r\n    .offset-sm-1 {\r\n      margin-left: 8.333333%;\r\n    }\r\n    .offset-sm-2 {\r\n      margin-left: 16.666667%;\r\n    }\r\n    .offset-sm-3 {\r\n      margin-left: 25%;\r\n    }\r\n    .offset-sm-4 {\r\n      margin-left: 33.333333%;\r\n    }\r\n    .offset-sm-5 {\r\n      margin-left: 41.666667%;\r\n    }\r\n    .offset-sm-6 {\r\n      margin-left: 50%;\r\n    }\r\n    .offset-sm-7 {\r\n      margin-left: 58.333333%;\r\n    }\r\n    .offset-sm-8 {\r\n      margin-left: 66.666667%;\r\n    }\r\n    .offset-sm-9 {\r\n      margin-left: 75%;\r\n    }\r\n    .offset-sm-10 {\r\n      margin-left: 83.333333%;\r\n    }\r\n    .offset-sm-11 {\r\n      margin-left: 91.666667%;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .col-md {\r\n      -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n      -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n      max-width: 100%;\r\n    }\r\n    .row-cols-md-1 > * {\r\n      -ms-flex: 0 0 100%;\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n    .row-cols-md-2 > * {\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n    .row-cols-md-3 > * {\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    .row-cols-md-4 > * {\r\n      -ms-flex: 0 0 25%;\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    .row-cols-md-5 > * {\r\n      -ms-flex: 0 0 20%;\r\n      flex: 0 0 20%;\r\n      max-width: 20%;\r\n    }\r\n    .row-cols-md-6 > * {\r\n      -ms-flex: 0 0 16.666667%;\r\n      flex: 0 0 16.666667%;\r\n      max-width: 16.666667%;\r\n    }\r\n    .col-md-auto {\r\n      -ms-flex: 0 0 auto;\r\n      flex: 0 0 auto;\r\n      width: auto;\r\n      max-width: 100%;\r\n    }\r\n    .col-md-1 {\r\n      -ms-flex: 0 0 8.333333%;\r\n      flex: 0 0 8.333333%;\r\n      max-width: 8.333333%;\r\n    }\r\n    .col-md-2 {\r\n      -ms-flex: 0 0 16.666667%;\r\n      flex: 0 0 16.666667%;\r\n      max-width: 16.666667%;\r\n    }\r\n    .col-md-3 {\r\n      -ms-flex: 0 0 25%;\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    .col-md-4 {\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    .col-md-5 {\r\n      -ms-flex: 0 0 41.666667%;\r\n      flex: 0 0 41.666667%;\r\n      max-width: 41.666667%;\r\n    }\r\n    .col-md-6 {\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n    .col-md-7 {\r\n      -ms-flex: 0 0 58.333333%;\r\n      flex: 0 0 58.333333%;\r\n      max-width: 58.333333%;\r\n    }\r\n    .col-md-8 {\r\n      -ms-flex: 0 0 66.666667%;\r\n      flex: 0 0 66.666667%;\r\n      max-width: 66.666667%;\r\n    }\r\n    .col-md-9 {\r\n      -ms-flex: 0 0 75%;\r\n      flex: 0 0 75%;\r\n      max-width: 75%;\r\n    }\r\n    .col-md-10 {\r\n      -ms-flex: 0 0 83.333333%;\r\n      flex: 0 0 83.333333%;\r\n      max-width: 83.333333%;\r\n    }\r\n    .col-md-11 {\r\n      -ms-flex: 0 0 91.666667%;\r\n      flex: 0 0 91.666667%;\r\n      max-width: 91.666667%;\r\n    }\r\n    .col-md-12 {\r\n      -ms-flex: 0 0 100%;\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n    .order-md-first {\r\n      -ms-flex-order: -1;\r\n      order: -1;\r\n    }\r\n    .order-md-last {\r\n      -ms-flex-order: 13;\r\n      order: 13;\r\n    }\r\n    .order-md-0 {\r\n      -ms-flex-order: 0;\r\n      order: 0;\r\n    }\r\n    .order-md-1 {\r\n      -ms-flex-order: 1;\r\n      order: 1;\r\n    }\r\n    .order-md-2 {\r\n      -ms-flex-order: 2;\r\n      order: 2;\r\n    }\r\n    .order-md-3 {\r\n      -ms-flex-order: 3;\r\n      order: 3;\r\n    }\r\n    .order-md-4 {\r\n      -ms-flex-order: 4;\r\n      order: 4;\r\n    }\r\n    .order-md-5 {\r\n      -ms-flex-order: 5;\r\n      order: 5;\r\n    }\r\n    .order-md-6 {\r\n      -ms-flex-order: 6;\r\n      order: 6;\r\n    }\r\n    .order-md-7 {\r\n      -ms-flex-order: 7;\r\n      order: 7;\r\n    }\r\n    .order-md-8 {\r\n      -ms-flex-order: 8;\r\n      order: 8;\r\n    }\r\n    .order-md-9 {\r\n      -ms-flex-order: 9;\r\n      order: 9;\r\n    }\r\n    .order-md-10 {\r\n      -ms-flex-order: 10;\r\n      order: 10;\r\n    }\r\n    .order-md-11 {\r\n      -ms-flex-order: 11;\r\n      order: 11;\r\n    }\r\n    .order-md-12 {\r\n      -ms-flex-order: 12;\r\n      order: 12;\r\n    }\r\n    .offset-md-0 {\r\n      margin-left: 0;\r\n    }\r\n    .offset-md-1 {\r\n      margin-left: 8.333333%;\r\n    }\r\n    .offset-md-2 {\r\n      margin-left: 16.666667%;\r\n    }\r\n    .offset-md-3 {\r\n      margin-left: 25%;\r\n    }\r\n    .offset-md-4 {\r\n      margin-left: 33.333333%;\r\n    }\r\n    .offset-md-5 {\r\n      margin-left: 41.666667%;\r\n    }\r\n    .offset-md-6 {\r\n      margin-left: 50%;\r\n    }\r\n    .offset-md-7 {\r\n      margin-left: 58.333333%;\r\n    }\r\n    .offset-md-8 {\r\n      margin-left: 66.666667%;\r\n    }\r\n    .offset-md-9 {\r\n      margin-left: 75%;\r\n    }\r\n    .offset-md-10 {\r\n      margin-left: 83.333333%;\r\n    }\r\n    .offset-md-11 {\r\n      margin-left: 91.666667%;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .col-lg {\r\n      -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n      -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n      max-width: 100%;\r\n    }\r\n    .row-cols-lg-1 > * {\r\n      -ms-flex: 0 0 100%;\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n    .row-cols-lg-2 > * {\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n    .row-cols-lg-3 > * {\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    .row-cols-lg-4 > * {\r\n      -ms-flex: 0 0 25%;\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    .row-cols-lg-5 > * {\r\n      -ms-flex: 0 0 20%;\r\n      flex: 0 0 20%;\r\n      max-width: 20%;\r\n    }\r\n    .row-cols-lg-6 > * {\r\n      -ms-flex: 0 0 16.666667%;\r\n      flex: 0 0 16.666667%;\r\n      max-width: 16.666667%;\r\n    }\r\n    .col-lg-auto {\r\n      -ms-flex: 0 0 auto;\r\n      flex: 0 0 auto;\r\n      width: auto;\r\n      max-width: 100%;\r\n    }\r\n    .col-lg-1 {\r\n      -ms-flex: 0 0 8.333333%;\r\n      flex: 0 0 8.333333%;\r\n      max-width: 8.333333%;\r\n    }\r\n    .col-lg-2 {\r\n      -ms-flex: 0 0 16.666667%;\r\n      flex: 0 0 16.666667%;\r\n      max-width: 16.666667%;\r\n    }\r\n    .col-lg-3 {\r\n      -ms-flex: 0 0 25%;\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    .col-lg-4 {\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    .col-lg-5 {\r\n      -ms-flex: 0 0 41.666667%;\r\n      flex: 0 0 41.666667%;\r\n      max-width: 41.666667%;\r\n    }\r\n    .col-lg-6 {\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n    .col-lg-7 {\r\n      -ms-flex: 0 0 58.333333%;\r\n      flex: 0 0 58.333333%;\r\n      max-width: 58.333333%;\r\n    }\r\n    .col-lg-8 {\r\n      -ms-flex: 0 0 66.666667%;\r\n      flex: 0 0 66.666667%;\r\n      max-width: 66.666667%;\r\n    }\r\n    .col-lg-9 {\r\n      -ms-flex: 0 0 75%;\r\n      flex: 0 0 75%;\r\n      max-width: 75%;\r\n    }\r\n    .col-lg-10 {\r\n      -ms-flex: 0 0 83.333333%;\r\n      flex: 0 0 83.333333%;\r\n      max-width: 83.333333%;\r\n    }\r\n    .col-lg-11 {\r\n      -ms-flex: 0 0 91.666667%;\r\n      flex: 0 0 91.666667%;\r\n      max-width: 91.666667%;\r\n    }\r\n    .col-lg-12 {\r\n      -ms-flex: 0 0 100%;\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n    .order-lg-first {\r\n      -ms-flex-order: -1;\r\n      order: -1;\r\n    }\r\n    .order-lg-last {\r\n      -ms-flex-order: 13;\r\n      order: 13;\r\n    }\r\n    .order-lg-0 {\r\n      -ms-flex-order: 0;\r\n      order: 0;\r\n    }\r\n    .order-lg-1 {\r\n      -ms-flex-order: 1;\r\n      order: 1;\r\n    }\r\n    .order-lg-2 {\r\n      -ms-flex-order: 2;\r\n      order: 2;\r\n    }\r\n    .order-lg-3 {\r\n      -ms-flex-order: 3;\r\n      order: 3;\r\n    }\r\n    .order-lg-4 {\r\n      -ms-flex-order: 4;\r\n      order: 4;\r\n    }\r\n    .order-lg-5 {\r\n      -ms-flex-order: 5;\r\n      order: 5;\r\n    }\r\n    .order-lg-6 {\r\n      -ms-flex-order: 6;\r\n      order: 6;\r\n    }\r\n    .order-lg-7 {\r\n      -ms-flex-order: 7;\r\n      order: 7;\r\n    }\r\n    .order-lg-8 {\r\n      -ms-flex-order: 8;\r\n      order: 8;\r\n    }\r\n    .order-lg-9 {\r\n      -ms-flex-order: 9;\r\n      order: 9;\r\n    }\r\n    .order-lg-10 {\r\n      -ms-flex-order: 10;\r\n      order: 10;\r\n    }\r\n    .order-lg-11 {\r\n      -ms-flex-order: 11;\r\n      order: 11;\r\n    }\r\n    .order-lg-12 {\r\n      -ms-flex-order: 12;\r\n      order: 12;\r\n    }\r\n    .offset-lg-0 {\r\n      margin-left: 0;\r\n    }\r\n    .offset-lg-1 {\r\n      margin-left: 8.333333%;\r\n    }\r\n    .offset-lg-2 {\r\n      margin-left: 16.666667%;\r\n    }\r\n    .offset-lg-3 {\r\n      margin-left: 25%;\r\n    }\r\n    .offset-lg-4 {\r\n      margin-left: 33.333333%;\r\n    }\r\n    .offset-lg-5 {\r\n      margin-left: 41.666667%;\r\n    }\r\n    .offset-lg-6 {\r\n      margin-left: 50%;\r\n    }\r\n    .offset-lg-7 {\r\n      margin-left: 58.333333%;\r\n    }\r\n    .offset-lg-8 {\r\n      margin-left: 66.666667%;\r\n    }\r\n    .offset-lg-9 {\r\n      margin-left: 75%;\r\n    }\r\n    .offset-lg-10 {\r\n      margin-left: 83.333333%;\r\n    }\r\n    .offset-lg-11 {\r\n      margin-left: 91.666667%;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .col-xl {\r\n      -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n      -ms-flex-positive: 1;\r\n      flex-grow: 1;\r\n      max-width: 100%;\r\n    }\r\n    .row-cols-xl-1 > * {\r\n      -ms-flex: 0 0 100%;\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n    .row-cols-xl-2 > * {\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n    .row-cols-xl-3 > * {\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    .row-cols-xl-4 > * {\r\n      -ms-flex: 0 0 25%;\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    .row-cols-xl-5 > * {\r\n      -ms-flex: 0 0 20%;\r\n      flex: 0 0 20%;\r\n      max-width: 20%;\r\n    }\r\n    .row-cols-xl-6 > * {\r\n      -ms-flex: 0 0 16.666667%;\r\n      flex: 0 0 16.666667%;\r\n      max-width: 16.666667%;\r\n    }\r\n    .col-xl-auto {\r\n      -ms-flex: 0 0 auto;\r\n      flex: 0 0 auto;\r\n      width: auto;\r\n      max-width: 100%;\r\n    }\r\n    .col-xl-1 {\r\n      -ms-flex: 0 0 8.333333%;\r\n      flex: 0 0 8.333333%;\r\n      max-width: 8.333333%;\r\n    }\r\n    .col-xl-2 {\r\n      -ms-flex: 0 0 16.666667%;\r\n      flex: 0 0 16.666667%;\r\n      max-width: 16.666667%;\r\n    }\r\n    .col-xl-3 {\r\n      -ms-flex: 0 0 25%;\r\n      flex: 0 0 25%;\r\n      max-width: 25%;\r\n    }\r\n    .col-xl-4 {\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n    }\r\n    .col-xl-5 {\r\n      -ms-flex: 0 0 41.666667%;\r\n      flex: 0 0 41.666667%;\r\n      max-width: 41.666667%;\r\n    }\r\n    .col-xl-6 {\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n    }\r\n    .col-xl-7 {\r\n      -ms-flex: 0 0 58.333333%;\r\n      flex: 0 0 58.333333%;\r\n      max-width: 58.333333%;\r\n    }\r\n    .col-xl-8 {\r\n      -ms-flex: 0 0 66.666667%;\r\n      flex: 0 0 66.666667%;\r\n      max-width: 66.666667%;\r\n    }\r\n    .col-xl-9 {\r\n      -ms-flex: 0 0 75%;\r\n      flex: 0 0 75%;\r\n      max-width: 75%;\r\n    }\r\n    .col-xl-10 {\r\n      -ms-flex: 0 0 83.333333%;\r\n      flex: 0 0 83.333333%;\r\n      max-width: 83.333333%;\r\n    }\r\n    .col-xl-11 {\r\n      -ms-flex: 0 0 91.666667%;\r\n      flex: 0 0 91.666667%;\r\n      max-width: 91.666667%;\r\n    }\r\n    .col-xl-12 {\r\n      -ms-flex: 0 0 100%;\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n    }\r\n    .order-xl-first {\r\n      -ms-flex-order: -1;\r\n      order: -1;\r\n    }\r\n    .order-xl-last {\r\n      -ms-flex-order: 13;\r\n      order: 13;\r\n    }\r\n    .order-xl-0 {\r\n      -ms-flex-order: 0;\r\n      order: 0;\r\n    }\r\n    .order-xl-1 {\r\n      -ms-flex-order: 1;\r\n      order: 1;\r\n    }\r\n    .order-xl-2 {\r\n      -ms-flex-order: 2;\r\n      order: 2;\r\n    }\r\n    .order-xl-3 {\r\n      -ms-flex-order: 3;\r\n      order: 3;\r\n    }\r\n    .order-xl-4 {\r\n      -ms-flex-order: 4;\r\n      order: 4;\r\n    }\r\n    .order-xl-5 {\r\n      -ms-flex-order: 5;\r\n      order: 5;\r\n    }\r\n    .order-xl-6 {\r\n      -ms-flex-order: 6;\r\n      order: 6;\r\n    }\r\n    .order-xl-7 {\r\n      -ms-flex-order: 7;\r\n      order: 7;\r\n    }\r\n    .order-xl-8 {\r\n      -ms-flex-order: 8;\r\n      order: 8;\r\n    }\r\n    .order-xl-9 {\r\n      -ms-flex-order: 9;\r\n      order: 9;\r\n    }\r\n    .order-xl-10 {\r\n      -ms-flex-order: 10;\r\n      order: 10;\r\n    }\r\n    .order-xl-11 {\r\n      -ms-flex-order: 11;\r\n      order: 11;\r\n    }\r\n    .order-xl-12 {\r\n      -ms-flex-order: 12;\r\n      order: 12;\r\n    }\r\n    .offset-xl-0 {\r\n      margin-left: 0;\r\n    }\r\n    .offset-xl-1 {\r\n      margin-left: 8.333333%;\r\n    }\r\n    .offset-xl-2 {\r\n      margin-left: 16.666667%;\r\n    }\r\n    .offset-xl-3 {\r\n      margin-left: 25%;\r\n    }\r\n    .offset-xl-4 {\r\n      margin-left: 33.333333%;\r\n    }\r\n    .offset-xl-5 {\r\n      margin-left: 41.666667%;\r\n    }\r\n    .offset-xl-6 {\r\n      margin-left: 50%;\r\n    }\r\n    .offset-xl-7 {\r\n      margin-left: 58.333333%;\r\n    }\r\n    .offset-xl-8 {\r\n      margin-left: 66.666667%;\r\n    }\r\n    .offset-xl-9 {\r\n      margin-left: 75%;\r\n    }\r\n    .offset-xl-10 {\r\n      margin-left: 83.333333%;\r\n    }\r\n    .offset-xl-11 {\r\n      margin-left: 91.666667%;\r\n    }\r\n  }\r\n  \r\n  .table {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    color: #212529;\r\n  }\r\n  \r\n  .table th,\r\n  .table td {\r\n    padding: 0.75rem;\r\n    vertical-align: top;\r\n    border-top: 1px solid #dee2e6;\r\n  }\r\n  \r\n  .table thead th {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #dee2e6;\r\n  }\r\n  \r\n  .table tbody + tbody {\r\n    border-top: 2px solid #dee2e6;\r\n  }\r\n  \r\n  .table-sm th,\r\n  .table-sm td {\r\n    padding: 0.3rem;\r\n  }\r\n  \r\n  .table-bordered {\r\n    border: 1px solid #dee2e6;\r\n  }\r\n  \r\n  .table-bordered th,\r\n  .table-bordered td {\r\n    border: 1px solid #dee2e6;\r\n  }\r\n  \r\n  .table-bordered thead th,\r\n  .table-bordered thead td {\r\n    border-bottom-width: 2px;\r\n  }\r\n  \r\n  .table-borderless th,\r\n  .table-borderless td,\r\n  .table-borderless thead th,\r\n  .table-borderless tbody + tbody {\r\n    border: 0;\r\n  }\r\n  \r\n  .table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n  }\r\n  \r\n  .table-hover tbody tr:hover {\r\n    color: #212529;\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n  }\r\n  \r\n  .table-primary,\r\n  .table-primary > th,\r\n  .table-primary > td {\r\n    background-color: #b8daff;\r\n  }\r\n  \r\n  .table-primary th,\r\n  .table-primary td,\r\n  .table-primary thead th,\r\n  .table-primary tbody + tbody {\r\n    border-color: #7abaff;\r\n  }\r\n  \r\n  .table-hover .table-primary:hover {\r\n    background-color: #9fcdff;\r\n  }\r\n  \r\n  .table-hover .table-primary:hover > td,\r\n  .table-hover .table-primary:hover > th {\r\n    background-color: #9fcdff;\r\n  }\r\n  \r\n  .table-secondary,\r\n  .table-secondary > th,\r\n  .table-secondary > td {\r\n    background-color: #d6d8db;\r\n  }\r\n  \r\n  .table-secondary th,\r\n  .table-secondary td,\r\n  .table-secondary thead th,\r\n  .table-secondary tbody + tbody {\r\n    border-color: #b3b7bb;\r\n  }\r\n  \r\n  .table-hover .table-secondary:hover {\r\n    background-color: #c8cbcf;\r\n  }\r\n  \r\n  .table-hover .table-secondary:hover > td,\r\n  .table-hover .table-secondary:hover > th {\r\n    background-color: #c8cbcf;\r\n  }\r\n  \r\n  .table-success,\r\n  .table-success > th,\r\n  .table-success > td {\r\n    background-color: #c3e6cb;\r\n  }\r\n  \r\n  .table-success th,\r\n  .table-success td,\r\n  .table-success thead th,\r\n  .table-success tbody + tbody {\r\n    border-color: #8fd19e;\r\n  }\r\n  \r\n  .table-hover .table-success:hover {\r\n    background-color: #b1dfbb;\r\n  }\r\n  \r\n  .table-hover .table-success:hover > td,\r\n  .table-hover .table-success:hover > th {\r\n    background-color: #b1dfbb;\r\n  }\r\n  \r\n  .table-info,\r\n  .table-info > th,\r\n  .table-info > td {\r\n    background-color: #bee5eb;\r\n  }\r\n  \r\n  .table-info th,\r\n  .table-info td,\r\n  .table-info thead th,\r\n  .table-info tbody + tbody {\r\n    border-color: #86cfda;\r\n  }\r\n  \r\n  .table-hover .table-info:hover {\r\n    background-color: #abdde5;\r\n  }\r\n  \r\n  .table-hover .table-info:hover > td,\r\n  .table-hover .table-info:hover > th {\r\n    background-color: #abdde5;\r\n  }\r\n  \r\n  .table-warning,\r\n  .table-warning > th,\r\n  .table-warning > td {\r\n    background-color: #ffeeba;\r\n  }\r\n  \r\n  .table-warning th,\r\n  .table-warning td,\r\n  .table-warning thead th,\r\n  .table-warning tbody + tbody {\r\n    border-color: #ffdf7e;\r\n  }\r\n  \r\n  .table-hover .table-warning:hover {\r\n    background-color: #ffe8a1;\r\n  }\r\n  \r\n  .table-hover .table-warning:hover > td,\r\n  .table-hover .table-warning:hover > th {\r\n    background-color: #ffe8a1;\r\n  }\r\n  \r\n  .table-danger,\r\n  .table-danger > th,\r\n  .table-danger > td {\r\n    background-color: #f5c6cb;\r\n  }\r\n  \r\n  .table-danger th,\r\n  .table-danger td,\r\n  .table-danger thead th,\r\n  .table-danger tbody + tbody {\r\n    border-color: #ed969e;\r\n  }\r\n  \r\n  .table-hover .table-danger:hover {\r\n    background-color: #f1b0b7;\r\n  }\r\n  \r\n  .table-hover .table-danger:hover > td,\r\n  .table-hover .table-danger:hover > th {\r\n    background-color: #f1b0b7;\r\n  }\r\n  \r\n  .table-light,\r\n  .table-light > th,\r\n  .table-light > td {\r\n    background-color: #fdfdfe;\r\n  }\r\n  \r\n  .table-light th,\r\n  .table-light td,\r\n  .table-light thead th,\r\n  .table-light tbody + tbody {\r\n    border-color: #fbfcfc;\r\n  }\r\n  \r\n  .table-hover .table-light:hover {\r\n    background-color: #ececf6;\r\n  }\r\n  \r\n  .table-hover .table-light:hover > td,\r\n  .table-hover .table-light:hover > th {\r\n    background-color: #ececf6;\r\n  }\r\n  \r\n  .table-dark,\r\n  .table-dark > th,\r\n  .table-dark > td {\r\n    background-color: #c6c8ca;\r\n  }\r\n  \r\n  .table-dark th,\r\n  .table-dark td,\r\n  .table-dark thead th,\r\n  .table-dark tbody + tbody {\r\n    border-color: #95999c;\r\n  }\r\n  \r\n  .table-hover .table-dark:hover {\r\n    background-color: #b9bbbe;\r\n  }\r\n  \r\n  .table-hover .table-dark:hover > td,\r\n  .table-hover .table-dark:hover > th {\r\n    background-color: #b9bbbe;\r\n  }\r\n  \r\n  .table-active,\r\n  .table-active > th,\r\n  .table-active > td {\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n  }\r\n  \r\n  .table-hover .table-active:hover {\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n  }\r\n  \r\n  .table-hover .table-active:hover > td,\r\n  .table-hover .table-active:hover > th {\r\n    background-color: rgba(0, 0, 0, 0.075);\r\n  }\r\n  \r\n  .table .thead-dark th {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #454d55;\r\n  }\r\n  \r\n  .table .thead-light th {\r\n    color: #495057;\r\n    background-color: #e9ecef;\r\n    border-color: #dee2e6;\r\n  }\r\n  \r\n  .table-dark {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n  }\r\n  \r\n  .table-dark th,\r\n  .table-dark td,\r\n  .table-dark thead th {\r\n    border-color: #454d55;\r\n  }\r\n  \r\n  .table-dark.table-bordered {\r\n    border: 0;\r\n  }\r\n  \r\n  .table-dark.table-striped tbody tr:nth-of-type(odd) {\r\n    background-color: rgba(255, 255, 255, 0.05);\r\n  }\r\n  \r\n  .table-dark.table-hover tbody tr:hover {\r\n    color: #fff;\r\n    background-color: rgba(255, 255, 255, 0.075);\r\n  }\r\n  \r\n  @media (max-width: 575.98px) {\r\n    .table-responsive-sm {\r\n      display: block;\r\n      width: 100%;\r\n      overflow-x: auto;\r\n      -webkit-overflow-scrolling: touch;\r\n    }\r\n    .table-responsive-sm > .table-bordered {\r\n      border: 0;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 767.98px) {\r\n    .table-responsive-md {\r\n      display: block;\r\n      width: 100%;\r\n      overflow-x: auto;\r\n      -webkit-overflow-scrolling: touch;\r\n    }\r\n    .table-responsive-md > .table-bordered {\r\n      border: 0;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 991.98px) {\r\n    .table-responsive-lg {\r\n      display: block;\r\n      width: 100%;\r\n      overflow-x: auto;\r\n      -webkit-overflow-scrolling: touch;\r\n    }\r\n    .table-responsive-lg > .table-bordered {\r\n      border: 0;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 1199.98px) {\r\n    .table-responsive-xl {\r\n      display: block;\r\n      width: 100%;\r\n      overflow-x: auto;\r\n      -webkit-overflow-scrolling: touch;\r\n    }\r\n    .table-responsive-xl > .table-bordered {\r\n      border: 0;\r\n    }\r\n  }\r\n  \r\n  .table-responsive {\r\n    display: block;\r\n    width: 100%;\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n  }\r\n  \r\n  .table-responsive > .table-bordered {\r\n    border: 0;\r\n  }\r\n  \r\n  .form-control {\r\n    display: block;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .form-control {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .form-control::-ms-expand {\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n  \r\n  .form-control:-moz-focusring {\r\n    color: transparent;\r\n    text-shadow: 0 0 0 #495057;\r\n  }\r\n  \r\n  .form-control:focus {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #80bdff;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .form-control::-webkit-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .form-control::-moz-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .form-control:-ms-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .form-control::-ms-input-placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .form-control::placeholder {\r\n    color: #6c757d;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .form-control:disabled, .form-control[readonly] {\r\n    background-color: #e9ecef;\r\n    opacity: 1;\r\n  }\r\n  \r\n  input[type=\"date\"].form-control,\r\n  input[type=\"time\"].form-control,\r\n  input[type=\"datetime-local\"].form-control,\r\n  input[type=\"month\"].form-control {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n  }\r\n  \r\n  select.form-control:focus::-ms-value {\r\n    color: #495057;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .form-control-file,\r\n  .form-control-range {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  \r\n  .col-form-label {\r\n    padding-top: calc(0.375rem + 1px);\r\n    padding-bottom: calc(0.375rem + 1px);\r\n    margin-bottom: 0;\r\n    font-size: inherit;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .col-form-label-lg {\r\n    padding-top: calc(0.5rem + 1px);\r\n    padding-bottom: calc(0.5rem + 1px);\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .col-form-label-sm {\r\n    padding-top: calc(0.25rem + 1px);\r\n    padding-bottom: calc(0.25rem + 1px);\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .form-control-plaintext {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.375rem 0;\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: #212529;\r\n    background-color: transparent;\r\n    border: solid transparent;\r\n    border-width: 1px 0;\r\n  }\r\n  \r\n  .form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  \r\n  .form-control-sm {\r\n    height: calc(1.5em + 0.5rem + 2px);\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n  }\r\n  \r\n  .form-control-lg {\r\n    height: calc(1.5em + 1rem + 2px);\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n  }\r\n  \r\n  select.form-control[size], select.form-control[multiple] {\r\n    height: auto;\r\n  }\r\n  \r\n  textarea.form-control {\r\n    height: auto;\r\n  }\r\n  \r\n  .form-group {\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-text {\r\n    display: block;\r\n    margin-top: 0.25rem;\r\n  }\r\n  \r\n  .form-row {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin-right: -5px;\r\n    margin-left: -5px;\r\n  }\r\n  \r\n  .form-row > .col,\r\n  .form-row > [class*=\"col-\"] {\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n  }\r\n  \r\n  .form-check {\r\n    position: relative;\r\n    display: block;\r\n    padding-left: 1.25rem;\r\n  }\r\n  \r\n  .form-check-input {\r\n    position: absolute;\r\n    margin-top: 0.3rem;\r\n    margin-left: -1.25rem;\r\n  }\r\n  \r\n  .form-check-input[disabled] ~ .form-check-label,\r\n  .form-check-input:disabled ~ .form-check-label {\r\n    color: #6c757d;\r\n  }\r\n  \r\n  .form-check-label {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .form-check-inline {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding-left: 0;\r\n    margin-right: 0.75rem;\r\n  }\r\n  \r\n  .form-check-inline .form-check-input {\r\n    position: static;\r\n    margin-top: 0;\r\n    margin-right: 0.3125rem;\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .valid-feedback {\r\n    display: none;\r\n    width: 100%;\r\n    margin-top: 0.25rem;\r\n    font-size: 80%;\r\n    color: #28a745;\r\n  }\r\n  \r\n  .valid-tooltip {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    z-index: 5;\r\n    display: none;\r\n    max-width: 100%;\r\n    padding: 0.25rem 0.5rem;\r\n    margin-top: .1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    color: #fff;\r\n    background-color: rgba(40, 167, 69, 0.9);\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .was-validated :valid ~ .valid-feedback,\r\n  .was-validated :valid ~ .valid-tooltip,\r\n  .is-valid ~ .valid-feedback,\r\n  .is-valid ~ .valid-tooltip {\r\n    display: block;\r\n  }\r\n  \r\n  .was-validated .form-control:valid, .form-control.is-valid {\r\n    border-color: #28a745;\r\n    padding-right: calc(1.5em + 0.75rem);\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: right calc(0.375em + 0.1875rem) center;\r\n    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n  }\r\n  \r\n  .was-validated .form-control:valid:focus, .form-control.is-valid:focus {\r\n    border-color: #28a745;\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n  }\r\n  \r\n  .was-validated textarea.form-control:valid, textarea.form-control.is-valid {\r\n    padding-right: calc(1.5em + 0.75rem);\r\n    background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\r\n  }\r\n  \r\n  .was-validated .custom-select:valid, .custom-select.is-valid {\r\n    border-color: #28a745;\r\n    padding-right: calc(0.75em + 2.3125rem);\r\n    background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n  }\r\n  \r\n  .was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {\r\n    border-color: #28a745;\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n  }\r\n  \r\n  .was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\r\n    color: #28a745;\r\n  }\r\n  \r\n  .was-validated .form-check-input:valid ~ .valid-feedback,\r\n  .was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\r\n  .form-check-input.is-valid ~ .valid-tooltip {\r\n    display: block;\r\n  }\r\n  \r\n  .was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\r\n    color: #28a745;\r\n  }\r\n  \r\n  .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  .was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\r\n    border-color: #34ce57;\r\n    background-color: #34ce57;\r\n  }\r\n  \r\n  .was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n  }\r\n  \r\n  .was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before {\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  .was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  .was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\r\n    border-color: #28a745;\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\r\n  }\r\n  \r\n  .invalid-feedback {\r\n    display: none;\r\n    width: 100%;\r\n    margin-top: 0.25rem;\r\n    font-size: 80%;\r\n    color: #dc3545;\r\n  }\r\n  \r\n  .invalid-tooltip {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    z-index: 5;\r\n    display: none;\r\n    max-width: 100%;\r\n    padding: 0.25rem 0.5rem;\r\n    margin-top: .1rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    color: #fff;\r\n    background-color: rgba(220, 53, 69, 0.9);\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .was-validated :invalid ~ .invalid-feedback,\r\n  .was-validated :invalid ~ .invalid-tooltip,\r\n  .is-invalid ~ .invalid-feedback,\r\n  .is-invalid ~ .invalid-tooltip {\r\n    display: block;\r\n  }\r\n  \r\n  .was-validated .form-control:invalid, .form-control.is-invalid {\r\n    border-color: #dc3545;\r\n    padding-right: calc(1.5em + 0.75rem);\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\r\n    background-repeat: no-repeat;\r\n    background-position: right calc(0.375em + 0.1875rem) center;\r\n    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n  }\r\n  \r\n  .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\r\n    border-color: #dc3545;\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n  }\r\n  \r\n  .was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\r\n    padding-right: calc(1.5em + 0.75rem);\r\n    background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\r\n  }\r\n  \r\n  .was-validated .custom-select:invalid, .custom-select.is-invalid {\r\n    border-color: #dc3545;\r\n    padding-right: calc(0.75em + 2.3125rem);\r\n    background: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\r\n  }\r\n  \r\n  .was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {\r\n    border-color: #dc3545;\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n  }\r\n  \r\n  .was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\r\n    color: #dc3545;\r\n  }\r\n  \r\n  .was-validated .form-check-input:invalid ~ .invalid-feedback,\r\n  .was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\r\n  .form-check-input.is-invalid ~ .invalid-tooltip {\r\n    display: block;\r\n  }\r\n  \r\n  .was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\r\n    color: #dc3545;\r\n  }\r\n  \r\n  .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\r\n    border-color: #e4606d;\r\n    background-color: #e4606d;\r\n  }\r\n  \r\n  .was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n  }\r\n  \r\n  .was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before {\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\r\n    border-color: #dc3545;\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\r\n  }\r\n  \r\n  .form-inline {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-flow: row wrap;\r\n    flex-flow: row wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .form-inline .form-check {\r\n    width: 100%;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .form-inline label {\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-align: center;\r\n      align-items: center;\r\n      -ms-flex-pack: center;\r\n      justify-content: center;\r\n      margin-bottom: 0;\r\n    }\r\n    .form-inline .form-group {\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex: 0 0 auto;\r\n      flex: 0 0 auto;\r\n      -ms-flex-flow: row wrap;\r\n      flex-flow: row wrap;\r\n      -ms-flex-align: center;\r\n      align-items: center;\r\n      margin-bottom: 0;\r\n    }\r\n    .form-inline .form-control {\r\n      display: inline-block;\r\n      width: auto;\r\n      vertical-align: middle;\r\n    }\r\n    .form-inline .form-control-plaintext {\r\n      display: inline-block;\r\n    }\r\n    .form-inline .input-group,\r\n    .form-inline .custom-select {\r\n      width: auto;\r\n    }\r\n    .form-inline .form-check {\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-align: center;\r\n      align-items: center;\r\n      -ms-flex-pack: center;\r\n      justify-content: center;\r\n      width: auto;\r\n      padding-left: 0;\r\n    }\r\n    .form-inline .form-check-input {\r\n      position: relative;\r\n      -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n      margin-top: 0;\r\n      margin-right: 0.25rem;\r\n      margin-left: 0;\r\n    }\r\n    .form-inline .custom-control {\r\n      -ms-flex-align: center;\r\n      align-items: center;\r\n      -ms-flex-pack: center;\r\n      justify-content: center;\r\n    }\r\n    .form-inline .custom-control-label {\r\n      margin-bottom: 0;\r\n    }\r\n  }\r\n  \r\n  .btn {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    color: #212529;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    padding: 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.25rem;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .btn {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .btn:hover {\r\n    color: #212529;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .btn:focus, .btn.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .btn.disabled, .btn:disabled {\r\n    opacity: 0.65;\r\n  }\r\n  \r\n  .btn:not(:disabled):not(.disabled) {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  a.btn.disabled,\r\n  fieldset:disabled a.btn {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .btn-primary {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  .btn-primary:hover {\r\n    color: #fff;\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n  }\r\n  \r\n  .btn-primary:focus, .btn-primary.focus {\r\n    color: #fff;\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\r\n  }\r\n  \r\n  .btn-primary.disabled, .btn-primary:disabled {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\r\n  .show > .btn-primary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border-color: #005cbf;\r\n  }\r\n  \r\n  .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-primary.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);\r\n  }\r\n  \r\n  .btn-secondary {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n  }\r\n  \r\n  .btn-secondary:hover {\r\n    color: #fff;\r\n    background-color: #5a6268;\r\n    border-color: #545b62;\r\n  }\r\n  \r\n  .btn-secondary:focus, .btn-secondary.focus {\r\n    color: #fff;\r\n    background-color: #5a6268;\r\n    border-color: #545b62;\r\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\r\n  }\r\n  \r\n  .btn-secondary.disabled, .btn-secondary:disabled {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n  }\r\n  \r\n  .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\r\n  .show > .btn-secondary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #545b62;\r\n    border-color: #4e555b;\r\n  }\r\n  \r\n  .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-secondary.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\r\n  }\r\n  \r\n  .btn-success {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  .btn-success:hover {\r\n    color: #fff;\r\n    background-color: #218838;\r\n    border-color: #1e7e34;\r\n  }\r\n  \r\n  .btn-success:focus, .btn-success.focus {\r\n    color: #fff;\r\n    background-color: #218838;\r\n    border-color: #1e7e34;\r\n    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\r\n  }\r\n  \r\n  .btn-success.disabled, .btn-success:disabled {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\r\n  .show > .btn-success.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n    border-color: #1c7430;\r\n  }\r\n  \r\n  .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-success.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\r\n  }\r\n  \r\n  .btn-info {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n  \r\n  .btn-info:hover {\r\n    color: #fff;\r\n    background-color: #138496;\r\n    border-color: #117a8b;\r\n  }\r\n  \r\n  .btn-info:focus, .btn-info.focus {\r\n    color: #fff;\r\n    background-color: #138496;\r\n    border-color: #117a8b;\r\n    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\r\n  }\r\n  \r\n  .btn-info.disabled, .btn-info:disabled {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n  \r\n  .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\r\n  .show > .btn-info.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #117a8b;\r\n    border-color: #10707f;\r\n  }\r\n  \r\n  .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-info.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\r\n  }\r\n  \r\n  .btn-warning {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n  \r\n  .btn-warning:hover {\r\n    color: #212529;\r\n    background-color: #e0a800;\r\n    border-color: #d39e00;\r\n  }\r\n  \r\n  .btn-warning:focus, .btn-warning.focus {\r\n    color: #212529;\r\n    background-color: #e0a800;\r\n    border-color: #d39e00;\r\n    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\r\n  }\r\n  \r\n  .btn-warning.disabled, .btn-warning:disabled {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n  \r\n  .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\r\n  .show > .btn-warning.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #d39e00;\r\n    border-color: #c69500;\r\n  }\r\n  \r\n  .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-warning.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\r\n  }\r\n  \r\n  .btn-danger {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .btn-danger:hover {\r\n    color: #fff;\r\n    background-color: #c82333;\r\n    border-color: #bd2130;\r\n  }\r\n  \r\n  .btn-danger:focus, .btn-danger.focus {\r\n    color: #fff;\r\n    background-color: #c82333;\r\n    border-color: #bd2130;\r\n    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\r\n  }\r\n  \r\n  .btn-danger.disabled, .btn-danger:disabled {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\r\n  .show > .btn-danger.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #bd2130;\r\n    border-color: #b21f2d;\r\n  }\r\n  \r\n  .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-danger.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);\r\n  }\r\n  \r\n  .btn-light {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n  \r\n  .btn-light:hover {\r\n    color: #212529;\r\n    background-color: #e2e6ea;\r\n    border-color: #dae0e5;\r\n  }\r\n  \r\n  .btn-light:focus, .btn-light.focus {\r\n    color: #212529;\r\n    background-color: #e2e6ea;\r\n    border-color: #dae0e5;\r\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\r\n  }\r\n  \r\n  .btn-light.disabled, .btn-light:disabled {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n  \r\n  .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\r\n  .show > .btn-light.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #dae0e5;\r\n    border-color: #d3d9df;\r\n  }\r\n  \r\n  .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-light.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\r\n  }\r\n  \r\n  .btn-dark {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n  \r\n  .btn-dark:hover {\r\n    color: #fff;\r\n    background-color: #23272b;\r\n    border-color: #1d2124;\r\n  }\r\n  \r\n  .btn-dark:focus, .btn-dark.focus {\r\n    color: #fff;\r\n    background-color: #23272b;\r\n    border-color: #1d2124;\r\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\r\n  }\r\n  \r\n  .btn-dark.disabled, .btn-dark:disabled {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n  \r\n  .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\r\n  .show > .btn-dark.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #1d2124;\r\n    border-color: #171a1d;\r\n  }\r\n  \r\n  .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-dark.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\r\n  }\r\n  \r\n  .btn-outline-primary {\r\n    color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  .btn-outline-primary:hover {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  .btn-outline-primary:focus, .btn-outline-primary.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n  }\r\n  \r\n  .btn-outline-primary.disabled, .btn-outline-primary:disabled {\r\n    color: #007bff;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\r\n  .show > .btn-outline-primary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-outline-primary.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n  }\r\n  \r\n  .btn-outline-secondary {\r\n    color: #6c757d;\r\n    border-color: #6c757d;\r\n  }\r\n  \r\n  .btn-outline-secondary:hover {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n  }\r\n  \r\n  .btn-outline-secondary:focus, .btn-outline-secondary.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n  }\r\n  \r\n  .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\r\n    color: #6c757d;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\r\n  .show > .btn-outline-secondary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #6c757d;\r\n  }\r\n  \r\n  .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-outline-secondary.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n  }\r\n  \r\n  .btn-outline-success {\r\n    color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  .btn-outline-success:hover {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  .btn-outline-success:focus, .btn-outline-success.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n  }\r\n  \r\n  .btn-outline-success.disabled, .btn-outline-success:disabled {\r\n    color: #28a745;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\r\n  .show > .btn-outline-success.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n  \r\n  .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-outline-success.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n  }\r\n  \r\n  .btn-outline-info {\r\n    color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n  \r\n  .btn-outline-info:hover {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n  \r\n  .btn-outline-info:focus, .btn-outline-info.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n  }\r\n  \r\n  .btn-outline-info.disabled, .btn-outline-info:disabled {\r\n    color: #17a2b8;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\r\n  .show > .btn-outline-info.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n  \r\n  .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-outline-info.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n  }\r\n  \r\n  .btn-outline-warning {\r\n    color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n  \r\n  .btn-outline-warning:hover {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n  \r\n  .btn-outline-warning:focus, .btn-outline-warning.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n  }\r\n  \r\n  .btn-outline-warning.disabled, .btn-outline-warning:disabled {\r\n    color: #ffc107;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\r\n  .show > .btn-outline-warning.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n  \r\n  .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-outline-warning.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n  }\r\n  \r\n  .btn-outline-danger {\r\n    color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .btn-outline-danger:hover {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .btn-outline-danger:focus, .btn-outline-danger.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n  }\r\n  \r\n  .btn-outline-danger.disabled, .btn-outline-danger:disabled {\r\n    color: #dc3545;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\r\n  .show > .btn-outline-danger.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n  \r\n  .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-outline-danger.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n  }\r\n  \r\n  .btn-outline-light {\r\n    color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n  \r\n  .btn-outline-light:hover {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n  \r\n  .btn-outline-light:focus, .btn-outline-light.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n  }\r\n  \r\n  .btn-outline-light.disabled, .btn-outline-light:disabled {\r\n    color: #f8f9fa;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\r\n  .show > .btn-outline-light.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n  \r\n  .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-outline-light.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n  }\r\n  \r\n  .btn-outline-dark {\r\n    color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n  \r\n  .btn-outline-dark:hover {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n  \r\n  .btn-outline-dark:focus, .btn-outline-dark.focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n  }\r\n  \r\n  .btn-outline-dark.disabled, .btn-outline-dark:disabled {\r\n    color: #343a40;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\r\n  .show > .btn-outline-dark.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n  \r\n  .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\r\n  .show > .btn-outline-dark.dropdown-toggle:focus {\r\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n  }\r\n  \r\n  .btn-link {\r\n    font-weight: 400;\r\n    color: #007bff;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .btn-link:hover {\r\n    color: #0056b3;\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .btn-link:focus, .btn-link.focus {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .btn-link:disabled, .btn-link.disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .btn-lg, .btn-group-lg > .btn {\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n  }\r\n  \r\n  .btn-sm, .btn-group-sm > .btn {\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n  }\r\n  \r\n  .btn-block {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  \r\n  .btn-block + .btn-block {\r\n    margin-top: 0.5rem;\r\n  }\r\n  \r\n  input[type=\"submit\"].btn-block,\r\n  input[type=\"reset\"].btn-block,\r\n  input[type=\"button\"].btn-block {\r\n    width: 100%;\r\n  }\r\n  \r\n  .fade {\r\n    transition: opacity 0.15s linear;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .fade {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .fade:not(.show) {\r\n    opacity: 0;\r\n  }\r\n  \r\n  .collapse:not(.show) {\r\n    display: none;\r\n  }\r\n  \r\n  .collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: height 0.35s ease;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .collapsing {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .dropup,\r\n  .dropright,\r\n  .dropdown,\r\n  .dropleft {\r\n    position: relative;\r\n  }\r\n  \r\n  .dropdown-toggle {\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid;\r\n    border-right: 0.3em solid transparent;\r\n    border-bottom: 0;\r\n    border-left: 0.3em solid transparent;\r\n  }\r\n  \r\n  .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    z-index: 1000;\r\n    display: none;\r\n    float: left;\r\n    min-width: 10rem;\r\n    padding: 0.5rem 0;\r\n    margin: 0.125rem 0 0;\r\n    font-size: 1rem;\r\n    color: #212529;\r\n    text-align: left;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .dropdown-menu-left {\r\n    right: auto;\r\n    left: 0;\r\n  }\r\n  \r\n  .dropdown-menu-right {\r\n    right: 0;\r\n    left: auto;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .dropdown-menu-sm-left {\r\n      right: auto;\r\n      left: 0;\r\n    }\r\n    .dropdown-menu-sm-right {\r\n      right: 0;\r\n      left: auto;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .dropdown-menu-md-left {\r\n      right: auto;\r\n      left: 0;\r\n    }\r\n    .dropdown-menu-md-right {\r\n      right: 0;\r\n      left: auto;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .dropdown-menu-lg-left {\r\n      right: auto;\r\n      left: 0;\r\n    }\r\n    .dropdown-menu-lg-right {\r\n      right: 0;\r\n      left: auto;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .dropdown-menu-xl-left {\r\n      right: auto;\r\n      left: 0;\r\n    }\r\n    .dropdown-menu-xl-right {\r\n      right: 0;\r\n      left: auto;\r\n    }\r\n  }\r\n  \r\n  .dropup .dropdown-menu {\r\n    top: auto;\r\n    bottom: 100%;\r\n    margin-top: 0;\r\n    margin-bottom: 0.125rem;\r\n  }\r\n  \r\n  .dropup .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0;\r\n    border-right: 0.3em solid transparent;\r\n    border-bottom: 0.3em solid;\r\n    border-left: 0.3em solid transparent;\r\n  }\r\n  \r\n  .dropup .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropright .dropdown-menu {\r\n    top: 0;\r\n    right: auto;\r\n    left: 100%;\r\n    margin-top: 0;\r\n    margin-left: 0.125rem;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid transparent;\r\n    border-right: 0;\r\n    border-bottom: 0.3em solid transparent;\r\n    border-left: 0.3em solid;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropright .dropdown-toggle::after {\r\n    vertical-align: 0;\r\n  }\r\n  \r\n  .dropleft .dropdown-menu {\r\n    top: 0;\r\n    right: 100%;\r\n    left: auto;\r\n    margin-top: 0;\r\n    margin-right: 0.125rem;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::after {\r\n    display: inline-block;\r\n    margin-left: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::after {\r\n    display: none;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::before {\r\n    display: inline-block;\r\n    margin-right: 0.255em;\r\n    vertical-align: 0.255em;\r\n    content: \"\";\r\n    border-top: 0.3em solid transparent;\r\n    border-right: 0.3em solid;\r\n    border-bottom: 0.3em solid transparent;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle:empty::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle::before {\r\n    vertical-align: 0;\r\n  }\r\n  \r\n  .dropdown-menu[x-placement^=\"top\"], .dropdown-menu[x-placement^=\"right\"], .dropdown-menu[x-placement^=\"bottom\"], .dropdown-menu[x-placement^=\"left\"] {\r\n    right: auto;\r\n    bottom: auto;\r\n  }\r\n  \r\n  .dropdown-divider {\r\n    height: 0;\r\n    margin: 0.5rem 0;\r\n    overflow: hidden;\r\n    border-top: 1px solid #e9ecef;\r\n  }\r\n  \r\n  .dropdown-item {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0.25rem 1.5rem;\r\n    clear: both;\r\n    font-weight: 400;\r\n    color: #212529;\r\n    text-align: inherit;\r\n    white-space: nowrap;\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n  \r\n  .dropdown-item:hover, .dropdown-item:focus {\r\n    color: #16181b;\r\n    text-decoration: none;\r\n    background-color: #f8f9fa;\r\n  }\r\n  \r\n  .dropdown-item.active, .dropdown-item:active {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: #007bff;\r\n  }\r\n  \r\n  .dropdown-item.disabled, .dropdown-item:disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    background-color: transparent;\r\n  }\r\n  \r\n  .dropdown-menu.show {\r\n    display: block;\r\n  }\r\n  \r\n  .dropdown-header {\r\n    display: block;\r\n    padding: 0.5rem 1.5rem;\r\n    margin-bottom: 0;\r\n    font-size: 0.875rem;\r\n    color: #6c757d;\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .dropdown-item-text {\r\n    display: block;\r\n    padding: 0.25rem 1.5rem;\r\n    color: #212529;\r\n  }\r\n  \r\n  .btn-group,\r\n  .btn-group-vertical {\r\n    position: relative;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .btn-group > .btn,\r\n  .btn-group-vertical > .btn {\r\n    position: relative;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .btn-group > .btn:hover,\r\n  .btn-group-vertical > .btn:hover {\r\n    z-index: 1;\r\n  }\r\n  \r\n  .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\r\n  .btn-group-vertical > .btn:focus,\r\n  .btn-group-vertical > .btn:active,\r\n  .btn-group-vertical > .btn.active {\r\n    z-index: 1;\r\n  }\r\n  \r\n  .btn-toolbar {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n  }\r\n  \r\n  .btn-toolbar .input-group {\r\n    width: auto;\r\n  }\r\n  \r\n  .btn-group > .btn:not(:first-child),\r\n  .btn-group > .btn-group:not(:first-child) {\r\n    margin-left: -1px;\r\n  }\r\n  \r\n  .btn-group > .btn:not(:last-child):not(.dropdown-toggle),\r\n  .btn-group > .btn-group:not(:last-child) > .btn {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  \r\n  .btn-group > .btn:not(:first-child),\r\n  .btn-group > .btn-group:not(:first-child) > .btn {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .dropdown-toggle-split {\r\n    padding-right: 0.5625rem;\r\n    padding-left: 0.5625rem;\r\n  }\r\n  \r\n  .dropdown-toggle-split::after,\r\n  .dropup .dropdown-toggle-split::after,\r\n  .dropright .dropdown-toggle-split::after {\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .dropleft .dropdown-toggle-split::before {\r\n    margin-right: 0;\r\n  }\r\n  \r\n  .btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\r\n    padding-right: 0.375rem;\r\n    padding-left: 0.375rem;\r\n  }\r\n  \r\n  .btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\r\n    padding-right: 0.75rem;\r\n    padding-left: 0.75rem;\r\n  }\r\n  \r\n  .btn-group-vertical {\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -ms-flex-align: start;\r\n    align-items: flex-start;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .btn-group-vertical > .btn,\r\n  .btn-group-vertical > .btn-group {\r\n    width: 100%;\r\n  }\r\n  \r\n  .btn-group-vertical > .btn:not(:first-child),\r\n  .btn-group-vertical > .btn-group:not(:first-child) {\r\n    margin-top: -1px;\r\n  }\r\n  \r\n  .btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\r\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .btn-group-vertical > .btn:not(:first-child),\r\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  \r\n  .btn-group-toggle > .btn,\r\n  .btn-group-toggle > .btn-group > .btn {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .btn-group-toggle > .btn input[type=\"radio\"],\r\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\r\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\r\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\r\n    position: absolute;\r\n    clip: rect(0, 0, 0, 0);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .input-group {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: stretch;\r\n    align-items: stretch;\r\n    width: 100%;\r\n  }\r\n  \r\n  .input-group > .form-control,\r\n  .input-group > .form-control-plaintext,\r\n  .input-group > .custom-select,\r\n  .input-group > .custom-file {\r\n    position: relative;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    width: 1%;\r\n    min-width: 0;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .input-group > .form-control + .form-control,\r\n  .input-group > .form-control + .custom-select,\r\n  .input-group > .form-control + .custom-file,\r\n  .input-group > .form-control-plaintext + .form-control,\r\n  .input-group > .form-control-plaintext + .custom-select,\r\n  .input-group > .form-control-plaintext + .custom-file,\r\n  .input-group > .custom-select + .form-control,\r\n  .input-group > .custom-select + .custom-select,\r\n  .input-group > .custom-select + .custom-file,\r\n  .input-group > .custom-file + .form-control,\r\n  .input-group > .custom-file + .custom-select,\r\n  .input-group > .custom-file + .custom-file {\r\n    margin-left: -1px;\r\n  }\r\n  \r\n  .input-group > .form-control:focus,\r\n  .input-group > .custom-select:focus,\r\n  .input-group > .custom-file .custom-file-input:focus ~ .custom-file-label {\r\n    z-index: 3;\r\n  }\r\n  \r\n  .input-group > .custom-file .custom-file-input:focus {\r\n    z-index: 4;\r\n  }\r\n  \r\n  .input-group > .form-control:not(:last-child),\r\n  .input-group > .custom-select:not(:last-child) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  \r\n  .input-group > .form-control:not(:first-child),\r\n  .input-group > .custom-select:not(:first-child) {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .input-group > .custom-file {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .input-group > .custom-file:not(:last-child) .custom-file-label,\r\n  .input-group > .custom-file:not(:last-child) .custom-file-label::after {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  \r\n  .input-group > .custom-file:not(:first-child) .custom-file-label {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .input-group-prepend,\r\n  .input-group-append {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n  \r\n  .input-group-prepend .btn,\r\n  .input-group-append .btn {\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n  \r\n  .input-group-prepend .btn:focus,\r\n  .input-group-append .btn:focus {\r\n    z-index: 3;\r\n  }\r\n  \r\n  .input-group-prepend .btn + .btn,\r\n  .input-group-prepend .btn + .input-group-text,\r\n  .input-group-prepend .input-group-text + .input-group-text,\r\n  .input-group-prepend .input-group-text + .btn,\r\n  .input-group-append .btn + .btn,\r\n  .input-group-append .btn + .input-group-text,\r\n  .input-group-append .input-group-text + .input-group-text,\r\n  .input-group-append .input-group-text + .btn {\r\n    margin-left: -1px;\r\n  }\r\n  \r\n  .input-group-prepend {\r\n    margin-right: -1px;\r\n  }\r\n  \r\n  .input-group-append {\r\n    margin-left: -1px;\r\n  }\r\n  \r\n  .input-group-text {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding: 0.375rem 0.75rem;\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .input-group-text input[type=\"radio\"],\r\n  .input-group-text input[type=\"checkbox\"] {\r\n    margin-top: 0;\r\n  }\r\n  \r\n  .input-group-lg > .form-control:not(textarea),\r\n  .input-group-lg > .custom-select {\r\n    height: calc(1.5em + 1rem + 2px);\r\n  }\r\n  \r\n  .input-group-lg > .form-control,\r\n  .input-group-lg > .custom-select,\r\n  .input-group-lg > .input-group-prepend > .input-group-text,\r\n  .input-group-lg > .input-group-append > .input-group-text,\r\n  .input-group-lg > .input-group-prepend > .btn,\r\n  .input-group-lg > .input-group-append > .btn {\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n  }\r\n  \r\n  .input-group-sm > .form-control:not(textarea),\r\n  .input-group-sm > .custom-select {\r\n    height: calc(1.5em + 0.5rem + 2px);\r\n  }\r\n  \r\n  .input-group-sm > .form-control,\r\n  .input-group-sm > .custom-select,\r\n  .input-group-sm > .input-group-prepend > .input-group-text,\r\n  .input-group-sm > .input-group-append > .input-group-text,\r\n  .input-group-sm > .input-group-prepend > .btn,\r\n  .input-group-sm > .input-group-append > .btn {\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n  }\r\n  \r\n  .input-group-lg > .custom-select,\r\n  .input-group-sm > .custom-select {\r\n    padding-right: 1.75rem;\r\n  }\r\n  \r\n  .input-group > .input-group-prepend > .btn,\r\n  .input-group > .input-group-prepend > .input-group-text,\r\n  .input-group > .input-group-append:not(:last-child) > .btn,\r\n  .input-group > .input-group-append:not(:last-child) > .input-group-text,\r\n  .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\r\n  .input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  \r\n  .input-group > .input-group-append > .btn,\r\n  .input-group > .input-group-append > .input-group-text,\r\n  .input-group > .input-group-prepend:not(:first-child) > .btn,\r\n  .input-group > .input-group-prepend:not(:first-child) > .input-group-text,\r\n  .input-group > .input-group-prepend:first-child > .btn:not(:first-child),\r\n  .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .custom-control {\r\n    position: relative;\r\n    z-index: 1;\r\n    display: block;\r\n    min-height: 1.5rem;\r\n    padding-left: 1.5rem;\r\n    -webkit-print-color-adjust: exact;\r\n    color-adjust: exact;\r\n  }\r\n  \r\n  .custom-control-inline {\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-right: 1rem;\r\n  }\r\n  \r\n  .custom-control-input {\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: -1;\r\n    width: 1rem;\r\n    height: 1.25rem;\r\n    opacity: 0;\r\n  }\r\n  \r\n  .custom-control-input:checked ~ .custom-control-label::before {\r\n    color: #fff;\r\n    border-color: #007bff;\r\n    background-color: #007bff;\r\n  }\r\n  \r\n  .custom-control-input:focus ~ .custom-control-label::before {\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {\r\n    border-color: #80bdff;\r\n  }\r\n  \r\n  .custom-control-input:not(:disabled):active ~ .custom-control-label::before {\r\n    color: #fff;\r\n    background-color: #b3d7ff;\r\n    border-color: #b3d7ff;\r\n  }\r\n  \r\n  .custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label {\r\n    color: #6c757d;\r\n  }\r\n  \r\n  .custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before {\r\n    background-color: #e9ecef;\r\n  }\r\n  \r\n  .custom-control-label {\r\n    position: relative;\r\n    margin-bottom: 0;\r\n    vertical-align: top;\r\n  }\r\n  \r\n  .custom-control-label::before {\r\n    position: absolute;\r\n    top: 0.25rem;\r\n    left: -1.5rem;\r\n    display: block;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    pointer-events: none;\r\n    content: \"\";\r\n    background-color: #fff;\r\n    border: #adb5bd solid 1px;\r\n  }\r\n  \r\n  .custom-control-label::after {\r\n    position: absolute;\r\n    top: 0.25rem;\r\n    left: -1.5rem;\r\n    display: block;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    content: \"\";\r\n    background: no-repeat 50% / 50% 50%;\r\n  }\r\n  \r\n  .custom-checkbox .custom-control-label::before {\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\");\r\n  }\r\n  \r\n  .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\r\n    border-color: #007bff;\r\n    background-color: #007bff;\r\n  }\r\n  \r\n  .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\");\r\n  }\r\n  \r\n  .custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n  }\r\n  \r\n  .custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n  }\r\n  \r\n  .custom-radio .custom-control-label::before {\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .custom-radio .custom-control-input:checked ~ .custom-control-label::after {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\r\n  }\r\n  \r\n  .custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n  }\r\n  \r\n  .custom-switch {\r\n    padding-left: 2.25rem;\r\n  }\r\n  \r\n  .custom-switch .custom-control-label::before {\r\n    left: -2.25rem;\r\n    width: 1.75rem;\r\n    pointer-events: all;\r\n    border-radius: 0.5rem;\r\n  }\r\n  \r\n  .custom-switch .custom-control-label::after {\r\n    top: calc(0.25rem + 2px);\r\n    left: calc(-2.25rem + 2px);\r\n    width: calc(1rem - 4px);\r\n    height: calc(1rem - 4px);\r\n    background-color: #adb5bd;\r\n    border-radius: 0.5rem;\r\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\r\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .custom-switch .custom-control-label::after {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .custom-switch .custom-control-input:checked ~ .custom-control-label::after {\r\n    background-color: #fff;\r\n    -webkit-transform: translateX(0.75rem);\r\n    transform: translateX(0.75rem);\r\n  }\r\n  \r\n  .custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {\r\n    background-color: rgba(0, 123, 255, 0.5);\r\n  }\r\n  \r\n  .custom-select {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    padding: 0.375rem 1.75rem 0.375rem 0.75rem;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    vertical-align: middle;\r\n    background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/8px 10px;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n  }\r\n  \r\n  .custom-select:focus {\r\n    border-color: #80bdff;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .custom-select:focus::-ms-value {\r\n    color: #495057;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\r\n    height: auto;\r\n    padding-right: 0.75rem;\r\n    background-image: none;\r\n  }\r\n  \r\n  .custom-select:disabled {\r\n    color: #6c757d;\r\n    background-color: #e9ecef;\r\n  }\r\n  \r\n  .custom-select::-ms-expand {\r\n    display: none;\r\n  }\r\n  \r\n  .custom-select:-moz-focusring {\r\n    color: transparent;\r\n    text-shadow: 0 0 0 #495057;\r\n  }\r\n  \r\n  .custom-select-sm {\r\n    height: calc(1.5em + 0.5rem + 2px);\r\n    padding-top: 0.25rem;\r\n    padding-bottom: 0.25rem;\r\n    padding-left: 0.5rem;\r\n    font-size: 0.875rem;\r\n  }\r\n  \r\n  .custom-select-lg {\r\n    height: calc(1.5em + 1rem + 2px);\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    padding-left: 1rem;\r\n    font-size: 1.25rem;\r\n  }\r\n  \r\n  .custom-file {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .custom-file-input {\r\n    position: relative;\r\n    z-index: 2;\r\n    width: 100%;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    margin: 0;\r\n    opacity: 0;\r\n  }\r\n  \r\n  .custom-file-input:focus ~ .custom-file-label {\r\n    border-color: #80bdff;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .custom-file-input[disabled] ~ .custom-file-label,\r\n  .custom-file-input:disabled ~ .custom-file-label {\r\n    background-color: #e9ecef;\r\n  }\r\n  \r\n  .custom-file-input:lang(en) ~ .custom-file-label::after {\r\n    content: \"Browse\";\r\n  }\r\n  \r\n  .custom-file-input ~ .custom-file-label[data-browse]::after {\r\n    content: attr(data-browse);\r\n  }\r\n  \r\n  .custom-file-label {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    height: calc(1.5em + 0.75rem + 2px);\r\n    padding: 0.375rem 0.75rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .custom-file-label::after {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 3;\r\n    display: block;\r\n    height: calc(1.5em + 0.75rem);\r\n    padding: 0.375rem 0.75rem;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    content: \"Browse\";\r\n    background-color: #e9ecef;\r\n    border-left: inherit;\r\n    border-radius: 0 0.25rem 0.25rem 0;\r\n  }\r\n  \r\n  .custom-range {\r\n    width: 100%;\r\n    height: 1.4rem;\r\n    padding: 0;\r\n    background-color: transparent;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n  }\r\n  \r\n  .custom-range:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .custom-range:focus::-webkit-slider-thumb {\r\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .custom-range:focus::-moz-range-thumb {\r\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .custom-range:focus::-ms-thumb {\r\n    box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .custom-range::-moz-focus-outer {\r\n    border: 0;\r\n  }\r\n  \r\n  .custom-range::-webkit-slider-thumb {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    margin-top: -0.25rem;\r\n    background-color: #007bff;\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .custom-range::-webkit-slider-thumb {\r\n      -webkit-transition: none;\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .custom-range::-webkit-slider-thumb:active {\r\n    background-color: #b3d7ff;\r\n  }\r\n  \r\n  .custom-range::-webkit-slider-runnable-track {\r\n    width: 100%;\r\n    height: 0.5rem;\r\n    color: transparent;\r\n    cursor: pointer;\r\n    background-color: #dee2e6;\r\n    border-color: transparent;\r\n    border-radius: 1rem;\r\n  }\r\n  \r\n  .custom-range::-moz-range-thumb {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    background-color: #007bff;\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .custom-range::-moz-range-thumb {\r\n      -moz-transition: none;\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .custom-range::-moz-range-thumb:active {\r\n    background-color: #b3d7ff;\r\n  }\r\n  \r\n  .custom-range::-moz-range-track {\r\n    width: 100%;\r\n    height: 0.5rem;\r\n    color: transparent;\r\n    cursor: pointer;\r\n    background-color: #dee2e6;\r\n    border-color: transparent;\r\n    border-radius: 1rem;\r\n  }\r\n  \r\n  .custom-range::-ms-thumb {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    margin-top: 0;\r\n    margin-right: 0.2rem;\r\n    margin-left: 0.2rem;\r\n    background-color: #007bff;\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    appearance: none;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .custom-range::-ms-thumb {\r\n      -ms-transition: none;\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .custom-range::-ms-thumb:active {\r\n    background-color: #b3d7ff;\r\n  }\r\n  \r\n  .custom-range::-ms-track {\r\n    width: 100%;\r\n    height: 0.5rem;\r\n    color: transparent;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    border-width: 0.5rem;\r\n  }\r\n  \r\n  .custom-range::-ms-fill-lower {\r\n    background-color: #dee2e6;\r\n    border-radius: 1rem;\r\n  }\r\n  \r\n  .custom-range::-ms-fill-upper {\r\n    margin-right: 15px;\r\n    background-color: #dee2e6;\r\n    border-radius: 1rem;\r\n  }\r\n  \r\n  .custom-range:disabled::-webkit-slider-thumb {\r\n    background-color: #adb5bd;\r\n  }\r\n  \r\n  .custom-range:disabled::-webkit-slider-runnable-track {\r\n    cursor: default;\r\n  }\r\n  \r\n  .custom-range:disabled::-moz-range-thumb {\r\n    background-color: #adb5bd;\r\n  }\r\n  \r\n  .custom-range:disabled::-moz-range-track {\r\n    cursor: default;\r\n  }\r\n  \r\n  .custom-range:disabled::-ms-thumb {\r\n    background-color: #adb5bd;\r\n  }\r\n  \r\n  .custom-control-label::before,\r\n  .custom-file-label,\r\n  .custom-select {\r\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .custom-control-label::before,\r\n    .custom-file-label,\r\n    .custom-select {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .nav {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .nav-link {\r\n    display: block;\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  \r\n  .nav-link:hover, .nav-link:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .nav-link.disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    cursor: default;\r\n  }\r\n  \r\n  .nav-tabs {\r\n    border-bottom: 1px solid #dee2e6;\r\n  }\r\n  \r\n  .nav-tabs .nav-item {\r\n    margin-bottom: -1px;\r\n  }\r\n  \r\n  .nav-tabs .nav-link {\r\n    border: 1px solid transparent;\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n  }\r\n  \r\n  .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\r\n    border-color: #e9ecef #e9ecef #dee2e6;\r\n  }\r\n  \r\n  .nav-tabs .nav-link.disabled {\r\n    color: #6c757d;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n  }\r\n  \r\n  .nav-tabs .nav-link.active,\r\n  .nav-tabs .nav-item.show .nav-link {\r\n    color: #495057;\r\n    background-color: #fff;\r\n    border-color: #dee2e6 #dee2e6 #fff;\r\n  }\r\n  \r\n  .nav-tabs .dropdown-menu {\r\n    margin-top: -1px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  \r\n  .nav-pills .nav-link {\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .nav-pills .nav-link.active,\r\n  .nav-pills .show > .nav-link {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n  }\r\n  \r\n  .nav-fill > .nav-link,\r\n  .nav-fill .nav-item {\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    text-align: center;\r\n  }\r\n  \r\n  .nav-justified > .nav-link,\r\n  .nav-justified .nav-item {\r\n    -ms-flex-preferred-size: 0;\r\n    flex-basis: 0;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    text-align: center;\r\n  }\r\n  \r\n  .tab-content > .tab-pane {\r\n    display: none;\r\n  }\r\n  \r\n  .tab-content > .active {\r\n    display: block;\r\n  }\r\n  \r\n  .navbar {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: 0.5rem 1rem;\r\n  }\r\n  \r\n  .navbar .container,\r\n  .navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .navbar-brand {\r\n    display: inline-block;\r\n    padding-top: 0.3125rem;\r\n    padding-bottom: 0.3125rem;\r\n    margin-right: 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: inherit;\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .navbar-brand:hover, .navbar-brand:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .navbar-nav {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .navbar-nav .nav-link {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  \r\n  .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  \r\n  .navbar-text {\r\n    display: inline-block;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n  }\r\n  \r\n  .navbar-collapse {\r\n    -ms-flex-preferred-size: 100%;\r\n    flex-basis: 100%;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .navbar-toggler {\r\n    padding: 0.25rem 0.75rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .navbar-toggler:hover, .navbar-toggler:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .navbar-toggler-icon {\r\n    display: inline-block;\r\n    width: 1.5em;\r\n    height: 1.5em;\r\n    vertical-align: middle;\r\n    content: \"\";\r\n    background: no-repeat center center;\r\n    background-size: 100% 100%;\r\n  }\r\n  \r\n  @media (max-width: 575.98px) {\r\n    .navbar-expand-sm > .container,\r\n    .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\r\n      padding-right: 0;\r\n      padding-left: 0;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .navbar-expand-sm {\r\n      -ms-flex-flow: row nowrap;\r\n      flex-flow: row nowrap;\r\n      -ms-flex-pack: start;\r\n      justify-content: flex-start;\r\n    }\r\n    .navbar-expand-sm .navbar-nav {\r\n      -ms-flex-direction: row;\r\n      flex-direction: row;\r\n    }\r\n    .navbar-expand-sm .navbar-nav .dropdown-menu {\r\n      position: absolute;\r\n    }\r\n    .navbar-expand-sm .navbar-nav .nav-link {\r\n      padding-right: 0.5rem;\r\n      padding-left: 0.5rem;\r\n    }\r\n    .navbar-expand-sm > .container,\r\n    .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl {\r\n      -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n    }\r\n    .navbar-expand-sm .navbar-collapse {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n      -ms-flex-preferred-size: auto;\r\n      flex-basis: auto;\r\n    }\r\n    .navbar-expand-sm .navbar-toggler {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 767.98px) {\r\n    .navbar-expand-md > .container,\r\n    .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\r\n      padding-right: 0;\r\n      padding-left: 0;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .navbar-expand-md {\r\n      -ms-flex-flow: row nowrap;\r\n      flex-flow: row nowrap;\r\n      -ms-flex-pack: start;\r\n      justify-content: flex-start;\r\n    }\r\n    .navbar-expand-md .navbar-nav {\r\n      -ms-flex-direction: row;\r\n      flex-direction: row;\r\n    }\r\n    .navbar-expand-md .navbar-nav .dropdown-menu {\r\n      position: absolute;\r\n    }\r\n    .navbar-expand-md .navbar-nav .nav-link {\r\n      padding-right: 0.5rem;\r\n      padding-left: 0.5rem;\r\n    }\r\n    .navbar-expand-md > .container,\r\n    .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl {\r\n      -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n    }\r\n    .navbar-expand-md .navbar-collapse {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n      -ms-flex-preferred-size: auto;\r\n      flex-basis: auto;\r\n    }\r\n    .navbar-expand-md .navbar-toggler {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 991.98px) {\r\n    .navbar-expand-lg > .container,\r\n    .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\r\n      padding-right: 0;\r\n      padding-left: 0;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .navbar-expand-lg {\r\n      -ms-flex-flow: row nowrap;\r\n      flex-flow: row nowrap;\r\n      -ms-flex-pack: start;\r\n      justify-content: flex-start;\r\n    }\r\n    .navbar-expand-lg .navbar-nav {\r\n      -ms-flex-direction: row;\r\n      flex-direction: row;\r\n    }\r\n    .navbar-expand-lg .navbar-nav .dropdown-menu {\r\n      position: absolute;\r\n    }\r\n    .navbar-expand-lg .navbar-nav .nav-link {\r\n      padding-right: 0.5rem;\r\n      padding-left: 0.5rem;\r\n    }\r\n    .navbar-expand-lg > .container,\r\n    .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl {\r\n      -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n    }\r\n    .navbar-expand-lg .navbar-collapse {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n      -ms-flex-preferred-size: auto;\r\n      flex-basis: auto;\r\n    }\r\n    .navbar-expand-lg .navbar-toggler {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 1199.98px) {\r\n    .navbar-expand-xl > .container,\r\n    .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\r\n      padding-right: 0;\r\n      padding-left: 0;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .navbar-expand-xl {\r\n      -ms-flex-flow: row nowrap;\r\n      flex-flow: row nowrap;\r\n      -ms-flex-pack: start;\r\n      justify-content: flex-start;\r\n    }\r\n    .navbar-expand-xl .navbar-nav {\r\n      -ms-flex-direction: row;\r\n      flex-direction: row;\r\n    }\r\n    .navbar-expand-xl .navbar-nav .dropdown-menu {\r\n      position: absolute;\r\n    }\r\n    .navbar-expand-xl .navbar-nav .nav-link {\r\n      padding-right: 0.5rem;\r\n      padding-left: 0.5rem;\r\n    }\r\n    .navbar-expand-xl > .container,\r\n    .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl {\r\n      -ms-flex-wrap: nowrap;\r\n      flex-wrap: nowrap;\r\n    }\r\n    .navbar-expand-xl .navbar-collapse {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n      -ms-flex-preferred-size: auto;\r\n      flex-basis: auto;\r\n    }\r\n    .navbar-expand-xl .navbar-toggler {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  .navbar-expand {\r\n    -ms-flex-flow: row nowrap;\r\n    flex-flow: row nowrap;\r\n    -ms-flex-pack: start;\r\n    justify-content: flex-start;\r\n  }\r\n  \r\n  .navbar-expand > .container,\r\n  .navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n  \r\n  .navbar-expand .navbar-nav {\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .navbar-expand .navbar-nav .dropdown-menu {\r\n    position: absolute;\r\n  }\r\n  \r\n  .navbar-expand .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\r\n  }\r\n  \r\n  .navbar-expand > .container,\r\n  .navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n  }\r\n  \r\n  .navbar-expand .navbar-collapse {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -ms-flex-preferred-size: auto;\r\n    flex-basis: auto;\r\n  }\r\n  \r\n  .navbar-expand .navbar-toggler {\r\n    display: none;\r\n  }\r\n  \r\n  .navbar-light .navbar-brand {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  .navbar-light .navbar-nav .nav-link {\r\n    color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\r\n    color: rgba(0, 0, 0, 0.7);\r\n  }\r\n  \r\n  .navbar-light .navbar-nav .nav-link.disabled {\r\n    color: rgba(0, 0, 0, 0.3);\r\n  }\r\n  \r\n  .navbar-light .navbar-nav .show > .nav-link,\r\n  .navbar-light .navbar-nav .active > .nav-link,\r\n  .navbar-light .navbar-nav .nav-link.show,\r\n  .navbar-light .navbar-nav .nav-link.active {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  .navbar-light .navbar-toggler {\r\n    color: rgba(0, 0, 0, 0.5);\r\n    border-color: rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .navbar-light .navbar-toggler-icon {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n  }\r\n  \r\n  .navbar-light .navbar-text {\r\n    color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .navbar-light .navbar-text a {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\r\n    color: rgba(0, 0, 0, 0.9);\r\n  }\r\n  \r\n  .navbar-dark .navbar-brand {\r\n    color: #fff;\r\n  }\r\n  \r\n  .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\r\n    color: #fff;\r\n  }\r\n  \r\n  .navbar-dark .navbar-nav .nav-link {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  \r\n  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\r\n    color: rgba(255, 255, 255, 0.75);\r\n  }\r\n  \r\n  .navbar-dark .navbar-nav .nav-link.disabled {\r\n    color: rgba(255, 255, 255, 0.25);\r\n  }\r\n  \r\n  .navbar-dark .navbar-nav .show > .nav-link,\r\n  .navbar-dark .navbar-nav .active > .nav-link,\r\n  .navbar-dark .navbar-nav .nav-link.show,\r\n  .navbar-dark .navbar-nav .nav-link.active {\r\n    color: #fff;\r\n  }\r\n  \r\n  .navbar-dark .navbar-toggler {\r\n    color: rgba(255, 255, 255, 0.5);\r\n    border-color: rgba(255, 255, 255, 0.1);\r\n  }\r\n  \r\n  .navbar-dark .navbar-toggler-icon {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\r\n  }\r\n  \r\n  .navbar-dark .navbar-text {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  \r\n  .navbar-dark .navbar-text a {\r\n    color: #fff;\r\n  }\r\n  \r\n  .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\r\n    color: #fff;\r\n  }\r\n  \r\n  .card {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .card > hr {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .card > .list-group {\r\n    border-top: inherit;\r\n    border-bottom: inherit;\r\n  }\r\n  \r\n  .card > .list-group:first-child {\r\n    border-top-width: 0;\r\n    border-top-left-radius: calc(0.25rem - 1px);\r\n    border-top-right-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card > .list-group:last-child {\r\n    border-bottom-width: 0;\r\n    border-bottom-right-radius: calc(0.25rem - 1px);\r\n    border-bottom-left-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card > .card-header + .list-group,\r\n  .card > .list-group + .card-footer {\r\n    border-top: 0;\r\n  }\r\n  \r\n  .card-body {\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    min-height: 1px;\r\n    padding: 1.25rem;\r\n  }\r\n  \r\n  .card-title {\r\n    margin-bottom: 0.75rem;\r\n  }\r\n  \r\n  .card-subtitle {\r\n    margin-top: -0.375rem;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .card-text:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .card-link:hover {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .card-link + .card-link {\r\n    margin-left: 1.25rem;\r\n  }\r\n  \r\n  .card-header {\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n  }\r\n  \r\n  .card-header:first-child {\r\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n  }\r\n  \r\n  .card-footer {\r\n    padding: 0.75rem 1.25rem;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    border-top: 1px solid rgba(0, 0, 0, 0.125);\r\n  }\r\n  \r\n  .card-footer:last-child {\r\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-header-tabs {\r\n    margin-right: -0.625rem;\r\n    margin-bottom: -0.75rem;\r\n    margin-left: -0.625rem;\r\n    border-bottom: 0;\r\n  }\r\n  \r\n  .card-header-pills {\r\n    margin-right: -0.625rem;\r\n    margin-left: -0.625rem;\r\n  }\r\n  \r\n  .card-img-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1.25rem;\r\n    border-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-img,\r\n  .card-img-top,\r\n  .card-img-bottom {\r\n    -ms-flex-negative: 0;\r\n    flex-shrink: 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  .card-img,\r\n  .card-img-top {\r\n    border-top-left-radius: calc(0.25rem - 1px);\r\n    border-top-right-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-img,\r\n  .card-img-bottom {\r\n    border-bottom-right-radius: calc(0.25rem - 1px);\r\n    border-bottom-left-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-deck .card {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-deck {\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-flow: row wrap;\r\n      flex-flow: row wrap;\r\n      margin-right: -15px;\r\n      margin-left: -15px;\r\n    }\r\n    .card-deck .card {\r\n      -ms-flex: 1 0 0%;\r\n      flex: 1 0 0%;\r\n      margin-right: 15px;\r\n      margin-bottom: 0;\r\n      margin-left: 15px;\r\n    }\r\n  }\r\n  \r\n  .card-group > .card {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-group {\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -ms-flex-flow: row wrap;\r\n      flex-flow: row wrap;\r\n    }\r\n    .card-group > .card {\r\n      -ms-flex: 1 0 0%;\r\n      flex: 1 0 0%;\r\n      margin-bottom: 0;\r\n    }\r\n    .card-group > .card + .card {\r\n      margin-left: 0;\r\n      border-left: 0;\r\n    }\r\n    .card-group > .card:not(:last-child) {\r\n      border-top-right-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n    }\r\n    .card-group > .card:not(:last-child) .card-img-top,\r\n    .card-group > .card:not(:last-child) .card-header {\r\n      border-top-right-radius: 0;\r\n    }\r\n    .card-group > .card:not(:last-child) .card-img-bottom,\r\n    .card-group > .card:not(:last-child) .card-footer {\r\n      border-bottom-right-radius: 0;\r\n    }\r\n    .card-group > .card:not(:first-child) {\r\n      border-top-left-radius: 0;\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .card-group > .card:not(:first-child) .card-img-top,\r\n    .card-group > .card:not(:first-child) .card-header {\r\n      border-top-left-radius: 0;\r\n    }\r\n    .card-group > .card:not(:first-child) .card-img-bottom,\r\n    .card-group > .card:not(:first-child) .card-footer {\r\n      border-bottom-left-radius: 0;\r\n    }\r\n  }\r\n  \r\n  .card-columns .card {\r\n    margin-bottom: 0.75rem;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-columns {\r\n      -webkit-column-count: 3;\r\n      -moz-column-count: 3;\r\n      column-count: 3;\r\n      -webkit-column-gap: 1.25rem;\r\n      -moz-column-gap: 1.25rem;\r\n      column-gap: 1.25rem;\r\n      orphans: 1;\r\n      widows: 1;\r\n    }\r\n    .card-columns .card {\r\n      display: inline-block;\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n  .accordion {\r\n    overflow-anchor: none;\r\n  }\r\n  \r\n  .accordion > .card {\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .accordion > .card:not(:last-of-type) {\r\n    border-bottom: 0;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .accordion > .card:not(:first-of-type) {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  \r\n  .accordion > .card > .card-header {\r\n    border-radius: 0;\r\n    margin-bottom: -1px;\r\n  }\r\n  \r\n  .breadcrumb {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    padding: 0.75rem 1rem;\r\n    margin-bottom: 1rem;\r\n    list-style: none;\r\n    background-color: #e9ecef;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .breadcrumb-item {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n  }\r\n  \r\n  .breadcrumb-item + .breadcrumb-item {\r\n    padding-left: 0.5rem;\r\n  }\r\n  \r\n  .breadcrumb-item + .breadcrumb-item::before {\r\n    display: inline-block;\r\n    padding-right: 0.5rem;\r\n    color: #6c757d;\r\n    content: \"/\";\r\n  }\r\n  \r\n  .breadcrumb-item + .breadcrumb-item:hover::before {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .breadcrumb-item + .breadcrumb-item:hover::before {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .breadcrumb-item.active {\r\n    color: #6c757d;\r\n  }\r\n  \r\n  .pagination {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding-left: 0;\r\n    list-style: none;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .page-link {\r\n    position: relative;\r\n    display: block;\r\n    padding: 0.5rem 0.75rem;\r\n    margin-left: -1px;\r\n    line-height: 1.25;\r\n    color: #007bff;\r\n    background-color: #fff;\r\n    border: 1px solid #dee2e6;\r\n  }\r\n  \r\n  .page-link:hover {\r\n    z-index: 2;\r\n    color: #0056b3;\r\n    text-decoration: none;\r\n    background-color: #e9ecef;\r\n    border-color: #dee2e6;\r\n  }\r\n  \r\n  .page-link:focus {\r\n    z-index: 3;\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n  \r\n  .page-item:first-child .page-link {\r\n    margin-left: 0;\r\n    border-top-left-radius: 0.25rem;\r\n    border-bottom-left-radius: 0.25rem;\r\n  }\r\n  \r\n  .page-item:last-child .page-link {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-right-radius: 0.25rem;\r\n  }\r\n  \r\n  .page-item.active .page-link {\r\n    z-index: 3;\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  .page-item.disabled .page-link {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    cursor: auto;\r\n    background-color: #fff;\r\n    border-color: #dee2e6;\r\n  }\r\n  \r\n  .pagination-lg .page-link {\r\n    padding: 0.75rem 1.5rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .pagination-lg .page-item:first-child .page-link {\r\n    border-top-left-radius: 0.3rem;\r\n    border-bottom-left-radius: 0.3rem;\r\n  }\r\n  \r\n  .pagination-lg .page-item:last-child .page-link {\r\n    border-top-right-radius: 0.3rem;\r\n    border-bottom-right-radius: 0.3rem;\r\n  }\r\n  \r\n  .pagination-sm .page-link {\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .pagination-sm .page-item:first-child .page-link {\r\n    border-top-left-radius: 0.2rem;\r\n    border-bottom-left-radius: 0.2rem;\r\n  }\r\n  \r\n  .pagination-sm .page-item:last-child .page-link {\r\n    border-top-right-radius: 0.2rem;\r\n    border-bottom-right-radius: 0.2rem;\r\n  }\r\n  \r\n  .badge {\r\n    display: inline-block;\r\n    padding: 0.25em 0.4em;\r\n    font-size: 75%;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    border-radius: 0.25rem;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .badge {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  a.badge:hover, a.badge:focus {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .badge:empty {\r\n    display: none;\r\n  }\r\n  \r\n  .btn .badge {\r\n    position: relative;\r\n    top: -1px;\r\n  }\r\n  \r\n  .badge-pill {\r\n    padding-right: 0.6em;\r\n    padding-left: 0.6em;\r\n    border-radius: 10rem;\r\n  }\r\n  \r\n  .badge-primary {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n  }\r\n  \r\n  a.badge-primary:hover, a.badge-primary:focus {\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n  }\r\n  \r\n  a.badge-primary:focus, a.badge-primary.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n  }\r\n  \r\n  .badge-secondary {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n  }\r\n  \r\n  a.badge-secondary:hover, a.badge-secondary:focus {\r\n    color: #fff;\r\n    background-color: #545b62;\r\n  }\r\n  \r\n  a.badge-secondary:focus, a.badge-secondary.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\r\n  }\r\n  \r\n  .badge-success {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n  }\r\n  \r\n  a.badge-success:hover, a.badge-success:focus {\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n  }\r\n  \r\n  a.badge-success:focus, a.badge-success.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n  }\r\n  \r\n  .badge-info {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n  }\r\n  \r\n  a.badge-info:hover, a.badge-info:focus {\r\n    color: #fff;\r\n    background-color: #117a8b;\r\n  }\r\n  \r\n  a.badge-info:focus, a.badge-info.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n  }\r\n  \r\n  .badge-warning {\r\n    color: #212529;\r\n    background-color: #ffc107;\r\n  }\r\n  \r\n  a.badge-warning:hover, a.badge-warning:focus {\r\n    color: #212529;\r\n    background-color: #d39e00;\r\n  }\r\n  \r\n  a.badge-warning:focus, a.badge-warning.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n  }\r\n  \r\n  .badge-danger {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n  }\r\n  \r\n  a.badge-danger:hover, a.badge-danger:focus {\r\n    color: #fff;\r\n    background-color: #bd2130;\r\n  }\r\n  \r\n  a.badge-danger:focus, a.badge-danger.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n  }\r\n  \r\n  .badge-light {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n  }\r\n  \r\n  a.badge-light:hover, a.badge-light:focus {\r\n    color: #212529;\r\n    background-color: #dae0e5;\r\n  }\r\n  \r\n  a.badge-light:focus, a.badge-light.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n  }\r\n  \r\n  .badge-dark {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n  }\r\n  \r\n  a.badge-dark:hover, a.badge-dark:focus {\r\n    color: #fff;\r\n    background-color: #1d2124;\r\n  }\r\n  \r\n  a.badge-dark:focus, a.badge-dark.focus {\r\n    outline: 0;\r\n    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n  }\r\n  \r\n  .jumbotron {\r\n    padding: 2rem 1rem;\r\n    margin-bottom: 2rem;\r\n    background-color: #e9ecef;\r\n    border-radius: 0.3rem;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .jumbotron {\r\n      padding: 4rem 2rem;\r\n    }\r\n  }\r\n  \r\n  .jumbotron-fluid {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .alert {\r\n    position: relative;\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 1rem;\r\n    border: 1px solid transparent;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .alert-heading {\r\n    color: inherit;\r\n  }\r\n  \r\n  .alert-link {\r\n    font-weight: 700;\r\n  }\r\n  \r\n  .alert-dismissible {\r\n    padding-right: 4rem;\r\n  }\r\n  \r\n  .alert-dismissible .close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    padding: 0.75rem 1.25rem;\r\n    color: inherit;\r\n  }\r\n  \r\n  .alert-primary {\r\n    color: #004085;\r\n    background-color: #cce5ff;\r\n    border-color: #b8daff;\r\n  }\r\n  \r\n  .alert-primary hr {\r\n    border-top-color: #9fcdff;\r\n  }\r\n  \r\n  .alert-primary .alert-link {\r\n    color: #002752;\r\n  }\r\n  \r\n  .alert-secondary {\r\n    color: #383d41;\r\n    background-color: #e2e3e5;\r\n    border-color: #d6d8db;\r\n  }\r\n  \r\n  .alert-secondary hr {\r\n    border-top-color: #c8cbcf;\r\n  }\r\n  \r\n  .alert-secondary .alert-link {\r\n    color: #202326;\r\n  }\r\n  \r\n  .alert-success {\r\n    color: #155724;\r\n    background-color: #d4edda;\r\n    border-color: #c3e6cb;\r\n  }\r\n  \r\n  .alert-success hr {\r\n    border-top-color: #b1dfbb;\r\n  }\r\n  \r\n  .alert-success .alert-link {\r\n    color: #0b2e13;\r\n  }\r\n  \r\n  .alert-info {\r\n    color: #0c5460;\r\n    background-color: #d1ecf1;\r\n    border-color: #bee5eb;\r\n  }\r\n  \r\n  .alert-info hr {\r\n    border-top-color: #abdde5;\r\n  }\r\n  \r\n  .alert-info .alert-link {\r\n    color: #062c33;\r\n  }\r\n  \r\n  .alert-warning {\r\n    color: #856404;\r\n    background-color: #fff3cd;\r\n    border-color: #ffeeba;\r\n  }\r\n  \r\n  .alert-warning hr {\r\n    border-top-color: #ffe8a1;\r\n  }\r\n  \r\n  .alert-warning .alert-link {\r\n    color: #533f03;\r\n  }\r\n  \r\n  .alert-danger {\r\n    color: #721c24;\r\n    background-color: #f8d7da;\r\n    border-color: #f5c6cb;\r\n  }\r\n  \r\n  .alert-danger hr {\r\n    border-top-color: #f1b0b7;\r\n  }\r\n  \r\n  .alert-danger .alert-link {\r\n    color: #491217;\r\n  }\r\n  \r\n  .alert-light {\r\n    color: #818182;\r\n    background-color: #fefefe;\r\n    border-color: #fdfdfe;\r\n  }\r\n  \r\n  .alert-light hr {\r\n    border-top-color: #ececf6;\r\n  }\r\n  \r\n  .alert-light .alert-link {\r\n    color: #686868;\r\n  }\r\n  \r\n  .alert-dark {\r\n    color: #1b1e21;\r\n    background-color: #d6d8d9;\r\n    border-color: #c6c8ca;\r\n  }\r\n  \r\n  .alert-dark hr {\r\n    border-top-color: #b9bbbe;\r\n  }\r\n  \r\n  .alert-dark .alert-link {\r\n    color: #040505;\r\n  }\r\n  \r\n  @-webkit-keyframes progress-bar-stripes {\r\n    from {\r\n      background-position: 1rem 0;\r\n    }\r\n    to {\r\n      background-position: 0 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes progress-bar-stripes {\r\n    from {\r\n      background-position: 1rem 0;\r\n    }\r\n    to {\r\n      background-position: 0 0;\r\n    }\r\n  }\r\n  \r\n  .progress {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 1rem;\r\n    overflow: hidden;\r\n    line-height: 0;\r\n    font-size: 0.75rem;\r\n    background-color: #e9ecef;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .progress-bar {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    background-color: #007bff;\r\n    transition: width 0.6s ease;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .progress-bar {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .progress-bar-striped {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n    background-size: 1rem 1rem;\r\n  }\r\n  \r\n  .progress-bar-animated {\r\n    -webkit-animation: progress-bar-stripes 1s linear infinite;\r\n    animation: progress-bar-stripes 1s linear infinite;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .progress-bar-animated {\r\n      -webkit-animation: none;\r\n      animation: none;\r\n    }\r\n  }\r\n  \r\n  .media {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: start;\r\n    align-items: flex-start;\r\n  }\r\n  \r\n  .media-body {\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n  }\r\n  \r\n  .list-group {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .list-group-item-action {\r\n    width: 100%;\r\n    color: #495057;\r\n    text-align: inherit;\r\n  }\r\n  \r\n  .list-group-item-action:hover, .list-group-item-action:focus {\r\n    z-index: 1;\r\n    color: #495057;\r\n    text-decoration: none;\r\n    background-color: #f8f9fa;\r\n  }\r\n  \r\n  .list-group-item-action:active {\r\n    color: #212529;\r\n    background-color: #e9ecef;\r\n  }\r\n  \r\n  .list-group-item {\r\n    position: relative;\r\n    display: block;\r\n    padding: 0.75rem 1.25rem;\r\n    background-color: #fff;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n  }\r\n  \r\n  .list-group-item:first-child {\r\n    border-top-left-radius: inherit;\r\n    border-top-right-radius: inherit;\r\n  }\r\n  \r\n  .list-group-item:last-child {\r\n    border-bottom-right-radius: inherit;\r\n    border-bottom-left-radius: inherit;\r\n  }\r\n  \r\n  .list-group-item.disabled, .list-group-item:disabled {\r\n    color: #6c757d;\r\n    pointer-events: none;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .list-group-item.active {\r\n    z-index: 2;\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n  \r\n  .list-group-item + .list-group-item {\r\n    border-top-width: 0;\r\n  }\r\n  \r\n  .list-group-item + .list-group-item.active {\r\n    margin-top: -1px;\r\n    border-top-width: 1px;\r\n  }\r\n  \r\n  .list-group-horizontal {\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  \r\n  .list-group-horizontal > .list-group-item:first-child {\r\n    border-bottom-left-radius: 0.25rem;\r\n    border-top-right-radius: 0;\r\n  }\r\n  \r\n  .list-group-horizontal > .list-group-item:last-child {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  \r\n  .list-group-horizontal > .list-group-item.active {\r\n    margin-top: 0;\r\n  }\r\n  \r\n  .list-group-horizontal > .list-group-item + .list-group-item {\r\n    border-top-width: 1px;\r\n    border-left-width: 0;\r\n  }\r\n  \r\n  .list-group-horizontal > .list-group-item + .list-group-item.active {\r\n    margin-left: -1px;\r\n    border-left-width: 1px;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .list-group-horizontal-sm {\r\n      -ms-flex-direction: row;\r\n      flex-direction: row;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item:first-child {\r\n      border-bottom-left-radius: 0.25rem;\r\n      border-top-right-radius: 0;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item:last-child {\r\n      border-top-right-radius: 0.25rem;\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item.active {\r\n      margin-top: 0;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item + .list-group-item {\r\n      border-top-width: 1px;\r\n      border-left-width: 0;\r\n    }\r\n    .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\r\n      margin-left: -1px;\r\n      border-left-width: 1px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .list-group-horizontal-md {\r\n      -ms-flex-direction: row;\r\n      flex-direction: row;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item:first-child {\r\n      border-bottom-left-radius: 0.25rem;\r\n      border-top-right-radius: 0;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item:last-child {\r\n      border-top-right-radius: 0.25rem;\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item.active {\r\n      margin-top: 0;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item + .list-group-item {\r\n      border-top-width: 1px;\r\n      border-left-width: 0;\r\n    }\r\n    .list-group-horizontal-md > .list-group-item + .list-group-item.active {\r\n      margin-left: -1px;\r\n      border-left-width: 1px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .list-group-horizontal-lg {\r\n      -ms-flex-direction: row;\r\n      flex-direction: row;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item:first-child {\r\n      border-bottom-left-radius: 0.25rem;\r\n      border-top-right-radius: 0;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item:last-child {\r\n      border-top-right-radius: 0.25rem;\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item.active {\r\n      margin-top: 0;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item + .list-group-item {\r\n      border-top-width: 1px;\r\n      border-left-width: 0;\r\n    }\r\n    .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\r\n      margin-left: -1px;\r\n      border-left-width: 1px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .list-group-horizontal-xl {\r\n      -ms-flex-direction: row;\r\n      flex-direction: row;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item:first-child {\r\n      border-bottom-left-radius: 0.25rem;\r\n      border-top-right-radius: 0;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item:last-child {\r\n      border-top-right-radius: 0.25rem;\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item.active {\r\n      margin-top: 0;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item + .list-group-item {\r\n      border-top-width: 1px;\r\n      border-left-width: 0;\r\n    }\r\n    .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\r\n      margin-left: -1px;\r\n      border-left-width: 1px;\r\n    }\r\n  }\r\n  \r\n  .list-group-flush {\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .list-group-flush > .list-group-item {\r\n    border-width: 0 0 1px;\r\n  }\r\n  \r\n  .list-group-flush > .list-group-item:last-child {\r\n    border-bottom-width: 0;\r\n  }\r\n  \r\n  .list-group-item-primary {\r\n    color: #004085;\r\n    background-color: #b8daff;\r\n  }\r\n  \r\n  .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\r\n    color: #004085;\r\n    background-color: #9fcdff;\r\n  }\r\n  \r\n  .list-group-item-primary.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #004085;\r\n    border-color: #004085;\r\n  }\r\n  \r\n  .list-group-item-secondary {\r\n    color: #383d41;\r\n    background-color: #d6d8db;\r\n  }\r\n  \r\n  .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\r\n    color: #383d41;\r\n    background-color: #c8cbcf;\r\n  }\r\n  \r\n  .list-group-item-secondary.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #383d41;\r\n    border-color: #383d41;\r\n  }\r\n  \r\n  .list-group-item-success {\r\n    color: #155724;\r\n    background-color: #c3e6cb;\r\n  }\r\n  \r\n  .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\r\n    color: #155724;\r\n    background-color: #b1dfbb;\r\n  }\r\n  \r\n  .list-group-item-success.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #155724;\r\n    border-color: #155724;\r\n  }\r\n  \r\n  .list-group-item-info {\r\n    color: #0c5460;\r\n    background-color: #bee5eb;\r\n  }\r\n  \r\n  .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\r\n    color: #0c5460;\r\n    background-color: #abdde5;\r\n  }\r\n  \r\n  .list-group-item-info.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #0c5460;\r\n    border-color: #0c5460;\r\n  }\r\n  \r\n  .list-group-item-warning {\r\n    color: #856404;\r\n    background-color: #ffeeba;\r\n  }\r\n  \r\n  .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\r\n    color: #856404;\r\n    background-color: #ffe8a1;\r\n  }\r\n  \r\n  .list-group-item-warning.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #856404;\r\n    border-color: #856404;\r\n  }\r\n  \r\n  .list-group-item-danger {\r\n    color: #721c24;\r\n    background-color: #f5c6cb;\r\n  }\r\n  \r\n  .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\r\n    color: #721c24;\r\n    background-color: #f1b0b7;\r\n  }\r\n  \r\n  .list-group-item-danger.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #721c24;\r\n    border-color: #721c24;\r\n  }\r\n  \r\n  .list-group-item-light {\r\n    color: #818182;\r\n    background-color: #fdfdfe;\r\n  }\r\n  \r\n  .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\r\n    color: #818182;\r\n    background-color: #ececf6;\r\n  }\r\n  \r\n  .list-group-item-light.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #818182;\r\n    border-color: #818182;\r\n  }\r\n  \r\n  .list-group-item-dark {\r\n    color: #1b1e21;\r\n    background-color: #c6c8ca;\r\n  }\r\n  \r\n  .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\r\n    color: #1b1e21;\r\n    background-color: #b9bbbe;\r\n  }\r\n  \r\n  .list-group-item-dark.list-group-item-action.active {\r\n    color: #fff;\r\n    background-color: #1b1e21;\r\n    border-color: #1b1e21;\r\n  }\r\n  \r\n  .close {\r\n    float: right;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    opacity: .5;\r\n  }\r\n  \r\n  .close:hover {\r\n    color: #000;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus {\r\n    opacity: .75;\r\n  }\r\n  \r\n  button.close {\r\n    padding: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n  \r\n  a.close.disabled {\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .toast {\r\n    -ms-flex-preferred-size: 350px;\r\n    flex-basis: 350px;\r\n    max-width: 350px;\r\n    font-size: 0.875rem;\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);\r\n    opacity: 0;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .toast:not(:last-child) {\r\n    margin-bottom: 0.75rem;\r\n  }\r\n  \r\n  .toast.showing {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .toast.show {\r\n    display: block;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .toast.hide {\r\n    display: none;\r\n  }\r\n  \r\n  .toast-header {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding: 0.25rem 0.75rem;\r\n    color: #6c757d;\r\n    background-color: rgba(255, 255, 255, 0.85);\r\n    background-clip: padding-box;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n    border-top-left-radius: calc(0.25rem - 1px);\r\n    border-top-right-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .toast-body {\r\n    padding: 0.75rem;\r\n  }\r\n  \r\n  .modal-open {\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .modal-open .modal {\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  .modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    outline: 0;\r\n  }\r\n  \r\n  .modal-dialog {\r\n    position: relative;\r\n    width: auto;\r\n    margin: 0.5rem;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .modal.fade .modal-dialog {\r\n    transition: -webkit-transform 0.3s ease-out;\r\n    transition: transform 0.3s ease-out;\r\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\r\n    -webkit-transform: translate(0, -50px);\r\n    transform: translate(0, -50px);\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .modal.fade .modal-dialog {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .modal.show .modal-dialog {\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n  \r\n  .modal.modal-static .modal-dialog {\r\n    -webkit-transform: scale(1.02);\r\n    transform: scale(1.02);\r\n  }\r\n  \r\n  .modal-dialog-scrollable {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    max-height: calc(100% - 1rem);\r\n  }\r\n  \r\n  .modal-dialog-scrollable .modal-content {\r\n    max-height: calc(100vh - 1rem);\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .modal-dialog-scrollable .modal-header,\r\n  .modal-dialog-scrollable .modal-footer {\r\n    -ms-flex-negative: 0;\r\n    flex-shrink: 0;\r\n  }\r\n  \r\n  .modal-dialog-scrollable .modal-body {\r\n    overflow-y: auto;\r\n  }\r\n  \r\n  .modal-dialog-centered {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    min-height: calc(100% - 1rem);\r\n  }\r\n  \r\n  .modal-dialog-centered::before {\r\n    display: block;\r\n    height: calc(100vh - 1rem);\r\n    height: -webkit-min-content;\r\n    height: -moz-min-content;\r\n    height: min-content;\r\n    content: \"\";\r\n  }\r\n  \r\n  .modal-dialog-centered.modal-dialog-scrollable {\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n  }\r\n  \r\n  .modal-dialog-centered.modal-dialog-scrollable .modal-content {\r\n    max-height: none;\r\n  }\r\n  \r\n  .modal-dialog-centered.modal-dialog-scrollable::before {\r\n    content: none;\r\n  }\r\n  \r\n  .modal-content {\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    pointer-events: auto;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.3rem;\r\n    outline: 0;\r\n  }\r\n  \r\n  .modal-backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1040;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: #000;\r\n  }\r\n  \r\n  .modal-backdrop.fade {\r\n    opacity: 0;\r\n  }\r\n  \r\n  .modal-backdrop.show {\r\n    opacity: 0.5;\r\n  }\r\n  \r\n  .modal-header {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: start;\r\n    align-items: flex-start;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: 1rem 1rem;\r\n    border-bottom: 1px solid #dee2e6;\r\n    border-top-left-radius: calc(0.3rem - 1px);\r\n    border-top-right-radius: calc(0.3rem - 1px);\r\n  }\r\n  \r\n  .modal-header .close {\r\n    padding: 1rem 1rem;\r\n    margin: -1rem -1rem -1rem auto;\r\n  }\r\n  \r\n  .modal-title {\r\n    margin-bottom: 0;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .modal-body {\r\n    position: relative;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n    padding: 1rem;\r\n  }\r\n  \r\n  .modal-footer {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: end;\r\n    justify-content: flex-end;\r\n    padding: 0.75rem;\r\n    border-top: 1px solid #dee2e6;\r\n    border-bottom-right-radius: calc(0.3rem - 1px);\r\n    border-bottom-left-radius: calc(0.3rem - 1px);\r\n  }\r\n  \r\n  .modal-footer > * {\r\n    margin: 0.25rem;\r\n  }\r\n  \r\n  .modal-scrollbar-measure {\r\n    position: absolute;\r\n    top: -9999px;\r\n    width: 50px;\r\n    height: 50px;\r\n    overflow: scroll;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .modal-dialog {\r\n      max-width: 500px;\r\n      margin: 1.75rem auto;\r\n    }\r\n    .modal-dialog-scrollable {\r\n      max-height: calc(100% - 3.5rem);\r\n    }\r\n    .modal-dialog-scrollable .modal-content {\r\n      max-height: calc(100vh - 3.5rem);\r\n    }\r\n    .modal-dialog-centered {\r\n      min-height: calc(100% - 3.5rem);\r\n    }\r\n    .modal-dialog-centered::before {\r\n      height: calc(100vh - 3.5rem);\r\n      height: -webkit-min-content;\r\n      height: -moz-min-content;\r\n      height: min-content;\r\n    }\r\n    .modal-sm {\r\n      max-width: 300px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .modal-lg,\r\n    .modal-xl {\r\n      max-width: 800px;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .modal-xl {\r\n      max-width: 1140px;\r\n    }\r\n  }\r\n  \r\n  .tooltip {\r\n    position: absolute;\r\n    z-index: 1070;\r\n    display: block;\r\n    margin: 0;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    text-align: left;\r\n    text-align: start;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-break: normal;\r\n    word-spacing: normal;\r\n    white-space: normal;\r\n    line-break: auto;\r\n    font-size: 0.875rem;\r\n    word-wrap: break-word;\r\n    opacity: 0;\r\n  }\r\n  \r\n  .tooltip.show {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .tooltip .arrow {\r\n    position: absolute;\r\n    display: block;\r\n    width: 0.8rem;\r\n    height: 0.4rem;\r\n  }\r\n  \r\n  .tooltip .arrow::before {\r\n    position: absolute;\r\n    content: \"\";\r\n    border-color: transparent;\r\n    border-style: solid;\r\n  }\r\n  \r\n  .bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\r\n    padding: 0.4rem 0;\r\n  }\r\n  \r\n  .bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\r\n    bottom: 0;\r\n  }\r\n  \r\n  .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\r\n    top: 0;\r\n    border-width: 0.4rem 0.4rem 0;\r\n    border-top-color: #000;\r\n  }\r\n  \r\n  .bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\r\n    padding: 0 0.4rem;\r\n  }\r\n  \r\n  .bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\r\n    left: 0;\r\n    width: 0.4rem;\r\n    height: 0.8rem;\r\n  }\r\n  \r\n  .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\r\n    right: 0;\r\n    border-width: 0.4rem 0.4rem 0.4rem 0;\r\n    border-right-color: #000;\r\n  }\r\n  \r\n  .bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\r\n    padding: 0.4rem 0;\r\n  }\r\n  \r\n  .bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\r\n    top: 0;\r\n  }\r\n  \r\n  .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\r\n    bottom: 0;\r\n    border-width: 0 0.4rem 0.4rem;\r\n    border-bottom-color: #000;\r\n  }\r\n  \r\n  .bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\r\n    padding: 0 0.4rem;\r\n  }\r\n  \r\n  .bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\r\n    right: 0;\r\n    width: 0.4rem;\r\n    height: 0.8rem;\r\n  }\r\n  \r\n  .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\r\n    left: 0;\r\n    border-width: 0.4rem 0 0.4rem 0.4rem;\r\n    border-left-color: #000;\r\n  }\r\n  \r\n  .tooltip-inner {\r\n    max-width: 200px;\r\n    padding: 0.25rem 0.5rem;\r\n    color: #fff;\r\n    text-align: center;\r\n    background-color: #000;\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .popover {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1060;\r\n    display: block;\r\n    max-width: 276px;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    text-align: left;\r\n    text-align: start;\r\n    text-decoration: none;\r\n    text-shadow: none;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-break: normal;\r\n    word-spacing: normal;\r\n    white-space: normal;\r\n    line-break: auto;\r\n    font-size: 0.875rem;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 0.3rem;\r\n  }\r\n  \r\n  .popover .arrow {\r\n    position: absolute;\r\n    display: block;\r\n    width: 1rem;\r\n    height: 0.5rem;\r\n    margin: 0 0.3rem;\r\n  }\r\n  \r\n  .popover .arrow::before, .popover .arrow::after {\r\n    position: absolute;\r\n    display: block;\r\n    content: \"\";\r\n    border-color: transparent;\r\n    border-style: solid;\r\n  }\r\n  \r\n  .bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  \r\n  .bs-popover-top > .arrow, .bs-popover-auto[x-placement^=\"top\"] > .arrow {\r\n    bottom: calc(-0.5rem - 1px);\r\n  }\r\n  \r\n  .bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=\"top\"] > .arrow::before {\r\n    bottom: 0;\r\n    border-width: 0.5rem 0.5rem 0;\r\n    border-top-color: rgba(0, 0, 0, 0.25);\r\n  }\r\n  \r\n  .bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=\"top\"] > .arrow::after {\r\n    bottom: 1px;\r\n    border-width: 0.5rem 0.5rem 0;\r\n    border-top-color: #fff;\r\n  }\r\n  \r\n  .bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\r\n    margin-left: 0.5rem;\r\n  }\r\n  \r\n  .bs-popover-right > .arrow, .bs-popover-auto[x-placement^=\"right\"] > .arrow {\r\n    left: calc(-0.5rem - 1px);\r\n    width: 0.5rem;\r\n    height: 1rem;\r\n    margin: 0.3rem 0;\r\n  }\r\n  \r\n  .bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=\"right\"] > .arrow::before {\r\n    left: 0;\r\n    border-width: 0.5rem 0.5rem 0.5rem 0;\r\n    border-right-color: rgba(0, 0, 0, 0.25);\r\n  }\r\n  \r\n  .bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=\"right\"] > .arrow::after {\r\n    left: 1px;\r\n    border-width: 0.5rem 0.5rem 0.5rem 0;\r\n    border-right-color: #fff;\r\n  }\r\n  \r\n  .bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\r\n    margin-top: 0.5rem;\r\n  }\r\n  \r\n  .bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow {\r\n    top: calc(-0.5rem - 1px);\r\n  }\r\n  \r\n  .bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::before {\r\n    top: 0;\r\n    border-width: 0 0.5rem 0.5rem 0.5rem;\r\n    border-bottom-color: rgba(0, 0, 0, 0.25);\r\n  }\r\n  \r\n  .bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] > .arrow::after {\r\n    top: 1px;\r\n    border-width: 0 0.5rem 0.5rem 0.5rem;\r\n    border-bottom-color: #fff;\r\n  }\r\n  \r\n  .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    display: block;\r\n    width: 1rem;\r\n    margin-left: -0.5rem;\r\n    content: \"\";\r\n    border-bottom: 1px solid #f7f7f7;\r\n  }\r\n  \r\n  .bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\r\n    margin-right: 0.5rem;\r\n  }\r\n  \r\n  .bs-popover-left > .arrow, .bs-popover-auto[x-placement^=\"left\"] > .arrow {\r\n    right: calc(-0.5rem - 1px);\r\n    width: 0.5rem;\r\n    height: 1rem;\r\n    margin: 0.3rem 0;\r\n  }\r\n  \r\n  .bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=\"left\"] > .arrow::before {\r\n    right: 0;\r\n    border-width: 0.5rem 0 0.5rem 0.5rem;\r\n    border-left-color: rgba(0, 0, 0, 0.25);\r\n  }\r\n  \r\n  .bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=\"left\"] > .arrow::after {\r\n    right: 1px;\r\n    border-width: 0.5rem 0 0.5rem 0.5rem;\r\n    border-left-color: #fff;\r\n  }\r\n  \r\n  .popover-header {\r\n    padding: 0.5rem 0.75rem;\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n    background-color: #f7f7f7;\r\n    border-bottom: 1px solid #ebebeb;\r\n    border-top-left-radius: calc(0.3rem - 1px);\r\n    border-top-right-radius: calc(0.3rem - 1px);\r\n  }\r\n  \r\n  .popover-header:empty {\r\n    display: none;\r\n  }\r\n  \r\n  .popover-body {\r\n    padding: 0.5rem 0.75rem;\r\n    color: #212529;\r\n  }\r\n  \r\n  .carousel {\r\n    position: relative;\r\n  }\r\n  \r\n  .carousel.pointer-event {\r\n    -ms-touch-action: pan-y;\r\n    touch-action: pan-y;\r\n  }\r\n  \r\n  .carousel-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .carousel-inner::after {\r\n    display: block;\r\n    clear: both;\r\n    content: \"\";\r\n  }\r\n  \r\n  .carousel-item {\r\n    position: relative;\r\n    display: none;\r\n    float: left;\r\n    width: 100%;\r\n    margin-right: -100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transition: -webkit-transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .carousel-item {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .carousel-item.active,\r\n  .carousel-item-next,\r\n  .carousel-item-prev {\r\n    display: block;\r\n  }\r\n  \r\n  .carousel-item-next:not(.carousel-item-left),\r\n  .active.carousel-item-right {\r\n    -webkit-transform: translateX(100%);\r\n    transform: translateX(100%);\r\n  }\r\n  \r\n  .carousel-item-prev:not(.carousel-item-right),\r\n  .active.carousel-item-left {\r\n    -webkit-transform: translateX(-100%);\r\n    transform: translateX(-100%);\r\n  }\r\n  \r\n  .carousel-fade .carousel-item {\r\n    opacity: 0;\r\n    transition-property: opacity;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n  }\r\n  \r\n  .carousel-fade .carousel-item.active,\r\n  .carousel-fade .carousel-item-next.carousel-item-left,\r\n  .carousel-fade .carousel-item-prev.carousel-item-right {\r\n    z-index: 1;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .carousel-fade .active.carousel-item-left,\r\n  .carousel-fade .active.carousel-item-right {\r\n    z-index: 0;\r\n    opacity: 0;\r\n    transition: opacity 0s 0.6s;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .carousel-fade .active.carousel-item-left,\r\n    .carousel-fade .active.carousel-item-right {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .carousel-control-prev,\r\n  .carousel-control-next {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    width: 15%;\r\n    color: #fff;\r\n    text-align: center;\r\n    opacity: 0.5;\r\n    transition: opacity 0.15s ease;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .carousel-control-prev,\r\n    .carousel-control-next {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .carousel-control-prev:hover, .carousel-control-prev:focus,\r\n  .carousel-control-next:hover,\r\n  .carousel-control-next:focus {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    outline: 0;\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .carousel-control-prev {\r\n    left: 0;\r\n  }\r\n  \r\n  .carousel-control-next {\r\n    right: 0;\r\n  }\r\n  \r\n  .carousel-control-prev-icon,\r\n  .carousel-control-next-icon {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: no-repeat 50% / 100% 100%;\r\n  }\r\n  \r\n  .carousel-control-prev-icon {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\");\r\n  }\r\n  \r\n  .carousel-control-next-icon {\r\n    background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\");\r\n  }\r\n  \r\n  .carousel-indicators {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 15;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    padding-left: 0;\r\n    margin-right: 15%;\r\n    margin-left: 15%;\r\n    list-style: none;\r\n  }\r\n  \r\n  .carousel-indicators li {\r\n    box-sizing: content-box;\r\n    -ms-flex: 0 1 auto;\r\n    flex: 0 1 auto;\r\n    width: 30px;\r\n    height: 3px;\r\n    margin-right: 3px;\r\n    margin-left: 3px;\r\n    text-indent: -999px;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n    opacity: .5;\r\n    transition: opacity 0.6s ease;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: reduce) {\r\n    .carousel-indicators li {\r\n      transition: none;\r\n    }\r\n  }\r\n  \r\n  .carousel-indicators .active {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .carousel-caption {\r\n    position: absolute;\r\n    right: 15%;\r\n    bottom: 20px;\r\n    left: 15%;\r\n    z-index: 10;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    color: #fff;\r\n    text-align: center;\r\n  }\r\n  \r\n  @-webkit-keyframes spinner-border {\r\n    to {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes spinner-border {\r\n    to {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  .spinner-border {\r\n    display: inline-block;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    vertical-align: text-bottom;\r\n    border: 0.25em solid currentColor;\r\n    border-right-color: transparent;\r\n    border-radius: 50%;\r\n    -webkit-animation: spinner-border .75s linear infinite;\r\n    animation: spinner-border .75s linear infinite;\r\n  }\r\n  \r\n  .spinner-border-sm {\r\n    width: 1rem;\r\n    height: 1rem;\r\n    border-width: 0.2em;\r\n  }\r\n  \r\n  @-webkit-keyframes spinner-grow {\r\n    0% {\r\n      -webkit-transform: scale(0);\r\n      transform: scale(0);\r\n    }\r\n    50% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n  @keyframes spinner-grow {\r\n    0% {\r\n      -webkit-transform: scale(0);\r\n      transform: scale(0);\r\n    }\r\n    50% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n  \r\n  .spinner-grow {\r\n    display: inline-block;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    vertical-align: text-bottom;\r\n    background-color: currentColor;\r\n    border-radius: 50%;\r\n    opacity: 0;\r\n    -webkit-animation: spinner-grow .75s linear infinite;\r\n    animation: spinner-grow .75s linear infinite;\r\n  }\r\n  \r\n  .spinner-grow-sm {\r\n    width: 1rem;\r\n    height: 1rem;\r\n  }\r\n  \r\n  .align-baseline {\r\n    vertical-align: baseline !important;\r\n  }\r\n  \r\n  .align-top {\r\n    vertical-align: top !important;\r\n  }\r\n  \r\n  .align-middle {\r\n    vertical-align: middle !important;\r\n  }\r\n  \r\n  .align-bottom {\r\n    vertical-align: bottom !important;\r\n  }\r\n  \r\n  .align-text-bottom {\r\n    vertical-align: text-bottom !important;\r\n  }\r\n  \r\n  .align-text-top {\r\n    vertical-align: text-top !important;\r\n  }\r\n  \r\n  .bg-primary {\r\n    background-color: #007bff !important;\r\n  }\r\n  \r\n  a.bg-primary:hover, a.bg-primary:focus,\r\n  button.bg-primary:hover,\r\n  button.bg-primary:focus {\r\n    background-color: #0062cc !important;\r\n  }\r\n  \r\n  .bg-secondary {\r\n    background-color: #6c757d !important;\r\n  }\r\n  \r\n  a.bg-secondary:hover, a.bg-secondary:focus,\r\n  button.bg-secondary:hover,\r\n  button.bg-secondary:focus {\r\n    background-color: #545b62 !important;\r\n  }\r\n  \r\n  .bg-success {\r\n    background-color: #28a745 !important;\r\n  }\r\n  \r\n  a.bg-success:hover, a.bg-success:focus,\r\n  button.bg-success:hover,\r\n  button.bg-success:focus {\r\n    background-color: #1e7e34 !important;\r\n  }\r\n  \r\n  .bg-info {\r\n    background-color: #17a2b8 !important;\r\n  }\r\n  \r\n  a.bg-info:hover, a.bg-info:focus,\r\n  button.bg-info:hover,\r\n  button.bg-info:focus {\r\n    background-color: #117a8b !important;\r\n  }\r\n  \r\n  .bg-warning {\r\n    background-color: #ffc107 !important;\r\n  }\r\n  \r\n  a.bg-warning:hover, a.bg-warning:focus,\r\n  button.bg-warning:hover,\r\n  button.bg-warning:focus {\r\n    background-color: #d39e00 !important;\r\n  }\r\n  \r\n  .bg-danger {\r\n    background-color: #dc3545 !important;\r\n  }\r\n  \r\n  a.bg-danger:hover, a.bg-danger:focus,\r\n  button.bg-danger:hover,\r\n  button.bg-danger:focus {\r\n    background-color: #bd2130 !important;\r\n  }\r\n  \r\n  .bg-light {\r\n    background-color: #f8f9fa !important;\r\n  }\r\n  \r\n  a.bg-light:hover, a.bg-light:focus,\r\n  button.bg-light:hover,\r\n  button.bg-light:focus {\r\n    background-color: #dae0e5 !important;\r\n  }\r\n  \r\n  .bg-dark {\r\n    background-color: #343a40 !important;\r\n  }\r\n  \r\n  a.bg-dark:hover, a.bg-dark:focus,\r\n  button.bg-dark:hover,\r\n  button.bg-dark:focus {\r\n    background-color: #1d2124 !important;\r\n  }\r\n  \r\n  .bg-white {\r\n    background-color: #fff !important;\r\n  }\r\n  \r\n  .bg-transparent {\r\n    background-color: transparent !important;\r\n  }\r\n  \r\n  .border {\r\n    border: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-top {\r\n    border-top: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-right {\r\n    border-right: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-bottom {\r\n    border-bottom: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-left {\r\n    border-left: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-0 {\r\n    border: 0 !important;\r\n  }\r\n  \r\n  .border-top-0 {\r\n    border-top: 0 !important;\r\n  }\r\n  \r\n  .border-right-0 {\r\n    border-right: 0 !important;\r\n  }\r\n  \r\n  .border-bottom-0 {\r\n    border-bottom: 0 !important;\r\n  }\r\n  \r\n  .border-left-0 {\r\n    border-left: 0 !important;\r\n  }\r\n  \r\n  .border-primary {\r\n    border-color: #007bff !important;\r\n  }\r\n  \r\n  .border-secondary {\r\n    border-color: #6c757d !important;\r\n  }\r\n  \r\n  .border-success {\r\n    border-color: #28a745 !important;\r\n  }\r\n  \r\n  .border-info {\r\n    border-color: #17a2b8 !important;\r\n  }\r\n  \r\n  .border-warning {\r\n    border-color: #ffc107 !important;\r\n  }\r\n  \r\n  .border-danger {\r\n    border-color: #dc3545 !important;\r\n  }\r\n  \r\n  .border-light {\r\n    border-color: #f8f9fa !important;\r\n  }\r\n  \r\n  .border-dark {\r\n    border-color: #343a40 !important;\r\n  }\r\n  \r\n  .border-white {\r\n    border-color: #fff !important;\r\n  }\r\n  \r\n  .rounded-sm {\r\n    border-radius: 0.2rem !important;\r\n  }\r\n  \r\n  .rounded {\r\n    border-radius: 0.25rem !important;\r\n  }\r\n  \r\n  .rounded-top {\r\n    border-top-left-radius: 0.25rem !important;\r\n    border-top-right-radius: 0.25rem !important;\r\n  }\r\n  \r\n  .rounded-right {\r\n    border-top-right-radius: 0.25rem !important;\r\n    border-bottom-right-radius: 0.25rem !important;\r\n  }\r\n  \r\n  .rounded-bottom {\r\n    border-bottom-right-radius: 0.25rem !important;\r\n    border-bottom-left-radius: 0.25rem !important;\r\n  }\r\n  \r\n  .rounded-left {\r\n    border-top-left-radius: 0.25rem !important;\r\n    border-bottom-left-radius: 0.25rem !important;\r\n  }\r\n  \r\n  .rounded-lg {\r\n    border-radius: 0.3rem !important;\r\n  }\r\n  \r\n  .rounded-circle {\r\n    border-radius: 50% !important;\r\n  }\r\n  \r\n  .rounded-pill {\r\n    border-radius: 50rem !important;\r\n  }\r\n  \r\n  .rounded-0 {\r\n    border-radius: 0 !important;\r\n  }\r\n  \r\n  .clearfix::after {\r\n    display: block;\r\n    clear: both;\r\n    content: \"\";\r\n  }\r\n  \r\n  .d-none {\r\n    display: none !important;\r\n  }\r\n  \r\n  .d-inline {\r\n    display: inline !important;\r\n  }\r\n  \r\n  .d-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  \r\n  .d-block {\r\n    display: block !important;\r\n  }\r\n  \r\n  .d-table {\r\n    display: table !important;\r\n  }\r\n  \r\n  .d-table-row {\r\n    display: table-row !important;\r\n  }\r\n  \r\n  .d-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  \r\n  .d-flex {\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  \r\n  .d-inline-flex {\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .d-sm-none {\r\n      display: none !important;\r\n    }\r\n    .d-sm-inline {\r\n      display: inline !important;\r\n    }\r\n    .d-sm-inline-block {\r\n      display: inline-block !important;\r\n    }\r\n    .d-sm-block {\r\n      display: block !important;\r\n    }\r\n    .d-sm-table {\r\n      display: table !important;\r\n    }\r\n    .d-sm-table-row {\r\n      display: table-row !important;\r\n    }\r\n    .d-sm-table-cell {\r\n      display: table-cell !important;\r\n    }\r\n    .d-sm-flex {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n    }\r\n    .d-sm-inline-flex {\r\n      display: -ms-inline-flexbox !important;\r\n      display: inline-flex !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .d-md-none {\r\n      display: none !important;\r\n    }\r\n    .d-md-inline {\r\n      display: inline !important;\r\n    }\r\n    .d-md-inline-block {\r\n      display: inline-block !important;\r\n    }\r\n    .d-md-block {\r\n      display: block !important;\r\n    }\r\n    .d-md-table {\r\n      display: table !important;\r\n    }\r\n    .d-md-table-row {\r\n      display: table-row !important;\r\n    }\r\n    .d-md-table-cell {\r\n      display: table-cell !important;\r\n    }\r\n    .d-md-flex {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n    }\r\n    .d-md-inline-flex {\r\n      display: -ms-inline-flexbox !important;\r\n      display: inline-flex !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .d-lg-none {\r\n      display: none !important;\r\n    }\r\n    .d-lg-inline {\r\n      display: inline !important;\r\n    }\r\n    .d-lg-inline-block {\r\n      display: inline-block !important;\r\n    }\r\n    .d-lg-block {\r\n      display: block !important;\r\n    }\r\n    .d-lg-table {\r\n      display: table !important;\r\n    }\r\n    .d-lg-table-row {\r\n      display: table-row !important;\r\n    }\r\n    .d-lg-table-cell {\r\n      display: table-cell !important;\r\n    }\r\n    .d-lg-flex {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n    }\r\n    .d-lg-inline-flex {\r\n      display: -ms-inline-flexbox !important;\r\n      display: inline-flex !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .d-xl-none {\r\n      display: none !important;\r\n    }\r\n    .d-xl-inline {\r\n      display: inline !important;\r\n    }\r\n    .d-xl-inline-block {\r\n      display: inline-block !important;\r\n    }\r\n    .d-xl-block {\r\n      display: block !important;\r\n    }\r\n    .d-xl-table {\r\n      display: table !important;\r\n    }\r\n    .d-xl-table-row {\r\n      display: table-row !important;\r\n    }\r\n    .d-xl-table-cell {\r\n      display: table-cell !important;\r\n    }\r\n    .d-xl-flex {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n    }\r\n    .d-xl-inline-flex {\r\n      display: -ms-inline-flexbox !important;\r\n      display: inline-flex !important;\r\n    }\r\n  }\r\n  \r\n  @media print {\r\n    .d-print-none {\r\n      display: none !important;\r\n    }\r\n    .d-print-inline {\r\n      display: inline !important;\r\n    }\r\n    .d-print-inline-block {\r\n      display: inline-block !important;\r\n    }\r\n    .d-print-block {\r\n      display: block !important;\r\n    }\r\n    .d-print-table {\r\n      display: table !important;\r\n    }\r\n    .d-print-table-row {\r\n      display: table-row !important;\r\n    }\r\n    .d-print-table-cell {\r\n      display: table-cell !important;\r\n    }\r\n    .d-print-flex {\r\n      display: -ms-flexbox !important;\r\n      display: flex !important;\r\n    }\r\n    .d-print-inline-flex {\r\n      display: -ms-inline-flexbox !important;\r\n      display: inline-flex !important;\r\n    }\r\n  }\r\n  \r\n  .embed-responsive {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .embed-responsive::before {\r\n    display: block;\r\n    content: \"\";\r\n  }\r\n  \r\n  .embed-responsive .embed-responsive-item,\r\n  .embed-responsive iframe,\r\n  .embed-responsive embed,\r\n  .embed-responsive object,\r\n  .embed-responsive video {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 0;\r\n  }\r\n  \r\n  .embed-responsive-21by9::before {\r\n    padding-top: 42.857143%;\r\n  }\r\n  \r\n  .embed-responsive-16by9::before {\r\n    padding-top: 56.25%;\r\n  }\r\n  \r\n  .embed-responsive-4by3::before {\r\n    padding-top: 75%;\r\n  }\r\n  \r\n  .embed-responsive-1by1::before {\r\n    padding-top: 100%;\r\n  }\r\n  \r\n  .flex-row {\r\n    -ms-flex-direction: row !important;\r\n    flex-direction: row !important;\r\n  }\r\n  \r\n  .flex-column {\r\n    -ms-flex-direction: column !important;\r\n    flex-direction: column !important;\r\n  }\r\n  \r\n  .flex-row-reverse {\r\n    -ms-flex-direction: row-reverse !important;\r\n    flex-direction: row-reverse !important;\r\n  }\r\n  \r\n  .flex-column-reverse {\r\n    -ms-flex-direction: column-reverse !important;\r\n    flex-direction: column-reverse !important;\r\n  }\r\n  \r\n  .flex-wrap {\r\n    -ms-flex-wrap: wrap !important;\r\n    flex-wrap: wrap !important;\r\n  }\r\n  \r\n  .flex-nowrap {\r\n    -ms-flex-wrap: nowrap !important;\r\n    flex-wrap: nowrap !important;\r\n  }\r\n  \r\n  .flex-wrap-reverse {\r\n    -ms-flex-wrap: wrap-reverse !important;\r\n    flex-wrap: wrap-reverse !important;\r\n  }\r\n  \r\n  .flex-fill {\r\n    -ms-flex: 1 1 auto !important;\r\n    flex: 1 1 auto !important;\r\n  }\r\n  \r\n  .flex-grow-0 {\r\n    -ms-flex-positive: 0 !important;\r\n    flex-grow: 0 !important;\r\n  }\r\n  \r\n  .flex-grow-1 {\r\n    -ms-flex-positive: 1 !important;\r\n    flex-grow: 1 !important;\r\n  }\r\n  \r\n  .flex-shrink-0 {\r\n    -ms-flex-negative: 0 !important;\r\n    flex-shrink: 0 !important;\r\n  }\r\n  \r\n  .flex-shrink-1 {\r\n    -ms-flex-negative: 1 !important;\r\n    flex-shrink: 1 !important;\r\n  }\r\n  \r\n  .justify-content-start {\r\n    -ms-flex-pack: start !important;\r\n    justify-content: flex-start !important;\r\n  }\r\n  \r\n  .justify-content-end {\r\n    -ms-flex-pack: end !important;\r\n    justify-content: flex-end !important;\r\n  }\r\n  \r\n  .justify-content-center {\r\n    -ms-flex-pack: center !important;\r\n    justify-content: center !important;\r\n  }\r\n  \r\n  .justify-content-between {\r\n    -ms-flex-pack: justify !important;\r\n    justify-content: space-between !important;\r\n  }\r\n  \r\n  .justify-content-around {\r\n    -ms-flex-pack: distribute !important;\r\n    justify-content: space-around !important;\r\n  }\r\n  \r\n  .align-items-start {\r\n    -ms-flex-align: start !important;\r\n    align-items: flex-start !important;\r\n  }\r\n  \r\n  .align-items-end {\r\n    -ms-flex-align: end !important;\r\n    align-items: flex-end !important;\r\n  }\r\n  \r\n  .align-items-center {\r\n    -ms-flex-align: center !important;\r\n    align-items: center !important;\r\n  }\r\n  \r\n  .align-items-baseline {\r\n    -ms-flex-align: baseline !important;\r\n    align-items: baseline !important;\r\n  }\r\n  \r\n  .align-items-stretch {\r\n    -ms-flex-align: stretch !important;\r\n    align-items: stretch !important;\r\n  }\r\n  \r\n  .align-content-start {\r\n    -ms-flex-line-pack: start !important;\r\n    align-content: flex-start !important;\r\n  }\r\n  \r\n  .align-content-end {\r\n    -ms-flex-line-pack: end !important;\r\n    align-content: flex-end !important;\r\n  }\r\n  \r\n  .align-content-center {\r\n    -ms-flex-line-pack: center !important;\r\n    align-content: center !important;\r\n  }\r\n  \r\n  .align-content-between {\r\n    -ms-flex-line-pack: justify !important;\r\n    align-content: space-between !important;\r\n  }\r\n  \r\n  .align-content-around {\r\n    -ms-flex-line-pack: distribute !important;\r\n    align-content: space-around !important;\r\n  }\r\n  \r\n  .align-content-stretch {\r\n    -ms-flex-line-pack: stretch !important;\r\n    align-content: stretch !important;\r\n  }\r\n  \r\n  .align-self-auto {\r\n    -ms-flex-item-align: auto !important;\r\n    align-self: auto !important;\r\n  }\r\n  \r\n  .align-self-start {\r\n    -ms-flex-item-align: start !important;\r\n    align-self: flex-start !important;\r\n  }\r\n  \r\n  .align-self-end {\r\n    -ms-flex-item-align: end !important;\r\n    align-self: flex-end !important;\r\n  }\r\n  \r\n  .align-self-center {\r\n    -ms-flex-item-align: center !important;\r\n    align-self: center !important;\r\n  }\r\n  \r\n  .align-self-baseline {\r\n    -ms-flex-item-align: baseline !important;\r\n    align-self: baseline !important;\r\n  }\r\n  \r\n  .align-self-stretch {\r\n    -ms-flex-item-align: stretch !important;\r\n    align-self: stretch !important;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .flex-sm-row {\r\n      -ms-flex-direction: row !important;\r\n      flex-direction: row !important;\r\n    }\r\n    .flex-sm-column {\r\n      -ms-flex-direction: column !important;\r\n      flex-direction: column !important;\r\n    }\r\n    .flex-sm-row-reverse {\r\n      -ms-flex-direction: row-reverse !important;\r\n      flex-direction: row-reverse !important;\r\n    }\r\n    .flex-sm-column-reverse {\r\n      -ms-flex-direction: column-reverse !important;\r\n      flex-direction: column-reverse !important;\r\n    }\r\n    .flex-sm-wrap {\r\n      -ms-flex-wrap: wrap !important;\r\n      flex-wrap: wrap !important;\r\n    }\r\n    .flex-sm-nowrap {\r\n      -ms-flex-wrap: nowrap !important;\r\n      flex-wrap: nowrap !important;\r\n    }\r\n    .flex-sm-wrap-reverse {\r\n      -ms-flex-wrap: wrap-reverse !important;\r\n      flex-wrap: wrap-reverse !important;\r\n    }\r\n    .flex-sm-fill {\r\n      -ms-flex: 1 1 auto !important;\r\n      flex: 1 1 auto !important;\r\n    }\r\n    .flex-sm-grow-0 {\r\n      -ms-flex-positive: 0 !important;\r\n      flex-grow: 0 !important;\r\n    }\r\n    .flex-sm-grow-1 {\r\n      -ms-flex-positive: 1 !important;\r\n      flex-grow: 1 !important;\r\n    }\r\n    .flex-sm-shrink-0 {\r\n      -ms-flex-negative: 0 !important;\r\n      flex-shrink: 0 !important;\r\n    }\r\n    .flex-sm-shrink-1 {\r\n      -ms-flex-negative: 1 !important;\r\n      flex-shrink: 1 !important;\r\n    }\r\n    .justify-content-sm-start {\r\n      -ms-flex-pack: start !important;\r\n      justify-content: flex-start !important;\r\n    }\r\n    .justify-content-sm-end {\r\n      -ms-flex-pack: end !important;\r\n      justify-content: flex-end !important;\r\n    }\r\n    .justify-content-sm-center {\r\n      -ms-flex-pack: center !important;\r\n      justify-content: center !important;\r\n    }\r\n    .justify-content-sm-between {\r\n      -ms-flex-pack: justify !important;\r\n      justify-content: space-between !important;\r\n    }\r\n    .justify-content-sm-around {\r\n      -ms-flex-pack: distribute !important;\r\n      justify-content: space-around !important;\r\n    }\r\n    .align-items-sm-start {\r\n      -ms-flex-align: start !important;\r\n      align-items: flex-start !important;\r\n    }\r\n    .align-items-sm-end {\r\n      -ms-flex-align: end !important;\r\n      align-items: flex-end !important;\r\n    }\r\n    .align-items-sm-center {\r\n      -ms-flex-align: center !important;\r\n      align-items: center !important;\r\n    }\r\n    .align-items-sm-baseline {\r\n      -ms-flex-align: baseline !important;\r\n      align-items: baseline !important;\r\n    }\r\n    .align-items-sm-stretch {\r\n      -ms-flex-align: stretch !important;\r\n      align-items: stretch !important;\r\n    }\r\n    .align-content-sm-start {\r\n      -ms-flex-line-pack: start !important;\r\n      align-content: flex-start !important;\r\n    }\r\n    .align-content-sm-end {\r\n      -ms-flex-line-pack: end !important;\r\n      align-content: flex-end !important;\r\n    }\r\n    .align-content-sm-center {\r\n      -ms-flex-line-pack: center !important;\r\n      align-content: center !important;\r\n    }\r\n    .align-content-sm-between {\r\n      -ms-flex-line-pack: justify !important;\r\n      align-content: space-between !important;\r\n    }\r\n    .align-content-sm-around {\r\n      -ms-flex-line-pack: distribute !important;\r\n      align-content: space-around !important;\r\n    }\r\n    .align-content-sm-stretch {\r\n      -ms-flex-line-pack: stretch !important;\r\n      align-content: stretch !important;\r\n    }\r\n    .align-self-sm-auto {\r\n      -ms-flex-item-align: auto !important;\r\n      align-self: auto !important;\r\n    }\r\n    .align-self-sm-start {\r\n      -ms-flex-item-align: start !important;\r\n      align-self: flex-start !important;\r\n    }\r\n    .align-self-sm-end {\r\n      -ms-flex-item-align: end !important;\r\n      align-self: flex-end !important;\r\n    }\r\n    .align-self-sm-center {\r\n      -ms-flex-item-align: center !important;\r\n      align-self: center !important;\r\n    }\r\n    .align-self-sm-baseline {\r\n      -ms-flex-item-align: baseline !important;\r\n      align-self: baseline !important;\r\n    }\r\n    .align-self-sm-stretch {\r\n      -ms-flex-item-align: stretch !important;\r\n      align-self: stretch !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .flex-md-row {\r\n      -ms-flex-direction: row !important;\r\n      flex-direction: row !important;\r\n    }\r\n    .flex-md-column {\r\n      -ms-flex-direction: column !important;\r\n      flex-direction: column !important;\r\n    }\r\n    .flex-md-row-reverse {\r\n      -ms-flex-direction: row-reverse !important;\r\n      flex-direction: row-reverse !important;\r\n    }\r\n    .flex-md-column-reverse {\r\n      -ms-flex-direction: column-reverse !important;\r\n      flex-direction: column-reverse !important;\r\n    }\r\n    .flex-md-wrap {\r\n      -ms-flex-wrap: wrap !important;\r\n      flex-wrap: wrap !important;\r\n    }\r\n    .flex-md-nowrap {\r\n      -ms-flex-wrap: nowrap !important;\r\n      flex-wrap: nowrap !important;\r\n    }\r\n    .flex-md-wrap-reverse {\r\n      -ms-flex-wrap: wrap-reverse !important;\r\n      flex-wrap: wrap-reverse !important;\r\n    }\r\n    .flex-md-fill {\r\n      -ms-flex: 1 1 auto !important;\r\n      flex: 1 1 auto !important;\r\n    }\r\n    .flex-md-grow-0 {\r\n      -ms-flex-positive: 0 !important;\r\n      flex-grow: 0 !important;\r\n    }\r\n    .flex-md-grow-1 {\r\n      -ms-flex-positive: 1 !important;\r\n      flex-grow: 1 !important;\r\n    }\r\n    .flex-md-shrink-0 {\r\n      -ms-flex-negative: 0 !important;\r\n      flex-shrink: 0 !important;\r\n    }\r\n    .flex-md-shrink-1 {\r\n      -ms-flex-negative: 1 !important;\r\n      flex-shrink: 1 !important;\r\n    }\r\n    .justify-content-md-start {\r\n      -ms-flex-pack: start !important;\r\n      justify-content: flex-start !important;\r\n    }\r\n    .justify-content-md-end {\r\n      -ms-flex-pack: end !important;\r\n      justify-content: flex-end !important;\r\n    }\r\n    .justify-content-md-center {\r\n      -ms-flex-pack: center !important;\r\n      justify-content: center !important;\r\n    }\r\n    .justify-content-md-between {\r\n      -ms-flex-pack: justify !important;\r\n      justify-content: space-between !important;\r\n    }\r\n    .justify-content-md-around {\r\n      -ms-flex-pack: distribute !important;\r\n      justify-content: space-around !important;\r\n    }\r\n    .align-items-md-start {\r\n      -ms-flex-align: start !important;\r\n      align-items: flex-start !important;\r\n    }\r\n    .align-items-md-end {\r\n      -ms-flex-align: end !important;\r\n      align-items: flex-end !important;\r\n    }\r\n    .align-items-md-center {\r\n      -ms-flex-align: center !important;\r\n      align-items: center !important;\r\n    }\r\n    .align-items-md-baseline {\r\n      -ms-flex-align: baseline !important;\r\n      align-items: baseline !important;\r\n    }\r\n    .align-items-md-stretch {\r\n      -ms-flex-align: stretch !important;\r\n      align-items: stretch !important;\r\n    }\r\n    .align-content-md-start {\r\n      -ms-flex-line-pack: start !important;\r\n      align-content: flex-start !important;\r\n    }\r\n    .align-content-md-end {\r\n      -ms-flex-line-pack: end !important;\r\n      align-content: flex-end !important;\r\n    }\r\n    .align-content-md-center {\r\n      -ms-flex-line-pack: center !important;\r\n      align-content: center !important;\r\n    }\r\n    .align-content-md-between {\r\n      -ms-flex-line-pack: justify !important;\r\n      align-content: space-between !important;\r\n    }\r\n    .align-content-md-around {\r\n      -ms-flex-line-pack: distribute !important;\r\n      align-content: space-around !important;\r\n    }\r\n    .align-content-md-stretch {\r\n      -ms-flex-line-pack: stretch !important;\r\n      align-content: stretch !important;\r\n    }\r\n    .align-self-md-auto {\r\n      -ms-flex-item-align: auto !important;\r\n      align-self: auto !important;\r\n    }\r\n    .align-self-md-start {\r\n      -ms-flex-item-align: start !important;\r\n      align-self: flex-start !important;\r\n    }\r\n    .align-self-md-end {\r\n      -ms-flex-item-align: end !important;\r\n      align-self: flex-end !important;\r\n    }\r\n    .align-self-md-center {\r\n      -ms-flex-item-align: center !important;\r\n      align-self: center !important;\r\n    }\r\n    .align-self-md-baseline {\r\n      -ms-flex-item-align: baseline !important;\r\n      align-self: baseline !important;\r\n    }\r\n    .align-self-md-stretch {\r\n      -ms-flex-item-align: stretch !important;\r\n      align-self: stretch !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .flex-lg-row {\r\n      -ms-flex-direction: row !important;\r\n      flex-direction: row !important;\r\n    }\r\n    .flex-lg-column {\r\n      -ms-flex-direction: column !important;\r\n      flex-direction: column !important;\r\n    }\r\n    .flex-lg-row-reverse {\r\n      -ms-flex-direction: row-reverse !important;\r\n      flex-direction: row-reverse !important;\r\n    }\r\n    .flex-lg-column-reverse {\r\n      -ms-flex-direction: column-reverse !important;\r\n      flex-direction: column-reverse !important;\r\n    }\r\n    .flex-lg-wrap {\r\n      -ms-flex-wrap: wrap !important;\r\n      flex-wrap: wrap !important;\r\n    }\r\n    .flex-lg-nowrap {\r\n      -ms-flex-wrap: nowrap !important;\r\n      flex-wrap: nowrap !important;\r\n    }\r\n    .flex-lg-wrap-reverse {\r\n      -ms-flex-wrap: wrap-reverse !important;\r\n      flex-wrap: wrap-reverse !important;\r\n    }\r\n    .flex-lg-fill {\r\n      -ms-flex: 1 1 auto !important;\r\n      flex: 1 1 auto !important;\r\n    }\r\n    .flex-lg-grow-0 {\r\n      -ms-flex-positive: 0 !important;\r\n      flex-grow: 0 !important;\r\n    }\r\n    .flex-lg-grow-1 {\r\n      -ms-flex-positive: 1 !important;\r\n      flex-grow: 1 !important;\r\n    }\r\n    .flex-lg-shrink-0 {\r\n      -ms-flex-negative: 0 !important;\r\n      flex-shrink: 0 !important;\r\n    }\r\n    .flex-lg-shrink-1 {\r\n      -ms-flex-negative: 1 !important;\r\n      flex-shrink: 1 !important;\r\n    }\r\n    .justify-content-lg-start {\r\n      -ms-flex-pack: start !important;\r\n      justify-content: flex-start !important;\r\n    }\r\n    .justify-content-lg-end {\r\n      -ms-flex-pack: end !important;\r\n      justify-content: flex-end !important;\r\n    }\r\n    .justify-content-lg-center {\r\n      -ms-flex-pack: center !important;\r\n      justify-content: center !important;\r\n    }\r\n    .justify-content-lg-between {\r\n      -ms-flex-pack: justify !important;\r\n      justify-content: space-between !important;\r\n    }\r\n    .justify-content-lg-around {\r\n      -ms-flex-pack: distribute !important;\r\n      justify-content: space-around !important;\r\n    }\r\n    .align-items-lg-start {\r\n      -ms-flex-align: start !important;\r\n      align-items: flex-start !important;\r\n    }\r\n    .align-items-lg-end {\r\n      -ms-flex-align: end !important;\r\n      align-items: flex-end !important;\r\n    }\r\n    .align-items-lg-center {\r\n      -ms-flex-align: center !important;\r\n      align-items: center !important;\r\n    }\r\n    .align-items-lg-baseline {\r\n      -ms-flex-align: baseline !important;\r\n      align-items: baseline !important;\r\n    }\r\n    .align-items-lg-stretch {\r\n      -ms-flex-align: stretch !important;\r\n      align-items: stretch !important;\r\n    }\r\n    .align-content-lg-start {\r\n      -ms-flex-line-pack: start !important;\r\n      align-content: flex-start !important;\r\n    }\r\n    .align-content-lg-end {\r\n      -ms-flex-line-pack: end !important;\r\n      align-content: flex-end !important;\r\n    }\r\n    .align-content-lg-center {\r\n      -ms-flex-line-pack: center !important;\r\n      align-content: center !important;\r\n    }\r\n    .align-content-lg-between {\r\n      -ms-flex-line-pack: justify !important;\r\n      align-content: space-between !important;\r\n    }\r\n    .align-content-lg-around {\r\n      -ms-flex-line-pack: distribute !important;\r\n      align-content: space-around !important;\r\n    }\r\n    .align-content-lg-stretch {\r\n      -ms-flex-line-pack: stretch !important;\r\n      align-content: stretch !important;\r\n    }\r\n    .align-self-lg-auto {\r\n      -ms-flex-item-align: auto !important;\r\n      align-self: auto !important;\r\n    }\r\n    .align-self-lg-start {\r\n      -ms-flex-item-align: start !important;\r\n      align-self: flex-start !important;\r\n    }\r\n    .align-self-lg-end {\r\n      -ms-flex-item-align: end !important;\r\n      align-self: flex-end !important;\r\n    }\r\n    .align-self-lg-center {\r\n      -ms-flex-item-align: center !important;\r\n      align-self: center !important;\r\n    }\r\n    .align-self-lg-baseline {\r\n      -ms-flex-item-align: baseline !important;\r\n      align-self: baseline !important;\r\n    }\r\n    .align-self-lg-stretch {\r\n      -ms-flex-item-align: stretch !important;\r\n      align-self: stretch !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .flex-xl-row {\r\n      -ms-flex-direction: row !important;\r\n      flex-direction: row !important;\r\n    }\r\n    .flex-xl-column {\r\n      -ms-flex-direction: column !important;\r\n      flex-direction: column !important;\r\n    }\r\n    .flex-xl-row-reverse {\r\n      -ms-flex-direction: row-reverse !important;\r\n      flex-direction: row-reverse !important;\r\n    }\r\n    .flex-xl-column-reverse {\r\n      -ms-flex-direction: column-reverse !important;\r\n      flex-direction: column-reverse !important;\r\n    }\r\n    .flex-xl-wrap {\r\n      -ms-flex-wrap: wrap !important;\r\n      flex-wrap: wrap !important;\r\n    }\r\n    .flex-xl-nowrap {\r\n      -ms-flex-wrap: nowrap !important;\r\n      flex-wrap: nowrap !important;\r\n    }\r\n    .flex-xl-wrap-reverse {\r\n      -ms-flex-wrap: wrap-reverse !important;\r\n      flex-wrap: wrap-reverse !important;\r\n    }\r\n    .flex-xl-fill {\r\n      -ms-flex: 1 1 auto !important;\r\n      flex: 1 1 auto !important;\r\n    }\r\n    .flex-xl-grow-0 {\r\n      -ms-flex-positive: 0 !important;\r\n      flex-grow: 0 !important;\r\n    }\r\n    .flex-xl-grow-1 {\r\n      -ms-flex-positive: 1 !important;\r\n      flex-grow: 1 !important;\r\n    }\r\n    .flex-xl-shrink-0 {\r\n      -ms-flex-negative: 0 !important;\r\n      flex-shrink: 0 !important;\r\n    }\r\n    .flex-xl-shrink-1 {\r\n      -ms-flex-negative: 1 !important;\r\n      flex-shrink: 1 !important;\r\n    }\r\n    .justify-content-xl-start {\r\n      -ms-flex-pack: start !important;\r\n      justify-content: flex-start !important;\r\n    }\r\n    .justify-content-xl-end {\r\n      -ms-flex-pack: end !important;\r\n      justify-content: flex-end !important;\r\n    }\r\n    .justify-content-xl-center {\r\n      -ms-flex-pack: center !important;\r\n      justify-content: center !important;\r\n    }\r\n    .justify-content-xl-between {\r\n      -ms-flex-pack: justify !important;\r\n      justify-content: space-between !important;\r\n    }\r\n    .justify-content-xl-around {\r\n      -ms-flex-pack: distribute !important;\r\n      justify-content: space-around !important;\r\n    }\r\n    .align-items-xl-start {\r\n      -ms-flex-align: start !important;\r\n      align-items: flex-start !important;\r\n    }\r\n    .align-items-xl-end {\r\n      -ms-flex-align: end !important;\r\n      align-items: flex-end !important;\r\n    }\r\n    .align-items-xl-center {\r\n      -ms-flex-align: center !important;\r\n      align-items: center !important;\r\n    }\r\n    .align-items-xl-baseline {\r\n      -ms-flex-align: baseline !important;\r\n      align-items: baseline !important;\r\n    }\r\n    .align-items-xl-stretch {\r\n      -ms-flex-align: stretch !important;\r\n      align-items: stretch !important;\r\n    }\r\n    .align-content-xl-start {\r\n      -ms-flex-line-pack: start !important;\r\n      align-content: flex-start !important;\r\n    }\r\n    .align-content-xl-end {\r\n      -ms-flex-line-pack: end !important;\r\n      align-content: flex-end !important;\r\n    }\r\n    .align-content-xl-center {\r\n      -ms-flex-line-pack: center !important;\r\n      align-content: center !important;\r\n    }\r\n    .align-content-xl-between {\r\n      -ms-flex-line-pack: justify !important;\r\n      align-content: space-between !important;\r\n    }\r\n    .align-content-xl-around {\r\n      -ms-flex-line-pack: distribute !important;\r\n      align-content: space-around !important;\r\n    }\r\n    .align-content-xl-stretch {\r\n      -ms-flex-line-pack: stretch !important;\r\n      align-content: stretch !important;\r\n    }\r\n    .align-self-xl-auto {\r\n      -ms-flex-item-align: auto !important;\r\n      align-self: auto !important;\r\n    }\r\n    .align-self-xl-start {\r\n      -ms-flex-item-align: start !important;\r\n      align-self: flex-start !important;\r\n    }\r\n    .align-self-xl-end {\r\n      -ms-flex-item-align: end !important;\r\n      align-self: flex-end !important;\r\n    }\r\n    .align-self-xl-center {\r\n      -ms-flex-item-align: center !important;\r\n      align-self: center !important;\r\n    }\r\n    .align-self-xl-baseline {\r\n      -ms-flex-item-align: baseline !important;\r\n      align-self: baseline !important;\r\n    }\r\n    .align-self-xl-stretch {\r\n      -ms-flex-item-align: stretch !important;\r\n      align-self: stretch !important;\r\n    }\r\n  }\r\n  \r\n  .float-left {\r\n    float: left !important;\r\n  }\r\n  \r\n  .float-right {\r\n    float: right !important;\r\n  }\r\n  \r\n  .float-none {\r\n    float: none !important;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .float-sm-left {\r\n      float: left !important;\r\n    }\r\n    .float-sm-right {\r\n      float: right !important;\r\n    }\r\n    .float-sm-none {\r\n      float: none !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .float-md-left {\r\n      float: left !important;\r\n    }\r\n    .float-md-right {\r\n      float: right !important;\r\n    }\r\n    .float-md-none {\r\n      float: none !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .float-lg-left {\r\n      float: left !important;\r\n    }\r\n    .float-lg-right {\r\n      float: right !important;\r\n    }\r\n    .float-lg-none {\r\n      float: none !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .float-xl-left {\r\n      float: left !important;\r\n    }\r\n    .float-xl-right {\r\n      float: right !important;\r\n    }\r\n    .float-xl-none {\r\n      float: none !important;\r\n    }\r\n  }\r\n  \r\n  .user-select-all {\r\n    -webkit-user-select: all !important;\r\n    -moz-user-select: all !important;\r\n    -ms-user-select: all !important;\r\n    user-select: all !important;\r\n  }\r\n  \r\n  .user-select-auto {\r\n    -webkit-user-select: auto !important;\r\n    -moz-user-select: auto !important;\r\n    -ms-user-select: auto !important;\r\n    user-select: auto !important;\r\n  }\r\n  \r\n  .user-select-none {\r\n    -webkit-user-select: none !important;\r\n    -moz-user-select: none !important;\r\n    -ms-user-select: none !important;\r\n    user-select: none !important;\r\n  }\r\n  \r\n  .overflow-auto {\r\n    overflow: auto !important;\r\n  }\r\n  \r\n  .overflow-hidden {\r\n    overflow: hidden !important;\r\n  }\r\n  \r\n  .position-static {\r\n    position: static !important;\r\n  }\r\n  \r\n  .position-relative {\r\n    position: relative !important;\r\n  }\r\n  \r\n  .position-absolute {\r\n    position: absolute !important;\r\n  }\r\n  \r\n  .position-fixed {\r\n    position: fixed !important;\r\n  }\r\n  \r\n  .position-sticky {\r\n    position: -webkit-sticky !important;\r\n    position: sticky !important;\r\n  }\r\n  \r\n  .fixed-top {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n  }\r\n  \r\n  .fixed-bottom {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1030;\r\n  }\r\n  \r\n  @supports ((position: -webkit-sticky) or (position: sticky)) {\r\n    .sticky-top {\r\n      position: -webkit-sticky;\r\n      position: sticky;\r\n      top: 0;\r\n      z-index: 1020;\r\n    }\r\n  }\r\n  \r\n  .sr-only {\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    clip: rect(0, 0, 0, 0);\r\n    white-space: nowrap;\r\n    border: 0;\r\n  }\r\n  \r\n  .sr-only-focusable:active, .sr-only-focusable:focus {\r\n    position: static;\r\n    width: auto;\r\n    height: auto;\r\n    overflow: visible;\r\n    clip: auto;\r\n    white-space: normal;\r\n  }\r\n  \r\n  .shadow-sm {\r\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n  }\r\n  \r\n  .shadow {\r\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\r\n  }\r\n  \r\n  .shadow-lg {\r\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\r\n  }\r\n  \r\n  .shadow-none {\r\n    box-shadow: none !important;\r\n  }\r\n  \r\n  .w-25 {\r\n    width: 25% !important;\r\n  }\r\n  \r\n  .w-50 {\r\n    width: 50% !important;\r\n  }\r\n  \r\n  .w-75 {\r\n    width: 75% !important;\r\n  }\r\n  \r\n  .w-100 {\r\n    width: 100% !important;\r\n  }\r\n  \r\n  .w-auto {\r\n    width: auto !important;\r\n  }\r\n  \r\n  .h-25 {\r\n    height: 25% !important;\r\n  }\r\n  \r\n  .h-50 {\r\n    height: 50% !important;\r\n  }\r\n  \r\n  .h-75 {\r\n    height: 75% !important;\r\n  }\r\n  \r\n  .h-100 {\r\n    height: 100% !important;\r\n  }\r\n  \r\n  .h-auto {\r\n    height: auto !important;\r\n  }\r\n  \r\n  .mw-100 {\r\n    max-width: 100% !important;\r\n  }\r\n  \r\n  .mh-100 {\r\n    max-height: 100% !important;\r\n  }\r\n  \r\n  .min-vw-100 {\r\n    min-width: 100vw !important;\r\n  }\r\n  \r\n  .min-vh-100 {\r\n    min-height: 100vh !important;\r\n  }\r\n  \r\n  .vw-100 {\r\n    width: 100vw !important;\r\n  }\r\n  \r\n  .vh-100 {\r\n    height: 100vh !important;\r\n  }\r\n  \r\n  .m-0 {\r\n    margin: 0 !important;\r\n  }\r\n  \r\n  .mt-0,\r\n  .my-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  \r\n  .mr-0,\r\n  .mx-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  \r\n  .mb-0,\r\n  .my-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  \r\n  .ml-0,\r\n  .mx-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  \r\n  .m-1 {\r\n    margin: 0.25rem !important;\r\n  }\r\n  \r\n  .mt-1,\r\n  .my-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  \r\n  .mr-1,\r\n  .mx-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  \r\n  .mb-1,\r\n  .my-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  \r\n  .ml-1,\r\n  .mx-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  \r\n  .m-2 {\r\n    margin: 0.5rem !important;\r\n  }\r\n  \r\n  .mt-2,\r\n  .my-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  \r\n  .mr-2,\r\n  .mx-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  \r\n  .mb-2,\r\n  .my-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  \r\n  .ml-2,\r\n  .mx-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  \r\n  .m-3 {\r\n    margin: 1rem !important;\r\n  }\r\n  \r\n  .mt-3,\r\n  .my-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  \r\n  .mr-3,\r\n  .mx-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  \r\n  .mb-3,\r\n  .my-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  \r\n  .ml-3,\r\n  .mx-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  \r\n  .m-4 {\r\n    margin: 1.5rem !important;\r\n  }\r\n  \r\n  .mt-4,\r\n  .my-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  \r\n  .mr-4,\r\n  .mx-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  \r\n  .mb-4,\r\n  .my-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  \r\n  .ml-4,\r\n  .mx-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  \r\n  .m-5 {\r\n    margin: 3rem !important;\r\n  }\r\n  \r\n  .mt-5,\r\n  .my-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  \r\n  .mr-5,\r\n  .mx-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  \r\n  .mb-5,\r\n  .my-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  \r\n  .ml-5,\r\n  .mx-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  \r\n  .p-0 {\r\n    padding: 0 !important;\r\n  }\r\n  \r\n  .pt-0,\r\n  .py-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  \r\n  .pr-0,\r\n  .px-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  \r\n  .pb-0,\r\n  .py-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  \r\n  .pl-0,\r\n  .px-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  \r\n  .p-1 {\r\n    padding: 0.25rem !important;\r\n  }\r\n  \r\n  .pt-1,\r\n  .py-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  \r\n  .pr-1,\r\n  .px-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  \r\n  .pb-1,\r\n  .py-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  \r\n  .pl-1,\r\n  .px-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  \r\n  .p-2 {\r\n    padding: 0.5rem !important;\r\n  }\r\n  \r\n  .pt-2,\r\n  .py-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  \r\n  .pr-2,\r\n  .px-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  \r\n  .pb-2,\r\n  .py-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  \r\n  .pl-2,\r\n  .px-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  \r\n  .p-3 {\r\n    padding: 1rem !important;\r\n  }\r\n  \r\n  .pt-3,\r\n  .py-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  \r\n  .pr-3,\r\n  .px-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  \r\n  .pb-3,\r\n  .py-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  \r\n  .pl-3,\r\n  .px-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  \r\n  .p-4 {\r\n    padding: 1.5rem !important;\r\n  }\r\n  \r\n  .pt-4,\r\n  .py-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  \r\n  .pr-4,\r\n  .px-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  \r\n  .pb-4,\r\n  .py-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  \r\n  .pl-4,\r\n  .px-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  \r\n  .p-5 {\r\n    padding: 3rem !important;\r\n  }\r\n  \r\n  .pt-5,\r\n  .py-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  \r\n  .pr-5,\r\n  .px-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  \r\n  .pb-5,\r\n  .py-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  \r\n  .pl-5,\r\n  .px-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  \r\n  .m-n1 {\r\n    margin: -0.25rem !important;\r\n  }\r\n  \r\n  .mt-n1,\r\n  .my-n1 {\r\n    margin-top: -0.25rem !important;\r\n  }\r\n  \r\n  .mr-n1,\r\n  .mx-n1 {\r\n    margin-right: -0.25rem !important;\r\n  }\r\n  \r\n  .mb-n1,\r\n  .my-n1 {\r\n    margin-bottom: -0.25rem !important;\r\n  }\r\n  \r\n  .ml-n1,\r\n  .mx-n1 {\r\n    margin-left: -0.25rem !important;\r\n  }\r\n  \r\n  .m-n2 {\r\n    margin: -0.5rem !important;\r\n  }\r\n  \r\n  .mt-n2,\r\n  .my-n2 {\r\n    margin-top: -0.5rem !important;\r\n  }\r\n  \r\n  .mr-n2,\r\n  .mx-n2 {\r\n    margin-right: -0.5rem !important;\r\n  }\r\n  \r\n  .mb-n2,\r\n  .my-n2 {\r\n    margin-bottom: -0.5rem !important;\r\n  }\r\n  \r\n  .ml-n2,\r\n  .mx-n2 {\r\n    margin-left: -0.5rem !important;\r\n  }\r\n  \r\n  .m-n3 {\r\n    margin: -1rem !important;\r\n  }\r\n  \r\n  .mt-n3,\r\n  .my-n3 {\r\n    margin-top: -1rem !important;\r\n  }\r\n  \r\n  .mr-n3,\r\n  .mx-n3 {\r\n    margin-right: -1rem !important;\r\n  }\r\n  \r\n  .mb-n3,\r\n  .my-n3 {\r\n    margin-bottom: -1rem !important;\r\n  }\r\n  \r\n  .ml-n3,\r\n  .mx-n3 {\r\n    margin-left: -1rem !important;\r\n  }\r\n  \r\n  .m-n4 {\r\n    margin: -1.5rem !important;\r\n  }\r\n  \r\n  .mt-n4,\r\n  .my-n4 {\r\n    margin-top: -1.5rem !important;\r\n  }\r\n  \r\n  .mr-n4,\r\n  .mx-n4 {\r\n    margin-right: -1.5rem !important;\r\n  }\r\n  \r\n  .mb-n4,\r\n  .my-n4 {\r\n    margin-bottom: -1.5rem !important;\r\n  }\r\n  \r\n  .ml-n4,\r\n  .mx-n4 {\r\n    margin-left: -1.5rem !important;\r\n  }\r\n  \r\n  .m-n5 {\r\n    margin: -3rem !important;\r\n  }\r\n  \r\n  .mt-n5,\r\n  .my-n5 {\r\n    margin-top: -3rem !important;\r\n  }\r\n  \r\n  .mr-n5,\r\n  .mx-n5 {\r\n    margin-right: -3rem !important;\r\n  }\r\n  \r\n  .mb-n5,\r\n  .my-n5 {\r\n    margin-bottom: -3rem !important;\r\n  }\r\n  \r\n  .ml-n5,\r\n  .mx-n5 {\r\n    margin-left: -3rem !important;\r\n  }\r\n  \r\n  .m-auto {\r\n    margin: auto !important;\r\n  }\r\n  \r\n  .mt-auto,\r\n  .my-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  \r\n  .mr-auto,\r\n  .mx-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  \r\n  .mb-auto,\r\n  .my-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  \r\n  .ml-auto,\r\n  .mx-auto {\r\n    margin-left: auto !important;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .m-sm-0 {\r\n      margin: 0 !important;\r\n    }\r\n    .mt-sm-0,\r\n    .my-sm-0 {\r\n      margin-top: 0 !important;\r\n    }\r\n    .mr-sm-0,\r\n    .mx-sm-0 {\r\n      margin-right: 0 !important;\r\n    }\r\n    .mb-sm-0,\r\n    .my-sm-0 {\r\n      margin-bottom: 0 !important;\r\n    }\r\n    .ml-sm-0,\r\n    .mx-sm-0 {\r\n      margin-left: 0 !important;\r\n    }\r\n    .m-sm-1 {\r\n      margin: 0.25rem !important;\r\n    }\r\n    .mt-sm-1,\r\n    .my-sm-1 {\r\n      margin-top: 0.25rem !important;\r\n    }\r\n    .mr-sm-1,\r\n    .mx-sm-1 {\r\n      margin-right: 0.25rem !important;\r\n    }\r\n    .mb-sm-1,\r\n    .my-sm-1 {\r\n      margin-bottom: 0.25rem !important;\r\n    }\r\n    .ml-sm-1,\r\n    .mx-sm-1 {\r\n      margin-left: 0.25rem !important;\r\n    }\r\n    .m-sm-2 {\r\n      margin: 0.5rem !important;\r\n    }\r\n    .mt-sm-2,\r\n    .my-sm-2 {\r\n      margin-top: 0.5rem !important;\r\n    }\r\n    .mr-sm-2,\r\n    .mx-sm-2 {\r\n      margin-right: 0.5rem !important;\r\n    }\r\n    .mb-sm-2,\r\n    .my-sm-2 {\r\n      margin-bottom: 0.5rem !important;\r\n    }\r\n    .ml-sm-2,\r\n    .mx-sm-2 {\r\n      margin-left: 0.5rem !important;\r\n    }\r\n    .m-sm-3 {\r\n      margin: 1rem !important;\r\n    }\r\n    .mt-sm-3,\r\n    .my-sm-3 {\r\n      margin-top: 1rem !important;\r\n    }\r\n    .mr-sm-3,\r\n    .mx-sm-3 {\r\n      margin-right: 1rem !important;\r\n    }\r\n    .mb-sm-3,\r\n    .my-sm-3 {\r\n      margin-bottom: 1rem !important;\r\n    }\r\n    .ml-sm-3,\r\n    .mx-sm-3 {\r\n      margin-left: 1rem !important;\r\n    }\r\n    .m-sm-4 {\r\n      margin: 1.5rem !important;\r\n    }\r\n    .mt-sm-4,\r\n    .my-sm-4 {\r\n      margin-top: 1.5rem !important;\r\n    }\r\n    .mr-sm-4,\r\n    .mx-sm-4 {\r\n      margin-right: 1.5rem !important;\r\n    }\r\n    .mb-sm-4,\r\n    .my-sm-4 {\r\n      margin-bottom: 1.5rem !important;\r\n    }\r\n    .ml-sm-4,\r\n    .mx-sm-4 {\r\n      margin-left: 1.5rem !important;\r\n    }\r\n    .m-sm-5 {\r\n      margin: 3rem !important;\r\n    }\r\n    .mt-sm-5,\r\n    .my-sm-5 {\r\n      margin-top: 3rem !important;\r\n    }\r\n    .mr-sm-5,\r\n    .mx-sm-5 {\r\n      margin-right: 3rem !important;\r\n    }\r\n    .mb-sm-5,\r\n    .my-sm-5 {\r\n      margin-bottom: 3rem !important;\r\n    }\r\n    .ml-sm-5,\r\n    .mx-sm-5 {\r\n      margin-left: 3rem !important;\r\n    }\r\n    .p-sm-0 {\r\n      padding: 0 !important;\r\n    }\r\n    .pt-sm-0,\r\n    .py-sm-0 {\r\n      padding-top: 0 !important;\r\n    }\r\n    .pr-sm-0,\r\n    .px-sm-0 {\r\n      padding-right: 0 !important;\r\n    }\r\n    .pb-sm-0,\r\n    .py-sm-0 {\r\n      padding-bottom: 0 !important;\r\n    }\r\n    .pl-sm-0,\r\n    .px-sm-0 {\r\n      padding-left: 0 !important;\r\n    }\r\n    .p-sm-1 {\r\n      padding: 0.25rem !important;\r\n    }\r\n    .pt-sm-1,\r\n    .py-sm-1 {\r\n      padding-top: 0.25rem !important;\r\n    }\r\n    .pr-sm-1,\r\n    .px-sm-1 {\r\n      padding-right: 0.25rem !important;\r\n    }\r\n    .pb-sm-1,\r\n    .py-sm-1 {\r\n      padding-bottom: 0.25rem !important;\r\n    }\r\n    .pl-sm-1,\r\n    .px-sm-1 {\r\n      padding-left: 0.25rem !important;\r\n    }\r\n    .p-sm-2 {\r\n      padding: 0.5rem !important;\r\n    }\r\n    .pt-sm-2,\r\n    .py-sm-2 {\r\n      padding-top: 0.5rem !important;\r\n    }\r\n    .pr-sm-2,\r\n    .px-sm-2 {\r\n      padding-right: 0.5rem !important;\r\n    }\r\n    .pb-sm-2,\r\n    .py-sm-2 {\r\n      padding-bottom: 0.5rem !important;\r\n    }\r\n    .pl-sm-2,\r\n    .px-sm-2 {\r\n      padding-left: 0.5rem !important;\r\n    }\r\n    .p-sm-3 {\r\n      padding: 1rem !important;\r\n    }\r\n    .pt-sm-3,\r\n    .py-sm-3 {\r\n      padding-top: 1rem !important;\r\n    }\r\n    .pr-sm-3,\r\n    .px-sm-3 {\r\n      padding-right: 1rem !important;\r\n    }\r\n    .pb-sm-3,\r\n    .py-sm-3 {\r\n      padding-bottom: 1rem !important;\r\n    }\r\n    .pl-sm-3,\r\n    .px-sm-3 {\r\n      padding-left: 1rem !important;\r\n    }\r\n    .p-sm-4 {\r\n      padding: 1.5rem !important;\r\n    }\r\n    .pt-sm-4,\r\n    .py-sm-4 {\r\n      padding-top: 1.5rem !important;\r\n    }\r\n    .pr-sm-4,\r\n    .px-sm-4 {\r\n      padding-right: 1.5rem !important;\r\n    }\r\n    .pb-sm-4,\r\n    .py-sm-4 {\r\n      padding-bottom: 1.5rem !important;\r\n    }\r\n    .pl-sm-4,\r\n    .px-sm-4 {\r\n      padding-left: 1.5rem !important;\r\n    }\r\n    .p-sm-5 {\r\n      padding: 3rem !important;\r\n    }\r\n    .pt-sm-5,\r\n    .py-sm-5 {\r\n      padding-top: 3rem !important;\r\n    }\r\n    .pr-sm-5,\r\n    .px-sm-5 {\r\n      padding-right: 3rem !important;\r\n    }\r\n    .pb-sm-5,\r\n    .py-sm-5 {\r\n      padding-bottom: 3rem !important;\r\n    }\r\n    .pl-sm-5,\r\n    .px-sm-5 {\r\n      padding-left: 3rem !important;\r\n    }\r\n    .m-sm-n1 {\r\n      margin: -0.25rem !important;\r\n    }\r\n    .mt-sm-n1,\r\n    .my-sm-n1 {\r\n      margin-top: -0.25rem !important;\r\n    }\r\n    .mr-sm-n1,\r\n    .mx-sm-n1 {\r\n      margin-right: -0.25rem !important;\r\n    }\r\n    .mb-sm-n1,\r\n    .my-sm-n1 {\r\n      margin-bottom: -0.25rem !important;\r\n    }\r\n    .ml-sm-n1,\r\n    .mx-sm-n1 {\r\n      margin-left: -0.25rem !important;\r\n    }\r\n    .m-sm-n2 {\r\n      margin: -0.5rem !important;\r\n    }\r\n    .mt-sm-n2,\r\n    .my-sm-n2 {\r\n      margin-top: -0.5rem !important;\r\n    }\r\n    .mr-sm-n2,\r\n    .mx-sm-n2 {\r\n      margin-right: -0.5rem !important;\r\n    }\r\n    .mb-sm-n2,\r\n    .my-sm-n2 {\r\n      margin-bottom: -0.5rem !important;\r\n    }\r\n    .ml-sm-n2,\r\n    .mx-sm-n2 {\r\n      margin-left: -0.5rem !important;\r\n    }\r\n    .m-sm-n3 {\r\n      margin: -1rem !important;\r\n    }\r\n    .mt-sm-n3,\r\n    .my-sm-n3 {\r\n      margin-top: -1rem !important;\r\n    }\r\n    .mr-sm-n3,\r\n    .mx-sm-n3 {\r\n      margin-right: -1rem !important;\r\n    }\r\n    .mb-sm-n3,\r\n    .my-sm-n3 {\r\n      margin-bottom: -1rem !important;\r\n    }\r\n    .ml-sm-n3,\r\n    .mx-sm-n3 {\r\n      margin-left: -1rem !important;\r\n    }\r\n    .m-sm-n4 {\r\n      margin: -1.5rem !important;\r\n    }\r\n    .mt-sm-n4,\r\n    .my-sm-n4 {\r\n      margin-top: -1.5rem !important;\r\n    }\r\n    .mr-sm-n4,\r\n    .mx-sm-n4 {\r\n      margin-right: -1.5rem !important;\r\n    }\r\n    .mb-sm-n4,\r\n    .my-sm-n4 {\r\n      margin-bottom: -1.5rem !important;\r\n    }\r\n    .ml-sm-n4,\r\n    .mx-sm-n4 {\r\n      margin-left: -1.5rem !important;\r\n    }\r\n    .m-sm-n5 {\r\n      margin: -3rem !important;\r\n    }\r\n    .mt-sm-n5,\r\n    .my-sm-n5 {\r\n      margin-top: -3rem !important;\r\n    }\r\n    .mr-sm-n5,\r\n    .mx-sm-n5 {\r\n      margin-right: -3rem !important;\r\n    }\r\n    .mb-sm-n5,\r\n    .my-sm-n5 {\r\n      margin-bottom: -3rem !important;\r\n    }\r\n    .ml-sm-n5,\r\n    .mx-sm-n5 {\r\n      margin-left: -3rem !important;\r\n    }\r\n    .m-sm-auto {\r\n      margin: auto !important;\r\n    }\r\n    .mt-sm-auto,\r\n    .my-sm-auto {\r\n      margin-top: auto !important;\r\n    }\r\n    .mr-sm-auto,\r\n    .mx-sm-auto {\r\n      margin-right: auto !important;\r\n    }\r\n    .mb-sm-auto,\r\n    .my-sm-auto {\r\n      margin-bottom: auto !important;\r\n    }\r\n    .ml-sm-auto,\r\n    .mx-sm-auto {\r\n      margin-left: auto !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .m-md-0 {\r\n      margin: 0 !important;\r\n    }\r\n    .mt-md-0,\r\n    .my-md-0 {\r\n      margin-top: 0 !important;\r\n    }\r\n    .mr-md-0,\r\n    .mx-md-0 {\r\n      margin-right: 0 !important;\r\n    }\r\n    .mb-md-0,\r\n    .my-md-0 {\r\n      margin-bottom: 0 !important;\r\n    }\r\n    .ml-md-0,\r\n    .mx-md-0 {\r\n      margin-left: 0 !important;\r\n    }\r\n    .m-md-1 {\r\n      margin: 0.25rem !important;\r\n    }\r\n    .mt-md-1,\r\n    .my-md-1 {\r\n      margin-top: 0.25rem !important;\r\n    }\r\n    .mr-md-1,\r\n    .mx-md-1 {\r\n      margin-right: 0.25rem !important;\r\n    }\r\n    .mb-md-1,\r\n    .my-md-1 {\r\n      margin-bottom: 0.25rem !important;\r\n    }\r\n    .ml-md-1,\r\n    .mx-md-1 {\r\n      margin-left: 0.25rem !important;\r\n    }\r\n    .m-md-2 {\r\n      margin: 0.5rem !important;\r\n    }\r\n    .mt-md-2,\r\n    .my-md-2 {\r\n      margin-top: 0.5rem !important;\r\n    }\r\n    .mr-md-2,\r\n    .mx-md-2 {\r\n      margin-right: 0.5rem !important;\r\n    }\r\n    .mb-md-2,\r\n    .my-md-2 {\r\n      margin-bottom: 0.5rem !important;\r\n    }\r\n    .ml-md-2,\r\n    .mx-md-2 {\r\n      margin-left: 0.5rem !important;\r\n    }\r\n    .m-md-3 {\r\n      margin: 1rem !important;\r\n    }\r\n    .mt-md-3,\r\n    .my-md-3 {\r\n      margin-top: 1rem !important;\r\n    }\r\n    .mr-md-3,\r\n    .mx-md-3 {\r\n      margin-right: 1rem !important;\r\n    }\r\n    .mb-md-3,\r\n    .my-md-3 {\r\n      margin-bottom: 1rem !important;\r\n    }\r\n    .ml-md-3,\r\n    .mx-md-3 {\r\n      margin-left: 1rem !important;\r\n    }\r\n    .m-md-4 {\r\n      margin: 1.5rem !important;\r\n    }\r\n    .mt-md-4,\r\n    .my-md-4 {\r\n      margin-top: 1.5rem !important;\r\n    }\r\n    .mr-md-4,\r\n    .mx-md-4 {\r\n      margin-right: 1.5rem !important;\r\n    }\r\n    .mb-md-4,\r\n    .my-md-4 {\r\n      margin-bottom: 1.5rem !important;\r\n    }\r\n    .ml-md-4,\r\n    .mx-md-4 {\r\n      margin-left: 1.5rem !important;\r\n    }\r\n    .m-md-5 {\r\n      margin: 3rem !important;\r\n    }\r\n    .mt-md-5,\r\n    .my-md-5 {\r\n      margin-top: 3rem !important;\r\n    }\r\n    .mr-md-5,\r\n    .mx-md-5 {\r\n      margin-right: 3rem !important;\r\n    }\r\n    .mb-md-5,\r\n    .my-md-5 {\r\n      margin-bottom: 3rem !important;\r\n    }\r\n    .ml-md-5,\r\n    .mx-md-5 {\r\n      margin-left: 3rem !important;\r\n    }\r\n    .p-md-0 {\r\n      padding: 0 !important;\r\n    }\r\n    .pt-md-0,\r\n    .py-md-0 {\r\n      padding-top: 0 !important;\r\n    }\r\n    .pr-md-0,\r\n    .px-md-0 {\r\n      padding-right: 0 !important;\r\n    }\r\n    .pb-md-0,\r\n    .py-md-0 {\r\n      padding-bottom: 0 !important;\r\n    }\r\n    .pl-md-0,\r\n    .px-md-0 {\r\n      padding-left: 0 !important;\r\n    }\r\n    .p-md-1 {\r\n      padding: 0.25rem !important;\r\n    }\r\n    .pt-md-1,\r\n    .py-md-1 {\r\n      padding-top: 0.25rem !important;\r\n    }\r\n    .pr-md-1,\r\n    .px-md-1 {\r\n      padding-right: 0.25rem !important;\r\n    }\r\n    .pb-md-1,\r\n    .py-md-1 {\r\n      padding-bottom: 0.25rem !important;\r\n    }\r\n    .pl-md-1,\r\n    .px-md-1 {\r\n      padding-left: 0.25rem !important;\r\n    }\r\n    .p-md-2 {\r\n      padding: 0.5rem !important;\r\n    }\r\n    .pt-md-2,\r\n    .py-md-2 {\r\n      padding-top: 0.5rem !important;\r\n    }\r\n    .pr-md-2,\r\n    .px-md-2 {\r\n      padding-right: 0.5rem !important;\r\n    }\r\n    .pb-md-2,\r\n    .py-md-2 {\r\n      padding-bottom: 0.5rem !important;\r\n    }\r\n    .pl-md-2,\r\n    .px-md-2 {\r\n      padding-left: 0.5rem !important;\r\n    }\r\n    .p-md-3 {\r\n      padding: 1rem !important;\r\n    }\r\n    .pt-md-3,\r\n    .py-md-3 {\r\n      padding-top: 1rem !important;\r\n    }\r\n    .pr-md-3,\r\n    .px-md-3 {\r\n      padding-right: 1rem !important;\r\n    }\r\n    .pb-md-3,\r\n    .py-md-3 {\r\n      padding-bottom: 1rem !important;\r\n    }\r\n    .pl-md-3,\r\n    .px-md-3 {\r\n      padding-left: 1rem !important;\r\n    }\r\n    .p-md-4 {\r\n      padding: 1.5rem !important;\r\n    }\r\n    .pt-md-4,\r\n    .py-md-4 {\r\n      padding-top: 1.5rem !important;\r\n    }\r\n    .pr-md-4,\r\n    .px-md-4 {\r\n      padding-right: 1.5rem !important;\r\n    }\r\n    .pb-md-4,\r\n    .py-md-4 {\r\n      padding-bottom: 1.5rem !important;\r\n    }\r\n    .pl-md-4,\r\n    .px-md-4 {\r\n      padding-left: 1.5rem !important;\r\n    }\r\n    .p-md-5 {\r\n      padding: 3rem !important;\r\n    }\r\n    .pt-md-5,\r\n    .py-md-5 {\r\n      padding-top: 3rem !important;\r\n    }\r\n    .pr-md-5,\r\n    .px-md-5 {\r\n      padding-right: 3rem !important;\r\n    }\r\n    .pb-md-5,\r\n    .py-md-5 {\r\n      padding-bottom: 3rem !important;\r\n    }\r\n    .pl-md-5,\r\n    .px-md-5 {\r\n      padding-left: 3rem !important;\r\n    }\r\n    .m-md-n1 {\r\n      margin: -0.25rem !important;\r\n    }\r\n    .mt-md-n1,\r\n    .my-md-n1 {\r\n      margin-top: -0.25rem !important;\r\n    }\r\n    .mr-md-n1,\r\n    .mx-md-n1 {\r\n      margin-right: -0.25rem !important;\r\n    }\r\n    .mb-md-n1,\r\n    .my-md-n1 {\r\n      margin-bottom: -0.25rem !important;\r\n    }\r\n    .ml-md-n1,\r\n    .mx-md-n1 {\r\n      margin-left: -0.25rem !important;\r\n    }\r\n    .m-md-n2 {\r\n      margin: -0.5rem !important;\r\n    }\r\n    .mt-md-n2,\r\n    .my-md-n2 {\r\n      margin-top: -0.5rem !important;\r\n    }\r\n    .mr-md-n2,\r\n    .mx-md-n2 {\r\n      margin-right: -0.5rem !important;\r\n    }\r\n    .mb-md-n2,\r\n    .my-md-n2 {\r\n      margin-bottom: -0.5rem !important;\r\n    }\r\n    .ml-md-n2,\r\n    .mx-md-n2 {\r\n      margin-left: -0.5rem !important;\r\n    }\r\n    .m-md-n3 {\r\n      margin: -1rem !important;\r\n    }\r\n    .mt-md-n3,\r\n    .my-md-n3 {\r\n      margin-top: -1rem !important;\r\n    }\r\n    .mr-md-n3,\r\n    .mx-md-n3 {\r\n      margin-right: -1rem !important;\r\n    }\r\n    .mb-md-n3,\r\n    .my-md-n3 {\r\n      margin-bottom: -1rem !important;\r\n    }\r\n    .ml-md-n3,\r\n    .mx-md-n3 {\r\n      margin-left: -1rem !important;\r\n    }\r\n    .m-md-n4 {\r\n      margin: -1.5rem !important;\r\n    }\r\n    .mt-md-n4,\r\n    .my-md-n4 {\r\n      margin-top: -1.5rem !important;\r\n    }\r\n    .mr-md-n4,\r\n    .mx-md-n4 {\r\n      margin-right: -1.5rem !important;\r\n    }\r\n    .mb-md-n4,\r\n    .my-md-n4 {\r\n      margin-bottom: -1.5rem !important;\r\n    }\r\n    .ml-md-n4,\r\n    .mx-md-n4 {\r\n      margin-left: -1.5rem !important;\r\n    }\r\n    .m-md-n5 {\r\n      margin: -3rem !important;\r\n    }\r\n    .mt-md-n5,\r\n    .my-md-n5 {\r\n      margin-top: -3rem !important;\r\n    }\r\n    .mr-md-n5,\r\n    .mx-md-n5 {\r\n      margin-right: -3rem !important;\r\n    }\r\n    .mb-md-n5,\r\n    .my-md-n5 {\r\n      margin-bottom: -3rem !important;\r\n    }\r\n    .ml-md-n5,\r\n    .mx-md-n5 {\r\n      margin-left: -3rem !important;\r\n    }\r\n    .m-md-auto {\r\n      margin: auto !important;\r\n    }\r\n    .mt-md-auto,\r\n    .my-md-auto {\r\n      margin-top: auto !important;\r\n    }\r\n    .mr-md-auto,\r\n    .mx-md-auto {\r\n      margin-right: auto !important;\r\n    }\r\n    .mb-md-auto,\r\n    .my-md-auto {\r\n      margin-bottom: auto !important;\r\n    }\r\n    .ml-md-auto,\r\n    .mx-md-auto {\r\n      margin-left: auto !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .m-lg-0 {\r\n      margin: 0 !important;\r\n    }\r\n    .mt-lg-0,\r\n    .my-lg-0 {\r\n      margin-top: 0 !important;\r\n    }\r\n    .mr-lg-0,\r\n    .mx-lg-0 {\r\n      margin-right: 0 !important;\r\n    }\r\n    .mb-lg-0,\r\n    .my-lg-0 {\r\n      margin-bottom: 0 !important;\r\n    }\r\n    .ml-lg-0,\r\n    .mx-lg-0 {\r\n      margin-left: 0 !important;\r\n    }\r\n    .m-lg-1 {\r\n      margin: 0.25rem !important;\r\n    }\r\n    .mt-lg-1,\r\n    .my-lg-1 {\r\n      margin-top: 0.25rem !important;\r\n    }\r\n    .mr-lg-1,\r\n    .mx-lg-1 {\r\n      margin-right: 0.25rem !important;\r\n    }\r\n    .mb-lg-1,\r\n    .my-lg-1 {\r\n      margin-bottom: 0.25rem !important;\r\n    }\r\n    .ml-lg-1,\r\n    .mx-lg-1 {\r\n      margin-left: 0.25rem !important;\r\n    }\r\n    .m-lg-2 {\r\n      margin: 0.5rem !important;\r\n    }\r\n    .mt-lg-2,\r\n    .my-lg-2 {\r\n      margin-top: 0.5rem !important;\r\n    }\r\n    .mr-lg-2,\r\n    .mx-lg-2 {\r\n      margin-right: 0.5rem !important;\r\n    }\r\n    .mb-lg-2,\r\n    .my-lg-2 {\r\n      margin-bottom: 0.5rem !important;\r\n    }\r\n    .ml-lg-2,\r\n    .mx-lg-2 {\r\n      margin-left: 0.5rem !important;\r\n    }\r\n    .m-lg-3 {\r\n      margin: 1rem !important;\r\n    }\r\n    .mt-lg-3,\r\n    .my-lg-3 {\r\n      margin-top: 1rem !important;\r\n    }\r\n    .mr-lg-3,\r\n    .mx-lg-3 {\r\n      margin-right: 1rem !important;\r\n    }\r\n    .mb-lg-3,\r\n    .my-lg-3 {\r\n      margin-bottom: 1rem !important;\r\n    }\r\n    .ml-lg-3,\r\n    .mx-lg-3 {\r\n      margin-left: 1rem !important;\r\n    }\r\n    .m-lg-4 {\r\n      margin: 1.5rem !important;\r\n    }\r\n    .mt-lg-4,\r\n    .my-lg-4 {\r\n      margin-top: 1.5rem !important;\r\n    }\r\n    .mr-lg-4,\r\n    .mx-lg-4 {\r\n      margin-right: 1.5rem !important;\r\n    }\r\n    .mb-lg-4,\r\n    .my-lg-4 {\r\n      margin-bottom: 1.5rem !important;\r\n    }\r\n    .ml-lg-4,\r\n    .mx-lg-4 {\r\n      margin-left: 1.5rem !important;\r\n    }\r\n    .m-lg-5 {\r\n      margin: 3rem !important;\r\n    }\r\n    .mt-lg-5,\r\n    .my-lg-5 {\r\n      margin-top: 3rem !important;\r\n    }\r\n    .mr-lg-5,\r\n    .mx-lg-5 {\r\n      margin-right: 3rem !important;\r\n    }\r\n    .mb-lg-5,\r\n    .my-lg-5 {\r\n      margin-bottom: 3rem !important;\r\n    }\r\n    .ml-lg-5,\r\n    .mx-lg-5 {\r\n      margin-left: 3rem !important;\r\n    }\r\n    .p-lg-0 {\r\n      padding: 0 !important;\r\n    }\r\n    .pt-lg-0,\r\n    .py-lg-0 {\r\n      padding-top: 0 !important;\r\n    }\r\n    .pr-lg-0,\r\n    .px-lg-0 {\r\n      padding-right: 0 !important;\r\n    }\r\n    .pb-lg-0,\r\n    .py-lg-0 {\r\n      padding-bottom: 0 !important;\r\n    }\r\n    .pl-lg-0,\r\n    .px-lg-0 {\r\n      padding-left: 0 !important;\r\n    }\r\n    .p-lg-1 {\r\n      padding: 0.25rem !important;\r\n    }\r\n    .pt-lg-1,\r\n    .py-lg-1 {\r\n      padding-top: 0.25rem !important;\r\n    }\r\n    .pr-lg-1,\r\n    .px-lg-1 {\r\n      padding-right: 0.25rem !important;\r\n    }\r\n    .pb-lg-1,\r\n    .py-lg-1 {\r\n      padding-bottom: 0.25rem !important;\r\n    }\r\n    .pl-lg-1,\r\n    .px-lg-1 {\r\n      padding-left: 0.25rem !important;\r\n    }\r\n    .p-lg-2 {\r\n      padding: 0.5rem !important;\r\n    }\r\n    .pt-lg-2,\r\n    .py-lg-2 {\r\n      padding-top: 0.5rem !important;\r\n    }\r\n    .pr-lg-2,\r\n    .px-lg-2 {\r\n      padding-right: 0.5rem !important;\r\n    }\r\n    .pb-lg-2,\r\n    .py-lg-2 {\r\n      padding-bottom: 0.5rem !important;\r\n    }\r\n    .pl-lg-2,\r\n    .px-lg-2 {\r\n      padding-left: 0.5rem !important;\r\n    }\r\n    .p-lg-3 {\r\n      padding: 1rem !important;\r\n    }\r\n    .pt-lg-3,\r\n    .py-lg-3 {\r\n      padding-top: 1rem !important;\r\n    }\r\n    .pr-lg-3,\r\n    .px-lg-3 {\r\n      padding-right: 1rem !important;\r\n    }\r\n    .pb-lg-3,\r\n    .py-lg-3 {\r\n      padding-bottom: 1rem !important;\r\n    }\r\n    .pl-lg-3,\r\n    .px-lg-3 {\r\n      padding-left: 1rem !important;\r\n    }\r\n    .p-lg-4 {\r\n      padding: 1.5rem !important;\r\n    }\r\n    .pt-lg-4,\r\n    .py-lg-4 {\r\n      padding-top: 1.5rem !important;\r\n    }\r\n    .pr-lg-4,\r\n    .px-lg-4 {\r\n      padding-right: 1.5rem !important;\r\n    }\r\n    .pb-lg-4,\r\n    .py-lg-4 {\r\n      padding-bottom: 1.5rem !important;\r\n    }\r\n    .pl-lg-4,\r\n    .px-lg-4 {\r\n      padding-left: 1.5rem !important;\r\n    }\r\n    .p-lg-5 {\r\n      padding: 3rem !important;\r\n    }\r\n    .pt-lg-5,\r\n    .py-lg-5 {\r\n      padding-top: 3rem !important;\r\n    }\r\n    .pr-lg-5,\r\n    .px-lg-5 {\r\n      padding-right: 3rem !important;\r\n    }\r\n    .pb-lg-5,\r\n    .py-lg-5 {\r\n      padding-bottom: 3rem !important;\r\n    }\r\n    .pl-lg-5,\r\n    .px-lg-5 {\r\n      padding-left: 3rem !important;\r\n    }\r\n    .m-lg-n1 {\r\n      margin: -0.25rem !important;\r\n    }\r\n    .mt-lg-n1,\r\n    .my-lg-n1 {\r\n      margin-top: -0.25rem !important;\r\n    }\r\n    .mr-lg-n1,\r\n    .mx-lg-n1 {\r\n      margin-right: -0.25rem !important;\r\n    }\r\n    .mb-lg-n1,\r\n    .my-lg-n1 {\r\n      margin-bottom: -0.25rem !important;\r\n    }\r\n    .ml-lg-n1,\r\n    .mx-lg-n1 {\r\n      margin-left: -0.25rem !important;\r\n    }\r\n    .m-lg-n2 {\r\n      margin: -0.5rem !important;\r\n    }\r\n    .mt-lg-n2,\r\n    .my-lg-n2 {\r\n      margin-top: -0.5rem !important;\r\n    }\r\n    .mr-lg-n2,\r\n    .mx-lg-n2 {\r\n      margin-right: -0.5rem !important;\r\n    }\r\n    .mb-lg-n2,\r\n    .my-lg-n2 {\r\n      margin-bottom: -0.5rem !important;\r\n    }\r\n    .ml-lg-n2,\r\n    .mx-lg-n2 {\r\n      margin-left: -0.5rem !important;\r\n    }\r\n    .m-lg-n3 {\r\n      margin: -1rem !important;\r\n    }\r\n    .mt-lg-n3,\r\n    .my-lg-n3 {\r\n      margin-top: -1rem !important;\r\n    }\r\n    .mr-lg-n3,\r\n    .mx-lg-n3 {\r\n      margin-right: -1rem !important;\r\n    }\r\n    .mb-lg-n3,\r\n    .my-lg-n3 {\r\n      margin-bottom: -1rem !important;\r\n    }\r\n    .ml-lg-n3,\r\n    .mx-lg-n3 {\r\n      margin-left: -1rem !important;\r\n    }\r\n    .m-lg-n4 {\r\n      margin: -1.5rem !important;\r\n    }\r\n    .mt-lg-n4,\r\n    .my-lg-n4 {\r\n      margin-top: -1.5rem !important;\r\n    }\r\n    .mr-lg-n4,\r\n    .mx-lg-n4 {\r\n      margin-right: -1.5rem !important;\r\n    }\r\n    .mb-lg-n4,\r\n    .my-lg-n4 {\r\n      margin-bottom: -1.5rem !important;\r\n    }\r\n    .ml-lg-n4,\r\n    .mx-lg-n4 {\r\n      margin-left: -1.5rem !important;\r\n    }\r\n    .m-lg-n5 {\r\n      margin: -3rem !important;\r\n    }\r\n    .mt-lg-n5,\r\n    .my-lg-n5 {\r\n      margin-top: -3rem !important;\r\n    }\r\n    .mr-lg-n5,\r\n    .mx-lg-n5 {\r\n      margin-right: -3rem !important;\r\n    }\r\n    .mb-lg-n5,\r\n    .my-lg-n5 {\r\n      margin-bottom: -3rem !important;\r\n    }\r\n    .ml-lg-n5,\r\n    .mx-lg-n5 {\r\n      margin-left: -3rem !important;\r\n    }\r\n    .m-lg-auto {\r\n      margin: auto !important;\r\n    }\r\n    .mt-lg-auto,\r\n    .my-lg-auto {\r\n      margin-top: auto !important;\r\n    }\r\n    .mr-lg-auto,\r\n    .mx-lg-auto {\r\n      margin-right: auto !important;\r\n    }\r\n    .mb-lg-auto,\r\n    .my-lg-auto {\r\n      margin-bottom: auto !important;\r\n    }\r\n    .ml-lg-auto,\r\n    .mx-lg-auto {\r\n      margin-left: auto !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .m-xl-0 {\r\n      margin: 0 !important;\r\n    }\r\n    .mt-xl-0,\r\n    .my-xl-0 {\r\n      margin-top: 0 !important;\r\n    }\r\n    .mr-xl-0,\r\n    .mx-xl-0 {\r\n      margin-right: 0 !important;\r\n    }\r\n    .mb-xl-0,\r\n    .my-xl-0 {\r\n      margin-bottom: 0 !important;\r\n    }\r\n    .ml-xl-0,\r\n    .mx-xl-0 {\r\n      margin-left: 0 !important;\r\n    }\r\n    .m-xl-1 {\r\n      margin: 0.25rem !important;\r\n    }\r\n    .mt-xl-1,\r\n    .my-xl-1 {\r\n      margin-top: 0.25rem !important;\r\n    }\r\n    .mr-xl-1,\r\n    .mx-xl-1 {\r\n      margin-right: 0.25rem !important;\r\n    }\r\n    .mb-xl-1,\r\n    .my-xl-1 {\r\n      margin-bottom: 0.25rem !important;\r\n    }\r\n    .ml-xl-1,\r\n    .mx-xl-1 {\r\n      margin-left: 0.25rem !important;\r\n    }\r\n    .m-xl-2 {\r\n      margin: 0.5rem !important;\r\n    }\r\n    .mt-xl-2,\r\n    .my-xl-2 {\r\n      margin-top: 0.5rem !important;\r\n    }\r\n    .mr-xl-2,\r\n    .mx-xl-2 {\r\n      margin-right: 0.5rem !important;\r\n    }\r\n    .mb-xl-2,\r\n    .my-xl-2 {\r\n      margin-bottom: 0.5rem !important;\r\n    }\r\n    .ml-xl-2,\r\n    .mx-xl-2 {\r\n      margin-left: 0.5rem !important;\r\n    }\r\n    .m-xl-3 {\r\n      margin: 1rem !important;\r\n    }\r\n    .mt-xl-3,\r\n    .my-xl-3 {\r\n      margin-top: 1rem !important;\r\n    }\r\n    .mr-xl-3,\r\n    .mx-xl-3 {\r\n      margin-right: 1rem !important;\r\n    }\r\n    .mb-xl-3,\r\n    .my-xl-3 {\r\n      margin-bottom: 1rem !important;\r\n    }\r\n    .ml-xl-3,\r\n    .mx-xl-3 {\r\n      margin-left: 1rem !important;\r\n    }\r\n    .m-xl-4 {\r\n      margin: 1.5rem !important;\r\n    }\r\n    .mt-xl-4,\r\n    .my-xl-4 {\r\n      margin-top: 1.5rem !important;\r\n    }\r\n    .mr-xl-4,\r\n    .mx-xl-4 {\r\n      margin-right: 1.5rem !important;\r\n    }\r\n    .mb-xl-4,\r\n    .my-xl-4 {\r\n      margin-bottom: 1.5rem !important;\r\n    }\r\n    .ml-xl-4,\r\n    .mx-xl-4 {\r\n      margin-left: 1.5rem !important;\r\n    }\r\n    .m-xl-5 {\r\n      margin: 3rem !important;\r\n    }\r\n    .mt-xl-5,\r\n    .my-xl-5 {\r\n      margin-top: 3rem !important;\r\n    }\r\n    .mr-xl-5,\r\n    .mx-xl-5 {\r\n      margin-right: 3rem !important;\r\n    }\r\n    .mb-xl-5,\r\n    .my-xl-5 {\r\n      margin-bottom: 3rem !important;\r\n    }\r\n    .ml-xl-5,\r\n    .mx-xl-5 {\r\n      margin-left: 3rem !important;\r\n    }\r\n    .p-xl-0 {\r\n      padding: 0 !important;\r\n    }\r\n    .pt-xl-0,\r\n    .py-xl-0 {\r\n      padding-top: 0 !important;\r\n    }\r\n    .pr-xl-0,\r\n    .px-xl-0 {\r\n      padding-right: 0 !important;\r\n    }\r\n    .pb-xl-0,\r\n    .py-xl-0 {\r\n      padding-bottom: 0 !important;\r\n    }\r\n    .pl-xl-0,\r\n    .px-xl-0 {\r\n      padding-left: 0 !important;\r\n    }\r\n    .p-xl-1 {\r\n      padding: 0.25rem !important;\r\n    }\r\n    .pt-xl-1,\r\n    .py-xl-1 {\r\n      padding-top: 0.25rem !important;\r\n    }\r\n    .pr-xl-1,\r\n    .px-xl-1 {\r\n      padding-right: 0.25rem !important;\r\n    }\r\n    .pb-xl-1,\r\n    .py-xl-1 {\r\n      padding-bottom: 0.25rem !important;\r\n    }\r\n    .pl-xl-1,\r\n    .px-xl-1 {\r\n      padding-left: 0.25rem !important;\r\n    }\r\n    .p-xl-2 {\r\n      padding: 0.5rem !important;\r\n    }\r\n    .pt-xl-2,\r\n    .py-xl-2 {\r\n      padding-top: 0.5rem !important;\r\n    }\r\n    .pr-xl-2,\r\n    .px-xl-2 {\r\n      padding-right: 0.5rem !important;\r\n    }\r\n    .pb-xl-2,\r\n    .py-xl-2 {\r\n      padding-bottom: 0.5rem !important;\r\n    }\r\n    .pl-xl-2,\r\n    .px-xl-2 {\r\n      padding-left: 0.5rem !important;\r\n    }\r\n    .p-xl-3 {\r\n      padding: 1rem !important;\r\n    }\r\n    .pt-xl-3,\r\n    .py-xl-3 {\r\n      padding-top: 1rem !important;\r\n    }\r\n    .pr-xl-3,\r\n    .px-xl-3 {\r\n      padding-right: 1rem !important;\r\n    }\r\n    .pb-xl-3,\r\n    .py-xl-3 {\r\n      padding-bottom: 1rem !important;\r\n    }\r\n    .pl-xl-3,\r\n    .px-xl-3 {\r\n      padding-left: 1rem !important;\r\n    }\r\n    .p-xl-4 {\r\n      padding: 1.5rem !important;\r\n    }\r\n    .pt-xl-4,\r\n    .py-xl-4 {\r\n      padding-top: 1.5rem !important;\r\n    }\r\n    .pr-xl-4,\r\n    .px-xl-4 {\r\n      padding-right: 1.5rem !important;\r\n    }\r\n    .pb-xl-4,\r\n    .py-xl-4 {\r\n      padding-bottom: 1.5rem !important;\r\n    }\r\n    .pl-xl-4,\r\n    .px-xl-4 {\r\n      padding-left: 1.5rem !important;\r\n    }\r\n    .p-xl-5 {\r\n      padding: 3rem !important;\r\n    }\r\n    .pt-xl-5,\r\n    .py-xl-5 {\r\n      padding-top: 3rem !important;\r\n    }\r\n    .pr-xl-5,\r\n    .px-xl-5 {\r\n      padding-right: 3rem !important;\r\n    }\r\n    .pb-xl-5,\r\n    .py-xl-5 {\r\n      padding-bottom: 3rem !important;\r\n    }\r\n    .pl-xl-5,\r\n    .px-xl-5 {\r\n      padding-left: 3rem !important;\r\n    }\r\n    .m-xl-n1 {\r\n      margin: -0.25rem !important;\r\n    }\r\n    .mt-xl-n1,\r\n    .my-xl-n1 {\r\n      margin-top: -0.25rem !important;\r\n    }\r\n    .mr-xl-n1,\r\n    .mx-xl-n1 {\r\n      margin-right: -0.25rem !important;\r\n    }\r\n    .mb-xl-n1,\r\n    .my-xl-n1 {\r\n      margin-bottom: -0.25rem !important;\r\n    }\r\n    .ml-xl-n1,\r\n    .mx-xl-n1 {\r\n      margin-left: -0.25rem !important;\r\n    }\r\n    .m-xl-n2 {\r\n      margin: -0.5rem !important;\r\n    }\r\n    .mt-xl-n2,\r\n    .my-xl-n2 {\r\n      margin-top: -0.5rem !important;\r\n    }\r\n    .mr-xl-n2,\r\n    .mx-xl-n2 {\r\n      margin-right: -0.5rem !important;\r\n    }\r\n    .mb-xl-n2,\r\n    .my-xl-n2 {\r\n      margin-bottom: -0.5rem !important;\r\n    }\r\n    .ml-xl-n2,\r\n    .mx-xl-n2 {\r\n      margin-left: -0.5rem !important;\r\n    }\r\n    .m-xl-n3 {\r\n      margin: -1rem !important;\r\n    }\r\n    .mt-xl-n3,\r\n    .my-xl-n3 {\r\n      margin-top: -1rem !important;\r\n    }\r\n    .mr-xl-n3,\r\n    .mx-xl-n3 {\r\n      margin-right: -1rem !important;\r\n    }\r\n    .mb-xl-n3,\r\n    .my-xl-n3 {\r\n      margin-bottom: -1rem !important;\r\n    }\r\n    .ml-xl-n3,\r\n    .mx-xl-n3 {\r\n      margin-left: -1rem !important;\r\n    }\r\n    .m-xl-n4 {\r\n      margin: -1.5rem !important;\r\n    }\r\n    .mt-xl-n4,\r\n    .my-xl-n4 {\r\n      margin-top: -1.5rem !important;\r\n    }\r\n    .mr-xl-n4,\r\n    .mx-xl-n4 {\r\n      margin-right: -1.5rem !important;\r\n    }\r\n    .mb-xl-n4,\r\n    .my-xl-n4 {\r\n      margin-bottom: -1.5rem !important;\r\n    }\r\n    .ml-xl-n4,\r\n    .mx-xl-n4 {\r\n      margin-left: -1.5rem !important;\r\n    }\r\n    .m-xl-n5 {\r\n      margin: -3rem !important;\r\n    }\r\n    .mt-xl-n5,\r\n    .my-xl-n5 {\r\n      margin-top: -3rem !important;\r\n    }\r\n    .mr-xl-n5,\r\n    .mx-xl-n5 {\r\n      margin-right: -3rem !important;\r\n    }\r\n    .mb-xl-n5,\r\n    .my-xl-n5 {\r\n      margin-bottom: -3rem !important;\r\n    }\r\n    .ml-xl-n5,\r\n    .mx-xl-n5 {\r\n      margin-left: -3rem !important;\r\n    }\r\n    .m-xl-auto {\r\n      margin: auto !important;\r\n    }\r\n    .mt-xl-auto,\r\n    .my-xl-auto {\r\n      margin-top: auto !important;\r\n    }\r\n    .mr-xl-auto,\r\n    .mx-xl-auto {\r\n      margin-right: auto !important;\r\n    }\r\n    .mb-xl-auto,\r\n    .my-xl-auto {\r\n      margin-bottom: auto !important;\r\n    }\r\n    .ml-xl-auto,\r\n    .mx-xl-auto {\r\n      margin-left: auto !important;\r\n    }\r\n  }\r\n  \r\n  .stretched-link::after {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    pointer-events: auto;\r\n    content: \"\";\r\n    background-color: rgba(0, 0, 0, 0);\r\n  }\r\n  \r\n  .text-monospace {\r\n    font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !important;\r\n  }\r\n  \r\n  .text-justify {\r\n    text-align: justify !important;\r\n  }\r\n  \r\n  .text-wrap {\r\n    white-space: normal !important;\r\n  }\r\n  \r\n  .text-nowrap {\r\n    white-space: nowrap !important;\r\n  }\r\n  \r\n  .text-truncate {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n  }\r\n  \r\n  .text-left {\r\n    text-align: left !important;\r\n  }\r\n  \r\n  .text-right {\r\n    text-align: right !important;\r\n  }\r\n  \r\n  .text-center {\r\n    text-align: center !important;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .text-sm-left {\r\n      text-align: left !important;\r\n    }\r\n    .text-sm-right {\r\n      text-align: right !important;\r\n    }\r\n    .text-sm-center {\r\n      text-align: center !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    .text-md-left {\r\n      text-align: left !important;\r\n    }\r\n    .text-md-right {\r\n      text-align: right !important;\r\n    }\r\n    .text-md-center {\r\n      text-align: center !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 992px) {\r\n    .text-lg-left {\r\n      text-align: left !important;\r\n    }\r\n    .text-lg-right {\r\n      text-align: right !important;\r\n    }\r\n    .text-lg-center {\r\n      text-align: center !important;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1200px) {\r\n    .text-xl-left {\r\n      text-align: left !important;\r\n    }\r\n    .text-xl-right {\r\n      text-align: right !important;\r\n    }\r\n    .text-xl-center {\r\n      text-align: center !important;\r\n    }\r\n  }\r\n  \r\n  .text-lowercase {\r\n    text-transform: lowercase !important;\r\n  }\r\n  \r\n  .text-uppercase {\r\n    text-transform: uppercase !important;\r\n  }\r\n  \r\n  .text-capitalize {\r\n    text-transform: capitalize !important;\r\n  }\r\n  \r\n  .font-weight-light {\r\n    font-weight: 300 !important;\r\n  }\r\n  \r\n  .font-weight-lighter {\r\n    font-weight: lighter !important;\r\n  }\r\n  \r\n  .font-weight-normal {\r\n    font-weight: 400 !important;\r\n  }\r\n  \r\n  .font-weight-bold {\r\n    font-weight: 700 !important;\r\n  }\r\n  \r\n  .font-weight-bolder {\r\n    font-weight: bolder !important;\r\n  }\r\n  \r\n  .font-italic {\r\n    font-style: italic !important;\r\n  }\r\n  \r\n  .text-white {\r\n    color: #fff !important;\r\n  }\r\n  \r\n  .text-primary {\r\n    color: #007bff !important;\r\n  }\r\n  \r\n  a.text-primary:hover, a.text-primary:focus {\r\n    color: #0056b3 !important;\r\n  }\r\n  \r\n  .text-secondary {\r\n    color: #6c757d !important;\r\n  }\r\n  \r\n  a.text-secondary:hover, a.text-secondary:focus {\r\n    color: #494f54 !important;\r\n  }\r\n  \r\n  .text-success {\r\n    color: #28a745 !important;\r\n  }\r\n  \r\n  a.text-success:hover, a.text-success:focus {\r\n    color: #19692c !important;\r\n  }\r\n  \r\n  .text-info {\r\n    color: #17a2b8 !important;\r\n  }\r\n  \r\n  a.text-info:hover, a.text-info:focus {\r\n    color: #0f6674 !important;\r\n  }\r\n  \r\n  .text-warning {\r\n    color: #ffc107 !important;\r\n  }\r\n  \r\n  a.text-warning:hover, a.text-warning:focus {\r\n    color: #ba8b00 !important;\r\n  }\r\n  \r\n  .text-danger {\r\n    color: #dc3545 !important;\r\n  }\r\n  \r\n  a.text-danger:hover, a.text-danger:focus {\r\n    color: #a71d2a !important;\r\n  }\r\n  \r\n  .text-light {\r\n    color: #f8f9fa !important;\r\n  }\r\n  \r\n  a.text-light:hover, a.text-light:focus {\r\n    color: #cbd3da !important;\r\n  }\r\n  \r\n  .text-dark {\r\n    color: #343a40 !important;\r\n  }\r\n  \r\n  a.text-dark:hover, a.text-dark:focus {\r\n    color: #121416 !important;\r\n  }\r\n  \r\n  .text-body {\r\n    color: #212529 !important;\r\n  }\r\n  \r\n  .text-muted {\r\n    color: #6c757d !important;\r\n  }\r\n  \r\n  .text-black-50 {\r\n    color: rgba(0, 0, 0, 0.5) !important;\r\n  }\r\n  \r\n  .text-white-50 {\r\n    color: rgba(255, 255, 255, 0.5) !important;\r\n  }\r\n  \r\n  .text-hide {\r\n    font: 0/0 a;\r\n    color: transparent;\r\n    text-shadow: none;\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n  \r\n  .text-decoration-none {\r\n    text-decoration: none !important;\r\n  }\r\n  \r\n  .text-break {\r\n    word-break: break-word !important;\r\n    word-wrap: break-word !important;\r\n  }\r\n  \r\n  .text-reset {\r\n    color: inherit !important;\r\n  }\r\n  \r\n  .visible {\r\n    visibility: visible !important;\r\n  }\r\n  \r\n  .invisible {\r\n    visibility: hidden !important;\r\n  }\r\n  \r\n  @media print {\r\n    *,\r\n    *::before,\r\n    *::after {\r\n      text-shadow: none !important;\r\n      box-shadow: none !important;\r\n    }\r\n    a:not(.btn) {\r\n      text-decoration: underline;\r\n    }\r\n    abbr[title]::after {\r\n      content: \" (\" attr(title) \")\";\r\n    }\r\n    pre {\r\n      white-space: pre-wrap !important;\r\n    }\r\n    pre,\r\n    blockquote {\r\n      border: 1px solid #adb5bd;\r\n      page-break-inside: avoid;\r\n    }\r\n    thead {\r\n      display: table-header-group;\r\n    }\r\n    tr,\r\n    img {\r\n      page-break-inside: avoid;\r\n    }\r\n    p,\r\n    h2,\r\n    h3 {\r\n      orphans: 3;\r\n      widows: 3;\r\n    }\r\n    h2,\r\n    h3 {\r\n      page-break-after: avoid;\r\n    }\r\n    @page {\r\n      size: a3;\r\n    }\r\n    body {\r\n      min-width: 992px !important;\r\n    }\r\n    .container {\r\n      min-width: 992px !important;\r\n    }\r\n    .navbar {\r\n      display: none;\r\n    }\r\n    .badge {\r\n      border: 1px solid #000;\r\n    }\r\n    .table {\r\n      border-collapse: collapse !important;\r\n    }\r\n    .table td,\r\n    .table th {\r\n      background-color: #fff !important;\r\n    }\r\n    .table-bordered th,\r\n    .table-bordered td {\r\n      border: 1px solid #dee2e6 !important;\r\n    }\r\n    .table-dark {\r\n      color: inherit;\r\n    }\r\n    .table-dark th,\r\n    .table-dark td,\r\n    .table-dark thead th,\r\n    .table-dark tbody + tbody {\r\n      border-color: #dee2e6;\r\n    }\r\n    .table .thead-dark th {\r\n      color: inherit;\r\n      border-color: #dee2e6;\r\n    }\r\n  }", ""]);
// Exports
module.exports = exports;

    if(true) {
      // 1605447367699
      var cssReload = __webpack_require__(/*! ../node_modules/css-hot-loader/hotModuleReplacement.js */ "./node_modules/css-hot-loader/hotModuleReplacement.js")(module.i, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);;
    }
  

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ReactRefreshEntry.js ./src/pages/index.js ./dist/client/webpack-hot-middleware/client?path=__webpack_hmr&port=3006&overlay=true ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\ReactJs\framework\node_modules\@pmmmwh\react-refresh-webpack-plugin\src\runtime\ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/src/runtime/ReactRefreshEntry.js");
__webpack_require__(/*! C:\ReactJs\framework\src\pages\index.js */"./src/pages/index.js");
module.exports = __webpack_require__(/*! C:\ReactJs\framework\dist\client\webpack-hot-middleware\client?path=__webpack_hmr&port=3006&overlay=true */"./dist/client/webpack-hot-middleware/client.js?path=__webpack_hmr&port=3006&overlay=true");


/***/ })

}]);
//# sourceMappingURL=common-chunk.js.map