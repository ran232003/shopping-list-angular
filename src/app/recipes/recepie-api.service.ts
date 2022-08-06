import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
@Injectable({ providedIn: 'root' })
export class RecipeApiService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}
  addRecipeApi(recipe: Recipe) {
    this.http
      .post('http://localhost:5000/api/recipe/newRecipe', recipe)
      .subscribe((response) => {
        console.log(response);
      });
  }
  getRecipesApi() {
    let res = this.http
      .get('http://localhost:5000/api/recipe/getRecipes')
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
