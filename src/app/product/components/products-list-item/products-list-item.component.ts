import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent {
  @Input() product: Product;
  @Input() readonly = true;

  get priceMin(): number {
    if (this.product.variants.length === 1) {
      return this.product.variants[0].price;
    }
    const prices = this.product.variants.map(v => v.price);
    const min = Math.min(...prices);
    return min;
  }

  get priceMax(): number {
    if (this.product.variants.length === 1) {
      return null;
    }
    const prices = this.product.variants.map(v => v.price);
    const max = Math.max(...prices);
    return max;
  }
}
