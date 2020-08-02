import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = 'e1@c.com';
  password = 'e1';
  hasLoginFailed = false;
  isLoading = false;

  constructor(private router: Router,
              private loginservice: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    this.isLoading = true;
    this.loginservice
      .authenticate(this.username, this.password)
      .subscribe(token => {
          this.hasLoginFailed = false;
          this.router.navigate(['/']);
          this.isLoading = false;
        },
        (error) => {
          this.hasLoginFailed = true;
          this.isLoading = false;
        }
      );

  }
}
