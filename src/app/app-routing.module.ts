import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './product/components/products-list/products-list.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminGuard } from './auth/guards/admin-guard/admin.guard';
import { AdminPageComponent } from './admin/components/admin-page/admin-page.component';
import { EditProductComponent } from './product/components/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: 'edit-product/:productId', component: EditProductComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
