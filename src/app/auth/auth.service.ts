import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  logInUpdate = new Subject<Boolean>();
  logIn: Boolean;

  constructor(private http: HttpClient) {}
  login() {
    this.logIn = true;
    this.logInUpdate.next(this.logIn);
  }
  logOut() {
    this.logIn = false;
    this.logInUpdate.next(this.logIn);
  }
  setLogin(user) {
    this.logIn = user;
    this.logInUpdate.next(this.logIn);
    console.log('this.logIn', this.logIn);
  }
  getLogin() {
    return this.logIn;
  }
  authUserApi(user, status) {
    console.log(user, status);
    if (status === 'signup') {
      this.http
        .post('http://localhost:5000/api/user/newUser', user)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
