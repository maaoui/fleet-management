import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminViewComponent} from './admin/admin-view/admin-view.component';
import {EmployeeViewComponent} from './employee/employee-view/employee-view.component';
import {LoginComponent} from './shared/component/login/login.component';
import {LogoutComponent} from './shared/component/logout/logout.component';
import {RoutePaths} from './shared/constants/route-paths';
import {AuthGuard} from './core/auth/auth.guard';
import {LandingPageComponent} from './shared/component/landing-page/landing-page.component';


const routes: Routes = [
  {
    path: RoutePaths.DEFAULT,
    component: LandingPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: RoutePaths.ADMIN_PATH,
    component: AdminViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: RoutePaths.EMPLOYEE_PATH,
    component: EmployeeViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: RoutePaths.LOGIN,
    component: LoginComponent
  },
  {
    path: RoutePaths.LOGOUT,
    component: LogoutComponent
  },
  {
    path: '**',
    redirectTo: RoutePaths.DEFAULT,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
