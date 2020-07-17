import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../model/employee/employee';
import {environment} from '../../../../environments/environment';
import {EmployeeWithCredentials} from '../../model/employee/employee-with-credentials';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${environment.baseAPIPath}${this.getEmployeesPath()}`);
  }

  createEmployee(employeeWithCredentials: EmployeeWithCredentials): Observable<EmployeeWithCredentials> {
    return this.httpClient.post<EmployeeWithCredentials>(`${environment.baseAPIPath}${this.getEmployeesPath()}`, employeeWithCredentials);
  }

  disableEmployee(id: number): Observable<Employee> {
    return this.httpClient.post<Employee>(`${environment.baseAPIPath}${this.getDisableEmployeePath(id)}`, {});
  }

  enableEmployee(id: number): Observable<Employee> {
    return this.httpClient.post<Employee>(`${environment.baseAPIPath}${this.getEnableEmployeePath(id)}`, {});
  }

  private getEmployeesPath() {
    return `employees`;
  }

  private getEnableEmployeePath(id: number) {
    return `employees/enable/${id}`;
  }

  private getDisableEmployeePath(id: number) {
    return `employees/disable/${id}`;
  }
}
