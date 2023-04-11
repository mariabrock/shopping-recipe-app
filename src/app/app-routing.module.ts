import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingComponent } from "./components/shopping/shopping.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe-book', pathMatch: "full"},
  {path: 'recipe-book', component: RecipesComponent},
  {path: 'shopping-list', component: ShoppingComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
