import { Month, MONTH_DAYS, MONTHS } from '../interfaces/date.interface';
import { FormFieldOption } from '../interfaces/form.interface';

/**
 * Return collection numbers days
 *
 * @param startDay start day
 * @param endDay end day
 */
export function getDays(startDay: number = 1, endDay: number = 31) {
  const days: number[] = [];
  for (let day = startDay; day <= endDay; day++) {
    days.push(day);
  }

  return days;
}

/**
 * Return count days by month and year
 *
 * @param month month
 * @param year year
 */
export function getCountDaysByMonthAndYear(month: Month, year: number = 1): number {
  let count: number = MONTH_DAYS[month];
  if (month === Month.February && year % 4 === 0) {
    count = count + 1;
  }

  return count;
}

/**
 * Return collection numbers days for month and year
 *
 * @param month month
 * @param year year
 */
export function getDaysByMonthAndYear(month: Month, year: number = 0) {
  const days = getCountDaysByMonthAndYear(month, year);

  return getDays(1, days);
}

/**
 * Return collection valid years for users
 *
 * @param year current date
 * @param startYear start year
 * @param endYear end year
 */
export function getYears(year?: number, startYear: number = 0, endYear: number = 100): number[] {
  if (!year) {
    year = new Date().getFullYear();
  }
  const years: number[] = [];
  for (let iterator = year - startYear, end = year - endYear; iterator > end; iterator--) {
    years.push(iterator);
  }

  return years;
}

/**
 * Return month choices
 *
 * @param langCase language case (nominative, generative, ...)
 */
export function getMonthChoices(langCase: string = 'nom'): FormFieldOption[] {
  const choices: FormFieldOption[] = [];
  for (const month of Object.keys(MONTHS)) {
    choices.push({
      value: +month,
      label: `months.${langCase}.${MONTHS[month]}`
    });
  }

  return choices;
}
