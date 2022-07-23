import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingedient } from 'src/app/shared/ingedient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  @ViewChild('form') formRef: NgForm;
  editMode: boolean;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  //recipe: Recipe;
  ingedients: Ingedient[] = [
    new Ingedient('test22', 10),
    new Ingedient('test22', 5),
  ];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      // { orderby: "price" }
      let id = params['id'];
      if (id) {
        this.recipe = this.recipeService.getRecopeById(id);
        this.editMode = true;
        //this.formRef.form.patchValue({});
      } else {
        this.recipe = new Recipe('', '', '', [new Ingedient('', 1)]);
        console.log(this.recipe.id);
        this.editMode = false;
      }
    });
  }
  // ngAfterViewInit() {
  //   // viewChild is set after the view has been initialized
  //   console.log(this.formRef, 'a');
  //   if (this.recipe) {
  //     console.log('in fi', this.recipe);
  //     this.formRef.form.patchValue({
  //       name: this.recipe.name,
  //       desc: this.recipe.desc,
  //       image: this.recipe.imagePath,
  //     });
  //     console.log(this.formRef, 'a');
  //   }
  // }
  removeIng(item) {
    if (this.editMode) {
      this.recipeService.removingIng(this.recipe, item);
    } else {
      this.recipe.ingredients = this.recipe.ingredients.filter((ingridient) => {
        if (ingridient.id !== item.id) {
          return ingridient;
        }
      });
    }
  }
  onSubmit(form) {
    console.log(form, 'on submit');
    let { name, image, desc } = form.value;
    // let recipe = new Recipe(name, desc, image, this.ingedients);
    this.recipe.name = name;
    this.recipe.imagePath = image;
    this.recipe.desc = desc;
    this.recipe.ingredients.map((item) => {
      console.log(form.value, item.id);
      console.log(form.value[item.name]);
      let nameKey = 'name' + item.id;
      item.name = form.value[nameKey];
      item.amount = form.value[item.id];
    });
    if (this.editMode) {
    } else {
      console.log('else');
      this.recipeService.addRecipe(this.recipe);
    }
    this.editMode = false;
    console.log(this.recipe);
    form.reset();
    this.router.navigate(['/recipe', 'new-recipe']);
  }
  addIng() {
    if (this.editMode) {
      this.recipeService.addIng(this.recipe);
      console.log('add', this.recipe, this.formRef);
    } else {
      this.recipe.ingredients.push(new Ingedient('', 1));
    }
  }
  onCancel() {
    this.router.navigate(['/recipe']);
  }
  onDelete() {
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['/recipe']);
  }
}
