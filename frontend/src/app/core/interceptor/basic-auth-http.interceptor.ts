import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Constants} from '../../shared/constants/constants';

@Injectable()
export class BasicAuthHttpInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem(Constants.STORAGE_USERNAME_KEY) && sessionStorage.getItem(Constants.STORAGE_TOKEN_KEY)) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem(Constants.STORAGE_TOKEN_KEY)
        }
      });
    }
    return next.handle(req);
  }

}
