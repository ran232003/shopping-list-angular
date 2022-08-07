import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user;
  login: Boolean;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    console.log(this.user);
    if (this.user) {
      this.authService.setLogin(this.user);
    } else {
      this.authService.setLogin(this.user);
    }
  }
  title = 'Recipe';

  checkState(tabState) {
    console.log(tabState);
    this.title = tabState;
  }
}
