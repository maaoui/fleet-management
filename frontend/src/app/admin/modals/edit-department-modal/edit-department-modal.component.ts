import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartmentService} from '../../../shared/service/department/department.service';
import {Department} from '../../../shared/model/department/department';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../../shared/model/employee/employee';
import {EmployeeService} from '../../../shared/service/employee/employee.service';
import {AddressValidatorConstants, DepartmentValidatorConstants} from '../../../core/constants/validator-constants';
import {RegionService} from '../../../shared/service/department/region.service';
import {Region} from '../../../shared/model/address/region';

@Component({
  selector: 'app-edit-department-modal',
  templateUrl: './edit-department-modal.component.html',
  styleUrls: ['./edit-department-modal.component.scss']
})
export class EditDepartmentModalComponent implements OnInit {
  //TODO Implement dropdown, saving
  @Input() department: Department;
  @Input() employees: Employee[];
  private departmentForm: FormGroup;
  private regions: Region[];

  constructor(private activeModal: NgbActiveModal,
              private departmentService: DepartmentService,
              private employeeService: EmployeeService,
              private regionService: RegionService) {
  }

  ngOnInit(): void {
    this.initializeEmployeeList();
    this.initializeRegionsList();
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    console.log(this.departmentForm.controls);
  }

  private initializeFormGroup() {
    this.departmentForm = new FormGroup({
      id: new FormControl(this.department.id),
      departmentName: new FormControl(this.department.departmentName,
        Validators.compose([
          Validators.maxLength(DepartmentValidatorConstants.DEPARTMENT_NAME_MAX_LENGTH)
        ])),
      address: new FormGroup({
        id: new FormControl(this.department.address.id),
        city: new FormControl(this.department.address.city,
          Validators.compose([
            Validators.maxLength(AddressValidatorConstants.CITY_MAX_LENGTH)
          ])),
        postalCode: new FormControl(this.department.address.postalCode,
          Validators.compose([
            Validators.maxLength(AddressValidatorConstants.POSTAL_CODE_MAX_LENGTH)
          ])),
        streetAddress: new FormControl(this.department.address.streetAddress,
          Validators.compose([
            Validators.maxLength(AddressValidatorConstants.STREET_ADDRESS_NAME_MAX_LENGTH)
          ])),
      }),
      region: new FormControl(this.department.region),
      employees: new FormControl(this.department.employees)
    });
  }

  private initializeEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((employees: Employee[]) => this.employees = employees);
  }

  private initializeRegionsList() {
    this.regionService.getRegionsList().subscribe((regions: Region[]) => this.regions = regions);
  }
}
