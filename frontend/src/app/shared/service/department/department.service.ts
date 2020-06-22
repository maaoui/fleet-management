import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Department} from '../../model/department/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {
  }

  getDepartmentsList(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${environment.baseAPIPath}${this.getDepartmentsPath()}`);
  }

  deleteDepartmentById(id: number): Observable<Department> {
    return this.httpClient.delete<Department>(`${environment.baseAPIPath}${this.getDeleteDepartmentPath(id)}`);
  }

  private getDepartmentsPath(): string {
    return 'departments';
  }

  private getDeleteDepartmentPath(id: number): string {
    return `department/${id}`;
  }
}
