import { Injectable } from "@angular/core";
import { DateTimeService } from "../../../shared/services/datetime.service";
import { Agenda } from "../models/agenda.model";
import { AgendaWeekDay } from "../models/agendaWeekDay.model";
import { weekdays } from "moment";
import { AppointmentService } from "./appointment.service";
import { AgendaSettings } from "../models/agendaSettings.model";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AgendaWeekDayService } from "./agendaWeekDay.service";

@Injectable()
export class AgendaService {

    private observableAgenda = new BehaviorSubject<Agenda>(new Agenda());
    builtAgenda = this.observableAgenda.asObservable();

    changeObservableAgenda(agenda: Agenda) {
        this.observableAgenda.next(agenda);
    }

    constructor(private dateTimeService: DateTimeService,
        private appointmentService: AppointmentService,
        private agendaWeekDayService: AgendaWeekDayService) {
        this.dateTimeService = dateTimeService;
        this.appointmentService = appointmentService;
    }

    getAgenda(date: Date, filteredDoctorId?: string): Agenda {
        let agenda = new Agenda();

        // TODO
        //remover
        filteredDoctorId = "abc";

        agenda.agendaSettings = this.getGeneralAgendaSettings();

        if (filteredDoctorId != null || filteredDoctorId == "") {
            agenda.agendaSettings = this.getDoctorAgendaSettings(filteredDoctorId);
        } else {
            agenda.agendaSettings = this.getGeneralAgendaSettings();
        }

        agenda.selectedDate = date;

        agenda.weekDays = this.agendaWeekDayService.getAgendaDays(agenda);

        agenda = this.appointmentService.getAppointmentGroupsForAgenda(agenda);

        this.changeObservableAgenda(agenda);

        return agenda;
    }


    private getDoctorAgendaSettings(doctorId: string): AgendaSettings {
        let agendaSettings = new AgendaSettings();
        agendaSettings.openingHourInMinutes = 7 * 60; // get doctor start time
        agendaSettings.closingHourInMinutes = 19 * 60; // get doctor end time
        agendaSettings.agendaIntervalInMinutes = 15; // get doctor's appointment interval

        return agendaSettings;
    }

    private getGeneralAgendaSettings(): AgendaSettings {
        let agendaSettings = new AgendaSettings();
        agendaSettings.openingHourInMinutes = 7 * 60; //get defined opening for agenda or lowest hour amidst doctors
        agendaSettings.closingHourInMinutes = 19 * 60; // get defined closing for agenda or highest hour amidst doctors
        agendaSettings.agendaIntervalInMinutes = 45; // always 1 as default

        return agendaSettings;
    }

}
