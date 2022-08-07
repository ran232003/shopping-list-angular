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
  constructor(private authService: AuthService) {}
  headerState(event) {
    console.log(event.innerHTML);
    this.state.emit(event.innerHTML);
  }
  ngOnInit(): void {
    this.authService.logInUpdate.subscribe((login) => {
      this.login = login;
    });
  }
}
