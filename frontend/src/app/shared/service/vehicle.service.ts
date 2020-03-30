import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {
  }

  getVehiclesList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.getBaseUrl()}${this.getVehicleUrl()}`);
  }


  private getBaseUrl(): string {
    return 'http://localhost:8080/api/';
  }

  private getVehicleUrl(): string {
    return 'vehicles';
  }

}