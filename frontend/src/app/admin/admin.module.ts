import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {AdminVehiclesComponent} from './admin-vehicles/admin-vehicles.component';
import {AdminRepairsComponent} from './admin-repairs/admin-repairs.component';
import {AdminExpensesComponent} from './admin-expenses/admin-expenses.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditVehicleModalComponent } from './modals/edit-vehicle-modal/edit-vehicle-modal.component';
import { InsuranceInformationComponent } from './modals/insurance-information/insurance-information.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { CarPartExpensesComponent } from './sub-components/car-part-expenses/car-part-expenses.component';
import { FuelExpensesComponent } from './sub-components/fuel-expenses/fuel-expenses.component';
import { CarServiceExpensesComponent } from './sub-components/car-service-expenses/car-service-expenses.component';
import { OtherExpensesComponent } from './sub-components/other-expenses/other-expenses.component';
import { ExpensesNotFoundComponent } from './sub-components/expenses-not-found/expenses-not-found.component';
import { DeleteVehicleModalComponent } from './modals/delete-vehicle-modal/delete-vehicle-modal.component';
import { CarPartModalComponent } from './modals/car-part-modal/car-part-modal.component';


@NgModule({
  declarations: [AdminViewComponent, AdminVehiclesComponent, AdminRepairsComponent, AdminExpensesComponent, EditVehicleModalComponent, InsuranceInformationComponent, CarPartExpensesComponent, FuelExpensesComponent, CarServiceExpensesComponent, OtherExpensesComponent, ExpensesNotFoundComponent, DeleteVehicleModalComponent, CarPartModalComponent],
  exports: [
    AdminViewComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDatepickerModule
    ]
})
export class AdminModule {
}
