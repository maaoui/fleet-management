import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import {Constants} from '../../constants/constants';

export interface Authority {
  authority: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username, password): Observable<string> {
    return this.httpClient
      .post<any>(`${environment.baseAPIPath}authenticate`, {username, password})
      .pipe(
        map(
          userData => {
            sessionStorage.setItem(Constants.STORAGE_USERNAME_KEY, username);
            sessionStorage.setItem(Constants.STORAGE_TOKEN_KEY, `Bearer ${userData.token}`);
            return userData;
          }
        )
      );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(Constants.STORAGE_USERNAME_KEY);
    return !(user === null);
  }

  hasPrivilege(privilegeName: string) {
    if (!sessionStorage.getItem(Constants.STORAGE_TOKEN_KEY)) {
      return false;
    }

    const {privileges} = jwt_decode(sessionStorage.getItem(Constants.STORAGE_TOKEN_KEY));
    return Object.values(privileges).map((val: Authority) => val.authority).includes(privilegeName);
  }

  logOut() {
    sessionStorage.clear();
  }
}
