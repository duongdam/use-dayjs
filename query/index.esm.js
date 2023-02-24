import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import isLeapYear from "dayjs/plugin/isLeapYear";

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isLeapYear);
const djsIsBefore = (aTime, bTime, unit) => {
  return dayjs(aTime).isBefore(dayjs(bTime), unit);
};
const djsIsSame = (aTime, bTime, unit) => {
  return dayjs(aTime).isSame(dayjs(bTime), unit);
};
const djsIsSameDate = (aTime, bTime) => {
  return dayjs(aTime).isSame(dayjs(bTime), "date");
};
const djsIsAfter = (aTime, bTime, unit) => {
  return dayjs(aTime).isAfter(dayjs(bTime), unit);
};
const djsSameBefore = (aTime, bTime, unit) => {
  return dayjs(aTime).isSameOrBefore(dayjs(bTime), unit);
};
const djsSameAfter = (aTime, bTime, unit) => {
  return dayjs(aTime).isSameOrAfter(dayjs(bTime), unit);
};
const djsBetween = (aTime, bTime, cTime, unit, extra) => {
  return dayjs(aTime).isBetween(dayjs(bTime), dayjs(cTime), unit, extra);
};
const djsBetweenRange = (aTime, bTime, cTime, unit, extra) => {
  return dayjs(aTime).isBetween(dayjs(bTime), dayjs(cTime), unit, extra);
};
const djsIsDayjs = (aTime) => {
  return dayjs.isDayjs(aTime);
};
const djsIsLeapYear = (aTime) => {
  return dayjs(aTime).isLeapYear();
};
export {
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
};
