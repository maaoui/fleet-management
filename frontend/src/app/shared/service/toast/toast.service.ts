import {Injectable, TemplateRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly successClassName: string = 'bg-success text-light';
  private readonly dangerClassName: string = 'bg-danger text-light';
  private readonly toastDisplayTimeMilliseconds: number = 3500;
  toasts: any[] = [];

  constructor(private translateService: TranslateService) {
  }


  showFetchingFailed() {
    this.translateService
      .get('TOAST_MESSAGES.FETCHING_FAILED')
      .subscribe((translation: string) => {
        this.showToast(translation, {
          classname: this.dangerClassName,
          delay: this.toastDisplayTimeMilliseconds
        });
      });
  }

  showUnauthorized() {
    this.translateService
      .get('TOAST_MESSAGES.UNAUTHORIZED')
      .subscribe((translation: string) => {
        this.showToast(translation, {
          classname: this.dangerClassName,
          delay: this.toastDisplayTimeMilliseconds
        });
      });
  }

  showUpdated() {
    this.translateService
      .get('TOAST_MESSAGES.UPDATED')
      .subscribe((translation: string) => {
        this.showToast(translation, {
          classname: this.successClassName,
          delay: this.toastDisplayTimeMilliseconds
        });
      });
  }

  private showToast(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({textOrTpl, ...options});
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
