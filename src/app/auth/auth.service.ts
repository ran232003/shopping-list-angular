import { Subject } from 'rxjs';

export class AuthService {
  logInUpdate = new Subject<Boolean>();
  logIn: Boolean;

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
  }
}
