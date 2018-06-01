import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Practice } from '../models/practice.model';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AppointmentGroup } from '../models/appointmentGroup.model';

@Injectable()
export class SelectedAppointmentGroupService {

    private observableSelectedAppointmentGroupSource = new BehaviorSubject<AppointmentGroup>(new AppointmentGroup());
    selectedAppointmentGroup = this.observableSelectedAppointmentGroupSource.asObservable();

    changedSelectedAptGroup(aptGroup: AppointmentGroup) {
        this.observableSelectedAppointmentGroupSource.next(aptGroup);
    }

    constructor() { }
}