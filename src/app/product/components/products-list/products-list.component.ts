import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ProductService } from '../../services/product/product.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatRadioChange } from '@angular/material/radio';

enum SearchOperator { AND, OR }

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() readonly = true;

  allProducts: Product[] = [];
  filteredProducts: Product[];
  separatorKeysCodes = [COMMA, ENTER];
  keywords: string[] = [];
  searchOperator: SearchOperator = SearchOperator.OR;
  SearchOperator = SearchOperator;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.allProducts = products;
      this.filterProducts();
    });
  }

  addKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.keywords.push(value.toLowerCase());
    }

    if (event.input) {
      event.input.value = '';
    }

    this.filterProducts();
  }

  removeKeyword(keyword: string): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }

    this.filterProducts();
  }

  changeOperator(event: MatRadioChange) {
    this.searchOperator = event.value;
    this.filterProducts();
  }

  private filterProducts() {
    if (!this.keywords.length) {
      return this.filteredProducts = [...this.allProducts];
    }

    const operatorMapper = {
      [SearchOperator.AND]: Array.prototype.every,
      [SearchOperator.OR]: Array.prototype.some
    };

    const filterFunction = operatorMapper[this.searchOperator];

    this.filteredProducts = this.allProducts.filter(product =>
      filterFunction.call(this.keywords, keyword =>
        product.name.toLowerCase().match(keyword) || (product.description || '').toLowerCase().match(keyword)));
  }
}
