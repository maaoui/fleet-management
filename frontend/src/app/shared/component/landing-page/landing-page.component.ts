import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthGuard} from '../../../core/auth/auth.guard';
import {RoutePaths} from '../../constants/route-paths';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router, private authGuard: AuthGuard) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.authGuard.isPathActiveableByCurrentUser(RoutePaths.ADMIN_PATH) ?
        this.router.navigate([RoutePaths.ADMIN_PATH]) :
        this.router.navigate([RoutePaths.EMPLOYEE_PATH]);
    }, 1000);
  }

}
