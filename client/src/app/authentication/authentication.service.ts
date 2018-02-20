import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private loggedIn: boolean ;
  private user: Object = {};

  constructor() {
    this.loggedIn = false;
  }

  public isLoggedIn = (): boolean => this.loggedIn;

}
