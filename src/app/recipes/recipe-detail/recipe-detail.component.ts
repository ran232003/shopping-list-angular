import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  //@Input() recipe:Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe) => {
    //   console.log('ngInit');
    //   this.recipe = recipe;
    // });
    console.log('init detail');
    this.route.params.subscribe((params) => {
      let id = params['id'];
      console.log('id', id);
      this.recipe = this.recipeService.getRecopeById(id);
      console.log('recipe', this.recipe);
    });
  }

  moveList() {
    this.recipeService.moveRecipe(this.recipe.ingredients);
  }
  editRecipe() {
    this.router.navigate(['/recipe', 'edit', this.recipe.id.toString()]);
  }
}
