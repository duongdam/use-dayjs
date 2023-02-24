import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);
const djsAdd = (aTime, nums, unit) => {
  return dayjs(aTime).add(nums, unit);
};
const djsSubtract = (aTime, nums, unit) => {
  return dayjs(aTime).subtract(nums, unit);
};
const djsStartOf = (aTime, unit) => {
  return dayjs(aTime).startOf(unit);
};
const djsEndOf = (aTime, unit) => {
  return dayjs(aTime).endOf(unit);
};
const djsStartOfDay = (aTime) => {
  return dayjs(aTime).startOf("day");
};
const djsEndOfDay = (aTime) => {
  return dayjs(aTime).endOf("day");
};
const djsToDate = (aTime) => {
  return dayjs(aTime).toDate();
};
export {
  djsAdd,
  djsEndOf,
  djsEndOfDay,
  djsStartOf,
  djsStartOfDay,
  djsSubtract,
  djsToDate
};
