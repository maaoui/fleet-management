import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../../shared/model/employee/employee';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-department-employee-list',
  templateUrl: './department-employee-list.component.html',
  styleUrls: ['./department-employee-list.component.scss']
})
export class DepartmentEmployeeListComponent implements OnInit {
  @Input() employees: Employee[];

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
