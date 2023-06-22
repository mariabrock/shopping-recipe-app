import { NgModule } from '@angular/core';
import { ShoppingComponent } from './shopping.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ShoppingComponent, ListEditComponent],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingComponent,
      },
    ]),
  ],
})
export class ShoppingModule {}
