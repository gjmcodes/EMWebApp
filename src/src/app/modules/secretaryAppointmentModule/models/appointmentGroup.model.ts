import { Appointment } from "./appointment.model";
import { WeekDay } from "@angular/common";
import { AgendaWeekDay } from "./agendaWeekDay.model";
import { Agenda } from "./agenda.model";

export class AppointmentGroup {

    constructor() { 
        this.appointments = new Array();
    }

    formattedStartHour: string;
    formattedEndHour: string;

    startHourInMinutes: number;
    endHourInMinutes: number;
    day: number;

    appointments: Appointment[];
    agendaWeekDay: AgendaWeekDay;

    fullColor: string;
    fullBorderColor: string;

    availableColor: string;
    availableBorderColor: string;

    groupIsFull(): boolean {

        if (this.appointments == null || this.appointments.length == 0) {
            return false;
        }

        let possibleAppointments = new Array();
        possibleAppointments.push(this.startHourInMinutes);

        let possibleAppointmentStartTime = this.startHourInMinutes;

        while (possibleAppointmentStartTime < this.endHourInMinutes) {
            possibleAppointmentStartTime += this.agendaWeekDay.agenda.agendaSettings.agendaIntervalInMinutes;
            possibleAppointments.push(possibleAppointmentStartTime)
        }

        return this.appointments.length == possibleAppointments.length;
    }

    hasAppointments(): boolean {
        return this.appointments != null && this.appointments.length > 0;
    }

    getAppointmentDay() {
        return this.agendaWeekDay.dateString;
    }
}