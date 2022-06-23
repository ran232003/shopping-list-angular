import { Component, OnInit } from '@angular/core';
import { Ingedient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  editIngedient:Ingedient = new Ingedient("",0)
  ingedients:Ingedient[] = [new Ingedient("test",10),new Ingedient("test",5)]
  constructor() { }

  ngOnInit(): void {
  }
  handleIngedient(ingedient:Ingedient){
    console.log(ingedient.id)
    this.editIngedient = ingedient;
  }
  addIngrredient(){
    this.ingedients.push(this.editIngedient);
  }
  editIngrredient(){
    this.ingedients.find((item)=>{
      if(item.id === this.editIngedient.id){
        item.name = this.editIngedient.name;
        item.amount = this.editIngedient.amount
      }
    })
  }

  deleteIngrredient(){
    this.ingedients.push(this.editIngedient);
  }


}
