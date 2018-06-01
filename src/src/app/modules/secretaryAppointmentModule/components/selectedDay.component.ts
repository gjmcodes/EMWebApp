import { Component } from '@angular/core';
import { Agenda } from '../models/agenda.model';
import { AgendaService } from '../services/agenda.service';
import { SelectedDayService } from '../services/selectedDay.service';
import { AgendaWeekDay } from '../models/agendaWeekDay.model';
import { AppointmentGroup } from '../models/appointmentGroup.model';
import { SelectedAppointmentGroupService } from '../services/selectedAppointmentGroup.service';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'selected-day',
  styleUrls: ['../styles/shared.style.css'],
  templateUrl: '../views/selectedDay.component.html'
})

export class SelectedDayComponent {
  title = 'SelectedDayComponent';

  selectedDay: AgendaWeekDay;

  constructor(private selectedDayService: SelectedDayService,
    private selectedAptGroupService: SelectedAppointmentGroupService) {
  }

  ngOnInit() {
    this.selectedDayService.selectedDay.subscribe(selectedDay => this.selectedDay = selectedDay)
  }

  selectAppointment(event, item: AppointmentGroup) {
    this.selectedAptGroupService.changedSelectedAptGroup(item);
    $('#patient-form-tab').click()
  }
}
