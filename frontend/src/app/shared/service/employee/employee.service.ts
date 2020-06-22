import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../model/employee/employee';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${environment.baseAPIPath}${this.getEmployeesPath()}`);
  }

  private getEmployeesPath() {
    return `employees`;
  }
}
