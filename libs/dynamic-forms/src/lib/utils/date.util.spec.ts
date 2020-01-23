import { async, TestBed } from '@angular/core/testing';

import { Month } from '../interfaces/date.interface';
import { getCountDaysByMonthAndYear, getDays, getDaysByMonthAndYear, getMonthChoices, getYears } from './date.util';

describe('DateUtils', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({}).compileComponents();
  }));

  it('should return days', () => {
    expect(getDays().length).toBe(31);
    expect(getDays(1, 28).length).toBe(28);
    expect(getDays(1, 2).length).toBe(2);
  });

  it('should return count days by month anb year', () => {
    expect(getCountDaysByMonthAndYear(Month.February, 1999)).toBe(28);
    expect(getCountDaysByMonthAndYear(Month.February, 2000)).toBe(29);
    expect(getCountDaysByMonthAndYear(Month.February, 2001)).toBe(28);
    expect(getCountDaysByMonthAndYear(Month.February, 2002)).toBe(28);
    expect(getCountDaysByMonthAndYear(Month.February, 2003)).toBe(28);
    expect(getCountDaysByMonthAndYear(Month.February, 2004)).toBe(29);
  });

  it('should return days by month anb year', () => {
    expect(getDaysByMonthAndYear(Month.January, 1999).length).toBe(31);
    expect(getCountDaysByMonthAndYear(Month.February, 1999)).toBe(28);
    expect(getCountDaysByMonthAndYear(Month.June, 2001)).toBe(30);
  });

  it('should return list yars', () => {
    let years = getYears(2000);
    expect(years.length).toBe(100);
    expect(years[0]).toBe(2000);
    expect(years[80]).toBe(1920);

    years = getYears(2018);
    expect(years.length).toBe(100);
    expect(years[0]).toBe(2018);
    expect(years[80]).toBe(1938);
  });

  it('should return months choices', () => {
    const months = getMonthChoices();
    const monthChoice = { label: 'months.nom.january', value: 1 };
    expect(months.length).toEqual(12);
    expect(months[0]).toEqual(monthChoice);
  });
});
