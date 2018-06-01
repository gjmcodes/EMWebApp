import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';
import { DateTimeService } from '../../../shared/services/datetime.service';
import { Agenda } from '../models/agenda.model';
import { AgendaWeekDayFactory } from '../factories/agendaWeekDay.factory';

@Injectable()
export class AgendaWeekDayService {

    constructor(private dateTimeService: DateTimeService,
    private agendaWeekDayFactory : AgendaWeekDayFactory) { }

    getAgendaDays(agenda: Agenda): AgendaWeekDay[] {
        let startDate = agenda.selectedDate;
        let endDate = this.dateTimeService.addDay(startDate, this.dateTimeService.getDaysInMonth(startDate));
        let diffdays = this.dateTimeService.getDiffDays(endDate, startDate);

        let weekDays = new Array();

        for (let i = 0; i < diffdays; i++) {
            let weekDayDate = this.dateTimeService.addDay(startDate, i);
            let agendaWeekDay = this.agendaWeekDayFactory.getAgendaWeekDay(weekDayDate, agenda);
            weekDays.push(agendaWeekDay);
        }

        return weekDays;
    }
}