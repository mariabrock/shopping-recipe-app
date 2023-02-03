import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ListComponent } from './components/shopping/list/list.component';
import { ListEditComponent } from './components/shopping/list-edit/list-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/recipes/item/item.component';
import { DetailComponent } from './components/recipes/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    RecipesComponent,
    ListComponent,
    ListEditComponent,
    HeaderComponent,
    ItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
