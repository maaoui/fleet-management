import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeViewComponent} from './employee-view/employee-view.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeeVehiclesComponent} from './employee-vehicles/employee-vehicles.component';
import {ReadInsuranceInformationModalComponent} from './modals/read-insurance-information-modal/read-insurance-information-modal.component';
import { EmployeeExpensesComponent } from './employee-expenses/employee-expenses.component';
import {AdminModule} from '../admin/admin.module';
import { EmployeeTechnicalExaminationComponent } from './employee-technical-examination/employee-technical-examination.component';


@NgModule({
  declarations: [EmployeeViewComponent, EmployeeVehiclesComponent, ReadInsuranceInformationModalComponent, EmployeeExpensesComponent, EmployeeTechnicalExaminationComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    AdminModule
  ],
  exports: [
    EmployeeViewComponent
  ]
})
export class EmployeeModule {
}

