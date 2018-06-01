import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';

@Injectable()
export class DoctorFactory {

    constructor() {
    }

    getDoctor(doctorId: string, doctorName: string, doctorPractice: string, doctorColor: string) {
        let doctor = new Doctor();

        doctor.id = doctorId;
        doctor.name = doctorName;
        doctor.practiceId = doctorPractice;
        doctorColor = doctorColor;

        return doctor;
    }

}