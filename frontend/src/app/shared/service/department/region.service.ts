import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Region} from '../../model/address/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClient: HttpClient) {
  }

  getRegionsList(): Observable<Region[]> {
    return this.httpClient.get<Region[]>(`${environment.baseAPIPath}${this.getRegionsPath()}`);
  }

  private getRegionsPath() {
    return `regions`;
  }
}
