import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminViewComponent} from './admin/admin-view/admin-view.component';
import {EmployeeViewComponent} from './employee/employee-view/employee-view.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './shared/component/login/login.component';
import {LogoutComponent} from './shared/component/logout/logout.component';
import {AuthGuard} from './core/auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    component: EmployeeViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
