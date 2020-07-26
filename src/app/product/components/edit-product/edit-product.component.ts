import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/models/product.model';
import { ProductService } from 'src/app/product/services/product/product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.productId) {
        return this.goToAdminPage();
      }
      this.getProduct(params.productId);
      this.form = new FormGroup({
        name: new FormControl(this.product.name),
        description: new FormControl(this.product.description),
        price: new FormControl(this.product.price),
        thumbnail: new FormControl(this.product.thumbnail),
      });
    });
  }

  submit() {
    alert(JSON.stringify(this.form.value));
  }

  private getProduct(id: string) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  private goToAdminPage(): void {
    this.router.navigate(['admin']);
  }
}
