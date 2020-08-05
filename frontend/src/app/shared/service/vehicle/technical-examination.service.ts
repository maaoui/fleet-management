import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TechnicalExamination} from '../../model/technicalExamination/technical-examination';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnicalExaminationService {


  constructor(private http: HttpClient) {
  }

  getAllTechnicalExaminations(): Observable<TechnicalExamination[]> {
    return this.http.get<TechnicalExamination[]>(`${environment.baseAPIPath}${this.technicalExaminationsPath()}`);
  }
  getTechnicalExaminationsForCurrentEmployee() : Observable<TechnicalExamination[]> {
    return this.http.get<TechnicalExamination[]>(`${environment.baseAPIPath}technicalExaminationsByEmployee`);
  }
  getAllTechnicalExaminationsByVehicleId(vehicleId: number): Observable<TechnicalExamination[]> {
    const requestPath = `${this.technicalExaminationsPath()}/${vehicleId}`;
    return this.http.get<TechnicalExamination[]>(`${environment.baseAPIPath}${requestPath}`);
  }

  createTechnicalExamination(technicalExamination: TechnicalExamination): Observable<TechnicalExamination> {
    return this.http.post<TechnicalExamination>(`${environment.baseAPIPath}${this.technicalExaminationsPath()}`, technicalExamination);
  }

  updateTechnicalExamination(technicalExamination: TechnicalExamination): Observable<TechnicalExamination> {
    const requestPath = `${this.technicalExaminationsPath()}/${technicalExamination.id}`;
    return this.http.put<TechnicalExamination>(`${environment.baseAPIPath}${requestPath}`, technicalExamination);
  }

  deleteTechnicalExamination(technicalExamination: TechnicalExamination): Observable<TechnicalExamination> {
    const requestPath = `${this.technicalExaminationsPath()}/${technicalExamination.id}`;
    return this.http.delete<TechnicalExamination>(`${environment.baseAPIPath}${requestPath}`);
  }

  private technicalExaminationsPath(): string {
    return 'technicalExaminations';
  }
}
