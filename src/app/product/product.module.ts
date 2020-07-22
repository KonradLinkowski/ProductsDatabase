import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductService } from './services/product/product.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService
  ],
  entryComponents: [
    ProductListComponent
  ]
})
export class ProductModule { }
