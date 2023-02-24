import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import isoWeek from "dayjs/plugin/isoWeek";
import dayOfYear from "dayjs/plugin/dayOfYear";
import weekOfYear from "dayjs/plugin/weekOfYear";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import weekYear from "dayjs/plugin/weekYear";
import isoWeeksInYear from "dayjs/plugin/isoWeeksInYear";
import utc from "dayjs/plugin/utc";

dayjs.extend(weekday);
dayjs.extend(isoWeek);
dayjs.extend(dayOfYear);
dayjs.extend(weekOfYear);
dayjs.extend(quarterOfYear);
dayjs.extend(weekYear);
dayjs.extend(isoWeeksInYear);
dayjs.extend(utc);
const djsParseUTC = (aTime) => {
  if (!aTime)
    return dayjs().utc();
  return dayjs(aTime).utc();
};
const djsMillisecondValue = (aTime, value = 0) => {
  return dayjs(aTime).millisecond(value);
};
const djsMillisecond = (aTime) => {
  return dayjs(aTime).millisecond();
};
const djsSecondValue = (aTime, value = 0) => {
  return dayjs(aTime).second(value);
};
const djsSecond = (aTime) => {
  return dayjs(aTime).second();
};
const djsMinuteValue = (aTime, value = 0) => {
  return dayjs(aTime).minute(value);
};
const djsMinute = (aTime) => {
  return dayjs(aTime).minute();
};
const djsHourValue = (aTime, value = 0) => {
  return dayjs(aTime).hour(value);
};
const djsHour = (aTime) => {
  return dayjs(aTime).hour();
};
const djsDayValue = (aTime, value = 0) => {
  return dayjs(aTime).day(value);
};
const djsDay = (aTime) => {
  return dayjs(aTime).day();
};
const djsWeekValue = (aTime, value = 0) => {
  return dayjs(aTime).week(value);
};
const djsWeek = (aTime) => {
  return dayjs(aTime).week();
};
const djsDateOfMonth = (aTime, value = 0) => {
  return dayjs(aTime).date(value);
};
const djsDayOfWeek = (aTime, value = 0) => {
  return dayjs(aTime).day(value);
};
const djsDayOfWeekAware = (aTime, value = 0) => {
  return dayjs(aTime).weekday(value);
};
const djsDayOfWeekISO = (aTime, value = 0) => {
  return dayjs(aTime).isoWeekday(value);
};
const djsDayOfYear = (aTime, value = 0) => {
  return dayjs(aTime).dayOfYear(value);
};
const djsWeekOfYear = (aTime, value = 0) => {
  return dayjs(aTime).isoWeek(value);
};
const djsMonthValue = (aTime, value = 0) => {
  return dayjs(aTime).month(value);
};
const djsMonth = (aTime) => {
  return dayjs(aTime).month();
};
const djsQuarterValue = (aTime, value = 0) => {
  return dayjs(aTime).quarter(value);
};
const djsQuarter = (aTime) => {
  return dayjs(aTime).quarter();
};
const djsYearValue = (aTime, value = 0) => {
  return dayjs(aTime).year(value);
};
const djsYear = (aTime) => {
  return dayjs(aTime).year();
};
const djsWeekYear = (aTime) => {
  return dayjs(aTime).weekYear();
};
const djsWeekInYearISO = (aTime) => {
  return dayjs(aTime).isoWeeksInYear();
};
const djsGet = (aTime, type = "millisecond") => {
  if (!aTime)
    return dayjs().get(type);
  return dayjs(aTime).get(type);
};
const djsSet = (aTime, config) => {
  if (!aTime)
    aTime = new Date();
  return dayjs(aTime).set("year", (config == null ? void 0 : config.year) || djsGet(aTime, "year")).set("month", (config == null ? void 0 : config.month) || djsGet(aTime, "month")).set("date", (config == null ? void 0 : config.date) || djsGet(aTime, "date")).set("day", (config == null ? void 0 : config.day) || djsGet(aTime, "day")).set("hour", (config == null ? void 0 : config.hour) || djsGet(aTime, "hour")).set("minute", (config == null ? void 0 : config.minute) || djsGet(aTime, "minute")).set("second", (config == null ? void 0 : config.second) || djsGet(aTime, "second")).set("millisecond", (config == null ? void 0 : config.millisecond) || djsGet(aTime, "millisecond"));
};
const djsDefault = (aTime, valueOf = false) => {
  if (valueOf)
    return dayjs(aTime).valueOf();
  return dayjs(aTime);
};
const djsDefaultUTC = (aTime, valueOf = false) => {
  if (valueOf)
    return djsParseUTC(aTime).valueOf();
  return djsParseUTC(aTime).utc();
};
const djsDuration = (aTime, bTime, divisor) => {
  return (dayjs(aTime).valueOf() - dayjs(bTime).valueOf()) / divisor;
};
const djsDurationUTC = (aTime, bTime, divisor) => {
  return (djsParseUTC(aTime).valueOf() - djsParseUTC(bTime).valueOf()) / divisor;
};
export {
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
};
