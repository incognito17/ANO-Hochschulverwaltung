import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  loginAccount: string;
  passwort: string;
  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.loginService.logout();
    this.message = 'Sie sind ausgeloggt!';
  }

  login() {
    this.message = 'Sie sind ausgeloggt!';
    if (this.loginService.login(this.loginAccount, this.passwort) ) {
      this.router.navigateByUrl(this.loginService.redirectUrl);
    } else {
      this.message = 'Login oder Passwort nicht korrekt!';
    }
  }

  logout() {
    this.loginService.logout();
  }
}
