import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Practice } from '../models/practice.model';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SelectedDayService {

    private observableSelectedDaySource = new BehaviorSubject<AgendaWeekDay>(new AgendaWeekDay());
    selectedDay = this.observableSelectedDaySource.asObservable();

    changeSelectedDay(day: AgendaWeekDay) {
        this.observableSelectedDaySource.next(day);
    }

    constructor() { }
}