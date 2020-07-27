import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ProductModule } from '../product/product.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductModule
  ]
})
export class AdminModule { }
