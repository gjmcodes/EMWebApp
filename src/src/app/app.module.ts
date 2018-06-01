import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SecretaryAppointmentModule } from './modules/secretaryAppointmentModule/secretaryAppointment.module';
import { MomentModule } from 'ngx-moment';
import { DateTimeService } from './shared/services/datetime.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecretaryAppointmentModule,
    MomentModule
  ],
  providers: [DateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
