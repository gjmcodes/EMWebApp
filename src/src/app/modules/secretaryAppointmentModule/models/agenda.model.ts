import { AgendaWeekDay } from "./agendaWeekDay.model";
import { AgendaSettings } from "./agendaSettings.model";
import { Appointment } from "./appointment.model";
import { AppointmentGroup } from "./appointmentGroup.model";

export class Agenda {

    constructor() {
        this.weekDays = new Array();
    }

    agendaSettings: AgendaSettings;
    selectedDate: Date;
    weekDays: AgendaWeekDay[];

    getSuggestedAppointments(): AppointmentGroup[] {
        let todayDate = new Date();
        let suggestedAppointments = new Array();
        let weekDaysFiltered = this.weekDays.filter(x => x.dayDate >= todayDate);

        let maxSuggestions = 3;
        let suggestionCount = 0;

        weekDaysFiltered.forEach(function (weekDay) {

            if (suggestionCount >= maxSuggestions)
                return suggestedAppointments;

            let suggestedGroups = weekDay.getEarliestFreeGroups();

            if (suggestedGroups != null && suggestedGroups.length > 0) {
                suggestedGroups.forEach(function (aptGroup) {

                    if (suggestionCount >= maxSuggestions)
                        return suggestedAppointments;

                    suggestedAppointments.push(aptGroup);
                    suggestionCount++;
                });
            }

        });

        return suggestedAppointments;
    }
}