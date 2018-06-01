import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor.model';
import { PracticesService } from '../services/practices.service';
import { Practice } from '../models/practice.model';
import { SelectedDoctorService } from '../services/selectedDoctor.service';
import { SelectedDayService } from '../services/selectedDay.service';
import { SelectedAppointmentGroupService } from '../services/selectedAppointmentGroup.service';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';
import { AppointmentGroup } from '../models/appointmentGroup.model';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'appointment-details',
    templateUrl: '../views/appointment-details.component.html'
})



export class AppointmentDetailsComponent implements OnInit {

    title = 'Appointment Details Component';

    selectedDoctor: Doctor;
    selectedDay: AgendaWeekDay;
    selectedAppointmentGroup: AppointmentGroup;

    constructor(private selectedDoctorService: SelectedDoctorService,
        private selectedDayService: SelectedDayService,
        private selectedAppointmentService: SelectedAppointmentGroupService) {

            this.selectedDoctor = new Doctor();
            this.selectedAppointmentGroup = new AppointmentGroup();
            this.selectedDay = new AgendaWeekDay();

        this.selectedDoctorService
            .selectedDoctor.subscribe(selectedDoctor => this.selectedDoctor = selectedDoctor);

        this.selectedDayService
            .selectedDay.subscribe(selectedDay => this.selectedDay = selectedDay);

        this.selectedAppointmentService
            .selectedAppointmentGroup.subscribe(selectedAptGroup => this.selectedAppointmentGroup = selectedAptGroup);
    }

    ngOnInit(): void {
    }

}


