import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private authService: AuthService
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
    console.log(this.authObject);
    this.authService.authUserApi(this.authObject, this.pageState);
  }
}
