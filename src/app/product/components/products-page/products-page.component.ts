import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated().subscribe(result => {
      this.isLoggedIn = !!result;
    });
  }
}
