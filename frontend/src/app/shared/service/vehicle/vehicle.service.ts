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
    return this.http.get<Vehicle[]>(`${environment.baseAPIPath}${this.getVehiclesUrl()}`);
  }

  createVehicle(vehicleToCreate: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${environment.baseAPIPath}${this.getVehiclesUrl()}`, vehicleToCreate);
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${environment.baseAPIPath}${this.getVehicleUrl()}/${vehicle.id}`, vehicle);
  }

  deleteVehicleById(vehicleId: number): Observable<Vehicle> {
    return this.http.delete<Vehicle>(`${environment.baseAPIPath}${this.getVehicleUrl()}/${vehicleId}`);
  }

  private getVehiclesUrl(): string {
    return 'vehicles';
  }

  private getVehicleUrl(): string {
    return 'vehicle';
  }

}
