import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {
    console.log(this.item);
  }

  ngOnInit(): void {}
  onItem(item) {
    this.item = item;
  }
  newRecipe() {
    console.log('new');
    this.router.navigate(['/recipe', 'new-recipe']);
  }
}
