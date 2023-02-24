import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import calendar from "dayjs/plugin/calendar";
import toArray from "dayjs/plugin/toArray";
import toObject from "dayjs/plugin/toObject";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(calendar);
dayjs.extend(toArray);
dayjs.extend(toObject);
dayjs.extend(utc);
const djsParseUTC = (aTime) => {
  if (!aTime)
    return dayjs().utc();
  return dayjs(aTime).utc();
};
const djsFormat = (aTime, format) => {
  return dayjs(aTime).format(format);
};
const djsFromNow = (aTime, withoutSuffix) => {
  return dayjs(aTime).fromNow(withoutSuffix);
};
const djsToNow = (aTime, withoutSuffix) => {
  return dayjs(aTime).toNow(withoutSuffix);
};
const djsFromAtTime = (aTime, compared, withoutSuffix) => {
  return dayjs(aTime).from(compared, withoutSuffix);
};
const djsToAtTime = (aTime, compared, withoutSuffix) => {
  return dayjs(aTime).to(compared, withoutSuffix);
};
const djsCalendar = (referenceTime, formats) => {
  return dayjs().calendar(referenceTime, formats);
};
const djsDiff = (aTime, bTime, unit, float) => {
  return dayjs(aTime).diff(bTime, unit, float);
};
const djsToDateJs = (aTime) => {
  return dayjs(aTime).toDate();
};
const djsToArray = (aTime) => {
  return dayjs(aTime).toArray();
};
const djsToJson = (aTime) => {
  return dayjs(aTime).toJSON();
};
const djsToISOString = (aTime) => {
  return dayjs(aTime).toISOString();
};
const djsToObject = (aTime) => {
  return dayjs(aTime).toObject();
};
const djsToString = (aTime) => {
  return dayjs(aTime).toString();
};
const djsUnixTimestamp = (aTime) => {
  return dayjs(aTime).valueOf();
};
const djsUnix = (aTime) => {
  return dayjs(aTime).unix();
};
const djsDayInMonth = (aTime) => {
  return dayjs(aTime).daysInMonth();
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
export {
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
};
