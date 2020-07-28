import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product/product.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { AppCommonModule } from '../common/app-common.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListItemComponent } from './components/products-list-item/products-list-item.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';

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
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule
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
