import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() state = new EventEmitter<string>();
  login: Boolean;
  header1: String;
  header2: String;
  routerLink1: String;
  routerLink2: String;
  constructor(private authService: AuthService) {}
  headerState(event) {
    console.log(event.innerHTML);
    //this.state.emit(event.innerHTML);
  }
  ngOnInit(): void {
    this.login = this.authService.getLogin();
    this.authService.logInUpdate.subscribe((login) => {
      this.login = login;
      console.log(login);
    });
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
}
