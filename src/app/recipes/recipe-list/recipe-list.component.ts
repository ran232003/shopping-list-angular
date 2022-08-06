import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeApiService } from '../recepie-api.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() item = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  loading: boolean = true;
  changeRecipes: Subscription;
  constructor(
    private recipeService: RecipeService,
    private recipeApi: RecipeApiService
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    let response = this.recipeApi.getRecipesApi();
    this.recipes = this.recipeService.getRecipe();
    this.changeRecipes = this.recipeService.recpieChange.subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
    console.log(response);
    this.loading = false;
  }
  itemWasClick(recipe) {
    // this.item.emit(recipe);
  }
}
