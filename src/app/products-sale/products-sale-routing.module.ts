import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsSalePage } from './products-sale.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsSalePageRoutingModule {}
