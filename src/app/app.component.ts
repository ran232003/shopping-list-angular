import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RecipeApiService } from './recipes/recepie-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user;
  login: Boolean;
  constructor(
    private authService: AuthService,
    private recipeApiService: RecipeApiService
  ) {}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    if (this.user) {
      this.authService.setLogin(this.user);
      this.recipeApiService.getRecipesApi();
      console.log('if', this.user);
    } else {
      this.authService.setLogin(false);
    }
  }
  title = 'Recipe';

  checkState(tabState) {
    console.log(tabState);
    this.title = tabState;
  }
}
