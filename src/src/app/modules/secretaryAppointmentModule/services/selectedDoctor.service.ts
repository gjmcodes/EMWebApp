import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Practice } from '../models/practice.model';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SelectedDoctorService {

    private observableSelectedDoctorSource = new BehaviorSubject<Doctor>(new Doctor());
    selectedDoctor = this.observableSelectedDoctorSource.asObservable();

    changeSelectedDoctor(doctor: Doctor) {
        this.observableSelectedDoctorSource.next(doctor);
    }

    constructor() { }
}