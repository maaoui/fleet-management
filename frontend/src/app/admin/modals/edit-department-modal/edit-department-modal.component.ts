import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() department: Department;
  @Input() employees: Employee[];
  @Output() updateEmitter = new EventEmitter<string>();

  private departmentForm: FormGroup;
  private regions: Region[];
  private dropdownSettings;

  constructor(private activeModal: NgbActiveModal,
              private departmentService: DepartmentService,
              private employeeService: EmployeeService,
              private regionService: RegionService) {
  }

  ngOnInit(): void {
    this.initializeDropdownSettings();
    this.initializeEmployeeList();
    this.initializeRegionsList();
    this.initializeFormGroup();
  }

  onCancelPress() {
    this.activeModal.close();
  }

  onSavePress() {
    const departmentToSave: Department = new Department({
      ...this.departmentForm.value
    });
    this.departmentService
      .saveDepartment(departmentToSave)
      .subscribe((response: Department) => {
        this.department = response;
        this.activeModal.close();
        this.updateEmitter.emit('Updated');
      });
  }

  private initializeDropdownSettings() {
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Fields',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 5
    };
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
