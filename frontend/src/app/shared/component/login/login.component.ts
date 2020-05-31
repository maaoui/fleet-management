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
  invalidLogin = false;

  constructor(private router: Router,
              private loginservice: AuthenticationService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice
      .authenticate(this.username, this.password)
      .subscribe(token => {
          this.router.navigate(['/admin']);
          this.invalidLogin = false;
        },
        error => this.invalidLogin = true);

  }
}
