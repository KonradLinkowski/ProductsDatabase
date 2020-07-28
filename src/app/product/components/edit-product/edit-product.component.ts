import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/models/product.model';
import { ProductService } from 'src/app/product/services/product/product.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { getError } from 'src/app/helpers';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product;
  form: FormGroup;
  loaded = false;
  getError = getError;

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
      name: new FormControl(product.name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      description: new FormControl(product.description, [Validators.maxLength(256)]),
      variants: new FormArray(variants, [Validators.required])
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
      name: new FormControl(name, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      price: new FormControl(price, [Validators.required, Validators.min(0), Validators.max(99999.99)])
    });
  }

  get variants(): FormArray {
    return this.form.get('variants') as FormArray;
  }

  submit() {
    if (this.product) {
      this.productService.updateProduct(this.product.id, this.form.value).subscribe();
      this.router.navigate(['/']);
    } else {
      this.productService.createProduct(this.form.value).subscribe(id => {
        this.router.navigate(['/edit-product', id]);
      });
    }
  }
}
