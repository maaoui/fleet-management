import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExploitationReport} from '../../model/exploitation/exploitation-report';
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


  private getDepartmentsPath(): string {
    return 'departments';
  }
}
