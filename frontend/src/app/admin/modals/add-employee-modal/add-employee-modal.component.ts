import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeService} from '../../../shared/service/employee/employee.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeWithCredentials} from '../../../shared/model/employee/employee-with-credentials';
import {DepartmentService} from '../../../shared/service/department/department.service';
import {Department} from '../../../shared/model/department/department';
import {EmployeeValidatorConstants} from '../../../core/constants/validator-constants';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss']
})
export class AddEmployeeModalComponent implements OnInit {

  @Output() employeeEventEmitter = new EventEmitter<EmployeeWithCredentials>();
  private employeeForm: FormGroup;
  private employee: EmployeeWithCredentials;
  private departments: Department[];

  constructor(public activeModal: NgbActiveModal, private employeeService: EmployeeService, private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.initializeDepartments();
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    const employeeToCreate = new EmployeeWithCredentials({...this.employeeForm.value});
    this.employeeService
      .createEmployee(employeeToCreate)
      .subscribe((updatedEmployeeWithCredentials: EmployeeWithCredentials) => {
          this.employeeEventEmitter.emit(updatedEmployeeWithCredentials);
          this.activeModal.close();
        },
        (errorMessage) => {
          // TODO Handle error message
        }
      );
  }

  private initializeFormGroup() {
    this.employee = new EmployeeWithCredentials();
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
      password: new FormControl(this.employee.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(EmployeeValidatorConstants.PASSWORD_MIN_LENGTH),
          Validators.maxLength(EmployeeValidatorConstants.PASSWORD_MAX_LENGTH)
        ])),
      department: new FormControl(this.employee.department,
        Validators.compose([
          Validators.required
        ])),
    });
  }

  private initializeDepartments() {
    this.departmentService.getDepartmentsList().subscribe((departments: Department[]) => this.departments = departments);
  }
}
