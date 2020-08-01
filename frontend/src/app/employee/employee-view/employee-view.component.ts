import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewContainerRef} from '@angular/core';
import {AdminExpensesComponent} from '../../admin/admin-expenses/admin-expenses.component';

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

  private getEmployeeVehiclesComponentFactory(): ComponentFactory<AdminExpensesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminExpensesComponent);
  }

  private getEmployeeExpensesComponentFactory(): ComponentFactory<AdminExpensesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminExpensesComponent);
  }

  private getEmployeeTechnicalExaminationComponentFactory(): ComponentFactory<AdminExpensesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminExpensesComponent);
  }
}
