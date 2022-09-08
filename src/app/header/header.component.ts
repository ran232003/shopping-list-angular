import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/user.model';
import { Store } from '@ngrx/store';
import { LogOut } from '../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() state = new EventEmitter<string>();
  @Output() logOutClick = new EventEmitter<boolean>();
  user: User;
  login: Boolean;
  header1: String;
  header2: String;
  routerLink1: String;
  routerLink2: String;
  wasClickHeader: Boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<{ auth }>
  ) {}
  headerState(event) {
    console.log(event.innerHTML);
    //this.state.emit(event.innerHTML);
  }
  ngOnInit(): void {
    this.store.select('auth').subscribe((auth) => {
      console.log(auth.user, 'header');
      this.login = auth.user;
      if (this.login) {
        this.header1 = 'Recipes';
        this.header2 = 'Shopping List';
        this.routerLink1 = '/recipe';
        this.routerLink2 = '/shopping';
      } else {
        this.header1 = 'Login';
        this.header2 = 'SignUp';
        this.routerLink1 = '/auth/login';
        this.routerLink2 = '/auth/signup';
      }
    });
    //this.login = this.authService.getLogin();
    // this.authService.logInUpdate.subscribe((login) => {
    //   this.login = login;
    //   console.log(login);
    //   if (this.login) {
    //     this.header1 = 'Recipes';
    //     this.header2 = 'Shopping List';
    //     this.routerLink1 = '/recipe';
    //     this.routerLink2 = '/shopping';
    //   } else {
    //     this.header1 = 'Login';
    //     this.header2 = 'SignUp';
    //     this.routerLink1 = '/auth/login';
    //     this.routerLink2 = '/auth/signup';
    //   }
    // });
    if (this.login) {
      this.header1 = 'Recipes';
      this.header2 = 'Shopping List';
      this.routerLink1 = '/recipe';
      this.routerLink2 = '/shopping';
    } else {
      this.header1 = 'Login';
      this.header2 = 'SignUp';
      this.routerLink1 = '/auth/login';
      this.routerLink2 = '/auth/signup';
    }
    console.log(this.login, 'as');
  }
  logOut() {
    // this.authService.logOut();
    this.store.dispatch(new LogOut());
    this.logOutClick.emit(true);
    this.wasClickHeader = true;
    this.authService.openModalFunc();
    console.log(this.wasClickHeader, 'wasClickHeader');
  }
}
