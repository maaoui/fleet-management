import {Component, OnInit, TemplateRef} from '@angular/core';
import {ToastService} from '../../service/toast/toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent implements OnInit {

  constructor(public toastService: ToastService) {
  }

  isTemplate(toast) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  ngOnInit(): void {
  }

}
