import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() readonly = true;
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}
