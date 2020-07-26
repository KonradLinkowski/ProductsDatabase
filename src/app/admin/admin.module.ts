import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class AdminModule { }
