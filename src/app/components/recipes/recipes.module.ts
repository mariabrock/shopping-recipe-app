import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeHomeComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    CoreModule,
  ],
})
export class RecipesModule {}
