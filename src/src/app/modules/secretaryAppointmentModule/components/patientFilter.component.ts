import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor.model';
import { PracticesService } from '../services/practices.service';
import { Practice } from '../models/practice.model';
import { Patient } from '../models/patient.model';


@Component({
    selector: 'patient-filter',
    templateUrl: '../views/patient-filter.component.html'
})



export class PatientFilterComponent implements OnInit {

    title = 'Patient Filter';
    private patients: Patient[];
    private selectedPatient: Patient;

    constructor() {
    }

    ngOnInit(): void {
    }

    filterChanged(event) {
        console.log(event);
    }
}


