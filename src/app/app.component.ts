import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseProject-shoppingRecipeApp';
  loadedFeature = 'recipes';
  recipes: boolean = true;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
