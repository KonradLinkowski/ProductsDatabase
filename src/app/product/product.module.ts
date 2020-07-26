import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListItemComponent } from './components/products-list-item/products-list-item.component';
import { ProductService } from './services/product/product.service';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { AppCommonModule } from '../common/app-common.module';
import { RouterModule } from '@angular/router';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsListItemComponent,
    EditProductComponent,
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatRadioModule
  ],
  providers: [
    ProductService
  ],
  entryComponents: [
    ProductsListComponent,
    ProductsPageComponent,
    EditProductComponent
  ],
  exports: [
    ProductsListComponent,
    ProductsListItemComponent
  ]
})
export class ProductModule { }
