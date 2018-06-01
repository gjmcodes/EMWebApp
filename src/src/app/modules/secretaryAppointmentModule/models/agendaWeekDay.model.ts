import { AppointmentGroup } from "./appointmentGroup.model";
import { Appointment } from "./appointment.model";
import { Agenda } from "./agenda.model";

export class AgendaWeekDay {

    dayName: string;
    dateString: string;
    dayDate: Date;
    day: number;
    appointmentGroups: AppointmentGroup[];
    agenda: Agenda;

    constructor() {
        this.appointmentGroups = new Array();
    }

    getSuitableGroupForAppointment(appointment: Appointment) : AppointmentGroup {

        let suitableGroup = this.appointmentGroups.find(x =>
            (appointment.getStartTimeInMinutes()) >= x.startHourInMinutes
            && (appointment.getStartTimeInMinutes()) <= (x.startHourInMinutes + this.agenda.agendaSettings.agendaIntervalInMinutes));

        return suitableGroup;
    }

    getEarliestFreeGroups(): AppointmentGroup[] {

        let groupsAvailable = this.appointmentGroups.filter(x =>
            x.hasAppointments() == false);

        let sortedGroups = groupsAvailable.sort(function (a, b) {
            return a.startHourInMinutes - b.startHourInMinutes;
        });


        if (sortedGroups != null && sortedGroups.length > 0)
            return sortedGroups;

        return null;
    }
}