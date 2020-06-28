import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from '../../../shared/model/department/department';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DepartmentService} from '../../../shared/service/department/department.service';

@Component({
  selector: 'app-delete-department-modal',
  templateUrl: './delete-department-modal.component.html',
  styleUrls: ['./delete-department-modal.component.scss']
})
export class DeleteDepartmentModalComponent implements OnInit {

  @Input() department: Department;
  @Output() departmentDeletionEmitter = new EventEmitter<string>();

  constructor(public activeModal: NgbActiveModal, private departmentService: DepartmentService) {
  }

  ngOnInit(): void {

  }

  onDelete() {
    this.departmentService
      .deleteDepartmentById(this.department.id)
      .subscribe(response => {
        this.activeModal.close();
        this.departmentDeletionEmitter.emit('deleted');
      });
  }

  onCancel() {
    this.activeModal.close();
  }
}
