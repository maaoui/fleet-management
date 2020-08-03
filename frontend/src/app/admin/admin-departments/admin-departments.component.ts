import {Component, OnInit} from '@angular/core';
import {DepartmentService} from '../../shared/service/department/department.service';
import {Department} from '../../shared/model/department/department';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constants} from '../../shared/constants/constants';
import {DepartmentEmployeeListComponent} from '../modals/department-employee-list/department-employee-list.component';
import {EditDepartmentModalComponent} from '../modals/edit-department-modal/edit-department-modal.component';
import {AddDepartmentModalComponent} from '../modals/add-department-modal/add-department-modal.component';
import {Address} from '../../shared/model/address/address';
import {Region} from '../../shared/model/address/region';
import {first} from 'rxjs/operators';
import {DeleteDepartmentModalComponent} from '../modals/delete-department-modal/delete-department-modal.component';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './admin-departments.component.html',
  styleUrls: ['./admin-departments.component.scss']
})
export class AdminDepartmentsComponent implements OnInit {

  private departments: Department[];

  constructor(private departmentService: DepartmentService,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadDepartmentsList();
  }

  openDepartmentEmployeesListModal(department: Department) {
    const modalRef = this.modalService.open(DepartmentEmployeeListComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.employees = department.employees;
  }

  openEditDepartmentModal(department: Department) {
    const modalRef = this.modalService.open(EditDepartmentModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.department = department;
    modalRef.componentInstance
      .updateEmitter
      .pipe(first())
      .subscribe(() => {
        this.loadDepartmentsList();
      });
  }

  openAddDepartmentModal() {
    const modalRef = this.modalService.open(AddDepartmentModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.department = this.getEmptyDepartment();
    modalRef.componentInstance
      .creationEmitter
      .pipe(first())
      .subscribe(() => {
        this.loadDepartmentsList();
      });
  }

  openDeleteDepartmentModal(department: Department) {
    const modalRef = this.modalService
      .open(DeleteDepartmentModalComponent, {size: Constants.MODAL_SIZE_LG});
    modalRef.componentInstance.department = department;
    modalRef.componentInstance
      .departmentDeletionEmitter
      .pipe(first())
      .subscribe(() => this.loadDepartmentsList());
  }

  private loadDepartmentsList() {
    this.departmentService
      .getDepartmentsList()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
      });
  }

  private getEmptyDepartment(): Department {
    return new Department({
      address: new Address(),
      employees: [],
      region: new Region()
    });
  }

}
