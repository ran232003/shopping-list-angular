import {
  Component,
  NgModule,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingedient } from '../shared/ingedient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  editIngedient: Ingedient = new Ingedient('', 0);
  editMode = false;
  selectedIndex;
  ingridientsDataStore: Observable<Ingedient[]>;
  @ViewChild('form') formRef: NgForm;
  ingedientCss: string = 'ingedient';
  // ingedients:Ingedient[] = [new Ingedient("test",10),new Ingedient("test",5)]
  ingedients: Ingedient[] = [];
  validForm: boolean = false;
  changeIngSubscription: Subscription;
  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<{ shoppingList }>
  ) {}

  ngOnInit(): void {
    // console.log(this.shoppingListService.getingedients());
    this.ingridientsDataStore = this.store.select('shoppingList'); //slice of the state
    this.ingedients = this.shoppingListService.getingedients();
    this.changeIngSubscription =
      this.shoppingListService.changeIngedient.subscribe((ingedients) => {
        this.ingedients = ingedients;
      });
    //console.log(this.editMode);
    console.log(this.ingridientsDataStore);
  }
  handleIngedient(ingedient: Ingedient, index) {
    console.log(this.formRef);
    this.editMode = true;
    this.selectedIndex = index;
    this.ingedientCss = 'choosenIngr';
    this.editIngedient = ingedient;
    this.formRef.form.patchValue({
      name: ingedient.name,
      amount: ingedient.amount,
    });
  }
  addIngrredient(form: NgForm) {
    //console.log(form.valid);
    let ing = new Ingedient(form.value.name, form.value.amount);
    this.shoppingListService.addIngrredient(ing);
    this.editIngedient = new Ingedient('', 0);
    form.reset();
  }
  editIngrredient() {
    this.editMode = false;
    this.selectedIndex = -1;
    console.log(this.formRef);
    this.editIngedient.amount = this.formRef.value.amount;
    this.editIngedient.name = this.formRef.value.name;
    this.shoppingListService.editIngrredient(this.editIngedient);
    this.editIngedient = new Ingedient('', 0);
  }

  deleteIngrredient() {
    this.shoppingListService.deleteIngrredient(this.editIngedient);
    this.editIngedient = new Ingedient('', 0);
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.changeIngSubscription.unsubscribe();
  }
}
