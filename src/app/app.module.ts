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
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouting } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeApiService } from './recipes/recepie-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthService } from './auth/auth.service';
import { MyInputComponent } from './my-input/my-input.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ApiInterceptors } from './shared/api-interceptor.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { RecpiesModule } from './recipes/recipes.module';
import { StoreModule } from '@ngrx/store';
import { shoppingReducer } from './shopping-list/store/shopping-list.reducers';
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    ShoppingListComponent,
    ShoppingEditComponent,

    ErrorComponent,

    AuthComponent,
    HomepageComponent,
    MyInputComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    RecpiesModule,
    StoreModule.forRoot({ shoppingReducer: shoppingReducer }),
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptors,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
