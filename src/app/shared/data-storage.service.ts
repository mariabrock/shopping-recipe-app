import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from "../components/recipes/recipe.service";
import { Recipe } from "../components/recipes/recipe.model";
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipesService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        'https://ng-materclass-course-project-default-rtdb.firebaseio.com/recipes.json',
      recipes
      )
      .subscribe(res => {
        console.log(res);
      });
  }

  fetchRecipes() {
        return this.http
          .get<Recipe[]>(
            'https://ng-materclass-course-project-default-rtdb.firebaseio.com/recipes.json'
          ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients: []
          };
        });
      }),
      tap(recipes =>{
        this.recipesService.setRecipes(recipes);
      })
    );
    //we are piping both of user observable and the http observable into one bigger observable
  };

}
