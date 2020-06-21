import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef} from '@angular/core';
import {AdminVehiclesComponent} from '../admin-vehicles/admin-vehicles.component';
import {AdminExpensesComponent} from '../admin-expenses/admin-expenses.component';
import {AdminDepartmentsComponent} from '../admin-departments/admin-departments.component';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  private currentComponent: ComponentRef<any> = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
  }

  createAdminVehiclesComponent(): void {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminVehiclesComponentFactory());
  }

  createAdminExpensesComponent() {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminExpensesComponentFactory());
  }

  createAdminDepartmentsComponent() {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminDepartmentsComponent());
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

  private getAdminVehiclesComponentFactory(): ComponentFactory<AdminVehiclesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminVehiclesComponent);
  }

  private getAdminExpensesComponentFactory(): ComponentFactory<AdminExpensesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminExpensesComponent);
  }

  private getAdminDepartmentsComponent(): ComponentFactory<AdminDepartmentsComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminDepartmentsComponent);
  }
}
