import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
import objectSupport from "dayjs/plugin/objectSupport";

dayjs.extend(objectSupport);
dayjs.extend(customParseFormat);
dayjs.extend(utc);
const djsParse = (aTime) => {
  if (!aTime)
    return dayjs();
  return dayjs(aTime);
};
const djsParseUTC = (aTime) => {
  if (!aTime)
    return dayjs().utc();
  return dayjs(aTime).utc();
};
const djsNowUTC = () => {
  return dayjs().utc();
};
const djsNow = () => {
  return dayjs();
};
const djsParseNow = () => {
  return djsParse(djsNow().toString());
};
const djsParseNowUTC = () => {
  return djsParse(djsNow().toString());
};
const djsClone = (aTime) => {
  if (!aTime)
    return dayjs(dayjs());
  return dayjs(dayjs(aTime));
};
export {
  djsClone,
  djsNow,
  djsNowUTC,
  djsParse,
  djsParseNow,
  djsParseNowUTC,
  djsParseUTC
};
