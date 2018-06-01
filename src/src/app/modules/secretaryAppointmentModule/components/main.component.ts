import { Component } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import { Agenda } from '../models/agenda.model';
import { SelectedDayService } from '../services/selectedDay.service';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';
import { AppointmentGroup } from '../models/appointmentGroup.model';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'secretary-appointment-main',
  styleUrls: ['../styles/shared.style.css'],
  templateUrl: '../views/main.component.html'
})

export class SecretaryAppointmentMainComponent {
  title = 'SecretaryAppointmentMainComponent';

  selectedDay: AgendaWeekDay;

  constructor(private selectedDayService: SelectedDayService) { }

  ngOnInit() {
    this.selectedDayService.selectedDay.subscribe(selectedDay => this.selectedDay = selectedDay);
  }

}
