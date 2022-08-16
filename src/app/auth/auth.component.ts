import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObject = {};
  pageState: String = '';
  constructor(
    private router: ActivatedRoute,
    private authService: AuthService,
    private routerNav: Router
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      console.log(param);
      this.pageState = param['state'];
    });
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
          let userObject = response['user'];
          userObject['token'] = response['token'];
          this.authService.setLogin(userObject);
          this.routerNav.navigate(['/recipe']);
        } else {
        }
      });
  }
}
