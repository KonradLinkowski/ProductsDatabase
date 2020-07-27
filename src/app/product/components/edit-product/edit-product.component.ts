import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/models/product.model';
import { ProductService } from 'src/app/product/services/product/product.service';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { products } from '../../services/product/products.mock';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product;
  form: FormGroup;
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.productId) {
        this.initForm();
        this.loaded = true;
        return;
      }
      this.productService.getProduct(params.productId).subscribe(product => {
        this.product = product;
        this.initForm(product);
        this.loaded = true;
      });
    });
  }

  initForm(product: Partial<Product> = {}) {
    const variants = product.variants ? product.variants.map(v => this.createVariant(v.name, v.price)) : [];
    this.form = new FormGroup({
      name: new FormControl(product.name),
      description: new FormControl(product.description),
      thumbnail: new FormControl(product.thumbnail),
      variants: new FormArray(variants)
    });
  }

  addVariant() {
    this.variants.push(this.createVariant());
  }

  removeVariant(index: number) {
    this.variants.removeAt(index);
  }

  createVariant(name: string = null, price: number = null): FormGroup {
    return new FormGroup({
      name: new FormControl(name),
      price: new FormControl(price)
    });
  }

  get variants(): FormArray {
    return this.form.get('variants') as FormArray;
  }

  submit() {
    if (this.product) {
      this.productService.updateProduct(this.product.id, this.form.value).subscribe();
    } else {
      this.productService.createProduct(this.form.value).subscribe(id => {
        this.router.navigate(['/edit-product', id]);
      });
    }
  }
}
