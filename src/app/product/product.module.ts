import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductService } from './services/product/product.service';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppCommonModule } from '../common/app-common.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListItemComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    ProductService
  ],
  entryComponents: [
    ProductListComponent,
    EditProductComponent
  ],
  exports: [
    ProductListComponent,
    ProductListItemComponent
  ]
})
export class ProductModule { }
