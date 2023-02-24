"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var display_exports = {};
__export(display_exports, {
    djsCalendar: () => djsCalendar,
    djsDayInMonth: () => djsDayInMonth,
    djsDiff: () => djsDiff,
    djsFormat: () => djsFormat,
    djsFormatDDD: () => djsFormatDDD,
    djsFormatDDDD: () => djsFormatDDDD,
    djsFormatDDMM: () => djsFormatDDMM,
    djsFormatMMDD: () => djsFormatMMDD,
    djsFormatUTC: () => djsFormatUTC,
    djsFormatYYYY: () => djsFormatYYYY,
    djsFormatYYYYMMDD: () => djsFormatYYYYMMDD,
    djsFormatYYYYMMDDHHMMSSZ: () => djsFormatYYYYMMDDHHMMSSZ,
    djsFromAtTime: () => djsFromAtTime,
    djsFromNow: () => djsFromNow,
    djsParseUTC: () => djsParseUTC,
    djsToArray: () => djsToArray,
    djsToAtTime: () => djsToAtTime,
    djsToDateJs: () => djsToDateJs,
    djsToISOString: () => djsToISOString,
    djsToJson: () => djsToJson,
    djsToNow: () => djsToNow,
    djsToObject: () => djsToObject,
    djsToString: () => djsToString,
    djsUnix: () => djsUnix,
    djsUnixTimestamp: () => djsUnixTimestamp
});
module.exports = __toCommonJS(display_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
var import_calendar = __toESM(require("dayjs/plugin/calendar"));
var import_toArray = __toESM(require("dayjs/plugin/toArray"));
var import_toObject = __toESM(require("dayjs/plugin/toObject"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
import_dayjs.default.extend(import_relativeTime.default);
import_dayjs.default.extend(import_calendar.default);
import_dayjs.default.extend(import_toArray.default);
import_dayjs.default.extend(import_toObject.default);
import_dayjs.default.extend(import_utc.default);
const djsParseUTC = (aTime) => {
    if (!aTime)
        return (0, import_dayjs.default)().utc();
    return (0, import_dayjs.default)(aTime).utc();
};
const djsFormat = (aTime, format) => {
    return (0, import_dayjs.default)(aTime).format(format);
};
const djsFromNow = (aTime, withoutSuffix) => {
    return (0, import_dayjs.default)(aTime).fromNow(withoutSuffix);
};
const djsToNow = (aTime, withoutSuffix) => {
    return (0, import_dayjs.default)(aTime).toNow(withoutSuffix);
};
const djsFromAtTime = (aTime, compared, withoutSuffix) => {
  return (0, import_dayjs.default)(aTime).from(compared, withoutSuffix);
};
const djsToAtTime = (aTime, compared, withoutSuffix) => {
  return (0, import_dayjs.default)(aTime).to(compared, withoutSuffix);
};
const djsCalendar = (referenceTime, formats) => {
  return (0, import_dayjs.default)().calendar(referenceTime, formats);
};
const djsDiff = (aTime, bTime, unit, float) => {
  return (0, import_dayjs.default)(aTime).diff(bTime, unit, float);
};
const djsToDateJs = (aTime) => {
  return (0, import_dayjs.default)(aTime).toDate();
};
const djsToArray = (aTime) => {
  return (0, import_dayjs.default)(aTime).toArray();
};
const djsToJson = (aTime) => {
  return (0, import_dayjs.default)(aTime).toJSON();
};
const djsToISOString = (aTime) => {
  return (0, import_dayjs.default)(aTime).toISOString();
};
const djsToObject = (aTime) => {
  return (0, import_dayjs.default)(aTime).toObject();
};
const djsToString = (aTime) => {
  return (0, import_dayjs.default)(aTime).toString();
};
const djsUnixTimestamp = (aTime) => {
  return (0, import_dayjs.default)(aTime).valueOf();
};
const djsUnix = (aTime) => {
  return (0, import_dayjs.default)(aTime).unix();
};
const djsDayInMonth = (aTime) => {
  return (0, import_dayjs.default)(aTime).daysInMonth();
};
const djsFormatUTC = (aTime, format) => {
    return djsFormat(djsParseUTC(aTime), format);
};
const djsFormatDDD = (aTime) => {
  return djsFormat(aTime, "ddd");
};
const djsFormatDDDD = (aTime) => {
  return djsFormat(aTime, "dddd");
};
const djsFormatMMDD = (aTime) => {
  return djsFormat(aTime, "MM/DD");
};
const djsFormatDDMM = (aTime) => {
  return djsFormat(aTime, "DD/MM");
};
const djsFormatYYYYMMDD = (aTime) => {
  return djsFormat(aTime, "YYYY-MM-DD");
};
const djsFormatYYYY = (aTime) => {
  return djsFormat(aTime, "YYYY");
};
const djsFormatYYYYMMDDHHMMSSZ = (aTime) => {
    return djsFormat(djsParseUTC(aTime), "YYYYMMDDTHHmmss") + "Z";
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    djsCalendar,
    djsDayInMonth,
    djsDiff,
    djsFormat,
    djsFormatDDD,
    djsFormatDDDD,
    djsFormatDDMM,
    djsFormatMMDD,
    djsFormatUTC,
    djsFormatYYYY,
    djsFormatYYYYMMDD,
    djsFormatYYYYMMDDHHMMSSZ,
    djsFromAtTime,
    djsFromNow,
    djsParseUTC,
    djsToArray,
    djsToAtTime,
    djsToDateJs,
    djsToISOString,
    djsToJson,
    djsToNow,
    djsToObject,
    djsToString,
    djsUnix,
    djsUnixTimestamp
});
