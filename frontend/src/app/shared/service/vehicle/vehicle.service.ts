import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../../model/vehicle/vehicle';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {
  }

  getVehiclesList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${environment.baseAPIPath}${this.getVehicleUrl()}`);
  }

  patchVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.patch<Vehicle>(`${environment.baseAPIPath}${this.getVehicleUrl()}/${vehicle.id}`, vehicle);
  }

  private getVehicleUrl(): string {
    return 'vehicles';
  }
}
