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
var locale_exports = {};
__export(locale_exports, {
    djsSetLocale: () => djsSetLocale,
    djsUTC: () => djsUTC,
    djsUTCOffset: () => djsUTCOffset
});
module.exports = __toCommonJS(locale_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_utc = __toESM(require("dayjs/plugin/utc"));
import_dayjs.default.extend(import_utc.default);
const djsSetLocale = (locale) => {
    if (!locale)
        locale = "ja";
    let _locale = locale.split("-")[0];
    if (_locale === "en")
        _locale = "en-gb";
    import(`dayjs/locale/${_locale}.js`).then(() => {
        import_dayjs.default.locale(_locale);
    }).catch((e) => console.log(e.toString()));
};
const djsUTCOffset = (aTime, offset, keepLocalTime) => {
    return (0, import_dayjs.default)(aTime).utcOffset(offset, keepLocalTime);
};
const djsUTC = (aTime, keepLocalTime) => {
    return (0, import_dayjs.default)(aTime).utc(keepLocalTime);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    djsSetLocale,
    djsUTC,
    djsUTCOffset
});
