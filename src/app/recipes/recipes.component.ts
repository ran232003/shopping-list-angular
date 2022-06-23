import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  item:Recipe;
  constructor() {
    console.log(this.item)
   }

  ngOnInit(): void {
  }
  onItem(item){
    
    this.item = item;
  }

}
