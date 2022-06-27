import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() item:Recipe;
 @Output() itemClick = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }
  onItem(){
    // console.log(this.item)
    // this.itemClick.emit(this.item);
    this.recipeService.recipeSelected.emit(this.item);
  }

}
