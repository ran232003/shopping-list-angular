import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [],
})
export class RecipesComponent implements OnInit {
  item: Recipe;
  login: Boolean;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  onItem(item) {
    this.item = item;
    this.authService.logInUpdate.subscribe((login) => {
      this.login = login;
    });
  }
  newRecipe() {
    this.router.navigate(['/recipe', 'new-recipe']);
  }
}
