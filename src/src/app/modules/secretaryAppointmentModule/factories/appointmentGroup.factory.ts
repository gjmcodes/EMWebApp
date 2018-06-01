import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DateTimeService } from '../../../shared/services/datetime.service';
import { Agenda } from '../models/agenda.model';
import { AppointmentGroup } from '../models/appointmentGroup.model';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';

@Injectable()
export class AppointmentGroupFactory {

    constructor(private dateTimeService: DateTimeService) {
    }

    getAppointmentGroup(startHourInMinutes: number, endHourInMinutes: number, agendaWeekDay: AgendaWeekDay): AppointmentGroup {

        let formattedStartHour = this.dateTimeService
            .getLocaleHourMinuteFormatFromMinutes(startHourInMinutes);
        let formattedEndHour = this.dateTimeService
            .getLocaleHourMinuteFormatFromMinutes(endHourInMinutes);

        let aptGroup = new AppointmentGroup();
        aptGroup.startHourInMinutes = startHourInMinutes;
        aptGroup.endHourInMinutes = endHourInMinutes;
        aptGroup.agendaWeekDay = agendaWeekDay;
        aptGroup.formattedStartHour = formattedStartHour;
        aptGroup.formattedEndHour = formattedEndHour;

        return aptGroup;
    }
}