import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { ShoppingComponent } from "./components/shopping/shopping.component";
import { RecipeHomeComponent } from "./components/recipes/recipe-home/recipe-home.component";
import { RecipeDetailComponent } from "./components/recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./components/recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./components/recipes/recipes-resolver.service";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe-book', pathMatch: "full"},
  {path: 'recipe-book', component: RecipesComponent, children:[
      {path: '', component: RecipeHomeComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
      {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
    ]},
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
