import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  login: Boolean;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logInUpdate.subscribe((login) => {
      this.login = login;
    });
    console.log(this.login);
  }
  goToSearch() {}
}
