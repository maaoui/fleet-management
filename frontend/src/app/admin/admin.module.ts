import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {AdminVehiclesComponent} from './admin-vehicles/admin-vehicles.component';
import {AdminRepairsComponent} from './admin-repairs/admin-repairs.component';
import {AdminExpensesComponent} from './admin-expenses/admin-expenses.component';


@NgModule({
  declarations: [AdminViewComponent, AdminVehiclesComponent, AdminRepairsComponent, AdminExpensesComponent],
  exports: [
    AdminViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule
  ]
})
export class AdminModule {
}
