import fnsStartOfHour from "date-fns/startOfHour";
import fnsStartOfMinute from "date-fns/startOfMinute";
import fnsStartOfSecond from "date-fns/startOfSecond";
import fnsStartOfDay from "date-fns/startOfDay";
import fnsStartOfISOWeek from "date-fns/startOfISOWeek";
import fnsStartOfMonth from "date-fns/startOfMonth";
import fnsStartOfYear from "date-fns/startOfYear";

export default {
  HOURS: fnsStartOfHour,
  MINUTES: fnsStartOfMinute,
  SECONDS: fnsStartOfSecond,
  DAYS: fnsStartOfDay,
  WEEKS: fnsStartOfISOWeek,
  MONTHS: fnsStartOfMonth,
  YEARS: fnsStartOfYear,
};
