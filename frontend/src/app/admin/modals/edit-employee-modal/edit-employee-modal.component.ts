import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Department} from '../../../shared/model/department/department';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeService} from '../../../shared/service/employee/employee.service';
import {DepartmentService} from '../../../shared/service/department/department.service';
import {Employee} from '../../../shared/model/employee/employee';
import {EmployeeValidatorConstants} from '../../../core/constants/validator-constants';
import {Role} from '../../../shared/model/employee/role';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.scss']
})
export class EditEmployeeModalComponent implements OnInit {

  @Input() employee: Employee;
  @Output() employeeEventEmitter = new EventEmitter<Employee>();
  private employeeForm: FormGroup;
  private departments: Department[];

  constructor(public activeModal: NgbActiveModal, private employeeService: EmployeeService, private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.initializeDepartments();
    this.initializeFormGroup();
  }

  onSetEmployeeAsAdmin(setAsAdmin: boolean) {
    setAsAdmin ? this.addAdminRoleToUser() : this.revokeAdminRole();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    console.log(this.employeeForm.value);
    const employeeToCreate = new Employee(
      {
        id: this.employee.id,
        ...this.employeeForm.value
      }
    );
    this.employeeService
      .editEmployee(employeeToCreate)
      .subscribe((updatedEmployee: Employee) => {
          this.employeeEventEmitter.emit(updatedEmployee);
          this.activeModal.close();
        },
        (errorMessage) => {
          // TODO Handle error message
        }
      );
  }

  private initializeDepartments() {
    this.departmentService.getDepartmentsList().subscribe((departments: Department[]) => this.departments = departments);
  }

  private initializeFormGroup() {
    this.employeeForm = new FormGroup({
      firstName: new FormControl(this.employee.firstName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(EmployeeValidatorConstants.FIRST_NAME_MAX_LENGTH)
        ])),
      lastName: new FormControl(this.employee.lastName,
        Validators.compose([
          Validators.required,
          Validators.maxLength(EmployeeValidatorConstants.LAST_NAME_MAX_LENGTH)
        ])),
      phoneNumber: new FormControl(this.employee.phoneNumber,
        Validators.compose([
          Validators.required,
          Validators.maxLength(EmployeeValidatorConstants.PHONE_NUMBER_MAX_LENGTH),
          Validators.pattern(EmployeeValidatorConstants.PHONE_NUMBER_PATTERN)
        ])),
      email: new FormControl(this.employee.email,
        Validators.compose([
          Validators.required,
          Validators.maxLength(EmployeeValidatorConstants.EMAIL_MAX_LENGTH)
        ])),
      enabled: new FormControl(this.employee.enabled,
        Validators.compose([
          Validators.required,
        ])),
      department: new FormControl(this.employee.department,
        Validators.compose([
          Validators.required
        ])),
      roles: new FormControl(this.employee.roles,
        Validators.compose([
          Validators.required
        ])),
    });
  }

  private addAdminRoleToUser() {
    this.employee.roles = [new Role(
      {
        name: 'ROLE_ADMIN'
      }
    )];
  }

  private revokeAdminRole() {
    this.employee.roles = [new Role(
      {
        name: 'ROLE_EMPLOYEE'
      }
    )];
  }

}
