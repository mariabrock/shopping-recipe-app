import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../components/recipes/recipe.service";
import { Recipe } from "../components/recipes/recipe.model";
import { map, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipesService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://ng-materclass-course-project-default-rtdb.firebaseio.com/recipes.json',
      recipes)
      .subscribe(res => {
        console.log(res);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-materclass-course-project-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: [] };
        });
      }),
        tap(recipes =>{
          this.recipesService.setRecipes(recipes);
        })
    );
  };

}
