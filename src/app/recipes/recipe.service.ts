import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingedient } from '../shared/ingedient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {
  recpieChange = new Subject<Recipe[]>();
  recipes: Recipe[] = [
    new Recipe(
      'Banana shake',
      'put banana in a blender',
      'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg',
      [new Ingedient('banana1', 5), new Ingedient('banana2', 11)]
    ),
    new Recipe(
      'Pancakes',
      'put Pancakes in a blender',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F20334-Banana-Pancakes-mfs__2x3.jpg',
      [new Ingedient('gamba1', 5), new Ingedient('gamba2', 22)]
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
  getRecopeById(id) {
    let result = this.recipes.find((recipe) => {
      return recipe.id == id;
    });
    return result;
  }
  addRecipe(recipe) {
    this.recipes.push(recipe);
    this.recpieChange.next(this.recipes);
  }
  editRecipe(recipe) {
    this.recipes.find((item) => {
      if (item.id === recipe.id) {
        item.name = recipe.name;
        item.imagePath = recipe.imagePath;
        item.desc = recipe.desc;
        recipe.ingredients = recipe.ingredients;
      }
    });
    this.recpieChange.next(this.recipes);
  }
  removingIng(recipe, ing) {
    this.recipes.find((item) => {
      if (item.id === recipe.id) {
        recipe.ingredients = recipe.ingredients.filter((ingridient) => {
          if (ingridient.id !== ing.id) {
            return ingridient;
          }
        });
      }
    });
    this.recpieChange.next(this.recipes);
  }
  addIng(recipe) {
    this.recipes.find((item) => {
      if (item.id === recipe.id) {
        recipe.ingredients.push(new Ingedient('new', 0));
      }
    });
    this.recpieChange.next(this.recipes);
  }
}
