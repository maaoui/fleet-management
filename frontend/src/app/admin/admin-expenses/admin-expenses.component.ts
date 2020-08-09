import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../shared/service/vehicle/vehicle.service';
import {Vehicle} from '../../shared/model/vehicle/vehicle';
import {ExploitationService} from '../../shared/service/exploitation/exploitation.service';
import {ExploitationReport} from '../../shared/model/exploitation/exploitation-report';
import {ToastService} from '../../shared/service/toast/toast.service';

@Component({
  selector: 'app-admin-expenses',
  templateUrl: './admin-expenses.component.html',
  styleUrls: ['./admin-expenses.component.scss']
})
export class AdminExpensesComponent implements OnInit {

  constructor(private vehicleService: VehicleService,
              private exploitationService: ExploitationService,
              private toastService: ToastService) {
  }

  private vehicles: Vehicle[];
  private exploitationReport: ExploitationReport;
  private currentComponentName: string;
  private isVehicleSelected = false;
  private readonly canDeleteExpenses = true;
  private selectedVehicle: Vehicle;


  ngOnInit(): void {
    this.initializeVehicles();
  }

  private initializeVehicles() {
    this.vehicleService
      .getVehiclesList()
      .subscribe(
        (vehicles: Vehicle[]) => {
          this.vehicles = vehicles;
        },
        () => this.toastService.showFetchingFailed()
      );
  }

  getVehicleExploatationData(vehicleId) {
    this.exploitationService
      .getExploitationReportByVehicleId(vehicleId)
      .subscribe(
        (exploitationReport: ExploitationReport) => {
          this.exploitationReport = exploitationReport;
          this.selectedVehicle = exploitationReport.vehicle;
          this.isVehicleSelected = true;
        },
        () => this.toastService.showFetchingFailed()
      );
  }

  getVehicleShortInformation(vehicle: Vehicle) {
    return `${vehicle.make} ${vehicle.model} [${vehicle.plateNumber}]`;
  }

  changeCurrentComponent(componentName: string) {
    this.currentComponentName = componentName;
    if (this.selectedVehicle) {
      this.getVehicleExploatationData(this.selectedVehicle.id);
    }
  }

}
