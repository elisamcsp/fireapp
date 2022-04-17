import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsSalePageRoutingModule } from './products-sale-routing.module';

import { ProductsSalePage } from './products-sale.page';
import { ProductsSaleResolverService } from './products-sale-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsSalePageRoutingModule
  ],
  declarations: [ProductsSalePage],
  providers: [ProductsSaleResolverService]
})
export class ProductsSalePageModule {}
