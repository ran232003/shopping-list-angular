import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() item:Recipe;
 @Output() itemClick = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  onItem(){
    console.log(this.item)
    this.itemClick.emit(this.item);
  }

}
