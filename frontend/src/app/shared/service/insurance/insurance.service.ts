import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Insurance} from '../../model/insurance/insurance';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) {
  }

  getInsuranceByVehicleId(id: number): Observable<Insurance> {
    return this.http.get<Insurance>(`${environment.baseAPIPath}${this.getInsurancePath(id)}`);
  }

  private getInsurancePath(id: number): string {
    return `insurance?id=${id}`;
  }
}
