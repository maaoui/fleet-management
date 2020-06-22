import {Component, OnInit} from '@angular/core';
import {DepartmentService} from '../../shared/service/department/department.service';
import {Department} from '../../shared/model/department/department';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constraint} from '../../shared/constraints/constraint';
import {DepartmentEmployeeListComponent} from '../modals/department-employee-list/department-employee-list.component';
import {EditDepartmentModalComponent} from '../modals/edit-department-modal/edit-department-modal.component';
import {AddDepartmentModalComponent} from '../modals/add-department-modal/add-department-modal.component';

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
    this.initializeDepartments();
  }

  private initializeDepartments() {
    this.departmentService
      .getDepartmentsList()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
      });
  }

  openDepartmentEmployeesListModal(department: Department) {
    const modalRef = this.modalService.open(DepartmentEmployeeListComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.employees = department.employees;
  }

  openEditDepartmentModal(department: Department) {
    const modalRef = this.modalService.open(EditDepartmentModalComponent, {size: Constraint.MODAL_SIZE_LG});
    modalRef.componentInstance.department = department;
  }

  openAddDepartmentModal() {
    const modalRef = this.modalService.open(AddDepartmentModalComponent, {size: Constraint.MODAL_SIZE_LG});
  }
}
