"use strict";
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
exports.ChunkSplit = void 0;
var PLUGIN_NAME = 'ChunkSplit';
// modified from: https://github.com/webpack/webpack/blob/00f70fc65cab43d682c80264c959eff81db531b4/lib/optimize/SplitChunksPlugin.js
var ChunkSplit = function (customOptionList) {
    customOptionList = verifyCustomOptionList(customOptionList);
    return {
        name: PLUGIN_NAME,
        apply: function (compiler) {
            compiler.hooks.thisCompilation.tap(PLUGIN_NAME, function (compilation) {
                var alreadyOptimized = false;
                compilation.hooks.unseal.tap(PLUGIN_NAME, function () {
                    alreadyOptimized = false;
                });
                compilation.hooks.afterOptimizeChunks.tap(PLUGIN_NAME, function (chunks) {
                    if (alreadyOptimized)
                        return;
                    alreadyOptimized = true;
                    return customOptionList.reduce(function (o, customOption) {
                        var isChanged = customSplitChunk(compilation, chunks);
                        return isChanged || o;
                    }, false);
                });
            });
        }
    };
};
exports.ChunkSplit = ChunkSplit;
var devChunkList = function (chunkList) { return chunkList.map(function (chunk) { return chunk.name; }).join(', '); };
var devModuleList = function (moduleList) { return "[ \"" + moduleList.map(function (module) { return (module.nameForCondition ? module.nameForCondition() : module.context).slice(-12); }).join('", "') + "\" ]"; };
var verifyCustomOptionList = function (customOptionList) { return customOptionList.map(function (_a, index) {
    var chunkName = _a.chunkName, _b = _a.useExistChunk, useExistChunk = _b === void 0 ? false : _b, // prevent mis-configuration
    _c = _a.filterChunk, // prevent mis-configuration
    filterChunk = _c === void 0 ? function (chunk) { return true; } : _c, // default select all chunk
    filterModule = _a.filterModule // = (module, moduleChunkList, selectedChunkList) => true
    ;
    useExistChunk = Boolean(useExistChunk);
    // if (typeof (chunkName) !== 'string') throw new Error(`[${PLUGIN_NAME}] invalid chunkName in option #${index}`)
    // if (typeof (filterChunk) !== 'function') throw new Error(`[${PLUGIN_NAME}] invalid filterChunk in option #${index}`)
    // if (typeof (filterModule) !== 'function') throw new Error(`[${PLUGIN_NAME}] invalid filterModule in option #${index}`)
    return { chunkName: chunkName, useExistChunk: useExistChunk, filterChunk: filterChunk, filterModule: filterModule };
}); };
// const applyCustomSplitChunk = ({ chunkName, useExistChunk, filterChunk, filterModule }, compilation, chunkList) => {
//     const initialChunkNameList = chunkList.map((chunk) => chunk.name)
//     const isFilenameTaken = initialChunkNameList.includes(chunkName)
//     // if (useExistChunk !== isFilenameTaken) {
//     //     throw new Error(useExistChunk
//     //         ? `[${PLUGIN_NAME}] no chunk exist with chunkName: ${chunkName}`
//     //         : `[${PLUGIN_NAME}] exist chunk with chunkName: ${chunkName}, set useExistChunk?`
//     //     )
//     // }
//     console.log(initialChunkNameList);
//     const selectedChunkListInclusive = chunkList.filter((chunk) => filterChunk({
//         chunk,
//         chunkList,
//         initialChunkNameList
//     }))
//     // console.log(selectedChunkListInclusive);
//     const selectedChunkList = useExistChunk
//         ? selectedChunkListInclusive.filter((chunk) => chunk.name !== chunkName) // exclude chunkName when useExistChunk
//         : selectedChunkListInclusive
//     if (!selectedChunkList.length) throw new Error(`[${PLUGIN_NAME}] no chunk selected for chunkName: ${chunkName}`)
//     const selectedModuleSet = new Set([
//         ...selectedChunkListInclusive.reduce((o, chunk) => o.concat(chunk.getModules()), [])
//     ])
//     console.log(Array.from(selectedModuleSet));
//     const selectedModuleList = Array.from(selectedModuleSet).filter((module) => filterModule({
//         module,
//         moduleChunkList: module.getChunks().filter((chunk) => selectedChunkListInclusive.includes(chunk)),
//         selectedChunkList,
//         chunkList,
//         initialChunkNameList
//     }))
//     // if (!selectedModuleList.length) throw new Error(`[${PLUGIN_NAME}] no module selected for chunkName: ${chunkName}`)
//
//     // get the target split chunk
//     let targetSplitChunk
//     // add a note to the chunk
//     // targetSplitChunk.chunkReason = `${PLUGIN_NAME} (chunkName: ${chunkName}, useExistChunk: ${useExistChunk})`
//     // remove selected module from selected chunk
//     for (const chunk of chunkList) {
//         targetSplitChunk = compilation.addChunk("chunkName")
//         // const chunkModule = chunk.getModules()
//         // const splitModuleList = chunkModule.filter((module) => selectedModuleList.includes(module))
//         // if (!splitModuleList.length) continue
//
//         // TODO: CHECK: if all module is splitted from this chunk, should remove the chunk from graph, and connect to targetSplitChunk
//         // if (splitModuleList.length === chunkModule.length) throw new Error(`[${PLUGIN_NAME}] all module from chunk '${chunk.name}' will be split to '${chunkName}'`)
//
//         // add graph connections for splitted chunk
//         // chunk.split(targetSplitChunk)
//
//         // remove all selected modules from the chunk
//         // for (const module of splitModuleList) {
//         //     chunk.removeModule(module)
//         //     module.rewriteChunkInReasons(chunk, [ targetSplitChunk ])
//         // }
//     }
//
//     // add all modules to the target split chunk
//     // for (const module of selectedModuleList) {
//     //     connectChunkAndModule(targetSplitChunk, module)
//     // }
//
//     return false
// }
// const customSplitChunk = (compilation, chunkList) => {
//     // let initialChunkNameList
//     // get the target split chunk
//     // let targetSplitChunk = compilation.addChunk("chunkName") // new chunk
//     // add a note to the chunk
//
//     let moduleList = []
//     // remove selected module from selected chunk
//     const indexMap = new Map();
//     let index = 1;
//     for (const chunk of chunkList) {
//         indexMap.set(chunk, index++);
//     }
//     const getKey = chunks => {
//         return Array.from(chunks, c => indexMap.get(c))
//             .sort()
//             .join();
//     };
//     const moduleSet = new Map();
//     const chunkSets = new Map();
//
//     for (const module of compilation.modules) {
//         const chunkIndices = getKey(module.chunksIterable);
//         chunkSets.set(chunkIndices, new Set(module.chunksIterable));
//         moduleSet.set(chunkIndices, moduleSet.get(chunkIndices) ? [...moduleSet.get(chunkIndices), module] : [module]);
//     }
//
//     const isSubset = (bigSet, smallSet) => {
//         if (bigSet.size < smallSet.size) return false;
//         for (const item of smallSet) {
//             if (!bigSet.has(item)) return false;
//         }
//         return true;
//     };
//     const combinations = new Map();
//     for (const [key, chunksSet] of chunkSets) {
//         var array = [];
//         for (const set of chunkSets.values()) {
//             if (isSubset(chunksSet, set)) {
//                 array.push(set);
//             }
//         }
//         combinations.set(key, array);
//     }
//
//     let chunkJson = {}
//     for (const [key, value] of moduleSet) {
//         let targetSplitChunk = compilation.addChunk(key+"chunkName")
//         targetSplitChunk.chunkReason = `${PLUGIN_NAME} (chunkName: ${key+"chunkName"})`
//         chunkJson = {...chunkJson, [key+"chunkName"]: {}}
//         const chunkModule = value
//         const splitModuleList = chunkModule
//         if (!splitModuleList.length) continue
//
//         for (const module of splitModuleList) {
//
//             Array.from(combinations.get(key), chunks => {
//                     // let iterator1 = chunks.values().next().value.name
//                 let chunk = chunkList.filter(chunk => chunk.name===chunks.values().next().value.name)[0]
//                 chunkJson[key+"chunkName"] = {...chunkJson[key+"chunkName"], [chunk.name]: true}
//                 chunk.split(targetSplitChunk)
//                 chunk.removeModule(module)
//                 module.rewriteChunkInReasons(chunk, [ targetSplitChunk ])
//                 }
//             );
//             if (module.addChunk(targetSplitChunk)) {
//                 targetSplitChunk.addModule(module)
//             }
//
//         }
//         console.log(chunkJson);
//     }
//     compilation.assets['pages-assets.json'] = new RawSource(JSON.stringify(chunkJson));
//
//
//     return false
// }
var customSplitChunk = function (compilation, chunkList) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
    var moduleList = [];
    var commonModuleList = [];
    var moduleSet = new Set(compilation.modules);
    var appChunk = chunkList.filter(function (chunk) { return chunk.name === "app"; })[0];
    var appModule = appChunk.getModules();
    var commonChunk = compilation.addChunk("common-chunk");
    var otherChunk = chunkList.filter(function (chunk) { return chunk.name && chunk.name !== "app" && chunk.name !== "bootstrap-main/main" && chunk.hasEntryModule(); });
    var _loop_1 = function (chunk) {
        var e_5, _a;
        var chunkModuleSet = new Set();
        try {
            for (var _b = (e_5 = void 0, __values(chunk.getModules())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var module_1 = _c.value;
                moduleList.push(module_1);
                chunkModuleSet.add(module_1);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        chunk.split(commonChunk);
        appChunk.split(chunk);
        moduleSet = new Set(__spread(moduleSet).filter(function (x) { return chunkModuleSet.has(x); }));
    };
    try {
        // console.log(otherChunk);
        for (var otherChunk_1 = __values(otherChunk), otherChunk_1_1 = otherChunk_1.next(); !otherChunk_1_1.done; otherChunk_1_1 = otherChunk_1.next()) {
            var chunk = otherChunk_1_1.value;
            _loop_1(chunk);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (otherChunk_1_1 && !otherChunk_1_1.done && (_a = otherChunk_1["return"])) _a.call(otherChunk_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var moduleSet_1 = __values(moduleSet), moduleSet_1_1 = moduleSet_1.next(); !moduleSet_1_1.done; moduleSet_1_1 = moduleSet_1.next()) {
            var module_2 = moduleSet_1_1.value;
            commonChunk.addModule(module_2);
            try {
                for (var otherChunk_2 = (e_3 = void 0, __values(otherChunk)), otherChunk_2_1 = otherChunk_2.next(); !otherChunk_2_1.done; otherChunk_2_1 = otherChunk_2.next()) {
                    var chunk = otherChunk_2_1.value;
                    chunk.removeModule(module_2);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (otherChunk_2_1 && !otherChunk_2_1.done && (_c = otherChunk_2["return"])) _c.call(otherChunk_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (moduleSet_1_1 && !moduleSet_1_1.done && (_b = moduleSet_1["return"])) _b.call(moduleSet_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    try {
        for (var moduleList_1 = __values(moduleList), moduleList_1_1 = moduleList_1.next(); !moduleList_1_1.done; moduleList_1_1 = moduleList_1.next()) {
            var module_3 = moduleList_1_1.value;
            appChunk.removeModule(module_3);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (moduleList_1_1 && !moduleList_1_1.done && (_d = moduleList_1["return"])) _d.call(moduleList_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
};
