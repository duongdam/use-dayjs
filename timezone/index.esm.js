import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
const djsFormat = (aTime, format) => {
  return dayjs(aTime).format(format);
};
const djsTzSet = (tz) => {
  return dayjs.tz.setDefault(tz);
};
const djsTzGuess = () => {
  return dayjs.tz.guess();
};
const djsTz = (aTime, tz) => {
  return dayjs.tz(aTime, tz);
};
const djsToZone = (aTime, tz, keepLocalTime) => {
  return dayjs(aTime).tz(tz, keepLocalTime);
};
const djsTzFormat = (aTime, format = "YYYY-MM-DD H:mm:ss A Z", tz) => {
  if (!tz)
    tz = dayjs.tz.guess();
  return djsFormat(dayjs.tz(aTime, format, tz), format);
};
const djsGTM = (timezone2) => {
  let result;
    const tz = timezone2 ? +djsTzFormat(/* @__PURE__ */ new Date(), "ZZ", timezone2) / 100 : +djsFormat(/* @__PURE__ */ new Date(), "ZZ") / 100;
    const isInt = Number.isInteger(tz);
  if (!isInt) {
    result = `${`${tz}`.replace(".", ":")}0`;
    result = ["-", "+"].includes(`${result}`.charAt(0)) ? `${result}` : `+${result}`;
  } else {
    result = ["-", "+"].includes(`${tz}`.charAt(0)) ? `${tz}` : `+${tz}`;
  }
  return `GTM${result}`;
};
export {
  djsGTM,
  djsToZone,
  djsTz,
  djsTzFormat,
  djsTzGuess,
  djsTzSet
};
