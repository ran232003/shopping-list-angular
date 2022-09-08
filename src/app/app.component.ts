import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RecipeApiService } from './recipes/recepie-api.service';
import { Store } from '@ngrx/store';
import { SetUser } from './auth/store/auth.actions';
import { User } from './shared/user.model';

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
    private recipeApiService: RecipeApiService,
    private store: Store<{ auth }>
  ) {}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
    if (this.user) {
      let newUser = new User(
        this.user.email,
        this.user.name,
        this.user.password,
        this.user.id,
        this.user.token
      );
      this.store.dispatch(new SetUser(newUser));
      console.log('if');
      this.authService.setLogin(newUser);
      this.recipeApiService.getRecipesApi();
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
