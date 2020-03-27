import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminViewComponent} from './admin/admin-view/admin-view.component';
import {EmployeeViewComponent} from './employee/employee-view/employee-view.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminViewComponent
  },
  {
    path: 'employee',
    component: EmployeeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
