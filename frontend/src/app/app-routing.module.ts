import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminViewComponent} from './admin/admin-view/admin-view.component';
import {EmployeeViewComponent} from './employee/employee-view/employee-view.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './shared/component/login/login.component';
import {LogoutComponent} from './shared/component/logout/logout.component';


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
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
