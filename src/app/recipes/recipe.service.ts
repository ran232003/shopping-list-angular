import { EventEmitter } from '@angular/core';
import { Ingedient } from '../shared/ingedient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Banana shake',
      'put banana in a blender',
      'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg',
      [new Ingedient('banana', 5), new Ingedient('banana', 5)]
    ),
    new Recipe(
      'Banana shake',
      'put banana in a blender',
      'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg',
      [new Ingedient('gamba', 5), new Ingedient('gamba', 5)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipe() {
    return this.recipes;
  }
}
