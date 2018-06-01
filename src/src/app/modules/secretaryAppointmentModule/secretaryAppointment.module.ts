import { NgModule } from '@angular/core';
import { SecretaryModuleTestComponent } from './components/secretaryTest.component';
import { SecretaryAppointmentMainComponent } from './components/main.component';
import { DoctorsService } from './services/doctors.service';
import { FiltersComponent } from './components/filters.component';
import { CommonModule } from '@angular/common';
import { PracticesService } from './services/practices.service';

import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { AgendaComponent } from './components/agenda.component';
import { AppointmentService } from './services/appointment.service';
import { AgendaService } from './services/agenda.service';
import { SelectedDayComponent } from './components/selectedDay.component';
import { SelectedDayService } from './services/selectedDay.service';
import { AgendaWeekDayService } from './services/agendaWeekDay.service';
import { AgendaWeekDayFactory } from './factories/agendaWeekDay.factory';
import { AppointmentGroupFactory } from './factories/appointmentGroup.factory';
import { PatientFilterComponent } from './components/patientFilter.component';
import { PatientFormComponent } from './components/patient-form.component';
import { AppointmentDetailsComponent } from './components/appointment-details.component';
import { DoctorBestDayComponent } from './components/doctor-best-day.component';
import { DoctorFactory } from './factories/doctor.factory';
import { SelectedDoctorService } from './services/selectedDoctor.service';
import { SelectedAppointmentGroupService } from './services/selectedAppointmentGroup.service';



@NgModule({
    declarations: [
        SecretaryModuleTestComponent,
        SecretaryAppointmentMainComponent,
        AgendaComponent,
        FiltersComponent,
        SelectedDayComponent,
        PatientFilterComponent,
        PatientFormComponent,
        AppointmentDetailsComponent,
        DoctorBestDayComponent
    ],
    imports: [
        CommonModule,
        NguiAutoCompleteModule
    ],
    exports: [
        SecretaryModuleTestComponent,
        SecretaryAppointmentMainComponent
    ],
    providers: [
        DoctorsService,
        PracticesService,
        AgendaService,
        AppointmentService,
        SelectedDayService,
        AgendaWeekDayService,
        SelectedDoctorService,
        SelectedAppointmentGroupService,
        AgendaWeekDayFactory,
        AppointmentGroupFactory,
        DoctorFactory
    ],
    bootstrap: []
})
export class SecretaryAppointmentModule { }