import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from '../../../shared/model/department/department';
import {Employee} from '../../../shared/model/employee/employee';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Region} from '../../../shared/model/address/region';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartmentService} from '../../../shared/service/department/department.service';
import {EmployeeService} from '../../../shared/service/employee/employee.service';
import {RegionService} from '../../../shared/service/department/region.service';
import {AddressValidatorConstants, DepartmentValidatorConstants} from '../../../core/constants/validator-constants';

@Component({
  selector: 'app-add-department-modal',
  templateUrl: './add-department-modal.component.html',
  styleUrls: ['./add-department-modal.component.scss']
})
export class AddDepartmentModalComponent implements OnInit {
  @Input() department: Department;
  @Input() employees: Employee[];
  @Output() creationEmitter = new EventEmitter<string>();

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

  private initializeEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((employees: Employee[]) => this.employees = employees);
  }

  private initializeRegionsList() {
    this.regionService.getRegionsList().subscribe((regions: Region[]) => this.regions = regions);
  }

  onSavePress() {
    const departmentToSave: Department = new Department({
      ...this.departmentForm.value
    });
    this.departmentService
      .createDepartment(departmentToSave)
      .subscribe((response: Department) => {
        this.department = response;
        this.creationEmitter.emit('Created');
        this.activeModal.close();
      });
  }
}
