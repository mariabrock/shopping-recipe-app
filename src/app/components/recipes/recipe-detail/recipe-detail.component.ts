import {Component, EventEmitter, OnInit, Input} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

  onAddToShoppingList() {
  this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }
}
