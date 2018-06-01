import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor.model';
import { PracticesService } from '../services/practices.service';
import { Practice } from '../models/practice.model';
import { Agenda } from '../models/agenda.model';

import { AppointmentService } from '../services/appointment.service';
import { DateTimeService } from '../../../shared/services/datetime.service';
import { AppointmentGroup } from '../models/appointmentGroup.model';
import { AgendaService } from '../services/agenda.service';
import { SelectedDayService } from '../services/selectedDay.service';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'secretary-agenda',
    styleUrls: ['../styles/shared.style.css'],
    templateUrl: '../views/agenda.component.html'
})

export class AgendaComponent implements OnInit {

    title = 'AgendaComponent';
    agenda: Agenda;
    datesForWeek: Date[];

    constructor(
        private appointmentService: AppointmentService,
        private dateTimeService: DateTimeService,
        private agendaService: AgendaService,
        private selectedDayService: SelectedDayService) {

        this.appointmentService = appointmentService;
        this.dateTimeService = dateTimeService;
        this.agendaService = this.agendaService;

        this.agenda = this.agendaService.getAgenda(this.dateTimeService.getFirstDayMonth());

        this.agenda.getSuggestedAppointments();
    }

    ngOnInit(): void {
    }

    selectDay(event, item: AgendaWeekDay) {
        this.selectedDayService.changeSelectedDay(item);
        setTimeout(function(){
            $('#selected-day-tab').click();
        }, 100)
    }

}


