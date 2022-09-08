import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { loginUser } from './store/auth.actions';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObject = {};
  pageState: String = '';
  constructor(
    private _snackBar: MatSnackBar,
    private router: ActivatedRoute,
    private authService: AuthService,
    private routerNav: Router,
    private store: Store<{ auth }>
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      console.log(param);
      this.pageState = param['state'];
    });
  }
  openSnackBar(message: string, config) {
    this._snackBar.open(message, null, config);
    // setTimeout(() => {
    //   this._snackBar.dismiss();
    // }, 5000);
  }
  change(event) {
    console.log(event);
    let key = event.name;
    this.authObject[key] = event.value;
  }
  submit() {
    console.log(this.authObject, this.pageState);
    this.authService
      .authUserApi(this.authObject, this.pageState)
      .subscribe((response) => {
        console.log(response, 'rann');
        if (response['status'] === 'success') {
          let config = {
            duration: 2000,
            panelClass: ['mySnackbarSuccess'],
          };
          let userObject = response['user'];
          userObject['token'] = response['token'];
          console.log('before set', userObject);
          let newUser = new User(
            userObject.email,
            userObject.name,
            userObject.password,
            userObject._id,
            userObject.token
          );
          this.authService.setLogin(newUser);
          this.store.dispatch(new loginUser(newUser));
          this.routerNav.navigate(['/recipe']);
          this.openSnackBar('Success', config);
        } else {
          console.log(response['status']);
          let config = {
            duration: 2000,
            panelClass: ['mySnackbarWarning'],
          };
          this.openSnackBar('Error While ' + this.pageState, config);
        }
      });
  }
}
