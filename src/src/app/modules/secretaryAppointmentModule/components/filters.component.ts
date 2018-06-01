import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor.model';
import { PracticesService } from '../services/practices.service';
import { Practice } from '../models/practice.model';
import { SelectedDoctorService } from '../services/selectedDoctor.service';

declare var jquery: any;
declare var $: any;

@Component({
    selector: 'secretary-appointment-filters',
    templateUrl: '../views/filters.component.html'
})



export class FiltersComponent implements OnInit {

    title = 'FiltersComponent';
    doctors: Doctor[];
    practices: Practice[];
    selectedDoctors: Doctor[];

    constructor(
        private doctorsService: DoctorsService,
        private practicesService: PracticesService,
        private selectedDoctorService: SelectedDoctorService) {
        this.doctorsService = doctorsService;
        this.practicesService = practicesService;
        this.selectedDoctors = new Array();
    }

    ngOnInit(): void {
        this.doctors = this.doctorsService.getDoctors();
        this.practices = this.practicesService.getPractices();
    }

    addDoctor(doctorEvent) {
        if (doctorEvent == null || doctorEvent == "")
            return;

        let doctor = this.doctors.find(x => x.id == doctorEvent.id);
        let doctorIndex = this.doctors.findIndex(x => x.id == doctorEvent.id);
        this.selectedDoctors.push(doctor);
        this.doctors.splice(doctorIndex, 1);

        this.selectedDoctorService.changeSelectedDoctor(doctor);

        $('#doctorsAC').find('input').val('');
        $('#doctorsAC').hide();
        $('#doctorBestDayCard').fadeIn();
    }

    removeSelectedDoctor(doctorId) {
        let doctor = this.selectedDoctors.find(x => x.id == doctorId);
        let doctorIndex = this.selectedDoctors.findIndex(x => x.id == doctorId);
        this.doctors.push(doctor);
        this.selectedDoctors.splice(doctorIndex, 1);
        $('#doctorsAC').show();
        $('#doctorBestDayCard').fadeOut();
    }

    formattingDoctorList(data: any): string {
        return data.name;
    }
}


