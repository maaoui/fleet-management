import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {AdminVehiclesComponent} from './admin-vehicles/admin-vehicles.component';
import {AdminExpensesComponent} from './admin-expenses/admin-expenses.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditVehicleModalComponent} from './modals/edit-vehicle-modal/edit-vehicle-modal.component';
import {InsuranceInformationComponent} from './modals/insurance-information/insurance-information.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {CarPartExpensesComponent} from './sub-components/car-part-expenses/car-part-expenses.component';
import {FuelExpensesComponent} from './sub-components/fuel-expenses/fuel-expenses.component';
import {CarServiceExpensesComponent} from './sub-components/car-service-expenses/car-service-expenses.component';
import {OtherExpensesComponent} from './sub-components/other-expenses/other-expenses.component';
import {ExpensesNotFoundComponent} from './sub-components/expenses-not-found/expenses-not-found.component';
import {DeleteVehicleModalComponent} from './modals/delete-vehicle-modal/delete-vehicle-modal.component';
import {CarPartModalComponent} from './modals/car-part-modal/car-part-modal.component';
import {WorkshopModalComponent} from './modals/workshop-modal/workshop-modal.component';
import {AddCarPartExpenseModalComponent} from './modals/add-car-part-expense-modal/add-car-part-expense-modal.component';
import {DeleteExpenseModalComponent} from './modals/delete-expense-modal/delete-expense-modal.component';
import {AddFuelExpenseModalComponent} from './modals/add-fuel-expense-modal/add-fuel-expense-modal.component';
import {AddOtherExpenseModalComponent} from './modals/add-other-expense-modal/add-other-expense-modal.component';
import { AddServicingExpenseModalComponent } from './modals/add-servicing-expense-modal/add-servicing-expense-modal.component';
import { AdminDepartmentsComponent } from './admin-departments/admin-departments.component';
import { DepartmentEmployeeListComponent } from './modals/department-employee-list/department-employee-list.component';
import { EditDepartmentModalComponent } from './modals/edit-department-modal/edit-department-modal.component';
import { DeleteDepartmentModalComponent } from './modals/delete-department-modal/delete-department-modal.component';
import { AddDepartmentModalComponent } from './modals/add-department-modal/add-department-modal.component';


@NgModule({
  declarations: [AdminViewComponent, AdminVehiclesComponent, AdminExpensesComponent, EditVehicleModalComponent, InsuranceInformationComponent, CarPartExpensesComponent, FuelExpensesComponent, CarServiceExpensesComponent, OtherExpensesComponent, ExpensesNotFoundComponent, DeleteVehicleModalComponent, CarPartModalComponent, WorkshopModalComponent, AddCarPartExpenseModalComponent, DeleteExpenseModalComponent, AddFuelExpenseModalComponent, AddOtherExpenseModalComponent, AddServicingExpenseModalComponent, AdminDepartmentsComponent, DepartmentEmployeeListComponent, EditDepartmentModalComponent, DeleteDepartmentModalComponent, AddDepartmentModalComponent],
  exports: [
    AdminViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
  ]
})
export class AdminModule {
}
