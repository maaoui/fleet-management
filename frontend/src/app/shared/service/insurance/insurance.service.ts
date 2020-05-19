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

  updateInsurance(insurance: Insurance): Observable<Insurance> {
    return this.http.put<Insurance>(`${environment.baseAPIPath}${this.getInsuranceEditPath()}`, insurance);
  }

  private getInsurancePath(id: number): string {
    return `insurance?id=${id}`;
  }

  private getInsuranceEditPath(): string {
    return 'insurance';
  }
}
