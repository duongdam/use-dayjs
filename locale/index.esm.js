import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
const djsSetLocale = (locale) => {
  if (!locale)
    locale = "ja";
  let _locale = locale.split("-")[0];
  if (_locale === "en")
    _locale = "en-gb";
  import(`dayjs/locale/${_locale}.js`).then(() => {
    dayjs.locale(_locale);
  }).catch((e) => console.log(e.toString()));
};
const djsUTCOffset = (aTime, offset, keepLocalTime) => {
  return dayjs(aTime).utcOffset(offset, keepLocalTime);
};
const djsUTC = (aTime, keepLocalTime) => {
  return dayjs(aTime).utc(keepLocalTime);
};
export {
  djsSetLocale,
  djsUTC,
  djsUTCOffset
};
