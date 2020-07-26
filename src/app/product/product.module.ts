import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListItemComponent } from './components/products-list-item/products-list-item.component';
import { ProductService } from './services/product/product.service';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppCommonModule } from '../common/app-common.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsListItemComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    ProductService
  ],
  entryComponents: [
    ProductsListComponent,
    EditProductComponent
  ],
  exports: [
    ProductsListComponent,
    ProductsListItemComponent
  ]
})
export class ProductModule { }
