import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ListEditComponent } from './components/shopping/list-edit/list-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from "./components/recipes/recipe-list/recipe-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    RecipesComponent,
    ShoppingListComponent,
    ListEditComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
