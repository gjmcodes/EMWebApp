import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { DurationInputArg1, DurationInputArg2 } from 'moment';

@Injectable()
export class DateTimeService {

    dateFormat: string;
    constructor() {
        moment.locale(navigator.language);
        this.dateFormat = 'DD-MM-YYYY';
    }

    getCurrentDate(): Date {
        return moment().toDate();
    }

    addDay(date: Date, amountToAdd: number): Date {
        return moment(date, this.dateFormat).add(amountToAdd, 'days').toDate();
    }

    addHours(date: Date, amountToAdd: number): Date {
        return moment(date, this.dateFormat).add(amountToAdd, 'hours').toDate();
    }


    getShortWeekDayName(date: Date) {
        let dt = moment(date, "YYYY-MM-DD");
        return dt.format('ddd');
    }

    getDateString(date: Date) {
        let dt = moment(date, "YYYY-MM-DD");
        return dt.format('L');
    }

    getDaysInMonth(date: Date): number {
        return moment(date, "YYYY-MM").daysInMonth();
    }

    getLocaleHourMinuteFormat(hour?: number, minute?: number): string {
        return moment()
            .hour(hour == null ? 0 : hour)
            .minute(minute == null ? 0 : minute).format('LT').toString();
    }

    getLocaleHourMinuteFormatFromMinutes(minutes: number): string {
        let hour = this.getHourFromMinutes(minutes);
        let hourMinutes = minutes - (hour * 60);

        return this.getLocaleHourMinuteFormat(hour, hourMinutes);
    }

    getDiffDays(greaterDate: Date, shorterDate: Date): number {
        var timeDiff = Math.abs(greaterDate.getTime() - shorterDate.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        return diffDays;
    }

    addMonth(date : Date, value : number) : Date{
        return moment(date, this.dateFormat).add('month', value).toDate();
    }
    getHourFromMinutes(minutes: number): number {
        return Math.floor(minutes / 60);
    }

    getFirstDayMonth(): Date {
        let currentDate = this.getCurrentDate();
        var date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

        return date;
    }

    getLastDayMonth(): Date{
        let firstDayMonth = this.getFirstDayMonth();
        let nextMonth = this.addMonth(firstDayMonth, 1);
        let lastDayDate = this.addDay(nextMonth, -1);
        
        return lastDayDate;
    }
}