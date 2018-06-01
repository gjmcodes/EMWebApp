import { Injectable } from "@angular/core";
import { Appointment } from "../models/appointment.model";
import { AppointmentGroup } from "../models/appointmentGroup.model";


import { forEach } from "@angular/router/src/utils/collection";
import { DateTimeService } from "../../../shared/services/datetime.service";
import { Agenda } from "../models/agenda.model";
import { WeekDay } from "@angular/common";
import { AgendaWeekDay } from "../models/agendaWeekDay.model";
import { AppointmentGroupFactory } from "../factories/appointmentGroup.factory";

@Injectable()
export class AppointmentService {

    constructor(private dateTimeService: DateTimeService,
    private appointmentGroupFactory : AppointmentGroupFactory) {
        this.dateTimeService = dateTimeService;
    }

    getWeekDays(agenda: Agenda) {

    }

    getAppointmentGroupsForAgenda(agenda: Agenda): Agenda {

        let diffHours = agenda.agendaSettings.closingHourInMinutes - agenda.agendaSettings.openingHourInMinutes;
        let hours = new Array();

        for (let j = 0; j < diffHours; j++) {
            hours.push(agenda.agendaSettings.openingHourInMinutes + j);
        }

        agenda.weekDays.forEach(agendaDay => {
            let currentMinutesInterval = agenda.agendaSettings.openingHourInMinutes;
            while (currentMinutesInterval < agenda.agendaSettings.closingHourInMinutes) {

                let startHourInMinutes = currentMinutesInterval;
                currentMinutesInterval += agenda.agendaSettings.agendaIntervalInMinutes;
                let endHourInMinutes = currentMinutesInterval;


                let aptGroup = this.appointmentGroupFactory
                    .getAppointmentGroup(startHourInMinutes, endHourInMinutes, agendaDay);

                agendaDay.appointmentGroups.push(aptGroup);
            }
        });

        let endDate = this.dateTimeService.addDay(agenda.selectedDate, 7)
        let startDate = agenda.selectedDate;

        let appointments = this.getAppointments(startDate, endDate);
        this.sortAppointmentsIntoGroups(appointments, agenda.weekDays);

        return agenda;
    }

    private sortAppointmentsIntoGroups(appointments: Appointment[], agendaWeekDays: AgendaWeekDay[]) {
        appointments.forEach(apt => {

            let suitableGroup;
            let suitableAgendaWeekDay = agendaWeekDays.find(x => x.day == apt.getDay());

            suitableGroup = suitableAgendaWeekDay.getSuitableGroupForAppointment(apt);

            if (suitableGroup != null) {
                suitableGroup.appointments.push(apt);
            }
        });
    }

    private getAppointments(startDate: Date, endDate: Date): Appointment[] {
        startDate = this.dateTimeService.addHours(startDate, 9);
        var d1 = startDate;
        var d2 = this.dateTimeService.addDay(startDate, 1);
        var d3 = this.dateTimeService.addDay(startDate, 1);
        var d4 = this.dateTimeService.addDay(startDate, 2);
        var d5 = this.dateTimeService.addDay(startDate, 2);

        return [
            new Appointment(d1, "aaa", "abc"),
            new Appointment(d2, "bbb", "def"),
            new Appointment(d3, "ccc", "ghf"),
            new Appointment(d4, "eee", "abc"),
            new Appointment(d5, "fff", "abc"),
        ]
    }
}