import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
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
  changeRecipes: Subscription;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    console.log('in list');
    this.recipes = this.recipeService.getRecipe();
    this.changeRecipes = this.recipeService.recpieChange.subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
  }
  itemWasClick(recipe) {
    // this.item.emit(recipe);
  }
}
