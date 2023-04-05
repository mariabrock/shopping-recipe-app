import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) { }

  recipes: Recipe[] = [
    new Recipe(
      'Cobb Salad',
      'Tasty salad that will help you keep on track. Definitely not the cheeseburger you came for.',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80',
    [
      new Ingredient('Lettuce', 5),
      new Ingredient('Tomatoes', 4),
      new Ingredient('Avocado', 1),
      new Ingredient('Hard Boiled Egg', 1),
      new Ingredient('Cheddar  Cheese', 3)

    ]),
    new Recipe(
      'Milos Favorite Pizza',
      'Bougie pizza loved by this guy names Milo. He definitely fits our description of hipster.',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80',
    [
      new Ingredient('Dough', 5),
      new Ingredient('Tomato Sauce', 4),
      new Ingredient('Cilantro', 1),
      new Ingredient('Cabbage', 1),
      new Ingredient('Chicken', 3),
      new Ingredient('Mozzarella  Cheese', 7)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
    // this returns a copy of the array, not the array itself
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
