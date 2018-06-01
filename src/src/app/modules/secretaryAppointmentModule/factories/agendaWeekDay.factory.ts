import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DateTimeService } from '../../../shared/services/datetime.service';
import { Agenda } from '../models/agenda.model';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';

@Injectable()
export class AgendaWeekDayFactory {

    constructor(private dateTimeService: DateTimeService) {

    }

    getAgendaWeekDay(weekDayDate: Date, agenda: Agenda) {
        let agendaWeekDay = new AgendaWeekDay();

        agendaWeekDay.dayName = this.dateTimeService.getShortWeekDayName(weekDayDate);
        agendaWeekDay.dateString = this.dateTimeService.getDateString(weekDayDate);
        agendaWeekDay.dayDate = weekDayDate;
        agendaWeekDay.day = weekDayDate.getDate();
        agendaWeekDay.agenda = agenda;

        return agendaWeekDay;
    }

}