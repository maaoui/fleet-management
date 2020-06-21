import {Component, OnInit} from '@angular/core';
import {DepartmentService} from '../../shared/service/department/department.service';
import {Department} from '../../shared/model/department/department';

@Component({
  selector: 'app-admin-departments',
  templateUrl: './admin-departments.component.html',
  styleUrls: ['./admin-departments.component.scss']
})
export class AdminDepartmentsComponent implements OnInit {

  private departments: Department[];


  constructor(private departmentService: DepartmentService) {
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
}
