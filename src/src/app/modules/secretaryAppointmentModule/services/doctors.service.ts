import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorFactory } from '../factories/doctor.factory';

@Injectable()
export class DoctorsService {

    constructor(private doctorFactory: DoctorFactory) {
    }

    getDoctors(): Doctor[] {
        return [
            this.doctorFactory.getDoctor("abc", "Dr. John Philips", "prt1", "#fb9667"),
            this.doctorFactory.getDoctor("def", "Dr. Amanda Philips", "prt2", "#000000"),
            this.doctorFactory.getDoctor("ghf", "Dr. Jonah Jameson", "prt1", "#0b9660")
        ]
    }
}