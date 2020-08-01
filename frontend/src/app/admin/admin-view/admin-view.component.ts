import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewContainerRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AdminVehiclesComponent} from '../admin-vehicles/admin-vehicles.component';
import {AdminExpensesComponent} from '../admin-expenses/admin-expenses.component';
import {AdminDepartmentsComponent} from '../admin-departments/admin-departments.component';
import {AdminWorkshopsComponent} from '../admin-workshops/admin-workshops.component';
import {AdminTechnicalExaminationComponent} from '../admin-technical-examination/admin-technical-examination.component';
import {AdminEmployeesComponent} from '../admin-employees/admin-employees.component';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent {
  private currentComponent: ComponentRef<Component> = null;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private translateService: TranslateService
  ) {
  }

  setLanguage(language: string) {
    this.translateService.use(language);
  }

  getLanguage(): string {
    return this.translateService.currentLang;
  }

  createAdminVehiclesComponent = (): void => {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminVehiclesComponentFactory());
  };

  createAdminExpensesComponent() {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminExpensesComponentFactory());
  }

  createAdminDepartmentsComponent() {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminDepartmentsComponent());
  }

  createAdminWorkshopsComponent() {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminWorkshopsComponent());
  }

  createAdminTechnicalExaminationComponent() {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminTechnicalExaminationComponent());
  }

  createAdminEmployeesComponent() {
    this.destroyCurrentComponent();
    this.createComponent(this.getAdminEmployeesComponent());

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

  private getAdminWorkshopsComponent(): ComponentFactory<AdminWorkshopsComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminWorkshopsComponent);
  }

  private getAdminTechnicalExaminationComponent(): ComponentFactory<AdminTechnicalExaminationComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminTechnicalExaminationComponent);
  }

  private getAdminEmployeesComponent(): ComponentFactory<AdminEmployeesComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(AdminEmployeesComponent);
  }
}
