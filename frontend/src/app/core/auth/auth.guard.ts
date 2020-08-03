import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../../shared/service/authentication/authentication.service';
import {RoutePaths} from '../../shared/constants/route-paths';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isUserLoggedIn()) {
      this.router.navigate([RoutePaths.LOGIN]);
    }

    const {url} = state;
    if (url) {
      return this.isPathActiveableByCurrentUser(url.replace('/', ''));
    }

    return false;
  }

  isPathActiveableByCurrentUser(path: string): boolean {
    switch (path) {
      case RoutePaths.ADMIN_PATH:
        return this.authService.hasPrivilege('PRIVILEGE_FOR_ROLE_ADMIN_1');
      case RoutePaths.EMPLOYEE_PATH:
        return this.authService.hasPrivilege('PRIVILEGE_FOR_ROLE_EMPLOYEE_1');
      case RoutePaths.DEFAULT:
        return true;
      case RoutePaths.LOGIN:
        return true;
      default:
        return false;
    }

  }
}
