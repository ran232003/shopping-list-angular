import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  item:Recipe;
  constructor() {
    console.log(this.item)
   }

  ngOnInit(): void {
    console.log("ng init rec")
  }
  onItem(item){
    
    this.item = item;
  }

}
