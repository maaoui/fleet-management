import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Workshop} from '../../model/workshop/workshop';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  constructor(private http: HttpClient) {
  }

  getWorkshopsList(): Observable<Workshop[]> {
    return this.http.get<Workshop[]>(`${environment.baseAPIPath}${this.getWorkshopsUrl()}`);
  }

  createWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.post<Workshop>(`${environment.baseAPIPath}${this.getWorkshopsUrl()}`, workshop);
  }

  updateWorkshop(workshop: Workshop): Observable<Workshop> {
    return this.http.put<Workshop>(`${environment.baseAPIPath}${this.getUpdateUrl(workshop.id)}`, workshop);
  }

  private getWorkshopsUrl(): string {
    return 'workshops';
  }

  private getUpdateUrl(id: number): string {
    return `workshop/${id}`;
  }
}
