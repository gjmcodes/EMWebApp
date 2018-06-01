import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor.model';
import { PracticesService } from '../services/practices.service';
import { Practice } from '../models/practice.model';
import { AgendaService } from '../services/agenda.service';
import { Agenda } from '../models/agenda.model';
import { AppointmentGroup } from '../models/appointmentGroup.model';
import { SelectedDoctorService } from '../services/selectedDoctor.service';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'doctor-best-day',
    styleUrls: ['../styles/shared.style.css'],
    templateUrl: '../views/doctor-best-day.component.html'
})



export class DoctorBestDayComponent implements OnInit {

    title = 'Doctor Best Day Component';
    agenda: Agenda;
    suggestedAppointmentGroups: AppointmentGroup[];
    selectedDoctor: Doctor;

    constructor(private agendaService: AgendaService) {
    }

    ngOnInit(): void {
        this.agendaService.builtAgenda.subscribe(agenda => this.agenda = agenda);
        this.suggestedAppointmentGroups = this.agenda.getSuggestedAppointments();
    }


}


