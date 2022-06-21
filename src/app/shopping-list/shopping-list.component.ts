import { Component, OnInit } from '@angular/core';
import { Ingedient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingedients:Ingedient[] = [new Ingedient("test",5),new Ingedient("test",5)]
  constructor() { }

  ngOnInit(): void {
  }

}
