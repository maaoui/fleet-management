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


@NgModule({
  declarations: [AdminViewComponent, AdminVehiclesComponent, AdminRepairsComponent, AdminExpensesComponent, EditVehicleModalComponent, InsuranceInformationComponent],
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
