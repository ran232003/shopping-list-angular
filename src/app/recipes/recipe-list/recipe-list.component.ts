import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() item = new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe("Banana shake","put banana in a blender","https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg"),
    new Recipe("Banana shake","put banana in a blender","https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bananas-218094b-scaled.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }
  itemWasClick(recipe){
   
    this.item.emit(recipe);
  }

}
