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
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {value: mod, enumerable: true}) : target,
    mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {value: true}), mod);
var query_exports = {};
__export(query_exports, {
    djsBetween: () => djsBetween,
    djsBetweenRange: () => djsBetweenRange,
    djsIsAfter: () => djsIsAfter,
    djsIsBefore: () => djsIsBefore,
    djsIsDayjs: () => djsIsDayjs,
    djsIsLeapYear: () => djsIsLeapYear,
    djsIsSame: () => djsIsSame,
    djsIsSameDate: () => djsIsSameDate,
    djsSameAfter: () => djsSameAfter,
    djsSameBefore: () => djsSameBefore
});
module.exports = __toCommonJS(query_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_isSameOrBefore = __toESM(require("dayjs/plugin/isSameOrBefore"));
var import_isSameOrAfter = __toESM(require("dayjs/plugin/isSameOrAfter"));
var import_isBetween = __toESM(require("dayjs/plugin/isBetween"));
var import_isLeapYear = __toESM(require("dayjs/plugin/isLeapYear"));
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_isSameOrBefore.default);
import_dayjs.default.extend(import_isSameOrAfter.default);
import_dayjs.default.extend(import_isLeapYear.default);
const djsIsBefore = (aTime, bTime, unit) => {
    return (0, import_dayjs.default)(aTime).isBefore((0, import_dayjs.default)(bTime), unit);
};
const djsIsSame = (aTime, bTime, unit) => {
    return (0, import_dayjs.default)(aTime).isSame((0, import_dayjs.default)(bTime), unit);
};
const djsIsSameDate = (aTime, bTime) => {
    return (0, import_dayjs.default)(aTime).isSame((0, import_dayjs.default)(bTime), "date");
};
const djsIsAfter = (aTime, bTime, unit) => {
    return (0, import_dayjs.default)(aTime).isAfter((0, import_dayjs.default)(bTime), unit);
};
const djsSameBefore = (aTime, bTime, unit) => {
    return (0, import_dayjs.default)(aTime).isSameOrBefore((0, import_dayjs.default)(bTime), unit);
};
const djsSameAfter = (aTime, bTime, unit) => {
    return (0, import_dayjs.default)(aTime).isSameOrAfter((0, import_dayjs.default)(bTime), unit);
};
const djsBetween = (aTime, bTime, cTime, unit, extra) => {
    return (0, import_dayjs.default)(aTime).isBetween((0, import_dayjs.default)(bTime), (0, import_dayjs.default)(cTime), unit, extra);
};
const djsBetweenRange = (aTime, bTime, cTime, unit, extra) => {
    return (0, import_dayjs.default)(aTime).isBetween((0, import_dayjs.default)(bTime), (0, import_dayjs.default)(cTime), unit, extra);
};
const djsIsDayjs = (aTime) => {
    return import_dayjs.default.isDayjs(aTime);
};
const djsIsLeapYear = (aTime) => {
    return (0, import_dayjs.default)(aTime).isLeapYear();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    djsBetween,
    djsBetweenRange,
    djsIsAfter,
    djsIsBefore,
    djsIsDayjs,
    djsIsLeapYear,
    djsIsSame,
    djsIsSameDate,
    djsSameAfter,
    djsSameBefore
});
