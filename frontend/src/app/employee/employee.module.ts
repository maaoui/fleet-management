import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeViewComponent} from './employee-view/employee-view.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeeVehiclesComponent} from './employee-vehicles/employee-vehicles.component';
import {ReadInsuranceInformationModalComponent} from './modals/read-insurance-information-modal/read-insurance-information-modal.component';


@NgModule({
  declarations: [EmployeeViewComponent, EmployeeVehiclesComponent, ReadInsuranceInformationModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule
  ],
  exports: [
    EmployeeViewComponent
  ]
})
export class EmployeeModule {
}

