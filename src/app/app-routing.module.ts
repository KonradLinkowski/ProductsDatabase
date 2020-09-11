import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminGuard } from './admin-guard/admin.guard';
import { EditProductComponent } from './product/components/edit-product/edit-product.component';
import { ProductsPageComponent } from './product/components/products-page/products-page.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  { path: '', component: ProductsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
