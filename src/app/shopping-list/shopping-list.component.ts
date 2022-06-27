import { Component, OnInit } from '@angular/core';
import { Ingedient } from '../shared/ingedient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  editIngedient: Ingedient = new Ingedient('', 0);
  // ingedients:Ingedient[] = [new Ingedient("test",10),new Ingedient("test",5)]
  ingedients: Ingedient[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    console.log(this.shoppingListService.getingedients());
    this.ingedients = this.shoppingListService.getingedients();
    this.shoppingListService.changeIngedient.subscribe((ingedients) => {
      this.ingedients = ingedients;
    });
  }
  handleIngedient(ingedient: Ingedient) {
    console.log(ingedient.id);
    this.editIngedient = ingedient;
  }
  addIngrredient() {
    this.shoppingListService.addIngrredient(this.editIngedient);
    this.editIngedient = new Ingedient('', 0);
  }
  editIngrredient() {
    this.shoppingListService.editIngrredient(this.editIngedient);
  }

  deleteIngrredient() {
    this.shoppingListService.deleteIngrredient(this.editIngedient);
    this.editIngedient = new Ingedient('', 0);
  }
}
