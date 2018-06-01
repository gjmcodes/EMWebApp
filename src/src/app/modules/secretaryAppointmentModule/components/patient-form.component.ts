import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor.model';
import { PracticesService } from '../services/practices.service';
import { Practice } from '../models/practice.model';
import { Patient } from '../models/patient.model';


@Component({
    selector: 'patient-form',
    templateUrl: '../views/patient-form.component.html'
})

export class PatientFormComponent implements OnInit {

    title = 'Patient Form';

    constructor() {
    }

    ngOnInit(): void {
    }

}


