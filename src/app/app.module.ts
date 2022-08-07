import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { InputComponent } from './shared/input/input.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouting } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeApiService } from './recipes/recepie-api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    InputComponent,
    ErrorComponent,
    RecipeEditComponent,
    AuthComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRouting,
    HttpClientModule,
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeApiService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
