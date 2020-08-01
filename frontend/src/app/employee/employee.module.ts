import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeViewComponent} from './employee-view/employee-view.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import { EmployeeVehiclesComponent } from './employee-vehicles/employee-vehicles.component';


@NgModule({
  declarations: [EmployeeViewComponent, EmployeeVehiclesComponent],
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

