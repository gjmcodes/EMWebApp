import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Practice } from '../models/practice.model';

@Injectable()
export class PracticesService {

    constructor() { }

    getPractices(): Practice[] {
        return [
            new Practice("prt1", "General Practice"),
            new Practice("prt2", "Neurologist")
        ]
    }
}