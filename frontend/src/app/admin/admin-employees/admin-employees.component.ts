import {Component, OnInit} from '@angular/core';
import {Employee} from '../../shared/model/employee/employee';
import {EmployeeService} from '../../shared/service/employee/employee.service';

@Component({
  selector: 'app-admin-employees',
  templateUrl: './admin-employees.component.html',
  styleUrls: ['./admin-employees.component.scss']
})
export class AdminEmployeesComponent implements OnInit {

  private employees: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.initializeEmployees();
  }

  private initializeEmployees() {
    this.employeeService
      .getEmployeeList()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }

  onDisableEmployee(employee: Employee) {
    this.employeeService
      .disableEmployee(employee.id)
      .subscribe((updatedEmployee: Employee) => this.updateEmployee(updatedEmployee));
  }

  onEnableEmployee(employee: Employee) {
    this.employeeService
      .enableEmployee(employee.id)
      .subscribe((updatedEmployee: Employee) => this.updateEmployee(updatedEmployee));
  }

  private updateEmployee(updatedEmployee: Employee) {
    this.employees
      .filter(emp => emp.id === updatedEmployee.id)
      .map(filteredEmployee => filteredEmployee.enabled = updatedEmployee.enabled);
  }

  openAddEmployeeModal() {

  }
}
