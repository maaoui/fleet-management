import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminViewComponent} from './admin/admin-view/admin-view.component';
import {EmployeeViewComponent} from './employee/employee-view/employee-view.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
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
