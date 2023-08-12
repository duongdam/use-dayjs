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
var calculator_exports = {};
__export(calculator_exports, {
  djsDateOfMonth: () => djsDateOfMonth,
  djsDay: () => djsDay,
  djsDayOfWeek: () => djsDayOfWeek,
  djsDayOfWeekAware: () => djsDayOfWeekAware,
  djsDayOfWeekISO: () => djsDayOfWeekISO,
  djsDayOfYear: () => djsDayOfYear,
  djsDayValue: () => djsDayValue,
  djsDefault: () => djsDefault,
  djsDefaultUTC: () => djsDefaultUTC,
  djsDuration: () => djsDuration,
  djsDurationUTC: () => djsDurationUTC,
  djsGet: () => djsGet,
  djsHour: () => djsHour,
  djsHourValue: () => djsHourValue,
  djsMillisecond: () => djsMillisecond,
  djsMillisecondValue: () => djsMillisecondValue,
  djsMinute: () => djsMinute,
  djsMinuteValue: () => djsMinuteValue,
  djsMonth: () => djsMonth,
  djsMonthValue: () => djsMonthValue,
  djsParseUTC: () => djsParseUTC,
  djsQuarter: () => djsQuarter,
  djsQuarterValue: () => djsQuarterValue,
  djsSecond: () => djsSecond,
  djsSecondValue: () => djsSecondValue,
  djsSet: () => djsSet,
  djsWeek: () => djsWeek,
  djsWeekInYearISO: () => djsWeekInYearISO,
  djsWeekOfYear: () => djsWeekOfYear,
  djsWeekValue: () => djsWeekValue,
  djsWeekYear: () => djsWeekYear,
  djsYear: () => djsYear,
  djsYearValue: () => djsYearValue
});
module.exports = __toCommonJS(calculator_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_weekday = __toESM(require("dayjs/plugin/weekday"));
var import_isoWeek = __toESM(require("dayjs/plugin/isoWeek"));
var import_dayOfYear = __toESM(require("dayjs/plugin/dayOfYear"));
var import_weekOfYear = __toESM(require("dayjs/plugin/weekOfYear"));
var import_quarterOfYear = __toESM(require("dayjs/plugin/quarterOfYear"));
var import_weekYear = __toESM(require("dayjs/plugin/weekYear"));
var import_isoWeeksInYear = __toESM(require("dayjs/plugin/isoWeeksInYear"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
import_dayjs.default.extend(import_weekday.default);
import_dayjs.default.extend(import_isoWeek.default);
import_dayjs.default.extend(import_dayOfYear.default);
import_dayjs.default.extend(import_weekOfYear.default);
import_dayjs.default.extend(import_quarterOfYear.default);
import_dayjs.default.extend(import_weekYear.default);
import_dayjs.default.extend(import_isoWeeksInYear.default);
import_dayjs.default.extend(import_utc.default);
const djsParseUTC = (aTime) => {
  if (!aTime)
    return (0, import_dayjs.default)().utc();
  return (0, import_dayjs.default)(aTime).utc();
};
const djsMillisecondValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).millisecond(value);
};
const djsMillisecond = (aTime) => {
  return (0, import_dayjs.default)(aTime).millisecond();
};
const djsSecondValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).second(value);
};
const djsSecond = (aTime) => {
  return (0, import_dayjs.default)(aTime).second();
};
const djsMinuteValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).minute(value);
};
const djsMinute = (aTime) => {
  return (0, import_dayjs.default)(aTime).minute();
};
const djsHourValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).hour(value);
};
const djsHour = (aTime) => {
  return (0, import_dayjs.default)(aTime).hour();
};
const djsDayValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).day(value);
};
const djsDay = (aTime) => {
  return (0, import_dayjs.default)(aTime).day();
};
const djsWeekValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).week(value);
};
const djsWeek = (aTime) => {
  return (0, import_dayjs.default)(aTime).week();
};
const djsDateOfMonth = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).date(value);
};
const djsDayOfWeek = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).day(value);
};
const djsDayOfWeekAware = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).weekday(value);
};
const djsDayOfWeekISO = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).isoWeekday(value);
};
const djsDayOfYear = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).dayOfYear(value);
};
const djsWeekOfYear = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).isoWeek(value);
};
const djsMonthValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).month(value);
};
const djsMonth = (aTime) => {
  return (0, import_dayjs.default)(aTime).month();
};
const djsQuarterValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).quarter(value);
};
const djsQuarter = (aTime) => {
  return (0, import_dayjs.default)(aTime).quarter();
};
const djsYearValue = (aTime, value = 0) => {
  return (0, import_dayjs.default)(aTime).year(value);
};
const djsYear = (aTime) => {
  return (0, import_dayjs.default)(aTime).year();
};
const djsWeekYear = (aTime) => {
  return (0, import_dayjs.default)(aTime).weekYear();
};
const djsWeekInYearISO = (aTime) => {
  return (0, import_dayjs.default)(aTime).isoWeeksInYear();
};
const djsGet = (aTime, type = "millisecond") => {
  if (!aTime)
    return (0, import_dayjs.default)().get(type);
  return (0, import_dayjs.default)(aTime).get(type);
};
const djsSet = (aTime, config) => {
  if (!aTime)
    aTime = /* @__PURE__ */ new Date();
  return (0, import_dayjs.default)(aTime).set("year", config?.year || djsGet(aTime, "year")).set("month", config?.month || djsGet(aTime, "month")).set("date", config?.date || djsGet(aTime, "date")).set("day", config?.day || djsGet(aTime, "day")).set("hour", config?.hour || djsGet(aTime, "hour")).set("minute", config?.minute || djsGet(aTime, "minute")).set("second", config?.second || djsGet(aTime, "second")).set("millisecond", config?.millisecond || djsGet(aTime, "millisecond"));
};
const djsDefault = (aTime, valueOf = false) => {
  if (valueOf)
    return (0, import_dayjs.default)(aTime).valueOf();
  return (0, import_dayjs.default)(aTime);
};
const djsDefaultUTC = (aTime, valueOf = false) => {
  if (valueOf)
    return djsParseUTC(aTime).valueOf();
  return djsParseUTC(aTime).utc();
};
const djsDuration = (aTime, bTime, divisor) => {
  return ((0, import_dayjs.default)(aTime).valueOf() - (0, import_dayjs.default)(bTime).valueOf()) / divisor;
};
const djsDurationUTC = (aTime, bTime, divisor) => {
  return (djsParseUTC(aTime).valueOf() - djsParseUTC(bTime).valueOf()) / divisor;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  djsDateOfMonth,
  djsDay,
  djsDayOfWeek,
  djsDayOfWeekAware,
  djsDayOfWeekISO,
  djsDayOfYear,
  djsDayValue,
  djsDefault,
  djsDefaultUTC,
  djsDuration,
  djsDurationUTC,
  djsGet,
  djsHour,
  djsHourValue,
  djsMillisecond,
  djsMillisecondValue,
  djsMinute,
  djsMinuteValue,
  djsMonth,
  djsMonthValue,
  djsParseUTC,
  djsQuarter,
  djsQuarterValue,
  djsSecond,
  djsSecondValue,
  djsSet,
  djsWeek,
  djsWeekInYearISO,
  djsWeekOfYear,
  djsWeekValue,
  djsWeekYear,
  djsYear,
  djsYearValue
});
