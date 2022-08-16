import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() item: Recipe;
  @Output() itemClick = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {}
  onItem() {
    // this.itemClick.emit(this.item);
    this.router.navigate(['/recipe', this.item.id.toString()]);
    this.recipeService.recipeSelected.emit(this.item);
  }
}
