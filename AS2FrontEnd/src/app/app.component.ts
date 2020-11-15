import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultiClinicaWeb';

  constructor(private router:Router){
  }


  List(){
    this.router.navigate(["list"]);
  }
  ListDoctor(){
    this.router.navigate(["listDoctors"]);
  }
  ListPatient(){
    this.router.navigate(["listPatient"]);
  }
  ListClinic(){
    this.router.navigate(["listClinics"]);
  }
  ListMedicine(){
    this.router.navigate(["listMedicine"]);
  }
  ListRoom(){
    this.router.navigate(["listRoom"]);
  }
  ListPatientRoom(){
    this.router.navigate(["listPatientRoom"]);
  }
  ListAppointment(){
    this.router.navigate(["listAppointments"]);
  }
  History(){
    this.router.navigate(["history-patient"]);
  }
  Diagnostic(){
    this.router.navigate(["addDiagnostic"]);
  }
  Appointment(){
    this.router.navigate(["add-appoint"]);
  }

}
