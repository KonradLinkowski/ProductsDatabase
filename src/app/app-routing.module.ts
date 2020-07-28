import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminGuard } from './auth/guards/admin-guard/admin.guard';
import { AdminPageComponent } from './admin/components/admin-page/admin-page.component';
import { EditProductComponent } from './product/components/edit-product/edit-product.component';
import { ProductsPageComponent } from './product/components/products-page/products-page.component';

const routes: Routes = [
  { path: '', component: ProductsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: 'add-product', component: EditProductComponent, canActivate: [AdminGuard] },
  { path: 'edit-product/:productId', component: EditProductComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
