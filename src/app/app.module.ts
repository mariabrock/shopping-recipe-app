import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingModule } from './components/shopping/shopping.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { RecipesModule } from './components/recipes/recipes.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
