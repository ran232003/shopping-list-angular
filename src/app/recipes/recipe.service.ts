import { EventEmitter, Injectable } from '@angular/core';
import { Ingedient } from '../shared/ingedient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Banana shake',
      'put banana in a blender',
      'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg',
      [new Ingedient('banana', 5), new Ingedient('banana', 11)]
    ),
    new Recipe(
      'Banana shake',
      'put banana in a blender',
      'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg',
      [new Ingedient('gamba', 5), new Ingedient('gamba', 22)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingList: ShoppingListService) {}

  getRecipe() {
    return this.recipes;
  }
  moveRecipe(ingridients: Ingedient[]) {
    this.shoppingList.getRecipe(ingridients);
  }
}
