import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeViewComponent} from './employee-view/employee-view.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [EmployeeViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule
  ]
})
export class EmployeeModule {
}
