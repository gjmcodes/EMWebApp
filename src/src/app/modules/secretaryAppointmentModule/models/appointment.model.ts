import { AppointmentGroup } from "./appointmentGroup.model";

export class Appointment {

    constructor(startTime: Date, patientId: string, doctorId: string) {
        this.startTime = startTime;
        this.patientId = patientId;
        this.doctorId = doctorId;
    }

    startTime: Date;
    patientId: string;
    doctorId: string;
    
    appointmentGroup : AppointmentGroup;

    getStartTimeInMinutes() : number{
        let hour = this.getStartHour() * 60;
        let minutes = this.startTime.getMinutes();

        return hour + minutes;
    }
    getStartHour(): number {
        return this.startTime.getHours();
    }

    getDay(): number {
        return this.startTime.getDate();
    }
}