"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
};
var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
            if (!__hasOwnProp.call(to, key) && key !== except)
                __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
    }
    return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {value: mod, enumerable: true}) : target,
    mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var parse_exports = {};
__export(parse_exports, {
    djsClone: () => djsClone,
    djsNow: () => djsNow,
    djsNowUTC: () => djsNowUTC,
    djsParse: () => djsParse,
    djsParseNow: () => djsParseNow,
    djsParseNowUTC: () => djsParseNowUTC,
    djsParseUTC: () => djsParseUTC
});
module.exports = __toCommonJS(parse_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
var import_objectSupport = __toESM(require("dayjs/plugin/objectSupport"));
import_dayjs.default.extend(import_objectSupport.default);
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_utc.default);
const djsParse = (aTime) => {
    if (!aTime)
        return (0, import_dayjs.default)();
    return (0, import_dayjs.default)(aTime);
};
const djsParseUTC = (aTime) => {
    if (!aTime)
        return (0, import_dayjs.default)().utc();
    return (0, import_dayjs.default)(aTime).utc();
};
const djsNowUTC = () => {
    return (0, import_dayjs.default)().utc();
};
const djsNow = () => {
    return (0, import_dayjs.default)();
};
const djsParseNow = () => {
    return djsParse(djsNow().toString());
};
const djsParseNowUTC = () => {
    return djsParse(djsNow().toString());
};
const djsClone = (aTime) => {
    if (!aTime)
        return (0, import_dayjs.default)((0, import_dayjs.default)());
    return (0, import_dayjs.default)((0, import_dayjs.default)(aTime));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    djsClone,
    djsNow,
    djsNowUTC,
    djsParse,
    djsParseNow,
    djsParseNowUTC,
    djsParseUTC
});
