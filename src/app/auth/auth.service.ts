import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared/user.model';

@Injectable()
export class AuthService {
  logInUpdate = new Subject<any>();
  logIn: any;
  sub: Subscription;
  signUpSub = new Subject<{}>();
  openModal = new Subject<Boolean>();
  openModalValue: Boolean = false;

  constructor(private http: HttpClient, private router: Router) {}
  login() {
    this.logIn = true;
    this.logInUpdate.next(this.logIn);
  }
  logOut() {
    this.logIn = false;
    localStorage.removeItem('user');
    this.router.navigate(['']);
    this.logInUpdate.next(this.logIn);
  }
  setLogin(user) {
    if (user) {
      let newUser = new User(
        user.email,
        user.name,
        user.password,
        user._id,
        user.token
      );
      console.log(newUser);
      this.logIn = newUser;
      this.logInUpdate.next(this.logIn);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('this.logIn', this.logIn);
    }
  }
  getLogin() {
    return this.logIn;
  }
  openModalFunc() {
    this.openModalValue = !this.openModalValue;
    this.openModal.next(this.openModalValue);
  }
  authUserApi(user, status) {
    console.log(user, status);
    if (status === 'signup') {
      return this.http
        .post('http://localhost:5000/api/user/newUser', user)
        .pipe(
          map((responseData) => {
            return responseData;
          })
        );
    } else {
      return this.http.post('http://localhost:5000/api/user/login', user).pipe(
        map((responseData) => {
          return responseData;
        })
      );
    }
  }
}
