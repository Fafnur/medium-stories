/**
 * Months
 */
export enum Month {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
}

/**
 * Days in month
 */
export enum MonthDays {
  January = 31,
  February = 28,
  March = 31,
  April = 30,
  May = 31,
  June = 30,
  July = 31,
  August = 31,
  September = 30,
  October = 31,
  November = 30,
  December = 31
}

/**
 * Map month to string
 */
export const MONTHS: { [P in Month]: string } = {
  [Month.January]: 'january',
  [Month.February]: 'february',
  [Month.March]: 'march',
  [Month.April]: 'april',
  [Month.May]: 'may',
  [Month.June]: 'june',
  [Month.July]: 'july',
  [Month.August]: 'august',
  [Month.September]: 'september',
  [Month.October]: 'october',
  [Month.November]: 'november',
  [Month.December]: 'december'
};

/**
 * Map month to string
 */
export const MONTH_DAYS: { [P in Month]: number } = {
  [Month.January]: MonthDays.January,
  [Month.February]: MonthDays.February,
  [Month.March]: MonthDays.March,
  [Month.April]: MonthDays.April,
  [Month.May]: MonthDays.May,
  [Month.June]: MonthDays.June,
  [Month.July]: MonthDays.July,
  [Month.August]: MonthDays.August,
  [Month.September]: MonthDays.September,
  [Month.October]: MonthDays.October,
  [Month.November]: MonthDays.November,
  [Month.December]: MonthDays.December
};
