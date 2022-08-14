import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  login: Boolean = false;
  buttonChange: String = 'GET STARTED';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.login = this.authService.getLogin();
    this.authService.logInUpdate.subscribe((login) => {
      console.log('inside sub');
      this.login = login;
      console.log(login);
      if (this.login) {
        this.buttonChange = 'SHOPPING LIST';
      } else {
        this.buttonChange = 'GET STARTED';
      }
    });
    console.log(this.login);
    if (this.login) {
      this.buttonChange = 'SHOPPING LIST';
    } else {
      this.buttonChange = 'GET STARTED';
    }
  }
  goToSearch() {
    if (this.login) {
      this.router.navigate(['/shopping']);
    } else {
      this.router.navigate(['/auth', 'signup']);
    }
  }
  gotoRecipe() {
    this.router.navigate(['/recipe']);
  }
}
