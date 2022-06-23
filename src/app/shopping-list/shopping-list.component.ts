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
    let ingedient = new Ingedient(this.editIngedient.name,this.editIngedient.amount);
    this.ingedients.push(ingedient);
    this.editIngedient = new Ingedient("",0);
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
    this.ingedients = this.ingedients.filter((item)=>{
      return item.id != this.editIngedient.id;
    })
    this.editIngedient = new Ingedient("",0);
  }


}
