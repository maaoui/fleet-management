import {Component, OnInit} from '@angular/core';
import {Employee} from '../../shared/model/employee/employee';
import {EmployeeService} from '../../shared/service/employee/employee.service';
import {Constants} from '../../shared/constants/constants';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddEmployeeModalComponent} from '../modals/add-employee-modal/add-employee-modal.component';
import {EditEmployeeModalComponent} from '../modals/edit-employee-modal/edit-employee-modal.component';
import {ToastService} from '../../shared/service/toast/toast.service';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.scss']
})
export class AdminEmployeesComponent implements OnInit {

  private employees: Employee[];

  constructor(private employeeService: EmployeeService, private modalService: NgbModal, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.initializeEmployees();
  }

  private initializeEmployees() {
    this.employeeService
      .getEmployeeList()
      .subscribe(
        (employees: Employee[]) => {
          this.employees = employees;
        },
        () => this.toastService.showFetchingFailed());
  }

  onDisableEmployee(employee: Employee) {
    this.employeeService
      .disableEmployee(employee.id)
      .subscribe(
        (updatedEmployee: Employee) => {
          this.updateEmployeeEnabledStatus(updatedEmployee);
          this.toastService.showUpdated();
        },
        () => this.toastService.showFetchingFailed()
      );
  }

  onEnableEmployee(employee: Employee) {
    this.employeeService
      .enableEmployee(employee.id)
      .subscribe(
        (updatedEmployee: Employee) => {
          this.updateEmployeeEnabledStatus(updatedEmployee);
          this.toastService.showUpdated();
        },
        () => this.toastService.showFetchingFailed()
      );
  }

  private updateEmployeeEnabledStatus(updatedEmployee: Employee) {
    this.employees
      .filter(emp => emp.id === updatedEmployee.id)
      .map(filteredEmployee => filteredEmployee.enabled = updatedEmployee.enabled);
  }

  openAddEmployeeModal() {
    const modalRef = this.modalService.open(AddEmployeeModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.employeeEventEmitter.subscribe(() => this.initializeEmployees());
  }

  onEditEmployee(employee: Employee) {
    const modalRef = this.modalService.open(EditEmployeeModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.employee = {...employee};
    modalRef.componentInstance.employeeEventEmitter.subscribe(() => this.initializeEmployees());
  }
}
