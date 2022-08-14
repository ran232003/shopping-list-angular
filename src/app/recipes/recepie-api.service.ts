import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { AuthService } from '../auth/auth.service';
@Injectable({ providedIn: 'root' })
export class RecipeApiService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}
  addRecipeApi(recipe: Recipe) {
    let user = this.authService.getLogin();
    let id = user._id;
    this.http
      .post(`http://localhost:5000/api/recipe/newRecipe/${id}`, recipe)
      .subscribe((response) => {
        console.log(response);
      });
  }
  getRecipesApi() {
    let user = this.authService.getLogin();
    let id = user._id;
    console.log(user, id);
    let res = this.http
      .get(`http://localhost:5000/api/recipe/getRecipes/${id}`)
      .subscribe((response) => {
        console.log(response, 'asas');
        this.recipeService.setRecipes(response['dbRecipes']);
      });
  }
  deleteRecipe(recipe) {
    console.log(recipe);
    this.http
      .delete(`http://localhost:5000/api/recipe/deleteRecipe/${recipe.id}`)
      .subscribe((response) => {
        console.log(response);
        this.recipeService.deleteRecipe(recipe);
      });
  }
}
