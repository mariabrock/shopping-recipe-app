import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ListEditComponent } from './components/shopping/list-edit/list-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from "./components/shopping/shopping-list.service";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { RecipeHomeComponent } from './components/recipes/recipe-home/recipe-home.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipeService } from "./components/recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    RecipesComponent,
    ListEditComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeHomeComponent,
    RecipeEditComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
