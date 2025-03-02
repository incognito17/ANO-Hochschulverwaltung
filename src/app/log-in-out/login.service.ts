import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loggedIn: boolean = false;
  private _loggedInAs: string | undefined = undefined;
  redirectUrl: string = '/';

  constructor() { }

  get isLoggedIn(): boolean {
    return this._loggedIn;
  }

  get isLoggedInAs(): string | undefined {
    return this._loggedInAs;
  }

  login(loginAccount: string, passwort: string): boolean {
    this._loggedIn = loginAccount === 'Test' && passwort === '123';
    if (this._loggedIn) {
      this._loggedInAs = loginAccount;
    } else {
      this._loggedInAs = undefined;
    }
    return this._loggedIn;
  }

  logout(): void {
    this._loggedIn = false;
    this._loggedInAs = undefined;
  }
}
