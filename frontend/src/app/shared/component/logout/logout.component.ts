import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../service/authentication/authentication.service';
import {Router} from '@angular/router';
import {RoutePaths} from '../../constants/route-paths';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.authenticationService.logOut();
      this.router.navigate([RoutePaths.LOGIN]);
    }, 1000);

  }
}
