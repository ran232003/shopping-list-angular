import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingedient } from '../shared/ingedient.model';

export class ShoppingListService {
  //changeIngedient = new EventEmitter<Ingedient[]>();
  changeIngedient = new Subject<Ingedient[]>();
  ingedients: Ingedient[] = [
    new Ingedient('test', 10),
    new Ingedient('test', 5),
  ];
  getingedients() {
    return this.ingedients;
  }
  addIngrredient(editIngedient) {
    let ingedient = new Ingedient(editIngedient.name, editIngedient.amount);
    this.ingedients.push(ingedient);
    //this.changeIngedient.emit(this.ingedients);
    this.changeIngedient.next(this.ingedients);
    console.log(this.ingedients);
  }
  editIngrredient(editIngedient) {
    this.ingedients.find((item) => {
      if (item.id === editIngedient.id) {
        item.name = editIngedient.name;
        item.amount = editIngedient.amount;
      }
    });
    //this.changeIngedient.emit(this.ingedients);
    this.changeIngedient.next(this.ingedients);
  }

  deleteIngrredient(editIngedient) {
    console.log('first', this.ingedients);
    this.ingedients = this.ingedients.filter((item) => {
      return item.id != editIngedient.id;
    });
    console.log('second', this.ingedients);
    // this.changeIngedient.emit(this.ingedients);
    this.changeIngedient.next(this.ingedients);
  }
  getRecipe(ingirdients: Ingedient[]) {
    console.log(ingirdients);
    for (let i = 0; i < ingirdients.length; i++) {
      this.addIngrredient(ingirdients[i]);
    }
  }
}
