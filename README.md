## use-dayjs

Simpler to use dayjs

## Support for

```bash
- Typescript
- React js
- Next js
- Node js
```

## Install package

```html

npm i --save use-dayjs
yarn add use-dayjs

```

## Use package

```bash
// Used

import {djsSetLocale} from "use-dayjs/locale";
djsSetLocale('vi')

import {djsFormat} from "use-dayjs/display";
import {djsSet} from "use-dayjs/calculator";
import {djsDay} from "use-dayjs/display";

djsFormat("2022-06-30", "YYYY-MM-DD ddd") //2022-06-30 T5

djsSet(new Date(), {
    year: 2025,
    month: 0
}) //2025-07-11T08:49:52.569Z

djsDay("2022-07-18") // 1

```

More Actions

```html
1.Calculator

djsDateOfMonth,
djsDayOfWeek,
djsDayOfWeekAware,
djsDayOfWeekISO,
djsSet,
djsDayOfYear,
djsGet,
djsHour,
djsMillisecond,
djsMinute,
djsMonth,
djsQuarter,
djsSecond,
djsWeekInYearISO,
djsWeekOfYear,
djsWeekYear,
djsYear,
djsWeek,
djsWeekDay,
djsDuration,
djsDefault,
djsDefaultUTC,
djsDurationUTC

```

```html
2.Display

djsFormat,
djsFromNow,
djsFromAtTime,
djsToAtTime,
djsCalendar,
djsToNow,
djsDiff,
djsToDateJs,
djsToArray,
djsUnix,
djsDayInMonth,
djsToISOString,
djsToJson,
djsToObject,
djsToString,
djsUnixTimestamp,
djsParseUTC,
djsFormatDDD,
djsFormatDDDD,
djsFormatDDMM,
djsFormatMMDD,
djsFormatUTC,
djsFormatYYYY,
djsFormatYYYYMMDD,
djsFormatYYYYMMDDHHMMSSZ,

```

```html
3.Locale

djsSetLocale,
djsUTCOffset,
djsUTC

```

```html
4.Manipulate

djsAdd,
djsEndOf,
djsStartOf,
djsSubtract,

```

```html
5.Parse

djsParse,
djsParseNow,
djsParseUTC,
djsParseNowUTC,
djsNow,
djsNowUTC,
djsClone

```

```html
6.Query

djsBetween,
djsBetweenRange,
djsIsAfter,
djsIsBefore,
djsIsDayjs,
djsIsLeapYear,
djsIsSame,
djsSameAfter,
djsSameBefore,
djsIsSameDate

```

```html
7.Timezone

djsTz,
djsTzSet,
djsToZone,
djsTzGuess,
djsTzFormat,
djsGTM

```
