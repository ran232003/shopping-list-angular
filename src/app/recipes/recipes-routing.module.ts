import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AuthGuard } from '../auth/auth.guard';
import { ErrorComponent } from '../error/error.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';

const recipeRoutes: Routes = [
  {
    path: 'recipe',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'edit/:id', component: RecipeEditComponent },
      { path: 'new-recipe', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
    ],
  },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
})
export class RecipeRouting {}
