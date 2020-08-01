import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef} from '@angular/core';
import {EmployeeVehiclesComponent} from '../employee-vehicles/employee-vehicles.component';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {

  private currentComponent: ComponentRef<Component> = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
  }

  createComponent(componentRef: ComponentFactory<any>): void {
    this.currentComponent = this.viewContainerRef.createComponent(componentRef);
    this.currentComponent.changeDetectorRef.detectChanges();
  }

  destroyCurrentComponent(): void {
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }
  }

  createEmployeeVehiclesComponent(): void {
    this.destroyCurrentComponent();
    this.createComponent(this.getEmployeeVehiclesComponentFactory());
  }

  createEmployeeExpensesComponent(): void {
    this.destroyCurrentComponent();
    this.createComponent(this.getEmployeeExpensesComponentFactory());
  }

  createEmployeeTechnicalExaminationComponent(): void {
    this.destroyCurrentComponent();
    this.createComponent(this.getEmployeeTechnicalExaminationComponentFactory());
  }

  private getEmployeeVehiclesComponentFactory(): ComponentFactory<EmployeeVehiclesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(EmployeeVehiclesComponent);
  }

  private getEmployeeExpensesComponentFactory(): ComponentFactory<EmployeeVehiclesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(EmployeeVehiclesComponent);
  }

  private getEmployeeTechnicalExaminationComponentFactory(): ComponentFactory<EmployeeVehiclesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(EmployeeVehiclesComponent);
  }
}
